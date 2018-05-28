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
$('#createProjectBTN').on('click', function (ev) {
  ev.preventDefault();
  const projectCreationName = $('#projectName').val();
  const d = new Date();
  const menuID = new Date().getTime();
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-1 d-flex justify-content-end">
                    <div class="card-body-icon dropdown dropleft">
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
                          <i class="fa fa-paper-plane"></i>PROJECTS\DISTRIBUTE Survey</a>
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
  if (projectCreationName) {
    $('#projectName').removeClass('is-invalid');
    $('.projects-list .container-fluid').prepend(card);
    $('#create_project').modal('hide');
  } else {
    $('#projectName').addClass('is-invalid');
  }
});
$('#projectName').on('change keyup paste', function () {
  $(this).removeClass('is-invalid');
  $(this).addClass('is-valid');
});
$('#projectName').keypress(function (e) {
  if (e.which == 13) {
    $('#createProjectBTN').click();
  }
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
  } else if (window.location.host === 'invadems.com' || window.location.host === 'www.invadems.com') {
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
if (/edit_survey.html/.test(window.location)) {
  // PROJECTS\SURVEY: STICKY RIGHT CONTROLS
  $('.rightControls').sticky();
  $(document)
    .on('click', '[contenteditable="true"]', function () {
      $(document)
        .find('[contenteditable="true"]')
        .removeClass('editable-focus');
      $(this).addClass('editable-focus');
      $(this).focusout(function () {
        $(this).removeClass('editable-focus');
      });
    });
}
/* PROJECTS\SURVEY: CONTENTEDITABLE on CLICK end--- */
/* PROJECTS\SURVEY: ADD BLOCK function */
$('.section-block').on('click', '#addBlock', () => {
  const block = $(`<div class="section-block-card">
                        <div class="text-right">
                          <button type="button" class="blockClose btn btn-danger px-3 mx-1" title="Delete">
                            <i class="fa fa-times"></i>
                          </button>
                        </div>
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
                                  <div class="questionBody">
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
                                </div>
                                <div class="addQuestionControls  justify-content-between">
                                  <i class="fa fa-plus-circle questionInserBefore" title="Insert Question Before"></i>
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
$('.section-block').on('click', '.blockClose', function () {
  $(this)
    .parent()
    .parent()
    .remove();
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
        <div class="questionHeader">
          <h3 contenteditable="true" class="card-title  mb-3">
            Click to write the question text
          </h3>
        </div>
        <div class="questionBody">
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
  let size;
  if ($('.hoverQuestionClicked').find('.card-text').length > 0) {
    size = $('.hoverQuestionClicked .card-text').length;
  }
  if ($('.hoverQuestionClicked').find('.chosen').length > 0) {
    size = $('.hoverQuestionClicked .chosen option').length;
  }
  if ($('.hoverQuestionClicked').find('.chosen-select-multi').length > 0) {
    size = $('.hoverQuestionClicked .chosen-select-multi option').length;
  }
  if ($('.hoverQuestionClicked').find('.range-slider').length > 0) {
    size = $('.hoverQuestionClicked .range-slider').length;
  }
  if ($('.hoverQuestionClicked').find('.rank__body').length > 0) {
    size = $('.hoverQuestionClicked .rank__body').length;
  }
  // count statements
  if ($('.hoverQuestionClicked').find('.matrix').length > 0) {
    size = $('.hoverQuestionClicked .matrix tbody tr').length;
  }
  return size;
}
$('input[type=radio][name=answers]').on('change', function () {
  $('.choices span').text(choicesCurrentNum);
  if ($('.hoverQuestionClicked').find('.matrix').length > 0) {
    $('.statementSmall').removeClass('d-none');
    $('.scalePoint').removeClass('d-none');
    const scalePointHeadCount = $('thead tr th').length - 1;
    $('.scalePointSpan').text(scalePointHeadCount);
  } else {
    $('.statementSmall').addClass('d-none');
    $('.scalePoint').addClass('d-none');
  }
});
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
/* PROJECTS\SURVEY: QUESTION ON CLICK CHANGE TYPE */
if (/edit_survey.html/.test(window.location.href)) {
  $('.section-block')
    .on('click', '.hoverQuestion', function () {
      $(this)
        .addClass('hoverQuestionClicked')
        .siblings()
        .removeClass('hoverQuestionClicked');
      /* DEFINE IF IT A RADIO */
      if ($(this).find(':radio').length > 0) {
        $('#singleAnswers').prop('checked', true);
        $('#singleAnswers').siblings().prop('checked', false);
      }
      /* DEFINE IF IT A CHECKBOX */
      if ($(this).find(':checkbox').length > 0) {
        $('#multibleAnswers').prop('checked', true);
        $('#multibleAnswers').siblings().prop('checked', false);
      }
      /* DEFINE IF IT A DROPDOWN SINGLE */
      if ($(this).find('.chosen').length > 0) {
        $('#dropDownOneAnswer').prop('checked', true);
        $('#dropDownOneAnswer').siblings().prop('checked', false);
      }
      /* DEFINE IF IT A DROPDOWN MULTIPLE */
      if ($(this).find('.chosen-select-multi').length > 0) {
        $('#dropDownMultiAnswer').prop('checked', true);
        $('#dropDownMultiAnswer').siblings().prop('checked', false);
      }
      /* DEFINE IF IT A DROPDOWN SLIDER */
      if ($(this).find('.slider').length > 0) {
        $('#sliderAnswer').prop('checked', true);
        $('#sliderAnswer').siblings().prop('checked', false);
      }
      /* DEFINE IF IT A DROPDOWN RANK */
      if ($(this).find('.rank').length > 0) {
        $('#rankAnswer').prop('checked', true);
        $('#rankAnswer').siblings().prop('checked', false);
      }
      /* DEFINE IF IT A DROPDOWN MATRIX */
      if ($(this).find('.matrix').length > 0) {
        $('#matrixAnswer').prop('checked', true);
        $('#matrixAnswer').siblings().prop('checked', false);
      }
      /* DEFINE IF IT A DROPDOWN TXT SINGLE LINE */
      if ($(this).find('.txtSingleLine').length > 0) {
        $('#txtSingleLineAnswer').prop('checked', true);
        $('#txtSingleLineAnswer').siblings().prop('checked', false);
      }
      /* DEFINE IF IT A DROPDOWN TXT txtEssayAnswer */
      if ($(this).find('.txtEssayAnswer').length > 0) {
        $('#txtEssayAnswer').prop('checked', true);
        $('#txtEssayAnswer').siblings().prop('checked', false);
      }
      /* DEFINE IF IT A DROPDOWN TXT txtFormAnswer */
      if ($(this).find('.txtFormAnswer').length > 0) {
        $('#txtFormAnswer').prop('checked', true);
        $('#txtFormAnswer').siblings().prop('checked', false);
      }
      /* DEFINE IF IT A DROPDOWN TXT uploadImgAnswer */
      if ($(this).find('.uploadImgAnswer').length > 0) {
        $('#uploadImgAnswer').prop('checked', true);
        $('#uploadImgAnswer').siblings().prop('checked', false);
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
/* PROJECTS\SURVEY: QUESTION ON CLICK CHANGE TYPE end-- */
/* PROJECTS\SURVEY: RADIO CHOICES INC\DEC */
$('.choicesDecrease')
  .on('click', function () {
    const spanNum = $('.choices span').html();
    if (spanNum !== '2') {
      if ($('.hoverQuestionClicked').find('.card-text').length > 0) {
        $('.hoverQuestionClicked .card-text:last-child').remove();
      }
      if ($('.hoverQuestionClicked').find('.chosen').length > 0) {
        $('.hoverQuestionClicked .chosen option:last').remove();
        $('.hoverQuestionClicked .dropdownOneEdit p:last-child').remove();
        $('.chosen').val('').trigger('chosen:updated');
      }
      if ($('.hoverQuestionClicked').find('.chosen-select-multi').length > 0) {
        $('.hoverQuestionClicked .chosen-select-multi option:last').remove();
        $('.hoverQuestionClicked .dropdownMultiEdit p:last-child').remove();
        $('.chosen-select-multi').val('').trigger('chosen:updated');
      }
      if ($('.hoverQuestionClicked').find('.slider').length > 0) {
        $('.slider .range-slider:last-child').prev().remove();
        $('.slider .range-slider:last-child').remove();
      }
      if ($('.hoverQuestionClicked').find('.rank').length > 0) {
        $('.rank .rank__body:last-child').remove();
      }
      if ($('.hoverQuestionClicked').find('.matrix').length > 0) {
        $('.matrix tbody tr:last-child').remove();
      }
    }
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
  const choiceSlider = $(`<p class="m-0 p-0" contenteditable="true">slider${choiceNum + 1}</p>
          <div class="range-slider d-flex py-2">
            <input class="range-slider__range" type="range" name="slider" min="0" max="100" value="0">
            <span class="range-slider__value">0</span>
          </div>`);
  const choiceRank = $(`<div class="rank__body">
            <span class="rank__body-text contenteditable" contenteditable="true">text${choiceNum + 1}</span>
            <span class="rank__body-rank">${choiceNum + 1}</span>
          </div>`);
  const choiceDropdown = $(`<option value="option${choiceNum + 1}">option${choiceNum + 1}</option>`);
  const choiceDropdownEdit = $(`<p contenteditable="true">option${choiceNum + 1}</p>`);

  if ($('.hoverQuestionClicked').find(':radio').length > 0) {
    choiceRadio.insertAfter($('.hoverQuestionClicked .card-text:last-child'));
  }
  if ($('.hoverQuestionClicked').find(':checkbox').length > 0) {
    choiceCheckbox.insertAfter($('.hoverQuestionClicked .card-text:last-child'));
  }
  if ($('.hoverQuestionClicked').find('.chosen').length > 0) {
    $('.chosen').append(choiceDropdown);
    $('.chosen').val('').trigger('chosen:updated');
  }
  if ($('.hoverQuestionClicked').find('.chosen').length > 0) {
    $('.dropdownOneEdit').append(choiceDropdownEdit);
  }
  if ($('.hoverQuestionClicked').find('.chosen-select-multi').length > 0) {
    $('.chosen-select-multi').append(choiceDropdown);
    $('.chosen-select-multi').val('').trigger('chosen:updated');
  }
  if ($('.hoverQuestionClicked').find('.chosen-select-multi').length > 0) {
    $('.dropdownMultiEdit').append(choiceDropdownEdit);
  }
  if ($('.hoverQuestionClicked').find('.slider').length > 0) {
    $('.slider').append(choiceSlider);
  }
  if ($('.hoverQuestionClicked').find('.rank').length > 0) {
    $('.rank').append(choiceRank);
  }

  if ($('.hoverQuestionClicked').find('.matrix').length > 0) {
    if (choicesCurrentNum() !== 10) {
      let matrixName = new Date().getTime();
      const choiceMatrixStatement = $('.statement:last').clone();
      $('.statement:last').find('input').attr('name', matrixName);
      $('.matrix tbody').append(choiceMatrixStatement);
      $('.statement:last th').text(`statement${choicesCurrentNum()}`);
    }
  }

  $('.choices span').text(choicesCurrentNum);
});

function scalePointHeadCounts() {
  const scalePointHead = $('thead tr th').length - 1;
  return scalePointHead;
}
$('.scalePointDecrease').on('click', function () {
  const scalePointHeadCount = scalePointHeadCounts();
  if (scalePointHeadCount !== 2) {
    $('thead th:last-child').remove();
    $('.hoverQuestionClicked .statement').each(function () {
      $(this).find('td:last-child').remove();
    });
  }
  $('.scalePointSpan').text(scalePointHeadCount);
});

$('.scalePointIncrease').on('click', function () {
  const scalePointHeadCount = scalePointHeadCounts();
  const scalePointHead = $(`<th scope="col" contenteditable="true">scalePoint${scalePointHeadCount + 1}</th>`);
  if (scalePointHeadCount !== 10) {
    $('thead tr').append(scalePointHead);
    $('.scalePointSpan').text(scalePointHeadCount + 1);
    $('.hoverQuestionClicked .statement').each(function () {
      const radioName = $(this).find('td:last input').attr('name');
      const choiceScalePoint = $(`<td>
                      <input class="matrix" type="radio" name=${radioName}>
                    </td>`);
      $(this).append(choiceScalePoint);
    });
  }
});
/* PROJECTS\SURVEY: RADIO CHOICES INC\DEC end */
/* PROJECTS\SURVEY: CHANGE QUESTION */
$('#singleAnswers').on('click', function () {
  $('.hoverQuestionClicked input:checkbox').prop('checked', false);
  $('.hoverQuestionClicked input:radio').prop('checked', false);
  const radioName = new Date().getTime();
  const singleAnswers = $(`
      <div class="questionBlock">
        <div class="questionHeader">
          <h3 contenteditable="true" class="card-title mb-3">
            Single answer
          </h3>
        </div>
        <div class="questionBody">
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
      </div>`);
  $('.hoverQuestionClicked .questionBlock').replaceWith(singleAnswers);
});
$('#multibleAnswers').on('click', function () {
  $('.hoverQuestionClicked input:checkbox').prop('checked', false);
  $('.hoverQuestionClicked input:radio').prop('checked', false);
  const checkName = new Date().getTime();
  const multibleAnswers = $(`
      <div class="questionBlock">
        <div class="questionHeader">
          <h3 contenteditable="true" class="card-title mb-3">
            Multiple answers
          </h3>
        </div>
        <div class="questionBody">
          <div class="card-text mb-2">
            <input type="checkbox" name=${checkName}>
            <span contenteditable="true">Click to write Choice 1</span>
          </div>
          <div class="card-text mb-2">
            <input type="checkbox" name=${checkName}>
            <span contenteditable="true">Click to write Choice 2</span>
          </div>
          <div class="card-text mb-2">
            <input type="checkbox" name=${checkName}>
            <span contenteditable="true">Click to write Choice 3</span>
          </div>
        </div>
      </div>`);
  $('.hoverQuestionClicked .questionBlock').replaceWith(multibleAnswers);
});
$('#dropDownOneAnswer').on('click', function () {
  const dropDownOneAnswer = $(`
      <div class="questionBlock">
        <div class="questionHeader">
          <h3 contenteditable="true" class="card-title mb-3">
            Dropdown single answer
          </h3>
        </div>
        <div class="questionBody py-4">
          <select class="chosen">
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
            <option value="option4">option4</option>
          </select>
          <div class="dropdownOneEdit mt-3">
            <p contenteditable="true">option1</p>
            <p contenteditable="true">option2</p>
            <p contenteditable="true">option3</p>
            <p contenteditable="true">option4</p>
          </div>
        </div>
      </div>`);
  $('.hoverQuestionClicked .questionBlock').replaceWith(dropDownOneAnswer);
  $('.chosen').chosen({
    disable_search_threshold: 10,
  });
});
$('.section-block').on('keyup change paste copy cut', '.dropdownOneEdit p', function () {
  $(this).parent().siblings().chosen('destroy');
  const index = $(this).index();
  const option = $(this).parent().siblings().children()
    .eq(index);
  let val = $(this).text();
  option.val(val).text(val);
  $('.chosen').chosen({
    disable_search_threshold: 10,
  });
});
$('#dropDownMultiAnswer').on('click', function () {
  const dropDownMultiAnswer = $(`
      <div class="questionBlock">
        <div class="questionHeader">
          <h3 contenteditable="true" class="card-title mb-3">
            Dropdown Multi answer
          </h3>
        </div>
        <div class="questionBody py-4">
          <select multiple class ="chosen-select-multi">
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
            <option value="option4">option4</option>
          </select>
          <div class="dropdownMultiEdit mt-3">
            <p contenteditable="true">option1</p>
            <p contenteditable="true">option2</p>
            <p contenteditable="true">option3</p>
            <p contenteditable="true">option4</p>
          </div>
        </div>
      </div>`);
  $('.hoverQuestionClicked .questionBlock').replaceWith(dropDownMultiAnswer);
  $('.chosen-select-multi').chosen({
    disable_search_threshold: 10,
  });
});
$('.section-block').on('keyup change paste copy cut', '.dropdownMultiEdit p', function () {
  $(this).parent().siblings().chosen('destroy');
  const index = $(this).index();
  const option = $(this).parent().siblings().children()
    .eq(index);
  let val = $(this).text();
  option.val(val).text(val);
  $('.chosen-select-multi').chosen({
    disable_search_threshold: 10,
  });
});
$('#sliderAnswer').on('click', function () {
  $('.hoverQuestionClicked input:checkbox').prop('checked', false);
  $('.hoverQuestionClicked input:radio').prop('checked', false);
  const sliderAnswer = $(`
      <div class="questionBlock">
        <div class="questionHeader">
          <h3 contenteditable="true" class="card-title mb-3">
            Slider
          </h3>
        </div>
        <div class="questionBody slider">
          <p class="m-0 p-0" contenteditable="true">slider1</p>
          <div class="range-slider d-flex py-2">
            <input class="range-slider__range" type="range" name="slider" min="0" max="100" value="0">
            <span class="range-slider__value">0</span>
          </div>
          <p class="m-0 p-0" contenteditable="true">slider2</p>
          <div class="range-slider d-flex py-2">
            <input class="range-slider__range" type="range" name="slider" min="0" max="100" value="0">
            <span class="range-slider__value">0</span>
          </div>
          <p class="m-0 p-0" contenteditable="true">slider3</p>
          <div class="range-slider d-flex py-2">
            <input class="range-slider__range" type="range" name="slider" min="0" max="100" value="0">
            <span class="range-slider__value">0</span>
          </div>
        </div>
      </div>`);
  $('.hoverQuestionClicked .questionBlock').replaceWith(sliderAnswer);
});
$('.section-block').on('change input', '.range-slider__range', function () {
  const value = $('.range-slider__value');
  $(this).next(value).html(this.value);
});
$('#rankAnswer').on('click', function () {
  const rankAnswer = $(`
      <div class="questionBlock">
        <div class="questionHeader">
          <h3 contenteditable="true" class="card-title mb-3">
            Rank
          </h3>
        </div>
        <div class="questionBody rank">
          <div class="rank__body">
            <span class="rank__body-text contenteditable" contenteditable="true">text1</span>
            <span class="rank__body-rank">1</span>
          </div>
          <div class="rank__body">
            <span class="rank__body-text contenteditable" contenteditable="true">text2</span>
            <span class="rank__body-rank">2</span>
          </div>
          <div class="rank__body">
            <span class="rank__body-text contenteditable" contenteditable="true">text3</span>
            <span class="rank__body-rank">3</span>
          </div>
        </div>
      </div>`);
  $('.hoverQuestionClicked .questionBlock').replaceWith(rankAnswer);
  $('.rank').sortable({
    cancel: '.contenteditable',
  });
});
$('.section-block').on('sortstop', '.rank', function () {
  $(this).find('.rank__body-rank').each(function (i) {
    $(this).text(i + 1);
  });
});
$('.section-block').on('click', '.rank__body-rank', function () {
  $(this).focus();
});
$('#matrixAnswer').on('click', function () {
  $('.hoverQuestionClicked input:checkbox').prop('checked', false);
  $('.hoverQuestionClicked input:radio').prop('checked', false);
  let radioName = new Date().getTime();
  const matrixAnswer = $(`
      <div class="questionBlock">
        <div class="questionHeader">
          <h3 contenteditable="true" class="card-title mb-3">
            Matrix
          </h3>
        </div>
        <div class="questionBody matrix">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col" contenteditable="true">scalePoint1</th>
                <th scope="col" contenteditable="true">scalePoint2</th>
                <th scope="col" contenteditable="true">scalePoint3</th>
              </tr>
            </thead>
            <tbody>
              <tr class="statement">
                <th scope="row" contenteditable="true">statement1</th>
                <td>
                  <input class="matrix" type="radio" name=${radioName}>
                </td>
                <td>
                  <input class="matrix" type="radio" name=${radioName}>
                </td>
                <td>
                  <input class="matrix" type="radio" name=${radioName}>
                </td>
              </tr>
              <tr class="statement">
                <th scope="row" contenteditable="true">statement2</th>
                <td>
                  <input class="matrix" type="radio" name=${radioName + 1}>
                </td>
                <td>
                  <input class="matrix" type="radio" name=${radioName + 1}>
                </td>
                <td>
                  <input class="matrix" type="radio" name=${radioName + 1}>
                </td>
              </tr>
              <tr class="statement">
                <th scope="row" contenteditable="true">statement3</th>
                <td>
                  <input class="matrix" type="radio" name=${radioName + 2}>
                </td>
                <td>
                  <input class="matrix" type="radio" name=${radioName + 2}>
                </td>
                <td>
                  <input class="matrix" type="radio" name=${radioName + 2}>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>`);
  $('.hoverQuestionClicked .questionBlock').replaceWith(matrixAnswer);
});
$('#txtSingleLineAnswer').on('click', function () {
  $('.hoverQuestionClicked input:checkbox').prop('checked', false);
  $('.hoverQuestionClicked input:radio').prop('checked', false);
  const txtSingleLineAnswer = $(`
      <div class="questionBlock">
        <div class="questionHeader">
          <h3 contenteditable="true" class="card-title mb-3">
            Text Single Line
          </h3>
        </div>
        <div class="questionBody txtSingleLine">
          <input type="text" class="form-control">
        </div>
      </div>`);
  $('.hoverQuestionClicked .questionBlock').replaceWith(txtSingleLineAnswer);
});
$('#txtEssayAnswer').on('click', function () {
  $('.hoverQuestionClicked input:checkbox').prop('checked', false);
  $('.hoverQuestionClicked input:radio').prop('checked', false);
  const txtEssayAnswer = $(`
      <div class="questionBlock">
        <div class="questionHeader ">
          <h3 contenteditable="true" class="card-title mb-3">
            Text Essay
          </h3>
        </div>
        <div class="questionBody txtEssayAnswer">
          <textarea class="form-control" rows="5"></textarea>
        </div>
      </div>`);
  $('.hoverQuestionClicked .questionBlock').replaceWith(txtEssayAnswer);
});
$('#txtFormAnswer').on('click', function () {
  $('.hoverQuestionClicked input:checkbox').prop('checked', false);
  $('.hoverQuestionClicked input:radio').prop('checked', false);
  const txtFormAnswer = $(`
      <div class="questionBlock">
        <div class="questionHeader">
          <h3 contenteditable="true" class="card-title mb-3">
            Text Form
          </h3>
        </div>
        <div class="questionBody txtFormAnswer">
          <form>
            <div class="form-group row text-right">
              <label class="col-sm-2">Date:</label>
              <div class="col-sm-10">
                <input autocomplete="off" type="date" class="form-control w-25">
              </div>
            </div>
            <div class="form-group row text-right">
              <label class="col-sm-2">Phone:</label>
              <div class="col-sm-10">
                <input autocomplete="off" type="tel" class="form-control w-50" placeholder="Phone Number...">
              </div>
            </div>
            <div class="form-group row text-right ">
              <label class="col-sm-2 my-0">Name:</label>
              <div class="col-sm-10">
                <input autocomplete="off" type="text" class="my-0 form-control w-75" placeholder="Name...">
              </div>
            </div>
            <div class="form-group row text-right">
              <label class="col-sm-2">E-mail:</label>
              <div class="col-sm-10">
                <input autocomplete="off" type="email" class="form-control w-75" placeholder="E-mail...">
              </div>
            </div>
            <div class="form-group row text-right">
              <label class="col-sm-2">Password:</label>
              <div class="col-sm-10">
                <input autocomplete="off" type="password" class="form-control w-75" placeholder="Password" required>
              </div>
            </div>
          </form>
        </div>
      </div>`);
  $('.hoverQuestionClicked .questionBlock').replaceWith(txtFormAnswer);
});
$('#uploadImgAnswer').on('click', function () {
  $('.hoverQuestionClicked input:checkbox').prop('checked', false);
  $('.hoverQuestionClicked input:radio').prop('checked', false);
  const className = `class${new Date().getTime()}`;
  const uploadImgAnswer = $(`
      <div class="questionBlock">
        <div class="questionHeader">
          <h3 contenteditable="true" class="card-title mb-3">
            Upload Image
          </h3>
        </div>
        <div class="questionBody text-center uploadImgAnswer">
          <form action="../img/media/" class='dropzone ${className}' enctype="multipart/form-data">
            <div class="dz-default dz-message"><span>Drop files here to upload</span></div>
          </form>
        </div>
      </div>`);
  $('.hoverQuestionClicked .questionBlock').replaceWith(uploadImgAnswer);
  $(`.${className}`).dropzone({
    url: '/file/post',
  });
});

/* PROJECTS\SURVEY: CHANGE QUESTION end-- */
/* PROJECTS\PREVIEW:  */
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
  $('.preview-mobile .dropdownOneEdit').remove();
  $('.preview-mobile .dropdownMultiEdit').remove();
});
/* PROJECTS\PREVIEW:  end--*/
//---------------------------------------------
/* PROJECTS\DISTRIBUTE: web copylick */
$('#distribute__web-btn').on('click', function (e) {
  e.preventDefault();
  $('#distribute__web').select();
  document.execCommand('copy');
});
/* PROJECTS\DISTRIBUTE: web copylick end */

/* PROJECTS\RESPONSES: VIEW ON-CLICK  */
$('.sport-survey').on('click', function () {
  $('.showResponse').toggleClass('d-none');
});
/* PROJECTS\RESPONSES: VIEW ON-CLICK end-- */

/* PROJECTS\REPORTS: ADD NOTE */
if (/reports.html/.test(window.location)) {
  $('.note').summernote({
    height: 100,
  });
  $('.note-editor').addClass('d-none');
}
$('.reportSection')
  .on('click', '.noteBTN', function () {
    $('.reportAddNote').toggleClass('d-none');
    $('.reportCloseNote').toggleClass('d-none');
    $('.note-editor').toggleClass('d-none');
    if ($('.note-editable').val()) {
      $('.noteValue').removeClass('visibilityHidden');
    }
  });
$('.reportSection').on('change keypress keyup keydown paste cut', '.note-editable', function () {
  $('.noteVal').html($('.note-editable').html());
  if ($('.noteVal').is(':empty')) {
    $('.noteValue').addClass('visibilityHidden');
  } else {
    $('.noteValue').removeClass('visibilityHidden');
  }
});

/* PROJECTS\REPORTS: ADD NOTE end */

/* PROJECTS\REPORTS: ADD VISUAL */
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
        'answer1', 'answer2',
      ],
      datasets: [{
        label: 'number of answers',
        data: [
          1, 2,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)',
        ],
        borderColor: [
          'rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    },
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
/* PROJECTS\REPORTS: ADD VISUAL end */

/* DASHBOARD: */
function chartDashboard(type, canvasID) {
  if (/index.html/.test(window.location.href) || window.location.pathname === '/projects/FreeMinds/' || window.location.host === 'freeminds.com' || window.location.host === 'freeminds-mena.net') {
    let ctx = document
      .querySelector(`#${canvasID}`)
      .getContext('2d');
    let chart = new Chart(ctx, {
      type: `${type}`,
      data: {
        datasets: [{
          label: 'First dataset',
          data: [
            0, 20, 40, 50,
          ],
          backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 230, 0.8)', 'rgba(54, 162, 240, 0.8)', 'rgba(54, 162, 135, 0.8)'],
        }],
        labels: ['January', 'February', 'March', 'April'],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: 1,
              suggestedMax: 50,
            },
          }],
        },
      },
    });
  }
}
chartDashboard('bar', 'New-Survey-per-Month');
/* DASHBOARD: end */
