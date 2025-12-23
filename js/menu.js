const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll("#navbar-links a");
const body = document.body;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
  body.classList.toggle("menu-open");
});

// Fechar menu ao clicar em um link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
    body.classList.remove("menu-open");
  });
});

// Fechar menu ao clicar fora dele
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
    body.classList.remove("menu-open");
  }
});
