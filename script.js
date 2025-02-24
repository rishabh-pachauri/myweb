function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
if (window.location.pathname.endsWith(".html")) {
  window.history.replaceState(null, "", window.location.pathname.replace(".html", ""));
}
