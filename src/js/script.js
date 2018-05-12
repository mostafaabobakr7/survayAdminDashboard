/* navbar active */
$('.nav-link')
  .on('click', function () {
    $(this)
      .parent()
      .siblings()
      .removeClass('active');
    $(this)
      .parent()
      .addClass('active');
  });
/* navbar active end-- */
/* section-home-folders__menu */
$('#folder__link').on('click', function () {
  $(this)
    .parent()
    .toggleClass('menu__folder');
  $('.projects-list-container').toggleClass('menu__folder');
  $('#folder__menu').toggleClass('menu__close');
});
$('#folder__menu-close').on('click', () => {
  $('#folder__link')
    .parent()
    .toggleClass('menu__folder');
  $('.projects-list-container').toggleClass('menu__folder');
  $('#folder__menu').toggleClass('menu__close');
});
/* section-home-folders__menu end----- */
/* section-home-folders-dropdown */
$('#folderDropdown').on('click', function () {
  $(this).toggleClass('dropDownClickBorder');
});
$('#folderDropdown-menu .dropdown-item').map(function () {
  $(this)
    .on('click', function () {
      $(this)
        .addClass('checked')
        .siblings()
        .removeClass('checked');
    });
});
/* section-home-folders-dropdown end------ */

/* create Blank Project */
$('#BlankSurvayProject').on('click', function () {
  $(this).addClass('d-none');
  $('#CreateFromExisting').addClass('d-none');
  $('.list-Research').removeClass('d-none');
});
/* create Blank Project end------------ */
/* create Project Back arrow */
$('#createProjectBack').on('click', function () {
  $(this)
    .parent()
    .addClass('d-none');
  $('#CreateFromExisting, #BlankSurvayProject').removeClass('d-none');
});
/* create Project Back arrow end-------------*/
/* create project */
$('#createProjectBTN').on('click', () => {
  const projectCreationName = $('#projectName').val();
  const d = new Date();
  const projectCreationDate = d.toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const card = $(`
  <div class="row py-3">
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
                <p class="card-text">Modified at: ${projectCreationDate}</p>
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

              </div>
            </div>
          </div>
        </div>
        <div class="card-body-icon " id="projectCardDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
          <div class="dropdown-menu" aria-labelledby="projectCardDropdown">
            <a class="dropdown-item">
              <i class="fa fa-check-circle"></i>Activate</a>
            <li class="dropdown-divider"></li>
            <a class="dropdown-item">
              <i class="fa fa-share-alt"></i>Collaborate</a>
            <a class="dropdown-item">
              <i class="fa fa-folder"></i>Reveal in Folder</a>
            <a class="dropdown-item">
              <i class="fa fa-font"></i>Rename Project</a>
            <a class="dropdown-item">
              <i class="fa fa-files-o"></i>Copy Project</a>
            <li class="dropdown-divider"></li>
            <a class="dropdown-item">
              <i class="fa fa-pencil"></i>Edit Survey</a>
            <a class="dropdown-item">
              <i class="fa fa-sign-out"></i>Preview Survey</a>
            <a class="dropdown-item">
              <i class="fa fa-language"></i>Translate Survey</a>
            <a class="dropdown-item">
              <i class="fa fa-paper-plane"></i>Distribute Survey</a>
            <a class="dropdown-item">
              <i class="fa fa-comment"></i>Data &amp; Analysis</a>
            <a class="dropdown-item">
              <i class="fa fa-bar-chart"></i>View Reports</a>
            <li class="dropdown-divider"></li>
            <a class="dropdown-item">
              <i class="fa fa-times-circle"></i>Delete Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>`);
  $('.projects-list .container-fluid').append(card);
});
// when press Enter on keyboard as create project
$('#projectName').keyup((event) => {
  if (event.keyCode === 13) {
    $('#createProjectBTN').click();
  }
});
/* create project end----------*/
/* card (project) on click go to edit_survey */
$('.projects-list').on('click', '.card', function () {
  const projectCreationName = $(this)
    .find('.projectName')
    .html();
  localStorage.setItem('projectCreationName', projectCreationName);
  const path = ('edit_survey.html');
  const newURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}${path}`;
  window.location = newURL;
});
/* card (project) on click go to edit_survey end--- */
/* get the clicked PROJECT name from localstorage */
$(document).ready(() => {
  const loc = window.location.href;
  const projectCreationName = localStorage.getItem('projectCreationName');
  if (/edit_survey/.test(loc)) {
    $('.projectNameEdit').html(`${projectCreationName}`);
  }
});
/* get the clicked PROJECT name from localstorage end--*/
