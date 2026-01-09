/* ==============================
   Smooth Anchor Scroll
============================== */
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
// Footer Spring Motion + Control
// ===============================
const footer = document.querySelector('.site-footer');
const contactBtn = document.getElementById('contactToggle');
const contactReveal = document.getElementById('contactReveal');
const footerCopy = document.getElementById('footerCopy');

contactBtn.addEventListener('click', () => {
  footer.classList.toggle('active');
  document.body.classList.toggle('footer-open');

  const isOpen = footer.classList.contains('active');

  if (isOpen) {
    footerCopy.classList.add('hide');
    footerCopy.classList.remove('show');
  } else {
    footerCopy.classList.remove('hide');
    footerCopy.classList.add('show');
  }
});

// ESC key close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && footer.classList.contains('active')) {
    footer.classList.remove('active');
    document.body.classList.remove('footer-open');
    footerCopy.classList.remove('hide');
    footerCopy.classList.add('show');
  }
});
// ===============================
// Magnetic Cursor (Icons)
// ===============================
document.querySelectorAll('.footer-socials a').forEach(icon => {
  icon.addEventListener('mousemove', (e) => {
    const rect = icon.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    icon.style.transform = `
      translate(${x * 0.18}px, ${y * 0.18}px)
      scale(1.15)
    `;
  });

  icon.addEventListener('mouseleave', () => {
    icon.style.transform = '';
  });
});
// ===============================
// Cursor Glow (Color follows icon)
// ===============================
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', e => {
  cursorGlow.style.left = `${e.clientX - 13}px`;
  cursorGlow.style.top = `${e.clientY - 13}px`;
});

document.querySelectorAll('.footer-socials a').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    const glow = getComputedStyle(icon).getPropertyValue('--glow') || '#f05a28';
    cursorGlow.style.setProperty('--cursor-glow', glow);
    cursorGlow.style.opacity = '1';
  });

  icon.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
  });
});
// ===============================
// Scroll-Based Footer Reveal
// ===============================
const footer = document.querySelector('.site-footer');

function handleFooterReveal() {
  const rect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 120) {
    footer.classList.add('scroll-active');
  } else {
    footer.classList.remove('scroll-active');
  }
}

window.addEventListener('scroll', handleFooterReveal);
handleFooterReveal();
