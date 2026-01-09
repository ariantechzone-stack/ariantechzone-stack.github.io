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

// Initialize hidden
contactReveal.style.opacity='0';
contactReveal.style.pointerEvents='none';

contactBtn.addEventListener('click',()=>{
  const isOpen=footer.classList.toggle('active');
  document.body.classList.toggle('footer-open',isOpen);
  contactBtn.setAttribute('aria-expanded',isOpen);

  if(isOpen){
    footerCopy.classList.add('hide');
    footerCopy.classList.remove('show');
    contactReveal.style.opacity='1';
    contactReveal.style.pointerEvents='auto';
  } else {
    footerCopy.classList.remove('hide');
    footerCopy.classList.add('show');
    contactReveal.style.opacity='0';
    contactReveal.style.pointerEvents='none';
  }
});

// ESC key close
document.addEventListener('keydown',e=>{
  if(e.key==='Escape' && footer.classList.contains('active')){
    footer.classList.remove('active');
    document.body.classList.remove('footer-open');
    footerCopy.classList.remove('hide');
    footerCopy.classList.add('show');
    contactBtn.setAttribute('aria-expanded',false);
    contactReveal.style.opacity='0';
    contactReveal.style.pointerEvents='none';
  }
});

// Click outside footer to close
document.addEventListener('click',e=>{
  if(!footer.contains(e.target) && footer.classList.contains('active')){
    footer.classList.remove('active');
    document.body.classList.remove('footer-open');
    footerCopy.classList.remove('hide');
    footerCopy.classList.add('show');
    contactBtn.setAttribute('aria-expanded',false);
    contactReveal.style.opacity='0';
    contactReveal.style.pointerEvents='none';
  }
});

// Magnetic cursor + hover glow
document.querySelectorAll('.footer-socials a').forEach(icon=>{
  icon.addEventListener('mousemove',e=>{
    const rect=icon.getBoundingClientRect();
    const x=e.clientX-rect.left-rect.width/2;
    const y=e.clientY-rect.top-rect.height/2;
    icon.style.transform=`translate(${x*0.18}px,${y*0.18}px) scale(1.15)`;
  });
  icon.addEventListener('mouseleave',()=>{icon.style.transform='';});
});

// Cursor glow follows icon
const cursorGlow=document.createElement('div');
cursorGlow.className='cursor-glow';
document.body.appendChild(cursorGlow);
document.addEventListener('mousemove',e=>{
  cursorGlow.style.left=`${e.clientX-13}px`;
  cursorGlow.style.top=`${e.clientY-13}px`;
});
document.querySelectorAll('.footer-socials a').forEach(icon=>{
  icon.addEventListener('mouseenter',()=>{
    const glow=getComputedStyle(icon).getPropertyValue('--glow')||'#f05a28';
    cursorGlow.style.setProperty('--cursor-glow',glow);
    cursorGlow.style.opacity='1';
  });
  icon.addEventListener('mouseleave',()=>{cursorGlow.style.opacity='0';});
});

// Scroll-based footer reveal
function handleFooterReveal(){
  const rect=footer.getBoundingClientRect();
  const windowHeight=window.innerHeight;
  if(rect.top<windowHeight-120){footer.classList.add('scroll-active');}
  else{footer.classList.remove('scroll-active');}
}
window.addEventListener('scroll',handleFooterReveal);
handleFooterReveal();
const bodyBefore = document.querySelector('body::before'); // can't select pseudo directly
const bodyEl = document.body;

window.addEventListener('scroll', () => {
  if(!bodyEl.classList.contains('footer-open')) return;

  const scrollY = window.scrollY;
  const maxBlur = 8; // max blur in px
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const blur = Math.min(maxBlur, (scrollY / docHeight) * maxBlur);

  bodyEl.style.setProperty('--dynamic-blur', `${blur}px`);
});
