/* =================================
   SHARED STATE
================================= */
const mouse = { x: 0, y: 0 };
let scrollY = 0;
let ticking = false;

/* =================================
   ELEMENTS
================================= */
const hero = document.querySelector('.hero');
const layers = hero ? hero.querySelectorAll('.parallax-layer') : [];
const progressBar = document.getElementById('scroll-progress');
const spotlight = document.createElement('div');
spotlight.className = 'cursor-spotlight';
document.body.appendChild(spotlight);

/* =================================
   MOUSE TRACKING
================================= */
document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

/* =================================
   SCROLL TRACKING
================================= */
window.addEventListener('scroll', () => {
  scrollY = window.scrollY;
  if (!ticking) { requestAnimationFrame(updateOnScroll); ticking = true; }
});

function updateOnScroll() {
  ticking = false;
  if(progressBar) {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (scrollY / docHeight) * 100 + '%';
  }
}

/* =================================
   ANIMATION LOOP
================================= */
let spotX = 0, spotY = 0;
function animate() {
  /* Cursor Spotlight */
  spotX += (mouse.x - spotX) * 0.08;
  spotY += (mouse.y - spotY) * 0.08;
  spotlight.style.transform = `translate(${spotX}px, ${spotY}px)`;

  /* Hero Parallax */
  layers.forEach((layer,i)=>{
    const speed = (i+1)*6;
    const x=(mouse.x - window.innerWidth/2)/window.innerWidth*speed;
    const y=(mouse.y - window.innerHeight/2)/window.innerHeight*speed;
    layer.style.transform = `translate3d(${x}px, ${y}px,0)`;
  });

  requestAnimationFrame(animate);
}
animate();

/* =================================
   REVEAL TIMELINE
================================= */
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); revealObserver.unobserve(e.target); }
  }),
  { threshold:0.2 }
);
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

/* =================================
   MAGNETIC EFFECT
================================= */
document.addEventListener('mousemove', e=>{
  const el = e.target.closest('.magnetic');
  if(!el) return;
  const r = el.getBoundingClientRect();
  const x = e.clientX - r.left - r.width/2;
  const y = e.clientY - r.top - r.height/2;
  const strength = el.classList.contains('project-card') ? 0.15 : 0.25;
  el.style.transform = `translate(${x*strength}px, ${y*strength}px)`;
});
document.addEventListener('mouseleave', ()=>{ document.querySelectorAll('.magnetic').forEach(el=>el.style.transform='translate(0,0)'); });

/* =================================
   TYPING EFFECT
================================= */
const textEl=document.querySelector('.animated-text');
if(textEl){
  const words=["UI/UX Designer","Web Developer","Brand Designer","Creative Freelancer"];
  let i=0,j=0,del=false;
  function type(){
    textEl.textContent=words[i].slice(0,j);
    if(!del&&j++===words[i].length){ del=true; setTimeout(type,1000); return; }
    if(del&&j--===0){ del=false; i=(i+1)%words.length; }
    setTimeout(type,del?50:100);
  }
  type();
}

/* =================================
   VANILLA TILT
================================= */
VanillaTilt.init(document.querySelectorAll('.project-card'),{ max:10, speed:400, glare:true, "max-glare":0.2 });
