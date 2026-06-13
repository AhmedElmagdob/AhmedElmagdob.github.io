const STORAGE_KEY = 'theme';

export type Theme = 'light' | 'dark';

export function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : null;
}

export function getTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', theme === 'dark' ? '#0a0a0f' : '#ffffff');
  }

  const toggle = document.getElementById('theme-toggle');
  toggle?.setAttribute('aria-pressed', String(theme === 'dark'));
  toggle?.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

export function setTheme(theme: Theme) {
  localStorage.setItem(STORAGE_KEY, theme);
  applyTheme(theme);
}

export function toggleTheme() {
  const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
  setTheme(next);
}

function initTheme() {
  applyTheme(getTheme());

  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!getStoredTheme()) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

initTheme();
