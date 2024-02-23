const arrow = $(".js-scroll-fadein");

const bodyHeight = document.body.scrollHeight;
const visiblePosition = (bodyHeight / 3) * 0.8;

$(window).scroll(function() {
  if ($(this).scrollTop() > visiblePosition) {
    //100pxスクロールしたら表示
    arrow.addClass("is-fadein");
  } else {
    arrow.removeClass("is-fadein");
  }
});

arrow.on("click", function() {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false; // aタグのhref="#"を無効化
});
