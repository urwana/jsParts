const modalArea = document.getElementById('modalArea');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modalBg = document.getElementById('modalBg');
const toggle = [openModal,closeModal,modalBg];
//やっていることはjQuery版と一緒です。openModal,closeModal,modalBgにis-showをつけ外ししているだけです。

for (let i = 0; i<toggle.length ; i++){
//i=0の時openModal,i=1の時closeModal,i=2の時modalBgにクリックイベントがつきます。
//なのでわかりづらければfor文で回さず、一つ一つにクリックイベントつけてもいいです。
 toggle[i].addEventListener('click',function(){
   modalArea.classList.toggle('is-show');
 },false);
}