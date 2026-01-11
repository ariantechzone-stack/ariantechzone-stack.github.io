// ===============================
// ELEMENTS
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  const heroInner = document.querySelector('.hero-inner');
  const linkedin = document.querySelector('.floating-linkedin');
  const skillsSection = document.querySelector('#skills');
  const projectCards = document.querySelectorAll('.project-card');
  const skillCards = document.querySelectorAll('.skill-card');

  // ===============================
  // TILT EFFECT (CSS VARIABLE SAFE)
  // ===============================
  function addTilt(cards, strength = 18) {
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) / strength;
        const y = (e.clientY - r.top - r.height / 2) / strength;
        card.style.setProperty('--tilt-x', `${-y}deg`);
        card.style.setProperty('--tilt-y', `${x}deg`);
      });
      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--tilt-x', `0deg`);
        card.style.setProperty('--tilt-y', `0deg`);
      });
    });
  }

  addTilt(projectCards);
  addTilt(skillCards, 22);

  // ===============================
  // HERO PARALLAX
  // ===============================
  if (heroInner) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          heroInner.style.transform = `translateY(${window.scrollY * 0.06}px)`;
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ===============================
  // FLOATING LINKEDIN VISIBILITY
  // ===============================
  if (linkedin && skillsSection) {
    const showLinkedIn = () => {
      const rect = skillsSection.getBoundingClientRect();
      linkedin.classList.toggle('show', rect.top < window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', showLinkedIn);
    showLinkedIn(); // check on load
  }
});
/* ===============================
   DARK / LIGHT THEME TOGGLE
================================ */

const toggleBtn = document.getElementById('themeToggle');
const root = document.documentElement;

if (toggleBtn) {
  const savedTheme = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else if (prefersLight) {
    root.setAttribute('data-theme', 'light');
  }

  function updateIcon() {
    const icon = toggleBtn.querySelector('i');
    const isLight = root.getAttribute('data-theme') === 'light';
    icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
  }

  updateIcon();

  toggleBtn.addEventListener('click', () => {
    const current =
      root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';

    root.setAttribute('data-theme', current);
    localStorage.setItem('theme', current);
    updateIcon();
  });
}
