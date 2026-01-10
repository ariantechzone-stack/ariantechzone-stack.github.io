
const heroInner = document.querySelector('.hero-inner');

function addTilt(selector, strength = 18) {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / strength;
      const y = (e.clientY - r.top - r.height / 2) / strength;
      card.style.setProperty('--tilt-x', `${-y}deg`);
      card.style.setProperty('--tilt-y', `${x}deg`);
    });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--tilt-x', `0deg`);
      card.style.setProperty('--tilt-y', `0deg`);
    });
  });
}

addTilt('.project-card');
addTilt('.skill-card', 22);

if (heroInner) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        heroInner.style.transform = `translateY(${window.scrollY * 0.06}px)`;
        ticking = false;
      });
      ticking = true;
    }
  });
}
