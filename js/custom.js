if (jQuery('#pp_page_title_img_blur').val() != '') {
  (function () {
    jQuery(window).scroll(function () {
      var oVal;
      oVal = jQuery(window).scrollTop() / 400;
      if (oVal > 1) {
        oVal = 1;
      }

      return jQuery("#bg_blurred").css("opacity", oVal);
    });

  }).call(this);
}

jQuery(document).ready(function () {
  "use strict";

  jQuery(document).setNav();

  jQuery(window).resize(function () {
    jQuery(document).setNav();
  });

  if (jQuery('#tg_lightbox_enable').val() != '') {
    jQuery(document).setLightbox();
  }

  jQuery('#menu_expand_wrapper a').on('click', function () {
    jQuery('#menu_wrapper').fadeIn();
    jQuery('#custom_logo').animate({
      'left': '15px',
      'opacity': 1
    }, 400);
    jQuery('#menu_close').animate({
      'left': '-10px',
      'opacity': 1
    }, 400);
    jQuery(this).animate({
      'left': '-60px',
      'opacity': 0
    }, 400);
    jQuery('#menu_border_wrapper select').animate({
      'left': '0',
      'opacity': 1
    }, 400).fadeIn();
  });

  jQuery('#menu_close').on('click', function () {
    jQuery('#custom_logo').animate({
      'left': '-200px',
      'opacity': 0
    }, 400);
    jQuery(this).stop().animate({
      'left': '-200px',
      'opacity': 0
    }, 400);
    jQuery('#menu_expand_wrapper a').animate({
      'left': '20px',
      'opacity': 1
    }, 400);
    jQuery('#menu_border_wrapper select').animate({
      'left': '-200px',
      'opacity': 0
    }, 400).fadeOut();
    jQuery('#menu_wrapper').fadeOut();
  });

  // cache jQuery window
  var $window = jQuery(window);

  jQuery(window).resize(function () {
    if (jQuery(this).width() < 768) {
      jQuery('#menu_expand_wrapper a').trigger('click');
    }
  });

  var isDisableRightClick = jQuery('#pp_enable_right_click').val();

  if (isDisableRightClick != '') {
    jQuery(this).bind("contextmenu", function (e) {
      e.preventDefault();
    });
  }

  //Add to top button when scrolling
  jQuery(window).scroll(function () {
    var calScreenWidth = jQuery(window).width();

    if (jQuery(this).scrollTop() > 200) {
      jQuery('#toTop').stop().css({
        opacity: 0.5,
        "visibility": "visible"
      }).animate({
        "visibility": "visible"
      }, {
        duration: 1000,
        easing: "easeOutExpo"
      });
    } else if (jQuery(this).scrollTop() == 0) {
      jQuery('#toTop').stop().css({
        opacity: 0,
        "visibility": "hidden"
      }).animate({
        "visibility": "hidden"
      }, {
        duration: 1500,
        easing: "easeOutExpo"
      });
    }
  });

  jQuery('#toTop, .hr_totop').on('click', function () {
    jQuery('body,html').animate({
      scrollTop: 0
    }, 800);
  });

  var isDisableDragging = jQuery('#pp_enable_dragging').val();

  if (isDisableDragging != '') {
    jQuery("img").mousedown(function () {
      return false;
    });
  }

  if (jQuery('#pp_topbar').val() == 0) {
    var topBarHeight = jQuery('.header_style_wrapper').height();
  } else {
    var topBarHeight = parseInt(jQuery('.header_style_wrapper').height() - jQuery('.header_style_wrapper .above_top_bar').height());
  }

  var logoHeight = jQuery('#custom_logo img').height();
  var logoTransHeight = jQuery('#custom_logo_transparent img').height();
  var logoMargin = parseInt(jQuery('#custom_logo').css('marginTop'));
  var logoTransMargin = parseInt(jQuery('#custom_logo_transparent').css('marginTop'));
  var menuPaddingTop = parseInt(jQuery('#menu_wrapper div .nav li > a').css('paddingTop'));
  var menuPaddingBottom = parseInt(jQuery('#menu_wrapper div .nav li > a').css('paddingBottom'));
  var SearchPaddingTop = parseInt(jQuery('.top_bar #searchform button').css('paddingTop'));
  var menuLayout = jQuery('#pp_menu_layout').val();

  if (menuLayout != 'leftmenu' || jQuery(window).width() <= 768) {
    jQuery('#wrapper').css('paddingTop', parseInt(jQuery('.header_style_wrapper').height()) + 'px');
    jQuery('#page_caption .bg_frame_split').css('bottom', parseInt(jQuery('.header_style_wrapper').height() - 20) + 'px');
  }

  jQuery(window).resize(function () {
    if (jQuery(this).width() > 768) {
      if (menuLayout != 'leftmenu') {
        var resizedTopBarHeight = jQuery('.top_bar').height();
        jQuery('#wrapper').css('paddingTop', resizedTopBarHeight + 'px');

        if (jQuery('#wpadminbar').height() > 0) {
          jQuery('#page_content_wrapper.split, .page_content_wrapper.split').css('top', parseInt(resizedTopBarHeight + jQuery('#wpadminbar').height()) + 'px');
          jQuery('#page_caption.split').css('top', parseInt(resizedTopBarHeight + jQuery('#wpadminbar').height()) + 'px');
        } else {
          jQuery('#page_content_wrapper.split, .page_content_wrapper.split').css('top', parseInt(resizedTopBarHeight) + 'px');
          jQuery('#page_caption.split').css('top', parseInt(resizedTopBarHeight) + 'px');
        }

        jQuery('.logo_wrapper').css('marginTop', '');
        jQuery('.top_bar #searchform button').css('paddingTop', '');
      } else {
        jQuery('#wrapper').css('paddingTop', 0);
      }
    } else {
      jQuery('#wrapper').css('paddingTop', parseInt(jQuery('.header_style_wrapper').height()) + 'px');
    }

    jQuery('#page_caption.split').css('height', jQuery(window).height() + 'px');
  });

  if (menuLayout != 'leftmenu' || jQuery(window).width() <= 960) {
    if (jQuery('#wpadminbar').height() > 0) {
      jQuery('#page_content_wrapper.split, .page_content_wrapper.split').css('top', parseInt(topBarHeight + jQuery('#wpadminbar').height()) + 'px');
      jQuery('#page_caption.split').css('top', parseInt(topBarHeight + jQuery('#wpadminbar').height()) + 'px');
      jQuery('#page_content_wrapper.split, .page_content_wrapper.split').css('paddingBottom', parseInt(topBarHeight + jQuery('#wpadminbar').height()) + 'px');
    } else {
      jQuery('#page_content_wrapper.split, .page_content_wrapper.split').css('top', parseInt(topBarHeight) + 'px');
      jQuery('#page_caption.split').css('top', parseInt(topBarHeight) + 'px');
      jQuery('#page_content_wrapper.split, .page_content_wrapper.split').css('paddingBottom', parseInt(topBarHeight) + 'px');
    }

    jQuery(window).scroll(function () {
      if (jQuery('#pp_fixed_menu').val() == 1 && jQuery('html').data('style') != 'fullscreen') {
        if (jQuery(this).scrollTop() >= 200) {
          jQuery('.header_style_wrapper .above_top_bar').hide();
          jQuery('.extend_top_contact_info').hide();

          jQuery('.header_style_wrapper').addClass('scroll');
          jQuery('.top_bar').addClass('scroll');
          jQuery('.top_bar').addClass(jQuery('#tg_fixed_menu_color').val());

          if (jQuery('.top_bar').hasClass('hasbg')) {
            jQuery('.top_bar').removeClass('hasbg');
            jQuery('.top_bar').data('hasbg', 1);

            jQuery('#custom_logo').removeClass('hidden');
            jQuery('#custom_logo_transparent').addClass('hidden');
          }

          if (jQuery('#tg_fixed_menu_color').val() == 'dark') {
            jQuery('#custom_logo').addClass('hidden');
            jQuery('#custom_logo_transparent').removeClass('hidden');
          }

          if (jQuery(window).width() > 960) {
            jQuery('#mobile_nav_icon').hide();
          }
        } else if (jQuery(this).scrollTop() < 200) {
          jQuery('.header_style_wrapper .above_top_bar').show();
          jQuery('.extend_top_contact_info').show();

          jQuery('#custom_logo img').removeClass('zoom');
          jQuery('#custom_logo img').css('maxHeight', '');
          jQuery('#custom_logo_transparent img').removeClass('zoom');

          jQuery('#custom_logo').css('marginTop', parseInt(logoMargin) + 'px');
          jQuery('#custom_logo_transparent').css('marginTop', parseInt(logoTransMargin) + 'px');

          jQuery('#menu_wrapper div .nav > li > a').css('paddingTop', menuPaddingTop + 'px');
          jQuery('#menu_wrapper div .nav > li > a').css('paddingBottom', menuPaddingBottom + 'px');;

          if (jQuery('.top_bar').data('hasbg') == 1) {
            jQuery('.top_bar').addClass('hasbg');
            jQuery('#custom_logo').addClass('hidden');
            jQuery('#custom_logo_transparent').removeClass('hidden');
          }

          if (jQuery('#tg_fixed_menu_color').val() == 'dark') {
            if (jQuery('.top_bar').data('hasbg') == 1) {
              jQuery('#custom_logo').addClass('hidden');
              jQuery('#custom_logo_transparent').removeClass('hidden');
            } else {
              jQuery('#custom_logo').removeClass('hidden');
              jQuery('#custom_logo_transparent').addClass('hidden');
            }
          }

          jQuery('.header_style_wrapper').removeClass('scroll');
          jQuery('.top_bar').removeClass('scroll');
          jQuery('.top_bar').removeClass(jQuery('#tg_fixed_menu_color').val());
          jQuery('#mobile_nav_icon').show();
        }
      } else {
        if (jQuery(this).scrollTop() >= 200) {
          jQuery('.header_style_wrapper').addClass('nofixed');
        } else {
          jQuery('.header_style_wrapper').removeClass('nofixed');
        }
      }
    });
  } //If not left menu layout

  jQuery('.post_img img').imagesLoaded().always(function (instance) {
    setTimeout(function () {
      jQuery(this).parent('.post_img').addClass('fadeIn');
    }, 500);
  });

  jQuery(document).mouseenter(function () {
    jQuery('body').addClass('hover');
  });

  jQuery(document).mouseleave(function () {
    jQuery('body').removeClass('hover');
  });

  var siteBaseURL = jQuery('#pp_homepage_url').val();
  if (jQuery('#photography_ajax_search').val() != '') {
    jQuery('#s').on('input', function () {
      jQuery.ajax({
        url: siteBaseURL + "/wp-admin/admin-ajax.php",
        type: 'POST',
        data: 'action=photography_ajax_search&s=' + jQuery('#s').val(),
        success: function (results) {
          jQuery("#autocomplete").html(results);

          if (results != '') {
            jQuery("#autocomplete").addClass('visible');
            jQuery("#autocomplete").show();
            jQuery("body.js_nav .mobile_menu_wrapper").css('overflow', 'visible');
          } else {
            jQuery("#autocomplete").hide();
            jQuery("body.js_nav .mobile_menu_wrapper").css('overflow', 'scroll');
          }
        }
      })
    });

    jQuery("#s").keypress(function (event) {
      if (event.which == 13) {
        event.preventDefault();
        jQuery("form#searchform").submit();
      }
    });

    jQuery('#s').focus(function () {
      if (jQuery('#autocomplete').html() != '') {
        jQuery("#autocomplete").addClass('visible');
        jQuery("#autocomplete").fadeIn();
      }
    });

    jQuery('#s').blur(function () {
      jQuery("#autocomplete").fadeOut();
    });
  }

  var windowWidth = jQuery(window).width();

  if (windowWidth >= 960) {
    jQuery('.animated').waypoint(function (direction) {
      var animationClass = jQuery(this).data('animation');

      jQuery(this).addClass(animationClass, direction === 'down');

    }, {
      offset: '100%'
    });
  }

  jQuery('#post_more_close').on('click', function () {
    jQuery('#post_more_wrapper').animate({
      right: '-380px'
    }, 300);

    return false;
  });

  jQuery('#mobile_nav_icon').on('click', function () {
    jQuery('body,html').animate({
      scrollTop: 0
    }, 100);
    jQuery('body').toggleClass('js_nav');
    jQuery('#close_mobile_menu').addClass('open');

    if (is_touch_device()) {
      jQuery('body.js_nav').css('overflow', 'auto');
    }
  });

  jQuery('#close_mobile_menu').on('click', function () {
    jQuery('body').removeClass('js_nav');
    jQuery(this).removeClass('open');
  });

  jQuery('.mobile_menu_close a').on('click', function () {
    jQuery('body').removeClass('js_nav');
  });

  jQuery('.close_alert').on('click', function () {
    var target = jQuery(this).data('target');
    jQuery('#' + target).fadeOut();
  });

  jQuery('.progress_bar').waypoint(function (direction) {
    jQuery(this).addClass('fadeIn');
    var progressContent = jQuery(this).children('.progress_bar_holder').children('.progress_bar_content');
    var progressWidth = progressContent.data('score');

    progressContent.css({
      'width': progressWidth + '%'
    });
  }, {
    offset: '100%'
  });

  jQuery('.tooltip').tooltipster();
  jQuery('.demotip').tooltipster({
    position: 'left'
  });

  jQuery('.portfolio_prev_next_link').each(function () {
    jQuery(this).tooltipster({
      content: jQuery('<img src="' + jQuery(this).attr('data-img') + '" /><br/><div style="text-align:center;margin:7px 0 5px 0;"><strong>' + jQuery(this).attr('data-title') + '</strong></div>')
    });
  });

  jQuery('.post_prev_next_link').each(function () {
    jQuery(this).tooltipster({
      content: jQuery('<img src="' + jQuery(this).attr('data-img') + '" />')
    });
  });

  jQuery('.post_share').on('click', function () {
    var targetShareID = jQuery(this).attr('data-share');
    var targetParentID = jQuery(this).attr('data-parent');

    jQuery(this).toggleClass('visible');
    jQuery('#' + targetShareID).toggleClass('slideUp');
    jQuery('#' + targetParentID).toggleClass('sharing');

    return false;
  });


  if (jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').length > 0) {
    var sliderHeight = jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').height();
    var topBarHeight = jQuery('.top_bar').height();

    if (jQuery('.above_top_bar').length > 0) {
      topBarHeight += jQuery('.above_top_bar').height();
    }

    if (jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper.fullscreen-container').length > 0) {
      var topBarHeight = 55;
    }

    jQuery('.ppb_wrapper').css('marginTop', sliderHeight - topBarHeight + 'px');
    jQuery('#page_content_wrapper').css('marginTop', sliderHeight - topBarHeight + 'px');
  }

  jQuery(window).resize(function () {
    if (jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').length > 0) {
      var sliderHeight = jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').height();
      var topBarHeight = jQuery('.top_bar').height();

      if (jQuery('.above_top_bar').length > 0) {
        topBarHeight += jQuery('.above_top_bar').height();
      }

      if (jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper.fullscreen-container').length > 0) {
        var topBarHeight = 55;
      }

      jQuery('.ppb_wrapper').css('marginTop', sliderHeight - topBarHeight + 'px');
      jQuery('#page_content_wrapper').css('marginTop', sliderHeight - topBarHeight + 'px');
    }
  });

  jQuery('.skin_box').on('click', function () {
    jQuery('.skin_box').removeClass('selected');
    jQuery(this).addClass('selected');
    jQuery('#skin').val(jQuery(this).attr('data-color'));
  });

  jQuery('#demo_apply').on('click', function () {
    jQuery('#ajax_loading').addClass('visible');
    jQuery('body').addClass('loading');
    jQuery("form#form_option").submit();
  });

  jQuery('#option_wrapper').mouseenter(function () {
    jQuery('body').addClass('overflow_hidden');
  });

  jQuery('#option_wrapper').mouseleave(function () {
    jQuery('body').removeClass('overflow_hidden');
  });

  jQuery('.animate').waypoint(function (direction) {
    var windowWidth = jQuery(window).width();

    jQuery(this).addClass('visible', direction === 'down');

  }, {
    offset: '80%'
  });

  if (jQuery.browser.msie && parseFloat(jQuery.browser.version) < 10) {
    jQuery('.animate').css('opacity', 1);
    jQuery('.animate').css('visibility', 'visible');

    jQuery('.animated').each(function () {
      jQuery(this).css('opacity', 1);
      jQuery(this).css('visibility', 'visible');
    });
  }

  function launchFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }

  function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }

  jQuery('#page_maximize').click(function () {
    launchFullscreen(document.documentElement);
    jQuery(this).hide();
    jQuery('#page_minimize').show();
  });

  jQuery('#page_minimize').click(function () {
    exitFullscreen();
    jQuery('#page_maximize').show();
    jQuery(this).hide();
  });

  jQuery('#page_share').click(function () {
    jQuery('#overlay_background').addClass('visible');
    jQuery('#overlay_background').addClass('share_open');
    jQuery('#fullscreen_share_wrapper').css('visibility', 'visible');
  });

  jQuery('#overlay_background').click(function () {
    if (!jQuery('body').hasClass('js_nav')) {
      jQuery('#overlay_background').removeClass('visible');
      jQuery('#overlay_background').removeClass('share_open');
      jQuery('#fullscreen_share_wrapper').css('visibility', 'hidden');
    }
  });

  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || is_touch_device() || jQuery('#tg_live_builder').val() == 1) {
    jQuery('.parallax').each(function () {
      var dataImgURL = jQuery(this).data('image');
      if (jQuery.type(dataImgURL) != "undefined") {
        jQuery(this).css('background-image', 'url(' + dataImgURL + ')');
        jQuery(this).css('background-size', 'cover');
        jQuery(this).css('background-position', 'center center');
      }
    });
  } else {
    jQuery('.parallax').parallax();

    jQuery(window).resize(function () {
      jQuery('.parallax').each(function () {
        var parallaxHeight = jQuery(this).data('content-height');
        parallaxHeight = parseInt((parallaxHeight / 100) * jQuery(window).height());

        jQuery(this).css('height', parallaxHeight + 'px');
      });

      jQuery(window).trigger('hwparallax.reconfigure');
    });
  }

  var menuLayout = jQuery('#pp_menu_layout').val();

  if (jQuery(window).width() < 960 && menuLayout == 'leftmenu') {
    document.getElementById("photography-leftmenu-css").disabled = true;
    jQuery('.mobile_menu_wrapper .logo_container').hide();
  }

  jQuery(window).resize(function () {
    if (jQuery(window).width() >= 960 && menuLayout == 'leftmenu') {
      document.getElementById("photography-leftmenu-css").disabled = false;
      jQuery('.mobile_menu_wrapper .logo_container').show();
    } else if (jQuery(window).width() < 960 && menuLayout == 'leftmenu') {
      document.getElementById("photography-leftmenu-css").disabled = true;
      jQuery('.mobile_menu_wrapper .logo_container').hide();
    }
  });

  jQuery('.rev_slider_wrapper.fullscreen-container').each(function () {
    jQuery(this).append('<div class="icon-scroll"></div>');
  });

  if (jQuery('.one.fullwidth.slideronly').length > 0) {
    jQuery('body').addClass('overflow_hidden');
  }

  if (jQuery('#tg_sidebar_sticky').val() == 1) {
    if (jQuery('#pp_fixed_menu').val() == 1) {
      jQuery("#page_content_wrapper .sidebar_wrapper").stick_in_parent({
        offset_top: 100
      });
      jQuery(".page_content_wrapper .sidebar_wrapper").stick_in_parent({
        offset_top: 100
      });
    } else {
      jQuery("#page_content_wrapper .sidebar_wrapper").stick_in_parent();
      jQuery(".page_content_wrapper .sidebar_wrapper").stick_in_parent();
    }

    if (jQuery(window).width() < 768 || is_touch_device()) {
      jQuery("#page_content_wrapper .sidebar_wrapper").trigger("sticky_kit:detach");
      jQuery(".page_content_wrapper .sidebar_wrapper").trigger("sticky_kit:detach");
    }

    jQuery(window).resize(function () {
      if (jQuery(window).width() < 768 || is_touch_device()) {
        jQuery("#page_content_wrapper .sidebar_wrapper").trigger("sticky_kit:detach");
        jQuery(".page_content_wrapper .sidebar_wrapper").trigger("sticky_kit:detach");
      } else {
        if (jQuery('#pp_fixed_menu').val() == 1) {
          jQuery("#page_content_wrapper .sidebar_wrapper").stick_in_parent({
            offset_top: 100
          });
          jQuery(".page_content_wrapper .sidebar_wrapper").stick_in_parent({
            offset_top: 100
          });
        } else {
          jQuery("#page_content_wrapper .sidebar_wrapper").stick_in_parent();
          jQuery(".page_content_wrapper .sidebar_wrapper").stick_in_parent();
        }
      }
    });
  }
});

jQuery(window).on('resize load', adjustIframes);
