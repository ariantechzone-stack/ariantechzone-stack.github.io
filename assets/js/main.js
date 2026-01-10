// ===============================
// SKILL CARD TILT (3D)
// ===============================
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `rotateX(${-y / 18}deg) rotateY(${x / 18}deg) translateY(-4px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
// ===============================
// ELEMENTS
// ===============================
const body = document.body;
const footer = document.querySelector('.site-footer');
const contactBtn = document.getElementById('contactToggle');
const contactReveal = document.querySelector('.contact-reveal');
const linkedin = document.querySelector('.floating-linkedin');
const skillsSection = document.querySelector('#skills');
const hero = document.querySelector('.hero');

// Safety check
if (!footer || !contactBtn) {
  console.warn('Footer or Contact Button missing');
}

// ===============================
// FOOTER STATE
// ===============================
let footerOpen = false;

// ===============================
// FOOTER VISIBILITY (SCROLL)
// ===============================
function handleFooterVisibility() {
  if (!footer) return;

  const scrollBottom =
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 40;

  const shortPage =
    document.documentElement.scrollHeight <= window.innerHeight + 40;

  if (scrollBottom || shortPage) {
    footer.classList.add('footer-ready');
  } else {
    footer.classList.remove('footer-ready');
    closeFooter();
  }
}

window.addEventListener('scroll', handleFooterVisibility);
window.addEventListener('resize', handleFooterVisibility);
handleFooterVisibility();

// ===============================
// CONTACT BUTTON TOGGLE
// ===============================
contactBtn?.addEventListener('click', e => {
  e.stopPropagation();

  if (!footer?.classList.contains('footer-ready')) return;

  footerOpen = !footerOpen;
  footer.classList.toggle('footer-open', footerOpen);
  body.classList.toggle('footer-open', footerOpen);

  contactBtn.setAttribute('aria-expanded', footerOpen);
  if (contactReveal) {
    contactReveal.setAttribute('aria-hidden', !footerOpen);
  }
});

// ===============================
// CLOSE FOOTER (ESC / OUTSIDE)
// ===============================
document.addEventListener('click', e => {
  if (
    footerOpen &&
    footer &&
    e.target !== contactBtn &&
    !footer.contains(e.target)
  ) {
    closeFooter();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && footerOpen) closeFooter();
});

function closeFooter() {
  footerOpen = false;
  if (!footer || !contactBtn) return;

  footer.classList.remove('footer-open');
  body.classList.remove('footer-open');
  contactBtn.setAttribute('aria-expanded', 'false');
  if (contactReveal) {
    contactReveal.setAttribute('aria-hidden', 'true');
  }
}

// ===============================
// MICRO SPRING (CONTACT BUTTON)
// ===============================
contactBtn?.addEventListener('mousedown', () => {
  contactBtn.style.transform = 'scale(0.94)';
});
contactBtn?.addEventListener('mouseup', () => {
  contactBtn.style.transform = 'scale(1)';
});
contactBtn?.addEventListener('mouseleave', () => {
  contactBtn.style.transform = 'scale(1)';
});

// ===============================
// PROJECT CARD TILT (CLEAN)
// ===============================
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;

    card.style.transform =
      `rotateX(${-y / 18}deg) rotateY(${x / 18}deg)`; // removed translateY to avoid CSS conflict
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

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
// HERO PARALLAX (PERFORMANCE SAFE)
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

// ===============================
// SWIPE DOWN TO CLOSE (MOBILE)
// ===============================
let touchStartY = 0;
let touchCurrentY = 0;
let isSwipingFooter = false;

if (footer) {
  footer.addEventListener('touchstart', e => {
    if (!footerOpen) return;
    touchStartY = e.touches[0].clientY;
    isSwipingFooter = true;
  }, { passive: true });

  footer.addEventListener('touchmove', e => {
    if (!isSwipingFooter || !footerOpen) return;
    touchCurrentY = e.touches[0].clientY;
    const deltaY = touchCurrentY - touchStartY;

    if (deltaY > 0) {
      footer.style.transform = `translateY(${deltaY}px)`;
    }
  }, { passive: true });

  footer.addEventListener('touchend', () => {
    if (!isSwipingFooter || !footerOpen) return;
    const swipeDistance = touchCurrentY - touchStartY;

    // Reset transform safely
    footer.style.transform = footerOpen ? 'translateY(0)' : '';

    // Close if swipe passed threshold
    if (swipeDistance > 80) closeFooter();

    isSwipingFooter = false;
    touchStartY = 0;
    touchCurrentY = 0;
  });
}
