const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const links = document.querySelectorAll(".nav-links a");

// Toggle menu burger
toggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Empêche la propagation du clic
  toggle.classList.toggle("active");
  navLinks.classList.toggle("open");
});

// Gestion des liens - sans empêcher la navigation
links.forEach((link) => {
  link.addEventListener("click", () => {
    toggle.classList.remove("active");
    navLinks.classList.remove("open");
  });
});

// Fermer le menu en cliquant ailleurs
document.addEventListener("click", (e) => {
  if (
    navLinks.classList.contains("open") &&
    !navLinks.contains(e.target) &&
    !toggle.contains(e.target)
  ) {
    toggle.classList.remove("active");
    navLinks.classList.remove("open");
  }
});
