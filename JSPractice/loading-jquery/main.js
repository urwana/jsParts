const loaderAction = () => {
  $(".loadingWrap").addClass("diappear");
  setTimeout(() => {
    $(".loadingWrap").css("display", "none");
  }, 1000);
};

$(window).on("load", () => {
  loaderAction();
});
