/* ==============================
   Smooth Anchor Scroll
=============================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.length <= 1) return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

/* ==============================
   Contact Footer Toggle
=============================== */
const contactBtn = document.querySelector('.contact-btn');
  const footer = document.querySelector('.site-footer');
  const reveal = document.querySelector('.contact-reveal');

  function toggleFooter() {
    contactBtn.classList.toggle('active');
    footer.classList.toggle('active');
    reveal.classList.toggle('active');
    document.body.classList.toggle('footer-open');
  }

  contactBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent outside click trigger
    toggleFooter();
  });

  footer.addEventListener('click', (e) => {
    e.stopPropagation(); // clicking inside footer won't close it
  });

  document.addEventListener('click', () => {
    if (footer.classList.contains('active')) {
      toggleFooter();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const footer = document.querySelector('.site-footer');
      const contactBtn = document.querySelector('.contact-btn');
      const reveal = document.querySelector('.contact-reveal');

      if (footer && footer.classList.contains('active')) {
        footer.classList.remove('active');
        contactBtn.classList.remove('active');
        reveal.classList.remove('active');
        document.body.classList.remove('footer-open');
      }
    }
  });
const contactBtn = document.querySelector('.contact-btn');
const reveal = document.querySelector('#contactReveal');
const footer = document.querySelector('.site-footer');
const footerCopy = document.querySelector('#footerCopy');

function openFooter() {
  // Slide out footer copy
  footerCopy.classList.add('hide');
  footerCopy.classList.remove('show');

  // Show contact reveal + glow
  reveal.classList.add('active');
  footer.classList.add('active');
  contactBtn.classList.add('active');
}

function closeFooter() {
  // Slide in footer copy
  footerCopy.classList.remove('hide');
  footerCopy.classList.add('show');

  // Hide contact reveal + glow
  reveal.classList.remove('active');
  footer.classList.remove('active');
  contactBtn.classList.remove('active');
}

// Button click toggles
contactBtn.addEventListener('click', () => {
  if (reveal.classList.contains('active')) {
    closeFooter();
  } else {
    openFooter();
  }
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (!footer.contains(e.target) && reveal.classList.contains('active')) {
    closeFooter();
  }
});

// Close on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && reveal.classList.contains('active')) {
    closeFooter();
  }
});
