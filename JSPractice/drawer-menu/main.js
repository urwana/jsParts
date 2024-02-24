const hamburgerButton = document.querySelector(".js-hamburgerButton");
const spHeaderMenu = document.querySelector(".js-globalMenu");
const drawerBackground = document.querySelector(".js-drawer-background");

hamburgerButton.addEventListener("click", function() {
  this.classList.toggle("is-active");
  spHeaderMenu.classList.toggle("is-active");
  drawerBackground.classList.toggle("is-active");
});
drawerBackground.addEventListener("click", () => {
  this.classList.remove("is-active");
  spHeaderMenu.classList.remove("is-active");
});
