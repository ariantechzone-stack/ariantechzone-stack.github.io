// ===============================
// ELEMENTS
// ===============================
const body = document.body;
const footer = document.querySelector('.site-footer');
const contactBtn = document.getElementById('contactToggle');
const contactReveal = document.querySelector('.contact-reveal');
const linkedin = document.querySelector('.floating-linkedin');
const skillsSection = document.querySelector('#skills');
const hero = document.querySelector('.hero');

// Safety check
if (!footer || !contactBtn) {
  console.warn('Footer or Contact Button missing');
}

// ===============================
// FOOTER STATE
// ===============================
let footerOpen = false;

// ===============================
// FOOTER VISIBILITY (SCROLL)
// ===============================
function handleFooterVisibility() {
  const scrollBottom =
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 40;

  // If page is short, allow footer always
  const shortPage =
    document.documentElement.scrollHeight <= window.innerHeight + 40;

  if (scrollBottom || shortPage) {
    footer.classList.add('footer-ready');
  } else {
    footer.classList.remove('footer-ready', 'footer-open');
    footerOpen = false;
  }
}

window.addEventListener('scroll', handleFooterVisibility);
window.addEventListener('resize', handleFooterVisibility);
handleFooterVisibility();

// ===============================
// CONTACT BUTTON TOGGLE
// ===============================
contactBtn.addEventListener('click', e => {
  e.stopPropagation();

  footerOpen = !footerOpen;
  footer.classList.toggle('footer-open', footerOpen);
  body.classList.toggle('footer-open', footerOpen);

  contactBtn.setAttribute('aria-expanded', footerOpen);
  if (contactReveal) {
    contactReveal.setAttribute('aria-hidden', !footerOpen);
  }
});

// ===============================
// CLOSE FOOTER (ESC / OUTSIDE)
// ===============================
document.addEventListener('click', e => {
  if (footerOpen && !footer.contains(e.target)) closeFooter();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && footerOpen) closeFooter();
});

function closeFooter() {
  footerOpen = false;
  footer.classList.remove('footer-open');
  body.classList.remove('footer-open');
  contactBtn.setAttribute('aria-expanded', 'false');
  if (contactReveal) {
    contactReveal.setAttribute('aria-hidden', 'true');
  }
}

// ===============================
// MICRO SPRING (CONTACT BUTTON)
// ===============================
contactBtn.addEventListener('mousedown', () => {
  contactBtn.style.transform = 'scale(0.94)';
});
contactBtn.addEventListener('mouseup', () => {
  contactBtn.style.transform = 'scale(1)';
});
contactBtn.addEventListener('mouseleave', () => {
  contactBtn.style.transform = 'scale(1)';
});

// ===============================
// PROJECT CARD TILT (CLEAN)
// ===============================
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;

    card.style.transform =
      `rotateX(${-y / 18}deg) rotateY(${x / 18}deg) translateY(-6px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ===============================
// FLOATING LINKEDIN
// ===============================
if (linkedin && skillsSection) {
  window.addEventListener('scroll', () => {
    const rect = skillsSection.getBoundingClientRect();
    linkedin.classList.toggle(
      'show',
      rect.top < window.innerHeight * 0.6
    );
  });
}

// ===============================
// HERO PARALLAX (SUBTLE)
// ===============================
if (hero) {
  window.addEventListener('scroll', () => {
    hero.style.transform =
      `translateY(${window.scrollY * 0.08}px)`;
  });
}
