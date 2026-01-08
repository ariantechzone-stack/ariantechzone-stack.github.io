// ================= THEME TOGGLE =================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.toggle('theme-light', savedTheme === 'light');
}

// Update toggle icon
function updateToggleIcon() {
  themeToggle.textContent = body.classList.contains('theme-light') ? '🌞' : '🌙';
}
updateToggleIcon();

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('theme-light');
  const theme = body.classList.contains('theme-light') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  updateToggleIcon();
});

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // adjust for fixed header
        behavior: 'smooth'
      });
    }
  });
});

// ================= ACTIVE NAV LINK =================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 80; // header offset
  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + section.id) {
          link.classList.add('active');
        }
      });
    }
  });
});
