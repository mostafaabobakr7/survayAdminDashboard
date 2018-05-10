/*global $ document, console, moment, window*/
"use strict";
/* section-home-folders__menu */
$('#folder__link').on("click", function () {
  $(this)
    .parent()
    .toggleClass('menu__folder')
  $('.projects-list-container').toggleClass('menu__folder')
  $('#folder__menu').toggleClass('menu__close')
})
$('#folder__menu-close').on("click", function () {
  $('#folder__link, .projects-list-container')
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
/* create Project Back arrow */
$('#createProjectBack').on('click', function () {
  $(this).parent().addClass('d-none')
  $('#CreateFromExisting, #BlankSurvayProject').removeClass('d-none');
})
/* create Project Back arrow end-------------*/
/* create project */
$('#createProjectBTN').on('click', function () {
  const projectCreationName = $('#projectName').val();
  const d = new Date();
  const projectCreationDate = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
  var card = $(`        <div class="row py-3">
  <div class="col-md-12">
    <div class="projects-list-container pl-5">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-3">
              <h6 class="card-title">
                <img width="24" height="24" src="./img/research_core.svg" alt="research core img">
                <span class="pl-1"> Survey</span>
              </h6>
              <h2 class="projectName">${projectCreationName}</h2>
              <p class="card-text">Modified ${projectCreationDate}</p>
            </div>
            <div class="col-md-9 d-flex justify-content-end">
              <div class="card-body__details d-flex justify-content-start">
                <div class="card-body__details-status ">
                  <h2>NEW</h2>
                  <h6>Statues</h6>
                </div>
                <div class="card-body__details-questions ">
                  <h2>1</h2>
                  <h6>Questions</h6>
                </div>
                <div class="card-body__details-languages ">
                  <h2>0</h2>
                  <h6>Languages</h6>
                </div>
              </div>
              <span class="card-body-icon">
                <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`);
  $('.projects-list .container-fluid').append(card)
})
// when press Enter on keyboard as create project
$('#projectName').keyup(function (event) {
  if (event.keyCode === 13) {
    $("#createProjectBTN").click();
  }
});
/* create project end----------*/