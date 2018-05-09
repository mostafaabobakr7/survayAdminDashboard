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
})
$('#folderDropdown-menu .dropdown-item').map(function () {
  $(this).on('click', function () {
    $(this).addClass('checked').siblings().removeClass('checked')
  })
})
/* section-home-folders-dropdown end------ */

/* create Blank Project */
$('#BlankSurvayProject').on('click', function () {
  $(this).addClass('d-none');
  $('#CreateFromExisting').addClass('d-none');
  $('.list-Research').removeClass('d-none')
})
/* create Blank Project end------------ */
/* create Project Back */
$('#createProjectBack').on('click', function () {
  $(this).parent().addClass('d-none')
  $('#CreateFromExisting, #BlankSurvayProject').removeClass('d-none');
})
/* create Project Back end-------------*/