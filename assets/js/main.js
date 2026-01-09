/* ======================================================
   GLOBAL ELEMENTS
====================================================== */
const body = document.body;
const footer = document.querySelector('.site-footer');
const contactBtn = document.getElementById('contactToggle');
const footerCopy = document.getElementById('footerCopy');
const contactReveal = document.getElementById('contactReveal');

/* ======================================================
   FOOTER STATE
====================================================== */
let footerAllowed = false;
let footerOpen = false;

/* ======================================================
   SHOW FOOTER ONLY AT PAGE BOTTOM
====================================================== */
function handleFooterVisibility() {
  const scrollBottom =
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 80;

  if (scrollBottom) {
    footer.classList.add('footer-visible');
    footerAllowed = true;
  } else {
    footer.classList.remove('footer-visible');
    footer.classList.remove('footer-open');
    body.classList.remove('footer-open');
    footerAllowed = false;
    footerOpen = false;
  }
}

window.addEventListener('scroll', handleFooterVisibility);

/* ======================================================
   CONTACT BUTTON TOGGLE
====================================================== */
contactBtn.addEventListener('click', e => {
  e.stopPropagation();
  if (!footerAllowed) return;

  footerOpen = !footerOpen;
  footer.classList.toggle('footer-open', footerOpen);
  body.classList.toggle('footer-open', footerOpen);

  contactBtn.setAttribute('aria-expanded', footerOpen);

  if (footerCopy) footerCopy.style.display = footerOpen ? 'block' : 'none';
  if (contactReveal) {
    contactReveal.style.opacity = footerOpen ? '1' : '0';
    contactReveal.style.transform = footerOpen
      ? 'translateY(0)'
      : 'translateY(18px)';
    contactReveal.style.pointerEvents = footerOpen ? 'auto' : 'none';
  }
});

/* ======================================================
   CLOSE FOOTER ON OUTSIDE CLICK
====================================================== */
document.addEventListener('click', e => {
  if (!footer.contains(e.target) && footerOpen) {
    footer.classList.remove('footer-open');
    body.classList.remove('footer-open');
    footerOpen = false;
  }
});

/* ======================================================
   ESC KEY CLOSE
====================================================== */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && footerOpen) {
    footer.classList.remove('footer-open');
    body.classList.remove('footer-open');
    footerOpen = false;
  }
});

/* ======================================================
   SMOOTH ANCHOR SCROLL
====================================================== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ======================================================
   CURSOR GLOW
====================================================== */
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', e => {
  cursorGlow.style.left = `${e.clientX - 14}px`;
  cursorGlow.style.top = `${e.clientY - 14}px`;
});

/* ======================================================
   SOCIAL ICON HOVER EFFECT
====================================================== */
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
    icon.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.12)`;
  });
});

/* ======================================================
   FLOATING LINKEDIN (SHOW ON SKILLS)
====================================================== */
const linkedin = document.querySelector('.floating-linkedin');
const skills = document.getElementById('skills');

if (linkedin && skills) {
  window.addEventListener('scroll', () => {
    const rect = skills.getBoundingClientRect();
    linkedin.classList.toggle(
      'show',
      rect.top < window.innerHeight * 0.65
    );
  });
}

/* ======================================================
   PROJECT CARD 3D TILT
====================================================== */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    card.style.transform =
      `rotateX(${ -y / 18 }deg) rotateY(${ x / 18 }deg) translateY(-6px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ======================================================
   RANDOM PROJECT IMAGES
====================================================== */
const projectImages = [
  '/assets/images/projects/p1.jpg',
  '/assets/images/projects/p2.jpg',
  '/assets/images/projects/p3.jpg',
  '/assets/images/projects/p4.jpg',
  '/assets/images/projects/p5.jpg'
];

document.querySelectorAll('.project-card img').forEach(img => {
  img.src = projectImages[Math.floor(Math.random() * projectImages.length)];
});

/* ======================================================
   SECTION REVEAL
====================================================== */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});
