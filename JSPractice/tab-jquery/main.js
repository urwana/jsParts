$(".js-tab-trigger").click(function() {
  var clickedTabIndex = $(".js-tab-trigger").index(this);
  $(".js-tab-trigger").removeClass("is-active");
  $(".js-tab-target").removeClass("is-active");
  $(this).addClass("is-active");
  $(".js-tab-target")
    .eq(clickedTabIndex)
    .addClass("is-active");
});

// .eq()メソッドは特定のインデックスの要素を取得するのに対して、
// .index()メソッドは指定された要素がコレクションの中で何番目にあるかを取得する。
// そのため、.index(clickedTabIndex)を使用すると、
// clickedTabIndex番目の要素が取得されるのではなく、
// clickedTabIndexが.js-tab-targetコレクションの中で何番目にあるかを返す。
// .eq(clickedTabIndex)を使用する方が意図した動作になる。
