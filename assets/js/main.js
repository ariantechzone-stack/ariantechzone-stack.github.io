
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
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

const contactBtn = document.getElementById('contactToggle');
const contactReveal = document.getElementById('contactReveal');

if (contactBtn && contactReveal) {
  contactBtn.addEventListener('click', () => {
    contactBtn.classList.add('hide');

    setTimeout(() => {
      contactReveal.classList.add('active');
    }, 200);
  });
}
