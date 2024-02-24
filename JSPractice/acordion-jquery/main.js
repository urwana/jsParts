const accordionTitles = $(".js-AccordionTitle");
const accordionTitlesArray = Array.from(accordionTitles);

accordionTitlesArray.forEach((accordionTitle) => {
  $(accordionTitle).on("click", (e) => {
    $(accordionTitle).toggleClass("is-active");
    const nextAccordionContent = e.target.nextElementSibling;
    if (
      nextAccordionContent &&
      $(nextAccordionContent).hasClass("accordion-content")
    ) {
      // nextAccordionContent が存在し、かつ accordion-content クラスを持っている場合の処理
      $(nextAccordionContent).toggleClass("is-open");
    }
  });
});
