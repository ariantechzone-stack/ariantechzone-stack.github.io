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

  contactBtn.addEventListener('click', () => {
    contactBtn.classList.toggle('active');
    footer.classList.toggle('active');
    reveal.classList.toggle('active');
  });

