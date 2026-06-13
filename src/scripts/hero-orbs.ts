interface Orb {
  el: HTMLElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  phaseX: number;
  phaseY: number;
  breathPhase: number;
  breathSpeed: number;
  swimSpeed: number;
  size: number;
}

interface Bounds {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

const REPULSE_RADIUS = 220;
const REPULSE_STRENGTH = 130;
const DRAG = 0.978;
const MAX_SPEED = 88;
const TARGET_REACH = 75;

function initHeroOrbs() {
  const hero = document.getElementById('lead');
  const container = hero?.querySelector<HTMLElement>('[data-hero-orbs]');
  const orbEls = container?.querySelectorAll<HTMLElement>('[data-hero-orb]');
  if (!hero || !container || !orbEls?.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  orbEls.forEach((el) => {
    el.classList.remove('animate-float');
    el.style.left = '0';
    el.style.top = '0';
  });

  let bounds: Bounds = { minX: 0, maxX: 0, minY: 0, maxY: 0 };

  const getBounds = (): Bounds => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    const size = orbEls[0]?.offsetWidth ?? 384;
    const margin = size * 0.38;

    return {
      minX: -margin,
      maxX: w - size + margin,
      minY: -margin,
      maxY: h - size + margin,
    };
  };

  const randomPoint = (b: Bounds) => ({
    x: b.minX + Math.random() * (b.maxX - b.minX),
    y: b.minY + Math.random() * (b.maxY - b.minY),
  });

  const spreadPoint = (b: Bounds, existing: { x: number; y: number }[]) => {
    const minSep = Math.min(container.clientWidth, container.clientHeight) * 0.22;
    for (let attempt = 0; attempt < 24; attempt++) {
      const point = randomPoint(b);
      const farEnough = existing.every(
        (other) => Math.hypot(point.x - other.x, point.y - other.y) >= minSep,
      );
      if (farEnough) return point;
    }
    return randomPoint(b);
  };

  bounds = getBounds();

  const placed: { x: number; y: number }[] = [];
  const orbs: Orb[] = Array.from(orbEls).map((el) => {
    const start = spreadPoint(bounds, placed);
    placed.push(start);
    const target = randomPoint(bounds);
    return {
      el,
      x: start.x,
      y: start.y,
      vx: (Math.random() - 0.5) * 36,
      vy: (Math.random() - 0.5) * 36,
      targetX: target.x,
      targetY: target.y,
      phaseX: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2,
      breathPhase: Math.random() * Math.PI * 2,
      breathSpeed: 0.65 + Math.random() * 0.3,
      swimSpeed: 52 + Math.random() * 28,
      size: el.offsetWidth,
    };
  });

  let pointerX = -9999;
  let pointerY = -9999;
  let rafId = 0;
  let isVisible = true;
  let lastTime = 0;

  const pickNewTarget = (orb: Orb) => {
    const point = randomPoint(bounds);
    orb.targetX = point.x;
    orb.targetY = point.y;
  };

  const setPointer = (clientX: number, clientY: number) => {
    const rect = container.getBoundingClientRect();
    pointerX = clientX - rect.left;
    pointerY = clientY - rect.top;
  };

  const clearPointer = () => {
    pointerX = -9999;
    pointerY = -9999;
  };

  hero.addEventListener('mousemove', (e) => setPointer(e.clientX, e.clientY));
  hero.addEventListener('mouseleave', clearPointer);
  hero.addEventListener(
    'touchmove',
    (e) => {
      const touch = e.touches[0];
      if (touch) setPointer(touch.clientX, touch.clientY);
    },
    { passive: true },
  );
  hero.addEventListener('touchend', clearPointer);

  window.addEventListener('resize', () => {
    bounds = getBounds();
    for (const orb of orbs) {
      orb.x = Math.min(Math.max(orb.x, bounds.minX), bounds.maxX);
      orb.y = Math.min(Math.max(orb.y, bounds.minY), bounds.maxY);
      pickNewTarget(orb);
    }
  });

  const observer = new IntersectionObserver(
    ([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !rafId) {
        lastTime = 0;
        rafId = requestAnimationFrame(tick);
      }
    },
    { threshold: 0.05 },
  );
  observer.observe(hero);

  function tick(now: number) {
    rafId = 0;
    if (!isVisible) return;

    const dt = lastTime ? Math.min((now - lastTime) / 1000, 0.05) : 0.016;
    lastTime = now;
    const time = now * 0.001;

    for (const orb of orbs) {
      const breath = 0.5 + 0.5 * Math.sin(time * orb.breathSpeed + orb.breathPhase);
      const breathIn = breath ** 1.4;

      const toTargetX = orb.targetX - orb.x;
      const toTargetY = orb.targetY - orb.y;
      const targetDist = Math.hypot(toTargetX, toTargetY);

      if (targetDist < TARGET_REACH) {
        pickNewTarget(orb);
      }

      const steerX = toTargetX / (targetDist || 1);
      const steerY = toTargetY / (targetDist || 1);
      const pulseSpeed = orb.swimSpeed * (0.75 + breathIn * 0.35);

      orb.vx += steerX * pulseSpeed * dt * 2.8;
      orb.vy += steerY * pulseSpeed * dt * 2.8;

      orb.vx += Math.sin(time * 1.2 + orb.phaseX) * 16 * dt;
      orb.vy += Math.cos(time * 1.0 + orb.phaseY) * 16 * dt;
      orb.vx += Math.sin(time * 0.38 + orb.phaseY) * 8 * dt;
      orb.vy += Math.cos(time * 0.34 + orb.phaseX) * 8 * dt;

      const centerX = orb.x + orb.size / 2;
      const centerY = orb.y + orb.size / 2;
      const dx = centerX - pointerX;
      const dy = centerY - pointerY;
      const pointerDist = Math.hypot(dx, dy);

      if (pointerDist < REPULSE_RADIUS && pointerDist > 1) {
        const force = (1 - pointerDist / REPULSE_RADIUS) ** 1.5 * REPULSE_STRENGTH;
        orb.vx += (dx / pointerDist) * force * dt * 6;
        orb.vy += (dy / pointerDist) * force * dt * 6;
      }

      if (orb.x < bounds.minX) orb.vx += (bounds.minX - orb.x) * 0.04;
      if (orb.x > bounds.maxX) orb.vx -= (orb.x - bounds.maxX) * 0.04;
      if (orb.y < bounds.minY) orb.vy += (bounds.minY - orb.y) * 0.04;
      if (orb.y > bounds.maxY) orb.vy -= (orb.y - bounds.maxY) * 0.04;

      orb.vx *= DRAG;
      orb.vy *= DRAG;

      const speed = Math.hypot(orb.vx, orb.vy);
      if (speed > MAX_SPEED) {
        orb.vx = (orb.vx / speed) * MAX_SPEED;
        orb.vy = (orb.vy / speed) * MAX_SPEED;
      }

      orb.x += orb.vx * dt;
      orb.y += orb.vy * dt;

      orb.x = Math.min(Math.max(orb.x, bounds.minX), bounds.maxX);
      orb.y = Math.min(Math.max(orb.y, bounds.minY), bounds.maxY);

      const scale = 0.84 + breathIn * 0.26;
      const opacity = 0.35 + breathIn * 0.45;

      orb.el.style.opacity = String(opacity);
      orb.el.style.transform = `translate3d(${orb.x}px, ${orb.y}px, 0) scale(${scale})`;
    }

    rafId = requestAnimationFrame(tick);
  }

  rafId = requestAnimationFrame(tick);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeroOrbs);
} else {
  initHeroOrbs();
}
