// Smooth anchor scroll
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

const footer = document.querySelector('.site-footer');
const contactBtn = document.getElementById('contactToggle');
const contactReveal = document.getElementById('contactReveal');
const footerCopy = document.querySelector('.footer-copy-static');
const bodyEl = document.body;

// Cursor glow
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);
document.addEventListener('mousemove', e => {
  cursorGlow.style.left = `${e.clientX - 13}px`;
  cursorGlow.style.top = `${e.clientY - 13}px`;
});

// Social icon cursor glow & tilt
document.querySelectorAll('.footer-socials a').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    const glow = getComputedStyle(icon).getPropertyValue('--glow') || '#f05a28';
    cursorGlow.style.setProperty('--cursor-glow', glow);
    cursorGlow.style.opacity = '1';
  });
  icon.addEventListener('mouseleave', () => { cursorGlow.style.opacity = '0'; });
  icon.addEventListener('mousemove', e => {
    const rect = icon.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    icon.style.transform = `translate(${x*0.18}px,${y*0.18}px) scale(1.15)`;
  });
  icon.addEventListener('mouseleave', () => { icon.style.transform = ''; });
});

// Toggle contact section
contactBtn.addEventListener('click', () => {
  const isOpen = footer.classList.toggle('active');
  bodyEl.classList.toggle('footer-open', isOpen);
  contactBtn.setAttribute('aria-expanded', isOpen);
  if (isOpen) {
    footerCopy.classList.add('hide'); footerCopy.classList.remove('show');
    contactReveal.style.opacity = '0'; contactReveal.style.pointerEvents = 'none';
    requestAnimationFrame(() => {
      contactReveal.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      contactReveal.style.opacity = '1';
      contactReveal.style.transform = 'translateY(0)';
      contactReveal.style.pointerEvents = 'auto';
    });
  } else {
    footerCopy.classList.remove('hide'); footerCopy.classList.add('show');
    contactReveal.style.opacity = '0'; contactReveal.style.pointerEvents = 'none';
    contactReveal.style.transform = 'translateY(20px)';
  }
});

// ESC key & click outside to close
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
  if (!open) {
    footerCopy.classList.remove('hide'); footerCopy.classList.add('show');
    contactReveal.style.opacity = '0'; contactReveal.style.pointerEvents = 'none';
    contactReveal.style.transform = 'translateY(20px)';
  }
}

// Scroll reveal + dynamic blur
function handleFooterReveal() {
  const rect = footer.getBoundingClientRect();
  if (rect.top < window.innerHeight) footer.classList.add('scroll-active');
  else footer.classList.remove('scroll-active');

  if (bodyEl.classList.contains('footer-open')) {
    const scrollY = window.scrollY;
    const maxBlur = 8;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const blur = Math.min(maxBlur, (scrollY / docHeight) * maxBlur);
    bodyEl.style.setProperty('--dynamic-blur', `${blur}px`);
  }
}
window.addEventListener('scroll', handleFooterReveal);
handleFooterReveal();
