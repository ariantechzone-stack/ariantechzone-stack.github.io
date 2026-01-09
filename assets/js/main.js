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
const contactBtn = document.getElementById('contactToggle');
const contactReveal = document.getElementById('contactReveal');
const footer = document.querySelector('.site-footer');

contactBtn.addEventListener('click', () => {
  footer.classList.toggle('active');
  contactReveal.classList.toggle('active');
  contactBtn.classList.toggle('active');
});

