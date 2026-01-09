/* ================================
   Smooth Scroll for Anchor Links
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* ================================
   Footer Contact Reveal
================================ */
const contactBtn = document.getElementById('contactToggle');
const contactReveal = document.getElementById('contactReveal');

if (contactBtn && contactReveal) {
  contactBtn.addEventListener('click', () => {
    // Hide button
    contactBtn.classList.add('hide');

    // Reveal email + social icons
    setTimeout(() => {
      contactReveal.classList.add('active');
    }, 200);
  });
}
