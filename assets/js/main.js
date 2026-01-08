document.addEventListener('DOMContentLoaded', () => {

    const body = document.body;

    /* --- Dark/Light Theme Toggle --- */
    body.addEventListener('dblclick', () => {
        body.classList.toggle('theme-light');
        body.classList.toggle('theme-dark');
    });

    /* --- Project Card 3D Tilt --- */
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotX = ((rect.height / 2 - y) / rect.height) * 15;
            const rotY = ((x - rect.width / 2) / rect.width) * 15;
            card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(10px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
        });
    });

    /* --- Multi-Depth Parallax Hero --- */
    const hero = document.querySelector('.hero');
    const layers = hero.querySelectorAll('.parallax-layer');

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        layers.forEach((layer, index) => {
            const speed = (index + 1) * 5; // Different depth speed
            const moveX = (x - centerX) / centerX * speed;
            const moveY = (y - centerY) / centerY * speed;
            layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        });
    });

    /* --- Smooth Scroll Animation for Projects --- */
    const projectSection = document.querySelector('.projects');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = 1;
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        card.style.transform = 'translateY(50px)';
        card.style.opacity = 0;
        observer.observe(card);
    });
});
// ====== THEME TOGGLE ======
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('theme-dark');
  document.body.classList.toggle('theme-light');
});

// ====== NAV ACTIVE LINK ======
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    navLinks.forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');
  });
});

// ====== SMOOTH SCROLL ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ====== VANILLA TILT ======
VanillaTilt.init(document.querySelectorAll(".project-card"), {
  max: 10,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});
