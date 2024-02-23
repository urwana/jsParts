//トップに戻るボタンの要素を取得
const topButton = document.getElementById("js-scroll-fadein");

function getScrolled() {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : document.documentElement.scrollTop;
}
//ボタンの表示・非表示
window.onscroll = function() {
  getScrolled() > 500
    ? topButton.classList.add("is-fadein")
    : topButton.classList.remove("is-fadein");
};

//トップに移動する関数
function scrollToTop() {
  //scrollToは指定先にスクロールするメソッド
  window.scrollTo({
    top: 0,
    behavior: "smooth", //JSでもスムースに移動する神オプション
  });
}

//イベント登録
topButton.onclick = function() {
  scrollToTop();
};
