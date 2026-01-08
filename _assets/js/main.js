/* ================= THEME TOGGLE ================= */
const toggle = document.getElementById('themeToggle');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  root.classList.add('light');
  toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  root.classList.toggle('light');
  const isLight = root.classList.contains('light');
  toggle.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

/* ================= ACTIVE NAV ================= */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function activateNav() {
  let current = '';

  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (scrollY >= top) current = section.id;
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', activateNav);
activateNav();

/* ================= SOCIAL ACTIVE STATE ================= */
const socials = document.querySelectorAll('.social-link');

socials.forEach(link => {
  link.addEventListener('click', e => {
    socials.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
