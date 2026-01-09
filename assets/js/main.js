/* ==============================
   Smooth Anchor Scroll
============================== */
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

/* ==============================
   Footer Contact Logic
============================== */
const contactBtn = document.getElementById('contactToggle');
const footer = document.querySelector('.site-footer');
const reveal = document.getElementById('contactReveal');
const footerCopy = document.getElementById('footerCopy');

function openFooter() {
  footer.classList.add('active');
  reveal.classList.add('active');
  contactBtn.classList.add('active');
  footerCopy.classList.add('hide');
  footerCopy.classList.remove('show');
  document.body.classList.add('footer-open');
}

function closeFooter() {
  footer.classList.remove('active');
  reveal.classList.remove('active');
  contactBtn.classList.remove('active');
  footerCopy.classList.remove('hide');
  footerCopy.classList.add('show');
  document.body.classList.remove('footer-open');
}

contactBtn.addEventListener('click', e => {
  e.stopPropagation();
  reveal.classList.contains('active') ? closeFooter() : openFooter();
});

footer.addEventListener('click', e => e.stopPropagation());

document.addEventListener('click', () => {
  if (reveal.classList.contains('active')) closeFooter();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && reveal.classList.contains('active')) {
    closeFooter();
  }
});
