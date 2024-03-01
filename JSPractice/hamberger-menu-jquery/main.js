$(".js-humbergerButton").click(function() {
  var currentStatus =
    $(this).attr("aria-expanded") === "true" ? "false" : "true";
  $(this).attr("aria-expanded", currentStatus);
  $(".js-globalMenu").attr(
    "aria-hidden",
    currentStatus === "true" ? "false" : "true"
  );
});
