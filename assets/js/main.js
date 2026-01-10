// ===============================
// ELEMENTS
// ===============================
const body = document.body;
const footer = document.querySelector('.site-footer');
const contactBtn = document.getElementById('contactToggle');
const contactReveal = document.querySelector('.contact-reveal');
const navContact = document.querySelector('nav a[href="#contact"]');
const linkedin = document.querySelector('.floating-linkedin');
const skillsSection = document.querySelector('#skills');
const hero = document.querySelector('.hero');

let footerOpen = false;

// ===============================
// FOOTER TOGGLE FUNCTION
// ===============================
function toggleFooter(open = null) {
  footerOpen = open === null ? !footerOpen : open;
  footer.classList.toggle('footer-open', footerOpen);
  body.classList.toggle('footer-open', footerOpen);
  if (contactReveal) contactReveal.setAttribute('aria-hidden', !footerOpen);
  if (contactBtn) contactBtn.textContent = footerOpen ? 'Close' : 'Contact Me';
}

// ===============================
// CONTACT BUTTON & NAV LINK
// ===============================
contactBtn?.addEventListener('click', () => toggleFooter());
navContact?.addEventListener('click', e => {
  e.preventDefault();
  toggleFooter(true);
  contactBtn.scrollIntoView({ behavior: 'smooth' });
});

// ===============================
// CLOSE FOOTER (ESC / CLICK OUTSIDE)
// ===============================
document.addEventListener('click', e => {
  if (footerOpen && !footer.contains(e.target) && e.target !== contactBtn) toggleFooter(false);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') toggleFooter(false);
});

// ===============================
// MICRO SPRING EFFECT FOR BUTTON
// ===============================
contactBtn?.addEventListener('mousedown', () => contactBtn.style.transform = 'scale(0.94)');
contactBtn?.addEventListener('mouseup', () => contactBtn.style.transform = 'scale(1)');
contactBtn?.addEventListener('mouseleave', () => contactBtn.style.transform = 'scale(1)');

// ===============================
// 3D TILT EFFECT
// ===============================
function addTiltEffect(selector, translateY = 0) {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `rotateX(${-y/18}deg) rotateY(${x/18}deg) translateY(${translateY}px)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = '');
  });
}

addTiltEffect('.project-card', -6);
addTiltEffect('.skill-card', -4);

// ===============================
// FLOATING LINKEDIN
// ===============================
if (linkedin && skillsSection) {
  window.addEventListener('scroll', () => {
    const rect = skillsSection.getBoundingClientRect();
    linkedin.classList.toggle('show', rect.top < window.innerHeight * 0.6);
  });
}

// ===============================
// HERO PARALLAX
// ===============================
if (hero) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        hero.style.transform = `translateY(${window.scrollY * 0.08}px)`;
        ticking = false;
      });
      ticking = true;
    }
  });
}
