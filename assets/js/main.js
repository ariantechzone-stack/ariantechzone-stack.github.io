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
