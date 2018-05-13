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
  const card = $(`        <div class="row py-3">
          <div class="col-md-12">
            <div class="projects-list-container pl-5">
              <div class="card">
                <div class="row">
                  <div class="col-md-11">
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
                  <div class="col-md-1 d-flex justify-content-end">
                    <div class="card-body-icon dropleft">
                      <a href="#" id="projectCardDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                      </a>
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
              </div>
            </div>
          </div>
        </div>`);
  $('.projects-list .container-fluid').prepend(card);
});
// when press Enter on keyboard as create project
$('#projectName').keyup((event) => {
  if (event.keyCode === 13) {
    $('#createProjectBTN').click();
  }
});
/* create project end----------*/
/* card (project) on click go to edit_survey */
$('.projects-list').on('click', '.card-body', function () {
  const projectCreationName = $(this)
    .find('.projectName')
    .html();
  localStorage.setItem('projectCreationName', projectCreationName);
  const path = ('edit_survey.html');
  /* FOR GITHUB redirect only, else remove pathname paramater */
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
/* CONTENTEDITABLE on CLICK */
const editableDivs = $('[contenteditable="true"]');
editableDivs.on('click', () => {
  document.execCommand('selectAll', false, null);
  this.toggleClass('editable-focus');
});

/* CONTENTEDITABLE on CLICK end--- */
/* ADD BLOCK function */
$('.section-block').on('click', '#addBlock', () => {
  const block = $(`<div class="section-block-card">
                        <div class="card">
                          <div contenteditable="true">
                            <h5 class="card-header">Default Question Block</h5>
                          </div>
                          <div class="card-body">
                            <div class="row py-3 hoverQuestion ">
                              <div class="col-1">
                                <div class="questionNumber" contenteditable="true">
                                  <h4>Q1</h4>
                                </div>
                              </div>
                              <div class="col-11 d-flex justify-content-between">
                                <div class="questionBlock">
                                  <div class="questionHeader" contenteditable="true">
                                    <h3 class="card-title  mb-3">
                                      Click to write the question text
                                    </h3>
                                  </div>
                                  <div class="card-text mb-2">
                                    <input type="radio" name="question">
                                    <span contenteditable="true">Click to write Choice 1</span>
                                  </div>
                                  <div class="card-text mb-2">
                                    <input type="radio" name="question">
                                    <span contenteditable="true">Click to write Choice 2</span>
                                  </div>
                                  <div class="card-text mb-2">
                                    <input type="radio" name="question">
                                    <span contenteditable="true">Click to write Choice 3</span>
                                  </div>
                                </div>
                                <div class="addQuestionControls  justify-content-between">
                                  <i class="fa fa-plus-circle questionInserBefore" title="Insert Question Before"></i>
                                  <i class="fa fa-minus-circle questionDelete" title="Delete Question"></i>
                                  <i class="fa fa-plus-circle questionInserAfter" title="Insert Question After"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="text-center py-4">
                          <a id="addBlock" href="#" class="btn btn-primary btn-lg">
                            <i class="fa fa-plus mr-2"></i> Add Block</a>
                        </div>
                      </div>`);
  $('.section-block .col-12').append(block);
});
/* ADD BLOCK function end--*/
/* ADD QUESTION RADIO */
let num = 1;
function addRadio(place, elementPlaceInDOM) {
  const radioName = new Date().getTime();
  const radioQuestion = $(`
    <div class = "row py-3 hoverQuestion" > <div class="col-1">
        <div class="questionNumber" contenteditable="true">
          <h4>Q${num + 1}</h4>
        </div>
      </div> <div class = "col-11 d-flex justify-content-between" > <div class="questionBlock">
        <div class="questionHeader" contenteditable="true">
          <h3 class="card-title  mb-3">
            Click to write the question text
          </h3>
        </div>
        <div class="card-text mb-2">
          <input type="radio" name=${radioName}>
            <span contenteditable="true">Click to write Choice 1</span>
          </div>
          <div class="card-text mb-2">
            <input type="radio" name=${radioName}>
              <span contenteditable="true">Click to write Choice 2</span>
            </div>
            <div class="card-text mb-2">
              <input type="radio" name=${radioName}>
                <span contenteditable="true">Click to write Choice 3</span>
              </div>
            </div>
            <div class="addQuestionControls justify-content-between">
              <i class="fa fa-plus-circle questionInserBefore" title="Insert Question Before"></i>
              <i class="fa fa-minus-circle questionDelete" title="Delete Question"></i>
              <i class="fa fa-plus-circle questionInserAfter" title="Insert Question After"></i>
            </div>
          </div>
        </div>
`);

  /* INSERT BEFORE QUESTION */
  if (place === 'BEFORE') {
    radioQuestion.insertBefore(elementPlaceInDOM);
  }
  /* INSERT AFTER QUESTION */
  if (place === 'AFTER') {
    radioQuestion.insertAfter(elementPlaceInDOM);
  }
  ++num;
}
$('.section-block')
  .on('click', '.questionInserBefore', function () {
    /* GET CARD_BODY of the CLICKED ICON to insert BEFORE IT */
    const elBefore = $(this)
      .parent()
      .parent()
      .parent();
    /* elBefore = <div class="row py-3"> */
    addRadio('BEFORE', elBefore);
  });
$('.section-block').on('click', '.questionInserAfter', function () {
  /* GET CARD_BODY of the CLICKED ICON to insert AFTER IT */
  const elAfter = $(this)
    .parent()
    .parent()
    .parent();
  /* elAfter = <div class="row py-3"> */
  addRadio('AFTER', elAfter);
});
$('.section-block').on('click', '.questionDelete', function () {
  /* GET CARD_BODY of the CLICKED ICON to insert AFTER IT */
  /* elementDelete = <div class="row py-3"> */
  $(this)
    .parent()
    .parent()
    .parent()
    .remove();
});
/* ADD QUESTION RADIO end-- */
function choicesCurrentNum() {
  return $('.hoverQuestionClicked .card-text').length;
}
/* QUESTION ON CLICK CHANGE BACKGROUNND */
$('.section-block')
  .on('click', '.hoverQuestion', function () {
    $(this)
      .addClass('hoverQuestionClicked')
      .siblings()
      .removeClass('hoverQuestionClicked');
    /* DEFINE IF IT A RADIO OR CHECKBOX */
    if ($(this).find(':radio').length > 0) {
      $('#singleAnswers').prop('checked', true);
      $('#multibleAnswers').prop('checked', false);
    }
    if ($(this).find(':checkbox').length > 0) {
      $('#multibleAnswers').prop('checked', true);
      $('#singleAnswers').prop('checked', false);
    }
    /* questionHoverClicked class remove from all blocks when clicked on current block */
    const x = $(this)
      .parent()
      .parent()
      .parent()
      .siblings()
      .children()
      .children()
      .children();
    x.removeClass('hoverQuestionClicked');
    $('.choices span').text(choicesCurrentNum);
  });
/* QUESTION ON CLICK CHANGE BACKGROUNND end-- */
/* RADIO CHOICES */
$('.choicesDecrease').on('click', function () {
  $('.hoverQuestionClicked .card-text:last-child').remove();
  $('.choices span').text(choicesCurrentNum);
});
$('.choicesIncrease').on('click', function () {
  let choiceNum = choicesCurrentNum();
  const radioName = $('.hoverQuestionClicked input:radio').attr('name');

  const choiceRadio = $(`<div class="card-text mb-2">
                                    <input type="radio" name="${radioName}">
                                    <span contenteditable="true">Click to write Choice ${choiceNum + 1}</span>
                                  </div>`);
  const choiceCheckbox = $(`<div class="card-text mb-2">
                                    <input type="checkbox" name="question">
                                    <span contenteditable="true">Click to write Choice ${choiceNum + 1}</span>
                                  </div>`);
  if ($('.hoverQuestionClicked').find(':radio').length > 0) {
    choiceRadio.insertAfter($('.hoverQuestionClicked .card-text:last-child'));
  }
  if ($('.hoverQuestionClicked').find(':checkbox').length > 0) {

    choiceCheckbox.insertAfter($('.hoverQuestionClicked .card-text:last-child'));
  }
  $('.choices span').text(choicesCurrentNum);
});

/* RADIO CHOICES end */
/* CHANGE TO QUESTION CHECKBOX */
$('#multibleAnswers').on('click', function () {
  $('.hoverQuestionClicked input:radio').prop('checked', false);
  $('.hoverQuestionClicked input:radio').attr('type', 'checkbox');
});
$('#singleAnswers').on('click', function () {
  $('.hoverQuestionClicked input:checkbox').prop('checked', false);
  $('.hoverQuestionClicked input:checkbox').attr('type', 'radio');
});
/* CHANGE TO QUESTION CHECKBOX end-- */
