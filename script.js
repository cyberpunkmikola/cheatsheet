const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');

  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});