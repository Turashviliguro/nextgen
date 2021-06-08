jQuery(document).ready(function () {
  jQuery('#blog_grid_wrapper').imagesLoaded().always(function (instance) {
    setTimeout(function () {
      jQuery('#blog_grid_wrapper').masonry({
        itemSelector: '.post',
        columnWidth: '.post',
        gutter: 30,
        percentPosition: true,
        transitionDuration: 0,
      });

      jQuery('#blog_grid_wrapper').children('.post').each(function () {
        jQuery(this).addClass('fade-in');
      });
    }, 500);
  });

  jQuery('.blog_grid_wrapper').each(function () {
    jQuery('.blog_grid_wrapper').imagesLoaded().always(function (instance) {
      setTimeout(function () {
        jQuery('.blog_grid_wrapper').masonry({
          itemSelector: '.post',
          columnWidth: '.post',
          gutter: 30,
          percentPosition: true,
          transitionDuration: 0,
        });

        jQuery('.blog_grid_wrapper').children('.post').each(function () {
          jQuery(this).addClass('fade-in');
        });
      }, 500);
    });
  });
});
