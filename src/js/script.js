/* Enable tooltips everywhere */
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
/* Enable tooltips everywhere end */

/* PROJECTS: section-home-folders__menu */
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
/* PROJECTS: section-home-folders__menu end----- */
/* PROJECTS: section-home-folders-dropdown */
$('#folderDropdown').on('click', function () {
  $(this).toggleClass('dropDownClickBorder');
});
$('#folderDropdown-menu .dropdown-item').each(function () {
  $(this)
    .on('click', function () {
      $(this)
        .addClass('checked')
        .siblings()
        .removeClass('checked');
    });
});
/* PROJECTS: section-home-folders-dropdown end------ */
/* PROJECTS: create project */
$('#createProjectBTN').on('click', function (e) {
  e.preventDefault();
  const projectCreationName = $('#projectName').val();
  const d = new Date();
  const menuID = new Date().getTime();
  const projectCreationDate = d.toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
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
                      <a href="#" id=${menuID} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                      </a>
                      <div class="dropdown-menu" aria-labelledby=${menuID}>
                        <a class="dropdown-item">
                          <i class="fa fa-check-circle"></i>Activate</a>
                        <li class="dropdown-divider"></li>
                        <a class="dropdown-item">
                          <i class="fa fa-user"></i>Add QC User</a>
                        <a class="dropdown-item">
                          <i class="fa fa-font"></i>Rename Project</a>
                        <li class="dropdown-divider"></li>
                        <a class="dropdown-item">
                          <i class="fa fa-pencil"></i>Edit Survey</a>
                        <a class="dropdown-item">
                          <i class="fa fa-sign-out"></i>Preview Survey</a>
                        <a class="dropdown-item">
                          <i class="fa fa-paper-plane"></i>Distribute Survey</a>
                        <a class="dropdown-item">
                          <i class="fa fa-comment"></i>Responses</a>
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
/* PROJECTS: create project end----------*/
/* PROJECTS: card (project) on click go to edit_survey */
$('.projects-list').on('click', '.card-body', function () {
  const projectCreationName = $(this)
    .find('.projectName')
    .html();
  localStorage.setItem('projectCreationName', projectCreationName);
  /* FOR GITHUB redirect only, else remove pathname paramater */
  if (window.location.host === 'mostafaabobakr7.github.io') {
    const path = ('survayAdminDashboard/edit_survey.html');
    window.location.pathname = path;
  } else if (window.location.host === 'invadems.com') {
    const path = ('projects/FreeMinds/edit_survey.html');
    window.location.pathname = path;
  } else {
    window.location.pathname = 'edit_survey.html';
  }
});
/* PROJECTS: card (project) on click go to edit_survey end--- */
/* PROJECTS: get the clicked PROJECT name from localstorage */
$(document).ready(() => {
  const loc = window.location.href;
  const projectCreationName = localStorage.getItem('projectCreationName');
  if (/edit_survey/.test(loc) || /distributions/.test(loc) || /responses/.test(loc) || /reports/.test(loc)) {
    $('.projectNameEdit').html(`${projectCreationName}`);
  }
});
/* PROJECTS: get the clicked PROJECT name from localstorage end--*/
/* PROJECTS\SURVEY: CONTENTEDITABLE on CLICK */
$(document).on('click', '[contenteditable="true"]', function () {
  $(document)
    .find('[contenteditable="true"]')
    .removeClass('editable-focus');
  $(this).addClass('editable-focus');
  $(this).focusout(function () {
    $(this).removeClass('editable-focus');
  });
  document.execCommand('selectAll', false, null);
});
/* PROJECTS\SURVEY: CONTENTEDITABLE on CLICK end--- */
/* PROJECTS\SURVEY: ADD BLOCK function */
$('.section-block').on('click', '#addBlock', () => {
  const block = $(`<div class="section-block-card">
                        <div class="card">
                          <div class="card-header" >
                            <h5 contenteditable="true">Default Question Block</h5>
                          </div>
                          <div class="card-body">
                            <div class="row py-3 hoverQuestion ">
                              <div class="questionMove">
                                <div class="questionMove__up py-2">
                                  <i class="fa fa-arrow-up"></i>
                                </div>
                                <div class="questionMove__down py-2">
                                  <i class="fa fa-arrow-down"></i>
                                </div>
                              </div>
                              <div class="col-1">
                                <div class="questionNumber">
                                  <h4 contenteditable="true">Q1</h4>
                                </div>
                              </div>
                              <div class="col-11 d-flex justify-content-between">
                                <div class="questionBlock">
                                  <div class="questionHeader" >
                                    <h3 contenteditable="true" class="card-title  mb-3">
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
/* PROJECTS\SURVEY: ADD BLOCK function end--*/
/* PROJECTS\SURVEY: ADD QUESTION RADIO */
let num = 1;
function addRadio(place, elementPlaceInDOM) {
  const radioName = new Date().getTime();
  const radioQuestion = $(`
    <div class = "row py-3 hoverQuestion">
      <div class="questionMove">
        <div class="questionMove__up py-2">
          <i class="fa fa-arrow-up"></i>
        </div>
        <div class="questionMove__down py-2">
          <i class="fa fa-arrow-down"></i>
        </div>
      </div>
      <div class="col-1">
        <div class="questionNumber">
          <h4 contenteditable="true">Q${num + 1}</h4>
        </div>
      </div> <div class = "col-11 d-flex justify-content-between" > <div class="questionBlock">
        <div class="questionHeader" >
          <h3 contenteditable="true" class="card-title  mb-3">
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
/* PROJECTS\SURVEY: ADD QUESTION RADIO end-- */
/* PROJECTS\SURVEY: MOVE QUESTION UP and DOWN */
function choicesCurrentNum() {
  return $('.hoverQuestionClicked .card-text').length;
}
$('.section-block')
  .on('click', '.questionMove__up', function () {
    // <div .row></div>
    const questionPosition = $(this)
      .parent()
      .parent();
    // get upper sibling
    const questionPositionPrevSibling = questionPosition.prev();
    $(questionPosition).insertBefore(questionPositionPrevSibling);
  });

$('.section-block').on('click', '.questionMove__down', function () {
  const questionPosition = $(this)
    .parent()
    .parent();
  const questionPositionPrevSibling = questionPosition.next();
  $(questionPosition).insertAfter(questionPositionPrevSibling);
});
/* PROJECTS\SURVEY: MOVE QUESTION UP and DOWN end-- */
/* PROJECTS\SURVEY: QUESTION ON CLICK CHANGE BACKGROUNND */
if (/edit_survey.html/.test(window.location.href)) {
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
}
/* PROJECTS\SURVEY: QUESTION ON CLICK CHANGE BACKGROUNND end-- */
/* PROJECTS\SURVEY: RADIO CHOICES */
$('.choicesDecrease')
  .on('click', function () {
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

/* PROJECTS\SURVEY: RADIO CHOICES end */
/* PROJECTS\SURVEY: CHANGE TO QUESTION CHECKBOX */
$('#multibleAnswers').on('click', function () {
  $('.hoverQuestionClicked input:radio').prop('checked', false);
  $('.hoverQuestionClicked input:radio').attr('type', 'checkbox');
});
$('#singleAnswers').on('click', function () {
  $('.hoverQuestionClicked input:checkbox').prop('checked', false);
  $('.hoverQuestionClicked input:checkbox').attr('type', 'radio');
});
/* PROJECTS\SURVEY: CHANGE TO QUESTION CHECKBOX end-- */
/* PROJECTS\SURVEY: PREVIEW */
// when check span checkbox checked
$('.preview-mobile').on('click', 'span', function () {
  $(this)
    .prev()
    .prop('checked', 'checked');
});

// copy elements from edit_survey to preview-mobile;
/* $('#previewBTN').on('click', function () {}); */

// remove unnecessary things when preview
$(document).ready(function () {
  $('.preview-mobile *').removeAttr('contenteditable = "true"');
  $('.preview-mobile .questionMove')
    .next()
    .remove();
  $('.preview-mobile .hoverQuestionClicked').remove();
  $('.preview-mobile .questionMove').remove();
  $('.preview-mobile .addQuestionControls').remove();
});
/* PROJECTS\SURVEY: PREVIEW end--*/

//---------------------------------------------
/* DISTRIBUTE: web copylick */
$('#distribute__web-btn').on('click', function (e) {
  e.preventDefault();
  $('#distribute__web').select();
  document.execCommand('copy');
});
/* DISTRIBUTE: web copylick end */

/* RESPONSES: VIEW ON-CLICK  */
$('.sport-survey').on('click', function () {
  $('.showResponse').toggleClass('d-none');
});
/* RESPONSES: VIEW ON-CLICK end-- */

/* REPORTS: TOGGLE TEXTAREA ADD NOTE */
$('.reportSection').on('click', '.noteBTN', function () {
  $('.reportAddNote').toggleClass('d-none');
  $('.reportCloseNote').toggleClass('d-none');

  $('.note').toggleClass('d-none');
  if ($('.note').val()) {
    $('.noteValue').removeClass('visibilityHidden');
  }
});
$('.reportSection').on('change keyup keydown paste cut', '.note', function () {
  let note = $(this).val();
  $(this)
    .height(0)
    .height(this.scrollHeight);
  $('#noteVal').val(note);
  $('#noteVal')
    .height(0)
    .height(this.scrollHeight);

  if (!$('#noteVal').val()) {
    $('.noteValue').addClass('visibilityHidden');
  } else {
    $('.noteValue').removeClass('visibilityHidden');
  }
});

/* REPORTS: TOGGLE TEXTAREA ADD NOTE end */

/* REPORTS: ADD VISUAL */
$('.reportSection').on('click', '.btn-group .btn', function () {
  $(this).addClass('btn-group-active');
  $(this)
    .siblings()
    .removeClass('btn-group-active');
});
$('.reportSection').on('click', '.reportAddVisual', function () {});

function chart(type) {
  const canvasClass = `class${new Date().getTime()}`;
  const canvas = $(`
  <div class="responseControls text-right">
    <button type="button" class="btn btn-danger px-3 mx-1" title="Delete">
      <i class="fa fa-times"></i>
    </button>
    <canvas class=${canvasClass} width="300" height="100"></canvas>
  </div>
`);
  $('.chartSection').append(canvas);
  let ctx = document
    .querySelector(`.${canvasClass}`)
    .getContext('2d');
  let myChart = new Chart(ctx, {
    type: `${type}`,
    data: {
      labels: [
        'answer1', 'answer2'
      ],
      datasets: [
        {
          label: 'number of answers',
          data: [
            1, 2
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)'
          ],
          borderColor: [
            'rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
}

if (/reports.html/.test(window.location.href)) {
  chart('bar');
}

$('.reportAddVisual')
  .on('click', function () {
    if ($('#bar').hasClass('btn-group-active')) {
      chart('bar');
    }
    if ($('#line').hasClass('btn-group-active')) {
      chart('line');
    }
    if ($('#pie').hasClass('btn-group-active')) {
      chart('pie');
    }
  });
$('.chartSection').on('click', '.btn-danger', function () {
  $(this)
    .next('canvas')
    .remove();
  $(this).remove();
});
/* REPORTS: ADD VISUAL end */

/* LIBRARY: */

/* LIBRARY: end */
