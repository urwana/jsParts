$(function() {
  //is-showクラスのつけ外しだけでモーダル表示非表示できるようにしています
  //アニメーションはcss側に記載しています
  $(".js_openModalButton").on("click", function() {
    $(".js_modalArea").toggleClass("is-show");
  });
  $(".js_closeModalButton").on("click", function() {
    $(".js_modalArea").toggleClass("is-show");
  });
  $(".js_modalBackground").on("click", function() {
    $(".js_modalArea").toggleClass("is-show");
  });
});
