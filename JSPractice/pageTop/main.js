const arrow = document.querySelector(".js-scroll-fadein");
const bodyHeight = document.body.scrollHeight;
const visiblePosition = (bodyHeight / 3) * 0.8;

const getScrolled = () => {
  return window.scrollY;
};

window.onscroll = () => {
  getScrolled() > visiblePosition
    ? arrow.classList.add("is-fadein")
    : arrow.classList.remove("is-fadein");
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

arrow.onclick = function() {
  scrollToTop();
};
