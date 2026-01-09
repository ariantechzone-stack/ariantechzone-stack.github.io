// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',e=>{
    const id=anchor.getAttribute('href');
    if(id.length<=1) return;
    const target=document.querySelector(id);
    if(!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

const footer = document.querySelector('.site-footer');
const contactBtn = document.getElementById('contactToggle');
const contactReveal = document.getElementById('contactReveal');
const footerCopy = document.getElementById('footerCopy');
const bodyEl = document.body;

// Initialize
contactReveal.style.opacity = '0';
contactReveal.style.pointerEvents = 'none';

// Toggle contact section
contactBtn.addEventListener('click', () => {
  const isOpen = footer.classList.toggle('active');
  bodyEl.classList.toggle('footer-open', isOpen);
  contactBtn.setAttribute('aria-expanded', isOpen);
  if (isOpen) {
    footerCopy.classList.add('hide');
    footerCopy.classList.remove('show');
    contactReveal.style.opacity = '1';
    contactReveal.style.pointerEvents = 'auto';
  } else {
    footerCopy.classList.remove('hide');
    footerCopy.classList.add('show');
    contactReveal.style.opacity = '0';
    contactReveal.style.pointerEvents = 'none';
  }
});

// Close with ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && footer.classList.contains('active')) {
    footer.classList.remove('active');
    bodyEl.classList.remove('footer-open');
    footerCopy.classList.remove('hide');
    footerCopy.classList.add('show');
    contactBtn.setAttribute('aria-expanded', false);
    contactReveal.style.opacity = '0';
    contactReveal.style.pointerEvents = 'none';
  }
});

// Click outside footer
document.addEventListener('click', e => {
  if (!footer.contains(e.target) && footer.classList.contains('active')) {
    footer.classList.remove('active');
    bodyEl.classList.remove('footer-open');
    footerCopy.classList.remove('hide');
    footerCopy.classList.add('show');
    contactBtn.setAttribute('aria-expanded', false);
    contactReveal.style.opacity = '0';
    contactReveal.style.pointerEvents = 'none';
  }
});

// Scroll reveal + dynamic blur
function handleFooterReveal() {
  const rect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Show footer when near viewport bottom
  if (rect.top < windowHeight) {
    footer.classList.add('scroll-active');
  } else {
    footer.classList.remove('scroll-active');
  }

  // Dynamic blur
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
