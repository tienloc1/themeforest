(function ($) {

  'use strict';

  // LAZY LOADING
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
  });
  // ------------------------------------------------------

  // LOADING SCREEN
  $(window).on('load', function () {
    $('#loading_screen').fadeOut(1000);
    $('html').css('overflow-y', 'visible');
  });
  // ------------------------------------------------------

  // NAVBAR =>

  // ADD CLASS (nav-open) TO HTML TAG
  $('#th_navbar_toggler').on('click', function () {
    $('html').toggleClass('nav-open');
  });

  // ADD CLASS (clicked) TO NAVBAR LIST ITEM
  $('nav.th-navbar .l-s ul.navbar-links li.navbar-list-item .item-name').on('click', function () {
    $(this).parent().toggleClass('clicked').siblings().removeClass('clicked');
  });

  // SHOW LOGIN FORM
  $('#login_form_button').on('click', function () {
    $('#header_login_form').fadeIn();
  });

  // HIDE LOGIN FORM WHEN CLICK OUTSIDE
  $(document).mouseup(function (e) {
		var loginForm = $("#header_login_form");
		if (!loginForm.is(e.target) && loginForm.has(e.target).length === 0) {
			loginForm.hide();
		}
  });
  // ------------------------------------------------------

}(jQuery));