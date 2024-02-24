const accordionTitles = document.querySelectorAll(".js-AccordionTitle");

accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener("click", (e) => {
    accordionTitle.classList.toggle("is-active");
    const nextAccordionContent = e.target.nextElementSibling;
    if (
      nextAccordionContent &&
      nextAccordionContent.classList.contains("accordion-content")
    ) {
      // nextAccordionContent が存在し、かつ accordion-content クラスを持っている場合の処理
      nextAccordionContent.classList.toggle("is-open");
    }
  });
});
