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

const footer = document.getElementById("contact");
const toggleBtn = document.getElementById("contactToggle");
const footerCopy = document.getElementById("footerCopy");

function openFooter() {
  footer.classList.add("active");
  document.body.classList.add("footer-open");
  footerCopy.classList.remove("show");
  footerCopy.classList.add("hide");
}

function closeFooter() {
  footer.classList.remove("active");
  document.body.classList.remove("footer-open");
  footerCopy.classList.remove("hide");
  footerCopy.classList.add("show");
}

toggleBtn.addEventListener("click", () => {
  footer.classList.contains("active") ? closeFooter() : openFooter();
});

/* ESC key close */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && footer.classList.contains("active")) {
    closeFooter();
  }
});

/* Outside click close */
document.body.addEventListener("click", (e) => {
  if (
    footer.classList.contains("active") &&
    !footer.contains(e.target) &&
    !toggleBtn.contains(e.target)
  ) {
    closeFooter();
  }
});

