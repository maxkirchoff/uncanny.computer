/*!
 * basic-bro
 * 
 * 
 * @author 
 * @version 1.0.0
 * Copyright 2020. ISC licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    $('button.menu-toggle').on('click touch', function(ev) {
      ev.preventDefault();
      $('ul.nav-items').toggleClass('active');
		$('ul.social-items').toggleClass('active');
      $(this).toggleClass('menu-active');
    });
  });

})(jQuery, window, document);
