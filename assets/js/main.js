// ===============================
// VARIABLES
// ===============================
const bodyEl = document.body;
const footer = document.querySelector('.site-footer');
const contactBtn = document.getElementById('contactToggle');
const footerCopy = document.getElementById('footerCopy');
const contactReveal = document.getElementById('contactReveal');
const linkedin = document.querySelector('.floating-linkedin');
const skillsSection = document.querySelector('#skills');

let footerAllowed = false;
let footerOpen = false;

// ===============================
// SMOOTH ANCHOR SCROLL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ===============================
// FOOTER VISIBILITY (BOTTOM ONLY)
// ===============================
window.addEventListener('scroll', () => {
  const atBottom =
    window.scrollY + window.innerHeight >=
    document.body.scrollHeight - 60;

  if (atBottom) {
    footer.classList.add('footer-ready');
    footerAllowed = true;
  } else {
    footer.classList.remove('footer-ready', 'footer-open');
    footerAllowed = false;
    footerOpen = false;
    bodyEl.classList.remove('footer-open');
  }
});

// ===============================
// CONTACT BUTTON TOGGLE
// ===============================
contactBtn.addEventListener('click', e => {
  e.stopPropagation();
  if (!footerAllowed) return;

  footerOpen = !footerOpen;
  footer.classList.toggle('footer-open', footerOpen);
  bodyEl.classList.toggle('footer-open', footerOpen);

  contactBtn.setAttribute('aria-expanded', footerOpen);
  contactReveal.setAttribute('aria-hidden', !footerOpen);
});

// ===============================
// CLOSE ON OUTSIDE CLICK / ESC
// ===============================
document.addEventListener('click', e => {
  if (footerOpen && !footer.contains(e.target)) {
    closeFooter();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && footerOpen) {
    closeFooter();
  }
});

function closeFooter() {
  footerOpen = false;
  footer.classList.remove('footer-open');
  bodyEl.classList.remove('footer-open');
  contactBtn.setAttribute('aria-expanded', 'false');
  contactReveal.setAttribute('aria-hidden', 'true');
}

// ===============================
// CURSOR GLOW
// ===============================
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', e => {
  cursorGlow.style.transform =
    `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
});

// ===============================
// SOCIAL ICON TILT + GLOW
// ===============================
document.querySelectorAll('.footer-socials a').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    cursorGlow.style.opacity = '1';
  });

  icon.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
    icon.style.transform = '';
  });

  icon.addEventListener('mousemove', e => {
    const r = icon.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    icon.style.transform =
      `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.15)`;
  });
});

// ===============================
// FLOATING LINKEDIN (SKILLS)
// ===============================
const linkedin = document.querySelector('.floating-linkedin');
const skillsSection = document.querySelector('#skills');

window.addEventListener('scroll', () => {
  if (!skillsSection) return;
  const rect = skillsSection.getBoundingClientRect();
  linkedin.classList.toggle('show', rect.top < window.innerHeight * 0.6);
});

// ===============================
// 3D PROJECT CARD TILT
// ===============================
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    card.style.transform =
      `rotateX(${-y / 20}deg) rotateY(${x / 20}deg) translateY(-6px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ===============================
// RANDOM PROJECT IMAGES
// ===============================
const projectImages = [
  '/assets/images/projects/p1.jpg',
  '/assets/images/projects/p2.jpg',
  '/assets/images/projects/p3.jpg',
  '/assets/images/projects/p4.jpg',
  '/assets/images/projects/p5.jpg'
];

document.querySelectorAll('.project-card img').forEach(img => {
  const rand =
    projectImages[Math.floor(Math.random() * projectImages.length)];
  img.src = rand;
});

// ===============================
// SECTION REVEAL
// ===============================
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.18 });

reveals.forEach(el => observer.observe(el));
// ===============================
// MICRO SPRING BOUNCE (CONTACT BTN)
// ===============================
contactBtn.addEventListener('mousedown', () => {
  contactBtn.style.transform = 'scale(0.92)';
});

contactBtn.addEventListener('mouseup', () => {
  contactBtn.style.transform = 'scale(1)';
});

// ===============================
// FOOTER PHYSICS EASING
// ===============================
footer.addEventListener('transitionend', () => {
  footer.style.willChange = 'auto';
});

window.addEventListener('scroll', () => {
  footer.style.willChange = 'transform';
});

// ===============================
// SUBTLE PARALLAX HERO
// ===============================
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  if (!hero) return;
  hero.style.transform =
    `translateY(${window.scrollY * 0.12}px)`;
});

