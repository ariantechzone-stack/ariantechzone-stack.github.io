// ================= THEME TOGGLE =================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme
if(localStorage.getItem('theme') === 'light') {
  body.classList.remove('theme-dark');
  body.classList.add('theme-light');
} else {
  body.classList.add('theme-dark');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  if(body.classList.contains('theme-dark')) {
    body.classList.replace('theme-dark','theme-light');
    localStorage.setItem('theme','light');
  } else {
    body.classList.replace('theme-light','theme-dark');
    localStorage.setItem('theme','dark');
  }
});

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});

// ================= NAV ACTIVE LINK =================
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 80;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// ================= TILT EFFECT =================
if(typeof VanillaTilt !== "undefined"){
  const projectCards = document.querySelectorAll('.project-card');
  VanillaTilt.init(projectCards,{
    max:15,
    speed:400,
    glare:true,
    "max-glare":0.3
  });
}
