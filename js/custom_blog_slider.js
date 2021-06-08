jQuery(document).ready(function () {
  jQuery('.slider_wrapper').flexslider({
    animation: "slide",
    animationLoop: true,
    itemMargin: 0,
    minItems: 1,
    maxItems: 1,
    controlNav: false,
    smoothHeight: false,
    slideshow: 0,
    animationSpeed: 1000,
    move: 1
  });
});
