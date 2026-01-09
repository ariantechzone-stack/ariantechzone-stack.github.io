document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Contact button toggle
  const contactBtn = document.getElementById('contactToggle');
  const contactReveal = document.getElementById('contactReveal');

  if (contactBtn && contactReveal) {
    contactBtn.addEventListener('click', () => {
      const isActive = contactReveal.classList.toggle('active');
      contactBtn.textContent = isActive ? "Close" : "Contact Me";
    });
  }
const contactBtn = document.querySelector('.contact-btn');
  const reveal = document.querySelector('.contact-reveal');
  const footer = document.querySelector('.site-footer');

  contactBtn.addEventListener('click', () => {
    reveal.classList.toggle('active');
    footer.classList.toggle('active');
  });
