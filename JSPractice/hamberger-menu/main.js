const humbergerButton = document.querySelector(".js-humbergerButton");
const globalMenu = document.querySelector(".js-globalMenu");
humbergerButton.addEventListener("click", function() {
  const currentStatus =
    this.getAttribute("aria-expanded") === "true" ? "false" : "true";
  this.setAttribute("aria-expanded", currentStatus);
  globalMenu.setAttribute(
    "aria-hidden",
    currentStatus === "true" ? "false" : "true"
  );
});
