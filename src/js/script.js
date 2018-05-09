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
/* section-home-folders-dropdown */
$('#folderDropdown').on('click', function () {
  $(this).toggleClass('dropDownClickBorder')
  console.log(this)
})
$('#folderDropdown-menu .dropdown-item').map(function () {
  $(this).on('click', function () {
    $(this).addClass('checked').siblings().removeClass('checked')
  })
})
/* section-home-folders-dropdown end------ */