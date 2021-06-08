jQuery(document).ready(function () {
  "use strict";

  jQuery('.ppb_live_edit_wrapper .ppb_live_action a.ppb_add_after').on('click', function (event) {
    var targetLiveBuilderID = jQuery(this).data('builder-id');
    window.parent.jQuery('.ppb_sortable li#' + targetLiveBuilderID + ' .item_action a.ppb_add_after').trigger('click');
  });

  jQuery('.ppb_live_edit_wrapper .ppb_live_action a.ppb_add_after').on('mouseover', function (event) {
    var targetLiveBuilderID = jQuery(this).data('builder-id');
    window.parent.jQuery('.ppb_sortable li#' + targetLiveBuilderID + ' .item_action a.ppb_add_after').trigger('mouseover');
  });

  jQuery('.ppb_live_edit_wrapper .ppb_live_action a.ppb_add_after').on('mouseleave', function (event) {
    var targetLiveBuilderID = jQuery(this).data('builder-id');
    window.parent.jQuery('.ppb_sortable li#' + targetLiveBuilderID + ' .item_action a.ppb_add_after').trigger('mouseleave');
  });

  jQuery('.ppb_live_edit_wrapper .ppb_live_action a.ppb_edit').on('click', function (event) {
    var targetLiveBuilderID = jQuery(this).data('builder-id');
    window.parent.jQuery('.ppb_sortable li#' + targetLiveBuilderID + ' .item_action a.ppb_edit').trigger('click');
  });

  jQuery('.ppb_live_edit_wrapper .ppb_live_action a.ppb_remove').on('click', function (event) {
    var targetLiveBuilderID = jQuery(this).data('builder-id');
    window.parent.jQuery('.ppb_sortable li#' + targetLiveBuilderID + ' .item_action a.ppb_remove').trigger('click');
  });

  jQuery('.ppb_live_edit_wrapper .ppb_live_action a.ppb_duplicate').on('click', function (event) {
    var targetLiveBuilderID = jQuery(this).data('builder-id');
    window.parent.jQuery('.ppb_sortable li#' + targetLiveBuilderID + ' .item_action a.ppb_duplicate').trigger('click');
  });
});
