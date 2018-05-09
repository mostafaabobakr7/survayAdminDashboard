/*global $ document, console, moment, window*/
"use strict";
/* section-home-folders__menu */
$('#folder__link').on("click", function () {
  $(this)
    .parent()
    .toggleClass('menu__folder')
  $('#folder__menu').toggleClass('menu__close')
})
$('#folder__menu-close').on("click", function () {
  $('#folder__link')
    .parent()
    .toggleClass('menu__folder')
  $('#folder__menu').toggleClass('menu__close')
})
/* section-home-folders__menu end----- */
