// ===============================
// Smooth Anchor Scroll
// ===============================
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

// ===============================
// Elements
// ===============================
const footer = document.querySelector('.site-footer');
const contactBtn = document.getElementById('contactToggle');
const contactReveal = document.getElementById('contactReveal');
const footerCopy = document.getElementById('footerCopy');
const bodyEl = document.body;

// ===============================
// Cursor Glow
// ===============================
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', e => {
  cursorGlow.style.left = `${e.clientX - 13}px`;
  cursorGlow.style.top = `${e.clientY - 13}px`;
});

// ===============================
// Social Icon Glow & Magnetic Hover
// ===============================
document.querySelectorAll('.footer-socials a').forEach(icon => {
  // Cursor glow color follows icon
  icon.addEventListener('mouseenter', () => {
    const glow = getComputedStyle(icon).getPropertyValue('--glow') || '#f05a28';
    cursorGlow.style.setProperty('--cursor-glow', glow);
    cursorGlow.style.opacity = '1';
  });

  icon.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
  });

  // Magnetic hover effect
  icon.addEventListener('mousemove', e => {
    const rect = icon.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    icon.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px) scale(1.15)`;
  });

  icon.addEventListener('mouseleave', () => {
    icon.style.transform = '';
  });
});

// ===============================
// Toggle Contact Section
// ===============================
contactBtn.addEventListener('click', () => {
  const isOpen = footer.classList.toggle('active');
  bodyEl.classList.toggle('footer-open', isOpen);
  contactBtn.setAttribute('aria-expanded', isOpen);

  if (isOpen) {
    // Hide static footer copy
    footerCopy.classList.add('hide');
    footerCopy.classList.remove('show');

    // Animate contact reveal
    contactReveal.style.opacity = '0';
    contactReveal.style.pointerEvents = 'none';
    requestAnimationFrame(() => {
      contactReveal.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      contactReveal.style.opacity = '1';
      contactReveal.style.transform = 'translateY(0)';
      contactReveal.style.pointerEvents = 'auto';
    });
  } else {
    // Show static footer copy
    footerCopy.classList.remove('hide');
    footerCopy.classList.add('show');

    contactReveal.style.opacity = '0';
    contactReveal.style.pointerEvents = 'none';
    contactReveal.style.transform = 'translateY(20px)';
  }
});

// ===============================
// ESC Key Close
// ===============================
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && footer.classList.contains('active')) {
    footer.classList.remove('active');
    bodyEl.classList.remove('footer-open');
    footerCopy.classList.remove('hide');
    footerCopy.classList.add('show');
    contactBtn.setAttribute('aria-expanded', false);
    contactReveal.style.opacity = '0';
    contactReveal.style.pointerEvents = 'none';
    contactReveal.style.transform = 'translateY(20px)';
  }
});

// ===============================
// Click Outside Footer Close
// ===============================
document.addEventListener('click', e => {
  if (!footer.contains(e.target) && footer.classList.contains('active')) {
    footer.classList.remove('active');
    bodyEl.classList.remove('footer-open');
    footerCopy.classList.remove('hide');
    footerCopy.classList.add('show');
    contactBtn.setAttribute('aria-expanded', false);
    contactReveal.style.opacity = '0';
    contactReveal.style.pointerEvents = 'none';
    contactReveal.style.transform = 'translateY(20px)';
  }
});

// ===============================
// Scroll Reveal + Dynamic Blur
// ===============================
function handleFooterReveal() {
  const rect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Always show footer if page is short
  if (document.body.scrollHeight <= windowHeight + 50 || rect.top < windowHeight) {
    footer.classList.add('scroll-active');
  } else {
    footer.classList.remove('scroll-active');
  }

  // Dynamic blur intensity when footer is open
  if (bodyEl.classList.contains('footer-open')) {
    const scrollY = window.scrollY;
    const maxBlur = 8;
    const docHeight = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    const blur = Math.min(maxBlur, (scrollY / docHeight) * maxBlur);
    bodyEl.style.setProperty('--dynamic-blur', `${blur}px`);
  }
}

// Run on load and scroll
window.addEventListener('scroll', handleFooterReveal);
window.addEventListener('load', handleFooterReveal);
handleFooterReveal();
