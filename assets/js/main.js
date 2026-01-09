// ==============================
// Smooth Anchor Scroll
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id.length <= 1) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ==============================
// Elements
// ==============================
const footer = document.querySelector('.site-footer');
const contactBtn = document.getElementById('contactToggle');
const contactReveal = document.getElementById('contactReveal');
const footerCopy = document.querySelector('.footer-copy-static');
const bodyEl = document.body;

// ==============================
// Cursor Glow
// ==============================
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', e => {
  cursorGlow.style.left = `${e.clientX - 13}px`;
  cursorGlow.style.top = `${e.clientY - 13}px`;
});

// ==============================
// Social Icon Hover & Tilt
// ==============================
document.querySelectorAll('.footer-socials a').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    const glow = getComputedStyle(icon).getPropertyValue('--glow') || '#f05a28';
    cursorGlow.style.setProperty('--cursor-glow', glow);
    cursorGlow.style.opacity = '1';
  });
  icon.addEventListener('mouseleave', () => { 
    cursorGlow.style.opacity = '0'; 
    icon.style.transform = '';
  });
  icon.addEventListener('mousemove', e => {
    const rect = icon.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    icon.style.transform = `translate(${x*0.18}px, ${y*0.18}px) scale(1.15)`;
  });
});

// ==============================
// Contact Toggle
// ==============================
contactBtn.addEventListener('click', () => {
  const isOpen = footer.classList.toggle('active');
  bodyEl.classList.toggle('footer-open', isOpen);
  contactBtn.setAttribute('aria-expanded', isOpen);
  if (isOpen) openContact();
  else closeContact();
});

function openContact() {
  footerCopy.classList.add('hide');
  footerCopy.classList.remove('show');
  contactReveal.style.opacity = '0';
  contactReveal.style.pointerEvents = 'none';
  requestAnimationFrame(() => {
    contactReveal.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    contactReveal.style.opacity = '1';
    contactReveal.style.transform = 'translateY(0)';
    contactReveal.style.pointerEvents = 'auto';
  });
}

function closeContact() {
  footerCopy.classList.remove('hide');
  footerCopy.classList.add('show');
  contactReveal.style.opacity = '0';
  contactReveal.style.pointerEvents = 'none';
  contactReveal.style.transform = 'translateY(20px)';
}

// ESC key + click outside
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && footer.classList.contains('active')) toggleFooter(false);
});
document.addEventListener('click', e => {
  if (!footer.contains(e.target) && footer.classList.contains('active')) toggleFooter(false);
});

function toggleFooter(open) {
  footer.classList.toggle('active', open);
  bodyEl.classList.toggle('footer-open', open);
  contactBtn.setAttribute('aria-expanded', open);
  if (!open) closeContact();
}

// ==============================
// Scroll Footer Show/Hide + Dynamic Blur
// ==============================
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowH = window.innerHeight;
  const docH = document.body.scrollHeight;

  // Show footer when near bottom
  if (scrollY + windowH >= docH - 50) {
    footer.classList.add('show-footer');
  } else {
    footer.classList.remove('show-footer');
    if (footer.classList.contains('active')) closeContact();
  }

  // Slide down when scrolling up
  if (scrollY < lastScrollY) {
    footer.classList.remove('show-footer');
    if (footer.classList.contains('active')) closeContact();
  }

  // Dynamic blur when contact is open
  if (bodyEl.classList.contains('footer-open')) {
    const maxBlur = 8;
    const blur = Math.min(maxBlur, (scrollY / (docH - windowH)) * maxBlur);
    bodyEl.style.setProperty('--dynamic-blur', `${blur}px`);
  }

  lastScrollY = scrollY;
});
