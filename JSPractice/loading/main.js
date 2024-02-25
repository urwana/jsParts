const loaderAction = () => {
  const loadingWrap = document.querySelector(".loadingWrap");
  loadingWrap.classList.add("diappear");
  setTimeout(() => {
    loadingWrap.computedStyleMap.diplay = "none";
  }, 100);
};

window.addEventListener("load", () => {
  loaderAction();
});
