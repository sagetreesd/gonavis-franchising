/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_barrio_subtheme = {
    attach: function (context, settings) {
      $('.dropdown').on('mouseenter mouseleave', function (e) {
        var dropdown = $(this);
        var _d = dropdown.find('.dropdown-toggle-split');
        var _dm = dropdown.find('.dropdown-menu');
        var hover = $(this).is(':hover');
        setTimeout(function () {
          dropdown[hover ? 'addClass' : 'removeClass']('show');
          _d.attr('aria-expanded', hover);
          _dm[hover ? 'addClass' : 'removeClass']('show');
        }, 300);
      });
    }
  };

})(jQuery, Drupal);
