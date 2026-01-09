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

document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.querySelector(".contact-btn");
  const footer = document.querySelector(".site-footer");
  const footerText = document.querySelector(".footer-copy-static");

  if (!contactBtn || !footer || !footerText) return;

  // Open contact
  contactBtn.addEventListener("click", () => {
    footer.classList.add("active");
    footerText.classList.remove("show");
    footerText.classList.add("hide");
  });

  // Close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      footer.classList.remove("active");
      footerText.classList.remove("hide");
      footerText.classList.add("show");
    }
  });
});
