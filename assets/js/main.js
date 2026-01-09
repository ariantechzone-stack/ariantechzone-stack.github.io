const contactBtn = document.querySelector('.contact-btn');
const footer = document.querySelector('.site-footer');
const reveal = document.querySelector('.contact-reveal');
const footerCopy = document.querySelector('.footer-copy-static');

function openFooter() {
  // Fade & slide out footer copy
  footerCopy.classList.add('hide');
  footerCopy.classList.remove('show');

  // Activate contact section + footer background + glow
  reveal.classList.add('active');
  footer.classList.add('active');
  contactBtn.classList.add('active');
  document.body.classList.add('footer-open');
}

function closeFooter() {
  // Fade & slide in footer copy
  footerCopy.classList.remove('hide');
  footerCopy.classList.add('show');

  // Deactivate contact section + footer background + glow
  reveal.classList.remove('active');
  footer.classList.remove('active');
  contactBtn.classList.remove('active');
  document.body.classList.remove('footer-open');
}

// Toggle footer on button click
contactBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent outside click trigger
  if (reveal.classList.contains('active')) {
    closeFooter();
  } else {
    openFooter();
  }
});

// Prevent clicks inside footer from closing
footer.addEventListener('click', (e) => e.stopPropagation());

// Close on outside click
document.addEventListener('click', () => {
  if (reveal.classList.contains('active')) closeFooter();
});

// Close on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && reveal.classList.contains('active')) closeFooter();
});
