$(".js-hamburgerButton").click(function() {
  console.log("hamburgerButton clicked");
  $(this).toggleClass("is-active");
  $(".js-globalMenu").toggleClass("is-active");
  $(".js-drawer-background").toggleClass("is-active");
});

$(".js-drawer-background").click(function() {
  $(".js-hamburgerButton").removeClass("is-active");
  $(".js-globalMenu").removeClass("is-active");
  $(".js-drawer-background").removeClass("is-active");
});
