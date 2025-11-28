$(document).ready(function () {
  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});

jQuery("#carousel").owlCarousel({
  autoplay: true,
  rewind: false,
  margin: 20,
  loop: true,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: { items: 1 },
    768: { items: 2 },
    992: { items: 3 },
  },
});

document
  .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
  .forEach((faqItem) => {
    faqItem.addEventListener("click", () => {
      faqItem.parentNode.classList.toggle("faq-active");
    });
  });
