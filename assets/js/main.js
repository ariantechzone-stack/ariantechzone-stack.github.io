// Typing effect
const text = "Clean, modern visual design.";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.querySelector(".animated-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
window.onload = typeWriter;
