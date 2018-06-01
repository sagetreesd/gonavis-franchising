/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_barrio_subtheme = {
    attach: function (context, settings) {
      $('body').on('mouseenter mouseleave', '.dropdown', function (e) {
        var _d = $(e.target).closest('.dropdown'); _d.addClass('show');
        setTimeout(function () {
          _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
          $('[data-hover="dropdown"]', _d).attr('aria-expanded', _d.is(':hover'));
        }, 300);
      });
    }
  };

})(jQuery, Drupal);
