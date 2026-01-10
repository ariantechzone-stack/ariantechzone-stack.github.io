// ===============================
// ELEMENTS
// ===============================
const body = document.body;
const footer = document.querySelector('.site-footer');
const contactBtn = document.getElementById('contactToggle');
const navContact = document.querySelector('nav a[href="#contact"]');
const linkedin = document.querySelector('.floating-linkedin');
const skillsSection = document.querySelector('#skills');
const heroInner = document.querySelector('.hero-inner');

let footerOpen = false;

// ===============================
// FOOTER TOGGLE
// ===============================
function toggleFooter(force = null) {
  footerOpen = force === null ? !footerOpen : force;
  footer.classList.toggle('footer-open', footerOpen);
  body.classList.toggle('footer-open', footerOpen);

  if (contactBtn) {
    contactBtn.textContent = footerOpen ? 'Close' : 'Contact Me';
  }
}

contactBtn?.addEventListener('click', () => toggleFooter());
navContact?.addEventListener('click', e => {
  e.preventDefault();
  toggleFooter(true);
  contactBtn?.scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') toggleFooter(false);
});

// ===============================
// TILT EFFECT (CSS VARIABLE SAFE)
// ===============================
function addTilt(selector, strength = 18) {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / strength;
      const y = (e.clientY - r.top - r.height / 2) / strength;
      card.style.setProperty('--tilt-x', `${-y}deg`);
      card.style.setProperty('--tilt-y', `${x}deg`);
    });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--tilt-x', `0deg`);
      card.style.setProperty('--tilt-y', `0deg`);
    });
  });
}

addTilt('.project-card');
addTilt('.skill-card', 22);

// ===============================
// FLOATING LINKEDIN VISIBILITY
// ===============================
if (linkedin && skillsSection) {
  window.addEventListener('scroll', () => {
    const rect = skillsSection.getBoundingClientRect();
    linkedin.classList.toggle('show', rect.top < window.innerHeight * 0.6);
  });
}

// ===============================
// HERO PARALLAX (SAFE)
// ===============================
if (heroInner) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        heroInner.style.transform = `translateY(${window.scrollY * 0.06}px)`;
        ticking = false;
      });
      ticking = true;
    }
  });
}
body.footer-open .floating-contact {
  bottom: 300px; /* same as before, above footer */
}
// Show contact button after reaching Skills section
window.addEventListener('scroll', () => {
  if (!contactBtn || !skillsSection) return;

  const rect = skillsSection.getBoundingClientRect();
  // Show when top of skills section is inside 60% of viewport
  if (rect.top < window.innerHeight * 0.6) {
    contactBtn.classList.add('show');
  } else {
    contactBtn.classList.remove('show');
  }
});
// Floating contact button appears after skills section
const floatingContact = document.querySelector('.floating-contact');
const skillsSection = document.querySelector('#skills');

window.addEventListener('scroll', () => {
  if (!floatingContact || !skillsSection) return;

  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.6) {
    floatingContact.classList.add('show');
  } else {
    floatingContact.classList.remove('show');
  }
});
