// ===============================
// Variables
// ===============================
const footer = document.querySelector('.site-footer');
const contactBtn = document.getElementById('contactToggle');
const footerCopy = document.getElementById('footerCopy');
const contactReveal = document.getElementById('contactReveal');
const bodyEl = document.body;

// ===============================
// Smooth anchor scroll
// ===============================
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
// Cursor glow
// ===============================
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', e => {
  cursorGlow.style.left = `${e.clientX - 13}px`;
  cursorGlow.style.top = `${e.clientY - 13}px`;
});

// ===============================
// Social icons hover tilt & cursor glow
// ===============================
document.querySelectorAll('.footer-socials a').forEach(icon => {
  icon.addEventListener('mouseenter', () => { cursorGlow.style.opacity = '1'; });
  icon.addEventListener('mouseleave', () => { 
    cursorGlow.style.opacity = '0'; 
    icon.style.transform = ''; 
  });
  icon.addEventListener('mousemove', e => {
    const rect = icon.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    icon.style.transform = `translate(${x*0.18}px,${y*0.18}px) scale(1.15)`;
  });
});

// ===============================
// Contact button toggle
// ===============================
contactBtn.addEventListener('click', () => {
  const isOpen = footer.classList.toggle('active');
  bodyEl.classList.toggle('footer-open', isOpen);

  footerCopy.classList.toggle('hide', isOpen);
  footerCopy.classList.toggle('show', !isOpen);

  contactReveal.style.pointerEvents = isOpen ? 'auto' : 'none';
  contactReveal.style.opacity = isOpen ? '1' : '0';
  contactReveal.style.transform = isOpen ? 'translateY(0)' : 'translateY(20px)';
});

const footer = document.querySelector('.site-footer');
const contactBtn = document.getElementById('contactToggle');
const footerCopy = document.getElementById('footerCopy');
const contactReveal = document.getElementById('contactReveal');

let footerAllowed = false;

// ===============================
// Show footer ONLY at bottom
// ===============================
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowH = window.innerHeight;
  const docH = document.body.scrollHeight;

  if (scrollY + windowH >= docH - 60) {
    footer.classList.add('footer-ready');
    footerAllowed = true;
  } else {
    footer.classList.remove('footer-ready');
    footer.classList.remove('active');
    footerAllowed = false;
  }
});

// ===============================
// Contact button toggle
// ===============================
contactBtn.addEventListener('click', () => {
  if (!footerAllowed) return;

  const isOpen = footer.classList.toggle('active');
  contactBtn.setAttribute('aria-expanded', isOpen);

  if (isOpen) {
    footerCopy.style.display = 'block';
    contactReveal.style.display = 'block';
    document.body.classList.add('footer-open');
  } else {
    footerCopy.style.display = 'none';
    contactReveal.style.display = 'none';
    document.body.classList.remove('footer-open');
  }
});

// ===============================
// ESC to close
// ===============================
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    footer.classList.remove('active');
    document.body.classList.remove('footer-open');
  }
});


// ===============================
// Footer scroll animation with lift/fade
// ===============================
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowH = window.innerHeight;
  const docH = document.body.scrollHeight;

  // Show footer when reaching bottom
  if (scrollY + windowH >= docH - 50) {
    footer.classList.add('show-footer');
  } else {
    footer.classList.remove('show-footer');
    footer.classList.remove('active'); // hide contact reveal
  }

  // Dynamic blur effect when contact is open
  if (bodyEl.classList.contains('footer-open')) {
    const maxBlur = 8;
    const blur = Math.min(maxBlur, (scrollY / (docH - windowH)) * maxBlur);
    bodyEl.style.setProperty('--dynamic-blur', `${blur}px`);
  }
});
// Floating LinkedIn reveal on skills
const linkedin = document.querySelector('.floating-linkedin');
const skillsSection = document.querySelector('#skills');

window.addEventListener('scroll', () => {
  if (!skillsSection) return;
  const rect = skillsSection.getBoundingClientRect();
  linkedin.classList.toggle('show', rect.top < window.innerHeight * 0.6);
});

// ===============================
// 3D tilt on project cards
// ===============================
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform =
      `rotateX(${ -y / 18 }deg) rotateY(${ x / 18 }deg) translateY(-6px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
// ===============================
// Random project images on reload
// ===============================
const projectImages = [
  '/assets/images/projects/p1.jpg',
  '/assets/images/projects/p2.jpg',
  '/assets/images/projects/p3.jpg',
  '/assets/images/projects/p4.jpg',
  '/assets/images/projects/p5.jpg'
];

document.querySelectorAll('.project-card img').forEach(img => {
  const randomImg = projectImages[Math.floor(Math.random() * projectImages.length)];
  img.src = randomImg;
});
// ===============================
// Subtle section reveal
// ===============================
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.18 });

reveals.forEach(el => observer.observe(el));

