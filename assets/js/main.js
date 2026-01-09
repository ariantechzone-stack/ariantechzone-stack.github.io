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

// Footer toggle
const footer=document.querySelector('.site-footer');
const contactBtn=document.getElementById('contactToggle');
const contactReveal=document.getElementById('contactReveal');
const footerCopy=document.getElementById('footerCopy');

contactBtn.addEventListener('click',()=>{
  const isOpen=footer.classList.toggle('active');
  document.body.classList.toggle('footer-open',isOpen);
  contactBtn.setAttribute('aria-expanded', isOpen);

  if(isOpen){
    footerCopy.classList.add('hide');
    footerCopy.classList.remove('show');
  }else{
    footerCopy.classList.remove('hide');
    footerCopy.classList.add('show');
  }
});

// ----------------------------
// Footer Button Bounce Already Handled by CSS Keyframes
// ----------------------------

// ----------------------------
// Footer Soft Slide + Fade handled via CSS transitions
// ----------------------------

// Ensure contact section is hidden initially
contactReveal.style.opacity = '0';
contactReveal.style.pointerEvents = 'none';

// Toggle contact reveal on button click
contactBtn.addEventListener('click', ()=>{
  const isOpen = footer.classList.toggle('active');
  document.body.classList.toggle('footer-open', isOpen);
  contactBtn.setAttribute('aria-expanded', isOpen);

  if(isOpen){
    footerCopy.classList.add('hide');
    footerCopy.classList.remove('show');
    // Show contact section with smooth slide/fade
    contactReveal.style.opacity = '1';
    contactReveal.style.pointerEvents = 'auto';
  } else {
    footerCopy.classList.remove('hide');
    footerCopy.classList.add('show');
    contactReveal.style.opacity = '0';
    contactReveal.style.pointerEvents = 'none';
  }
});

// ESC key close
document.addEventListener('keydown', e => {
  if(e.key === 'Escape' && footer.classList.contains('active')){
    footer.classList.remove('active');
    document.body.classList.remove('footer-open');
    footerCopy.classList.remove('hide');
    footerCopy.classList.add('show');
    contactBtn.setAttribute('aria-expanded', false);
    contactReveal.style.opacity = '0';
    contactReveal.style.pointerEvents = 'none';
  }
});

// Click outside footer to close
document.addEventListener('click', e => {
  if(!footer.contains(e.target) && footer.classList.contains('active')){
    footer.classList.remove('active');
    document.body.classList.remove('footer-open');
    footerCopy.classList.remove('hide');
    footerCopy.classList.add('show');
    contactBtn.setAttribute('aria-expanded', false);
    contactReveal.style.opacity = '0';
    contactReveal.style.pointerEvents = 'none';
  }
});
