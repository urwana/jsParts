window.addEventListener("DOMContentLoaded", () => {
  const arrow = document.querySelector(".js-scroll-fadein");
  const bodyHeight = document.body.scrollHeight;
  const visiblePosition = (bodyHeight / 3) * 0.8;

  window.addEventListener("scroll", () => {
    if (window.scrollY > visiblePosition) {
      arrow.classList.add("is-fadein");
    } else {
      arrow.classList.remove("is-fadein");
    }
  });

  document.querySelector(".js-scroll-fadein").addEventListener("click", () => {
    console.log("click!!!");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
});

// main.js を defer 付きの script タグで読み込む、
// あるいは、defer の無い script タグを読み込む場合は、main.js 内で、window.addEventListener("DOMContentLoaded" を宣言する
// ２通りの方法がある

//推奨される方法は、一般的には defer 属性を付与したスクリプトの使用.

// window.onscroll は単一のイベントハンドラを設定するシンプルな方法であり、
// addEventListener("scroll", ...) はより柔軟で、複数のイベントハンドラを追加できる方法です。
// また、後者はイベントリスナーを追加する場所を明示的に指定することができます。

// window.onscroll は、window オブジェクトに直接 onscroll プロパティを設定する
// 一方、window.addEventListener("scroll", ...) は、
// addEventListener メソッドを使用して
// scroll イベントに対してリスナーを追加する方法。
// window.onscroll はシンプルである反面、他のスクリプトが同じプロパティを上書きしてしまう可能性がある。
// 一方、window.addEventListener("scroll", ...) は他のスクリプトのプロパティの上書きの心配が無く、
// 多様な対応ができる反面、removeEventListener を使用しないと、イベントリスナーがメモリに残り続け、
// 不要なリソース消費や意図しない挙動を引き起こす可能性がある

// JavaScriptで利用可能なスクロール関連のメソッド。

// 🔷 scrollTo(x, y): 指定した座標(x, y)までスクロールします。

// 🔷 window.scrollTo(0, 100); // (0, 100)の位置までスクロール
// scrollBy(x, y): 現在のスクロール位置から指定した量(x, y)だけスクロールします。

// 🔷 window.scrollBy(0, 100); // 現在の位置から下に100pxスクロール
// scrollIntoView(options): 要素を表示できるようにスクロールします。オプションを指定することもできます。
// element.scrollIntoView({ behavior: 'smooth', block: 'center' }); // 要素が中央に来るようにスクロール（スムーススクロール）

// 🔷 scrollTo(options): ScrollOptionsを使って指定された位置にスクロールします。
// window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); // 左上にスムーススクロール

// 🔷 scrollBy(options): ScrollOptionsを使って現在のスクロール位置から指定された量だけスクロールします。
// window.scrollBy({ top: 100, left: 0, behavior: 'smooth' }); // 現在の位置から下に100pxスムーススクロール

// 🔷 scrollTop はJavaScriptではDOM要素のプロパティとして提供されており、
// 特定の要素のスクロール位置を取得または設定するために使用される。

// 要素の scrollTop を取得する
// var scrollTopValue = document.getElementById('targetElement').scrollTop;

// 要素の scrollTop を設定する
// document.getElementById('targetElement').scrollTop = 100; // 100pxの位置にスクロール
