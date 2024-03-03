const hamburgerButton = document.querySelector(".js_hamburgerButton");
const globalNavigation = document.querySelector(".js_globalNavigation");
const circleBg = document.querySelector(".circle-bg");
const globalNavigationLinkAll = document.querySelectorAll(
  ".js_globalNavigation a"
);

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("active");
  globalNavigation.classList.toggle("active");
  circleBg.classList.toggle("active");
});

globalNavigationLinkAll.forEach((globalNavigationLink) => {
  globalNavigationLink.addEventListener("click", () => {
    hamburgerButton.classList.remove("active");
    globalNavigation.classList.remove("active");
    circleBg.classList.remove("active");
  });
});

// $(".hamburgerButton").click(function() {
//   $(this).toggleClass("active");
//   $(".js_globalNavigation").toggleClass("active");
//   $(".circle-bg").toggleClass("active");
// });

// $(".js_globalNavigation a").click(function() {
//   $(".hamburgerButton").removeClass("active");
//   $(".js_globalNavigation").removeClass("active");
//   $(".circle-bg").removeClass("active");
// });
