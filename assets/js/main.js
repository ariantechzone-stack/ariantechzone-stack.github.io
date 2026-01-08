document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const layers = hero.querySelectorAll('.parallax-layer');

  /* --- Hero Parallax --- */
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    layers.forEach((layer, index) => {
      const speed = (index + 1) * 7; // depth multiplier
      const moveX = (x - centerX) / centerX * speed;
      const moveY = (y - centerY) / centerY * speed;
      layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
  });

  /* --- Floating Particles --- */
  for(let i = 0; i < 25; i++){
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    const size = Math.random() * 6 + 4;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.animationDuration = 10 + Math.random() * 20 + 's';
    hero.appendChild(particle);
  }

  /* --- Typing Animation --- */
  const textEl = hero.querySelector('.animated-text');
  const phrases = ["UI/UX Designer", "Web Developer", "Brand Designer", "Creative Freelancer"];
  let i = 0, j = 0, current = '', deleting = false;
  const speed = 100;

  function type() {
    if(!deleting && j < phrases[i].length){
      current += phrases[i][j];
      j++;
      textEl.textContent = current;
      setTimeout(type, speed);
    } else if(deleting && j > 0){
      current = current.slice(0, -1);
      j--;
      textEl.textContent = current;
      setTimeout(type, speed / 2);
    } else {
      deleting = !deleting;
      if(!deleting) i = (i + 1) % phrases.length;
      setTimeout(type, 1000);
    }
  }

  type();
});



    /* --- Hero Parallax --- */
    const hero = document.querySelector('.hero');
    const layers = hero.querySelectorAll('.parallax-layer');

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        layers.forEach((layer, index) => {
            const speed = (index + 1) * 7; // depth multiplier
            const moveX = (x - centerX) / centerX * speed;
            const moveY = (y - centerY) / centerY * speed;
            layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        });
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
