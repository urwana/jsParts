document.addEventListener('DOMContentLoaded', () => {
    const modalArea = document.querySelector('.js_modalArea');
    const modalOpenButton = document.querySelector('.js_modalButton');
    const modalCloseButton = document.querySelector('.js_closeModalButton');
    const modalBackground = document.querySelector('.js_modalBackground');

    const toggle = [modalOpenButton, modalCloseButton, modalBackground];
    toggle.forEach((element, i) => {
        element.addEventListener('click', () => {
            console.log('click!');
            modalArea.classList.toggle('is-show');
        }, false);
    });
});


// toggleメソッドは、ECMAScript 2015（通称ES6）で導入され、
// classListオブジェクト自体はES5で導入された。
// つまり、classListはES5から使用できるが、toggleメソッドはES6から使用できる。

// `addEventListener`メソッドの最後の引数である`false`は、
// イベントのキャプチャリングまたはバブリングフェーズでのイベントの処理方法を指定するためのオプション。

// `false`を指定すると、イベントはバブリングフェーズで処理される。

// `true`を指定すると、イベントはキャプチャリングフェーズで処理される、
// 親要素から対象要素に向かってイベントが伝播する。

// キャプチャリングフェーズ：ルート要素から始まり、親から子へと伝播
// ターゲットフェーズ：対象要素でのイベント処理
// バブリングフェーズ：対象要素から始まり、親要素へと伝播

// window.addEventListener('load', () => {
//     const modalOpenButton = document.querySelector('.js_modalButton');
//     modalOpenButton.addEventListener('click', () => {
//         console.log('modalButton!');
//         const modalArea = document.querySelector('.js_modalArea');
//         modalArea.classList.add('is-show');
//     });
//     const modalCloseButton = document.querySelector('.js_closeModalButton');
//     modalCloseButton.addEventListener('click', () => {
//         console.log('closeButton!');
//         const modalArea = document.querySelector('.js_modalArea');
//         modalArea.classList.remove('is-show');
//     });
// });