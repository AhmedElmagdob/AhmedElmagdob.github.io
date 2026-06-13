function initScrollSpy() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const sections = document.querySelectorAll('section[id]');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');
  const toTopBtn = document.getElementById('to-top');

  let menuOpen = false;

  function closeMobileMenu() {
    if (!mobileMenu || !mobileMenuBtn || !menuIconOpen || !menuIconClose) return;
    menuOpen = false;
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    menuIconOpen.classList.remove('hidden');
    menuIconClose.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function openMobileMenu() {
    if (!mobileMenu || !mobileMenuBtn || !menuIconOpen || !menuIconClose) return;
    menuOpen = true;
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    menuIconOpen.classList.add('hidden');
    menuIconClose.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  mobileMenuBtn?.addEventListener('click', () => {
    menuOpen ? closeMobileMenu() : openMobileMenu();
  });

  document.getElementById('mobile-menu-backdrop')?.addEventListener('click', closeMobileMenu);

  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  toTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function updateNavbar() {
    if (!navbar) return;
    const scrolled = window.scrollY > 50;
    navbar.classList.toggle('scrolled', scrolled);
    navbar.classList.toggle('on-hero', !scrolled);
  }

  function updateActiveSection() {
    const scrollPos = window.scrollY + 120;
    let currentSection = '';

    sections.forEach((section) => {
      const el = section as HTMLElement;
      if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
        currentSection = el.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('data-nav-link');
      link.classList.toggle('active', href === currentSection);
    });
  }

  function revealElement(el: Element) {
    el.classList.add('visible');
    const delay = el.getAttribute('data-reveal-delay');
    if (delay) {
      (el as HTMLElement).style.transitionDelay = `${delay}ms`;
    }
  }

  function initReveal() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealSelectors = '.reveal:not(.visible), .reveal-heading:not(.visible), .timeline-line:not(.visible), .timeline-dot:not(.visible)';
    const reveals = document.querySelectorAll(revealSelectors);

    if (prefersReducedMotion) {
      reveals.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealElement(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
  }

  window.addEventListener('scroll', () => {
    updateNavbar();
    updateActiveSection();
  }, { passive: true });

  updateNavbar();
  updateActiveSection();
  initReveal();
}

initScrollSpy();
