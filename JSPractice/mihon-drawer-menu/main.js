const jsHamburger = document.getElementById("js-hamburger");
const body = document.body;
const spHeaderMenu = document.getElementById("js-global-menu");
const drawerBackground = document.getElementById("js-drawer-background");

jsHamburger.addEventListener("click", function() {
  body.classList.toggle("is-drawerActive");
  if (this.getAttribute("aria-expanded") == "false") {
    this.setAttribute("aria-expanded", "true");
    spHeaderMenu.setAttribute("aria-hidden", "false");
  } else {
    this.setAttribute("aria-expanded", "false");
    spHeaderMenu.setAttribute("aria-hidden", "true");
  }
});
drawerBackground.addEventListener("click", () => {
  body.classList.remove("is-drawerActive");
  jsHamburger.setAttribute("aria-expanded", "false");
  spHeaderMenu.setAttribute("aria-hidden", "true");
});
