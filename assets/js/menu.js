const menu = document.getElementById("menu");
const menuToggleOpen = document.getElementById("menu-toggle-open");
const menuToggleClose = document.getElementById("menu-toggle-close");
const header = document.getElementById("menu-header");

if (menu && menuToggleOpen && header) {
  menuToggleOpen.addEventListener("click", (event) => {
    event.preventDefault();
    menu.classList.toggle("hidden");
    header.classList.toggle('expanded')
  });
}

if (menu && menuToggleClose && header) {
  menuToggleClose.addEventListener("click", (event) => {
    event.preventDefault();
    menu.classList.toggle("hidden");
    header.classList.toggle('expanded')
  });
}

window.onload = function() {
  window.onscroll = function() {
      header.classList.toggle("scrolled", window.scrollY > 16);
  }

  document.addEventListener('mousedown', (event) => {
    if (menu && menuToggleOpen && header && !menu.classList.contains("hidden") && !menu.contains(event.target)) {
      menu.classList.add("hidden");
      header.classList.remove('expanded')
    }
  });
}