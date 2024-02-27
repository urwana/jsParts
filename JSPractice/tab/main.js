const tabTriggers = document.querySelectorAll(".js-tab-trigger");
const tabTargets = document.querySelectorAll(".js-tab-target");

tabTriggers.forEach((tabTrigger) => {
  tabTrigger.addEventListener("click", (e) => {
    const clickedTabIndex = [...tabTriggers].indexOf(tabTrigger);
    tabTriggers.forEach((trigger) => trigger.classList.remove("is-active"));
    tabTargets.forEach((target) => target.classList.remove("is-active"));
    tabTrigger.classList.add("is-active");
    tabTargets[clickedTabIndex].classList.add("is-active");
  });
});
