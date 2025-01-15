const el = document.getElementById("menu-toggle");
const header = document.getElementById("menu-header");

if (el && header) {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.getElementById("menu");
    el.ariaExpanded = target.classList.contains("hidden");
    target.classList.toggle("hidden");
    header.classList.toggle('expanded')
  });
}

window.onload = function() {
  window.onscroll = function() {
      header.classList.toggle("scrolled", window.scrollY > 32);
  }
}