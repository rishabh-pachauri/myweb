function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Clean up ".html" from URL (only when not on local files)
if (window.location.protocol !== "file:" && window.location.pathname.endsWith(".html")) {
  const cleanPath = window.location.pathname.replace(/\.html$/, "");
  window.history.replaceState(null, "", cleanPath + window.location.search + window.location.hash);
}
