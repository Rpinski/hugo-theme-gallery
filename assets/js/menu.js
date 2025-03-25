const menuToggleOpen = document.getElementById("menu-toggle-open");
const menuToggleClose = document.getElementById("menu-toggle-close");
const header = document.getElementById("menu-header");

if (menuToggleOpen && header) {
  menuToggleOpen.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.getElementById("menu");
    target.classList.toggle("hidden");
    header.classList.toggle('expanded')
  });
}

if (menuToggleClose && header) {
  menuToggleClose.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.getElementById("menu");
    target.classList.toggle("hidden");
    header.classList.toggle('expanded')
  });
}

window.onload = function() {
  window.onscroll = function() {
      header.classList.toggle("scrolled", window.scrollY > 16);
  }
}