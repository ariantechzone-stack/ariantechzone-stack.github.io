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

// Footer & contact button
const footer = document.querySelector('.site-footer');
const contactBtn = document.querySelector('.contact-btn');
const contactReveal = document.querySelector('.contact-reveal');
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

// Social icon hover tilt & cursor glow
document.querySelectorAll('.footer-socials a').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    cursorGlow.style.opacity = '1';
  });
  icon.addEventListener('mouseleave', () => { cursorGlow.style.opacity = '0'; icon.style.transform = ''; });
  icon.addEventListener('mousemove', e => {
    const rect = icon.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    icon.style.transform = `translate(${x*0.18}px,${y*0.18}px) scale(1.15)`;
  });
});

// Toggle contact section
contactBtn.addEventListener('click', () => {
  const isOpen = footer.classList.toggle('active');
  bodyEl.classList.toggle('footer-open', isOpen);
  
  // Footer copy
  footerCopy.classList.toggle('hide', isOpen);
  footerCopy.classList.toggle('show', !isOpen);

  // Contact reveal
  if(isOpen){
    contactReveal.style.pointerEvents = 'auto';
    contactReveal.style.opacity = '1';
    contactReveal.style.transform = 'translateY(0)';
  } else {
    contactReveal.style.pointerEvents = 'none';
    contactReveal.style.opacity = '0';
    contactReveal.style.transform = 'translateY(20px)';
  }
});

// Close footer on ESC or click outside
document.addEventListener('keydown', e => {
  if(e.key === 'Escape' && footer.classList.contains('active')){
    closeFooter();
  }
});
document.addEventListener('click', e => {
  if(!footer.contains(e.target) && footer.classList.contains('active')){
    closeFooter();
  }
});
function closeFooter(){
  footer.classList.remove('active');
  bodyEl.classList.remove('footer-open');
  footerCopy.classList.remove('hide'); footerCopy.classList.add('show');
  contactReveal.style.opacity = '0'; contactReveal.style.pointerEvents = 'none';
  contactReveal.style.transform = 'translateY(20px)';
}

// ===============================
// Footer scroll animation
// ===============================
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowH = window.innerHeight;
  const docH = document.body.scrollHeight;

  // If user reaches near bottom
  if(scrollY + windowH >= docH - 50){
    footer.classList.add('show-footer');
  } else {
    footer.classList.remove('show-footer');
    footer.classList.remove('active'); // hide contact reveal if scrolling up
  }

  lastScroll = scrollY;

  // Dynamic blur effect
  if(bodyEl.classList.contains('footer-open')){
    const maxBlur = 8;
    const blur = Math.min(maxBlur, (scrollY / (docH - windowH)) * maxBlur);
    bodyEl.style.setProperty('--dynamic-blur', `${blur}px`);
  }
});
