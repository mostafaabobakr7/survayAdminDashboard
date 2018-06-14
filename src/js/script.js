// Allow Bootstrap dropdown menus to have forms/checkboxes inside,
// and when clicking on a dropdown item, the menu doesn't disappear.
$(document).on('click', '.dropdown-menu.dropdown-menu-form', function (e) {
  e.stopPropagation();
});
// Bootstrap popover
$(function () {
  $('[data-toggle="popover"]').popover({
    trigger: 'hover',

  });
});
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
function createProjectBTN(ev) {
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
}
$('#createProjectBTN').on('click', createProjectBTN);
$('#projectName').keypress(function (e) {
  if (e.which === 13) {
    e.preventDefault();
    $('#createProjectBTN').click();
  }
});
$('#projectName').on('change keyup paste', function () {
  $(this).removeClass('is-invalid');
  $(this).addClass('is-valid');
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
  // PROJECTS\SURVEY: STICKY RIGHT CONTROLS end----
  const addImg = $(`<i class="fa fa-picture-o addImgIcon" title="add image"></i>`);
  $(document).on('click', '[contenteditable="true"]', function () {
    $(document)
      .find('[contenteditable="true"]')
      .removeClass('editable-focus');
    $(this).addClass('editable-focus');
    if (!$(this).parent('.dropdownOneEdit').length > 0 && !$(this).parent('.dropdownMultiEdit').length > 0 && !$(this).parents('.matrix').length > 0) {
      addImg.insertAfter(this);
    }
    if ($(this).find('picture').length > 0) {
      addImg.remove();
    }
    /*     $(this).focusout(function () {
          setTimeout(() => {
            $(this).removeClass('editable-focus');
            $(this).next().remove();
          }, 200);
        }); */
  });
  $(document).on('click', '.addImgIcon', function () {
    $('#addImgModal').modal('toggle');
  });
}


function getEdit() {
  const content = $('.editable-focus');
  return content;
}
$('#addImgModal').on('click', 'picture', function () {
  const contentTxt = getEdit();
  $(this).find('.removeImgIcon').removeClass('d-none');
  const imgCopy = $(this).clone();
  $('.addImgIcon').remove();
  contentTxt.append(imgCopy);
  contentTxt.css('display', 'inline-grid');
  $('#addImgModal').modal('hide');

  $('.hoverQuestionClicked').on('click', '.removeImgIcon', function () {
    const picture = $(this).parent();
    picture.parent().removeAttr('style');
    picture.remove();
  });
});

/* PROJECTS\SURVEY: CONTENTEDITABLE on CLICK end--- */

/* PROJECTS\SURVEY: ADD LIBRARY IMAGES TO MODAL  */
$('#addImgModalBody').load('library.html .libraryImages');
$('#addImgModal').on('shown.bs.modal hidden.bs.modal', function () {
  $(this).find('.removeImgIcon').addClass('d-none');
});
/* PROJECTS\SURVEY: ADD LIBRARY IMAGES TO MODAL end */

/* PROJECTS\SURVEY: ADD BLOCK function */
function addBlock() {
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
}

function removeBlock() {
  $(this)
    .parent()
    .parent()
    .remove();
}
$('.section-block').on('click', '#addBlock', addBlock);
$('.section-block').on('click', '.blockClose', removeBlock);
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
      <div class="col-1 questionNumberContainer">
        <div class="questionNumber">
          <h4 contenteditable="true">Q${num + 1}</h4>
        </div>
      </div>
      <div class = "col-10" >
        <div class="questionBlock">
          <div class="questionHeader">
            <h3 contenteditable="true" class="card-title  mb-3">
              Click to write the question text
            </h3>
          </div>
          <div class="questionBody singleMulti">
            <div class="card-text mb-2 alignVertical">
              <input type="radio" name=${radioName}>
                <span contenteditable="true">Click to write Choice 1</span>
            </div>
            <div class="card-text mb-2 alignVertical">
              <input type="radio" name=${radioName}>
                <span contenteditable="true">Click to write Choice 2</span>
            </div>
            <div class="card-text mb-2 alignVertical">
              <input type="radio" name=${radioName}>
                <span contenteditable="true">Click to write Choice 3</span>
            </div>
          </div>
        </div>
        </div>
        <div class="col-1 d-flex justify-content-end">
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

function questionInserBefore() {
  /* GET CARD_BODY of the CLICKED ICON to insert BEFORE IT */
  const elBefore = $(this)
    .parent()
    .parent()
    .parent();
  /* elBefore = <div class="row py-3"> */
  addRadio('BEFORE', elBefore);
}

function questionInserAfter() {
  /* GET CARD_BODY of the CLICKED ICON to insert AFTER IT */
  const elAfter = $(this)
    .parent()
    .parent()
    .parent();
  /* elAfter = <div class="row py-3"> */
  addRadio('AFTER', elAfter);
}

function questionDelete() {
  /* GET CARD_BODY of the CLICKED ICON to insert AFTER IT */
  /* elementDelete = <div class="row py-3"> */
  $(this)
    .parent()
    .parent()
    .parent()
    .remove();
}
$('.section-block').on('click', '.questionInserBefore', questionInserBefore);
$('.section-block').on('click', '.questionInserAfter', questionInserAfter);
$('.section-block').on('click', '.questionDelete', questionDelete);
/* PROJECTS\SURVEY: ADD QUESTION RADIO end-- */
/* PROJECTS\SURVEY: MOVE QUESTION UP and DOWN */
function questionMoveUp() {
  // <div .row></div>
  const questionPosition = $(this)
    .parent()
    .parent();
  // get upper sibling
  const questionPositionPrevSibling = questionPosition.prev();
  $(questionPosition).insertBefore(questionPositionPrevSibling);
}

function questionMoveDown() {
  const questionPosition = $(this)
    .parent()
    .parent();
  const questionPositionPrevSibling = questionPosition.next();
  $(questionPosition).insertAfter(questionPositionPrevSibling);
}
$('.section-block').on('click', '.questionMove__up', questionMoveUp);
$('.section-block').on('click', '.questionMove__down', questionMoveDown);
/* PROJECTS\SURVEY: MOVE QUESTION UP and DOWN end-- */
/* PROJECTS\SURVEY: QUESTION ON CLICK CHANGE TYPE */
function choicesCurrentNum() {
  let size;
  if ($('.hoverQuestionClicked').find('.alignVertical').length > 0) {
    size = $('.hoverQuestionClicked .card-text').length;
  }
  if ($('.hoverQuestionClicked').find('.alignHorizontal').length > 0) {
    size = $('.hoverQuestionClicked .upperHead td').length;
  }
  if ($('.hoverQuestionClicked').find('.alignColumn').length > 0) {
    size = $('.hoverQuestionClicked .upperHead td').length;
  }
  if ($('.hoverQuestionClicked').find('.chosen').length > 0) {
    size = $('.hoverQuestionClicked .chosen option').length;
  }
  if ($('.hoverQuestionClicked').find('.dropdownListChosen').length > 0) {
    size = $('.hoverQuestionClicked .dropdownListChosen:first option').length;
  }
  if ($('.hoverQuestionClicked').find('.chosen-select-multi').length > 0) {
    size = $('.hoverQuestionClicked .chosen-select-multi option').length;
  }
  if ($('.hoverQuestionClicked').find('.range-slider').length > 0) {
    size = $('.hoverQuestionClicked .range-slider').length;
  }
  if ($('.hoverQuestionClicked').find('.stars-slider').length > 0) {
    size = $('.hoverQuestionClicked .stars-slider').length;
  }
  if ($('.hoverQuestionClicked').find('.rank__body').length > 0) {
    size = $('.hoverQuestionClicked .rank__body').length;
  }
  // count statements
  if ($('.hoverQuestionClicked').find('.matrix').length > 0) {
    if ($('.hoverQuestionClicked .matrixLikert tbody tr:last th').text() !== 'Total') {
      size = $('.hoverQuestionClicked .matrix tbody tr').length;
    } else {
      size = $('.hoverQuestionClicked .matrix tbody tr').length - 1;
    }
  }
  return size;
}

function scalePointHeadCounts() {
  let scalePointHead;
  if ($('.hoverQuestionClicked').find('.matrixLikert').length > 0) {
    if ($('.hoverQuestionClicked .matrixLikert thead tr th:last').text() !== 'Total') {
      scalePointHead = $('.hoverQuestionClicked .matrix thead tr th').length - 1;
    } else {
      scalePointHead = $('.hoverQuestionClicked .matrix thead tr th').length - 2;
    }
  }
  if ($('.hoverQuestionClicked').find('.matrixBipolar').length > 0) {
    scalePointHead = $('.hoverQuestionClicked .statement:last td').length;
  }
  if ($('.hoverQuestionClicked').find('.dropdownListChosen').length > 0) {
    scalePointHead = $('.hoverQuestionClicked .dropdownListChosen:first option').length;
  }
  if ($('.hoverQuestionClicked').find('.matrixProfile').length > 0) {
    scalePointHead = $('.hoverQuestionClicked .matrixProfile tr:first td').length;
  }
  return scalePointHead;
}

function hoverQuestionClicked() {
  $(this)
    .addClass('hoverQuestionClicked')
    .siblings()
    .removeClass('hoverQuestionClicked');
  /* CHECK IF HORIZONTAL OR VERTICAL */
  if ($('.hoverQuestionClicked').find('.singleMulti').length > 0) {
    $('.choiceAlign').removeClass('d-none');
    if ($('.hoverQuestionClicked .singleMulti').find('.alignVertical').length > 0) {
      $('#vertical').prop('checked', true);
      $('#horizontal').prop('checked', false);
    }
    if ($('.hoverQuestionClicked .singleMulti').find('.alignHorizontal').length > 0) {
      $('#horizontal').prop('checked', true);
      $('#vertical').prop('checked', false);
    }
  }
  if ($('.hoverQuestionClicked').find('.slider').length > 0) {
    $('.sliderType').removeClass('d-none');
  }
  /* DEFINE IF IT A RADIO */
  if ($(this).find(':radio').length > 0) {
    $('#singleAnswers').prop('checked', true);
    $('#singleAnswers').siblings().prop('checked', false);
    $('.choiceAlign').removeClass('d-none');
    $('.statementSmall').addClass('d-none');
    $('.scalePoint').addClass('d-none');
    $('.sliderType').addClass('d-none');
  }
  /* DEFINE IF IT A CHECKBOX */
  if ($(this).find(':checkbox').length > 0) {
    $('#multibleAnswers').prop('checked', true);
    $('#multibleAnswers').siblings().prop('checked', false);
    $('.choiceAlign').removeClass('d-none');
    $('.statementSmall').addClass('d-none');
    $('.scalePoint').addClass('d-none');
    $('.sliderType').addClass('d-none');
  }
  /* DEFINE IF IT A DROPDOWN SINGLE */
  if ($(this).find('.chosen').length > 0) {
    $('#dropDownOneAnswer').prop('checked', true);
    $('#dropDownOneAnswer').siblings().prop('checked', false);
    $('.choiceAlign').addClass('d-none');
    $('.statementSmall').addClass('d-none');
    $('.scalePoint').addClass('d-none');
    $('.sliderType').addClass('d-none');
  }
  /* DEFINE IF IT A DROPDOWN MULTIPLE */
  if ($(this).find('.chosen-select-multi').length > 0) {
    $('#dropDownMultiAnswer').prop('checked', true);
    $('#dropDownMultiAnswer').siblings().prop('checked', false);
    $('.choiceAlign').addClass('d-none');
    $('.statementSmall').addClass('d-none');
    $('.scalePoint').addClass('d-none');
    $('.sliderType').addClass('d-none');
  }
  /* DEFINE IF IT A SLIDER */
  if ($(this).find('.slider').length > 0) {
    $('#sliderAnswer').prop('checked', true);
    $('#sliderAnswer').siblings().prop('checked', false);
    $('.choiceAlign').addClass('d-none');
    $('.statementSmall').addClass('d-none');
    $('.scalePoint').addClass('d-none');
    $('.sliderType').removeClass('d-none');
  }
  /* DEFINE IF IT A RANK */
  if ($(this).find('.rank').length > 0) {
    $('#rankAnswer').prop('checked', true);
    $('#rankAnswer').siblings().prop('checked', false);
    $('.choiceAlign').addClass('d-none');
    $('.statementSmall').addClass('d-none');
    $('.scalePoint').addClass('d-none');
    $('.sliderType').addClass('d-none');
  }
  /* DEFINE IF IT A MATRIX */
  if ($(this).find('.matrix').length > 0) {
    $('#matrixAnswer').prop('checked', true);
    $('#matrixAnswer').siblings().prop('checked', false);
    $('.choiceAlign').addClass('d-none');
    $('.statementSmall').removeClass('d-none');
    $('.scalePoint').removeClass('d-none');
    $('.scalePointSpan').text(scalePointHeadCounts());
  }
  /* DEFINE IF IT A TXT SINGLE LINE */
  if ($(this).find('.txtSingleLine').length > 0) {
    $('#txtSingleLineAnswer').prop('checked', true);
    $('#txtSingleLineAnswer').siblings().prop('checked', false);
    $('.choiceAlign').addClass('d-none');
    $('.statementSmall').addClass('d-none');
    $('.scalePoint').addClass('d-none');
    $('.sliderType').addClass('d-none');
  }
  /* DEFINE IF IT A TXT txtEssayAnswer */
  if ($(this).find('.txtEssayAnswer').length > 0) {
    $('#txtEssayAnswer').prop('checked', true);
    $('#txtEssayAnswer').siblings().prop('checked', false);
    $('.choiceAlign').addClass('d-none');
    $('.statementSmall').addClass('d-none');
    $('.scalePoint').addClass('d-none');
    $('.sliderType').addClass('d-none');
  }
  /* DEFINE IF IT A TXT txtFormAnswer */
  if ($(this).find('.txtFormAnswer').length > 0) {
    $('#txtFormAnswer').prop('checked', true);
    $('#txtFormAnswer').siblings().prop('checked', false);
    $('.choiceAlign').addClass('d-none');
    $('.statementSmall').addClass('d-none');
    $('.scalePoint').addClass('d-none');
    $('.sliderType').addClass('d-none');
  }
  /* DEFINE IF IT A TXT uploadImgAnswer */
  if ($(this).find('.uploadImgAnswer').length > 0) {
    $('#uploadImgAnswer').prop('checked', true);
    $('#uploadImgAnswer').siblings().prop('checked', false);
    $('.choiceAlign').addClass('d-none');
    $('.statementSmall').addClass('d-none');
    $('.scalePoint').addClass('d-none');
    $('.sliderType').addClass('d-none');
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
}

function onQuestionTypeChange() {
  $('.choices span').text(choicesCurrentNum);
  if ($('.hoverQuestionClicked').find('.slider').length > 0) {
    $('.sliderType').removeClass('d-none');
  } else {
    $('.sliderType').addClass('d-none');
  }
  if ($('.hoverQuestionClicked').find('.matrix').length > 0) {
    $('.statementSmall').removeClass('d-none');
    $('.scalePoint').removeClass('d-none');
    $('.choiceAlign').addClass('d-none');
    $('.scalePointSpan').text(scalePointHeadCounts());
  } else {
    $('.statementSmall').addClass('d-none');
    $('.scalePoint').addClass('d-none');
  }
  setTimeout(function () {
    if ($('.hoverQuestionClicked').find('.singleMulti').length > 0) {
      $('.choiceAlign').removeClass('d-none');
      if ($('.hoverQuestionClicked').find('.alignVertical').length > 0) {
        $('#vertical').prop('checked', true);
        $('#horizontal').prop('checked', false);
      }
      if ($('.hoverQuestionClicked').find('.alignHorizontal').length > 0) {
        $('#horizontal').prop('checked', true);
        $('#vertical').prop('checked', false);
      }
    } else {
      $('.choiceAlign').addClass('d-none');
    }
  }, 100);
}

if (/edit_survey.html/.test(window.location.href)) {
  $('.section-block').on('click', '.hoverQuestion', hoverQuestionClicked);
  $('input[type=radio][name=answers]').on('change click', onQuestionTypeChange);
}
/* PROJECTS\SURVEY: QUESTION ON CLICK CHANGE TYPE end-- */
/* PROJECTS\SURVEY: INC\DEC */

function choicesDecrease() {
  const spanNum = $('.choices span').html();
  if (spanNum !== '1') {
    if ($('.hoverQuestionClicked').find('.alignVertical').length > 0) {
      $('.hoverQuestionClicked .alignVertical:last-child').remove();
    }
    if ($('.hoverQuestionClicked').find('.alignHorizontal').length > 0) {
      $('.hoverQuestionClicked .upperHead td:last').remove();
      $('.hoverQuestionClicked .lowerHead td:last').remove();
    }
    if ($('.hoverQuestionClicked').find('.alignColumn').length > 0) {
      $('.hoverQuestionClicked .upperHead td:last').remove();
    }
    if ($('.hoverQuestionClicked').find('.chosen').length > 0) {
      $('.hoverQuestionClicked .chosen option:last').remove();
      $('.hoverQuestionClicked .dropdownOneEdit p:last-child').remove();
      $('.hoverQuestionClicked .chosen').val('').trigger('chosen:updated');
    }
    if ($('.hoverQuestionClicked').find('.chosen-select-multi').length > 0) {
      $('.hoverQuestionClicked .chosen-select-multi option:last').remove();
      $('.hoverQuestionClicked .dropdownMultiEdit p:last-child').remove();
      $('.hoverQuestionClicked .chosen-select-multi').val('').trigger('chosen:updated');
    }
    if ($('.hoverQuestionClicked').find('.range-slider').length > 0) {
      $('.hoverQuestionClicked .slider .range-slider:last-child').prev().remove();
      $('.hoverQuestionClicked .slider .range-slider:last-child').remove();
    }
    if ($('.hoverQuestionClicked').find('.stars-slider').length > 0) {
      $('.hoverQuestionClicked .slider .stars-slider:last-child').remove();
    }
    if ($('.hoverQuestionClicked').find('.rank').length > 0) {
      $('.hoverQuestionClicked .rank .rank__body:last-child').remove();
    }
    if ($('.hoverQuestionClicked').find('.matrixLikert').length > 0) {
      if ($('.hoverQuestionClicked .matrix tbody tr:last th').text() !== 'Total') {
        $('.hoverQuestionClicked .matrix tbody tr:last-child').remove();
        $('.scalePointSpan').text(scalePointHeadCounts());
      } else {
        $('.hoverQuestionClicked .matrix tbody tr').eq(-2).remove();
        $('.scalePointSpan').text(scalePointHeadCounts());
      }
    }
    if ($('.hoverQuestionClicked').find('.matrixProfile').length > 0) {
      if ($('.hoverQuestionClicked .matrix tbody tr:last th').text() !== 'Total') {
        $('.hoverQuestionClicked .matrixProfile tr:last').remove();
      }
    }
    if ($('.hoverQuestionClicked').find('.matrixBipolar').length > 0 ||
      $('.hoverQuestionClicked').find('.matrixMaxDiff').length > 0) {
      if ($('.hoverQuestionClicked .matrix tbody tr:last th').text() !== 'Total') {
        $('.hoverQuestionClicked .matrix tbody .statement:last').remove();
      }
    }

    if ($('.hoverQuestionClicked').find('.matrixDropdownStatement').length > 0) {
      $('.hoverQuestionClicked .matrixDropdownStatement:last').remove();
    }
  }
  $('.choices span').text(choicesCurrentNum);
}

function choicesIncrease() {
  let choiceNum = choicesCurrentNum();
  if (choiceNum !== 10) {
    if ($('.hoverQuestionClicked').find('.alignVertical').length > 0) {
      const inc = $('.hoverQuestionClicked .alignVertical:last-child').clone();
      inc.insertAfter('.hoverQuestionClicked .alignVertical:last-child');
      $('.hoverQuestionClicked .alignVertical:last-child span').text(`Click to write Choice ${choiceNum + 1}`);
    }
    if ($('.hoverQuestionClicked').find('.alignHorizontal').length > 0) {
      const tUpper = $('.upperHead td:last').clone();
      tUpper.insertAfter('.upperHead td:last');
      $('.upperHead td:last span').text(`Click to write Choice ${choiceNum + 1}`);
      const tLower = $('.lowerHead td:last').clone();
      tLower.insertAfter('.lowerHead td:last');
    }
    if ($('.hoverQuestionClicked').find('.alignColumn').length > 0) {
      const alignColumn = $('.hoverQuestionClicked tbody tr td:last').clone();
      $('.hoverQuestionClicked tbody tr').append(alignColumn);
      $('.hoverQuestionClicked tbody tr td:last span').text(`Click to write Choice ${choiceNum + 1}`);
    }
    const choiceDropdown = $(`<option value="option${choiceNum + 1}">option${choiceNum + 1}</option>`);
    const choiceDropdownEdit = $(`<p contenteditable="true">option${choiceNum + 1}</p>`);
    if ($('.hoverQuestionClicked').find('.chosen').length > 0) {
      $('.hoverQuestionClicked .dropdownOneEdit').append(choiceDropdownEdit);
      $('.hoverQuestionClicked .chosen').append(choiceDropdown);
      $('.hoverQuestionClicked .chosen').val('').trigger('chosen:updated');
    }

    if ($('.hoverQuestionClicked').find('.chosen-select-multi').length > 0) {
      $('.hoverQuestionClicked .dropdownMultiEdit').append(choiceDropdownEdit);
      $('.hoverQuestionClicked .chosen-select-multi').append(choiceDropdown);
      $('.hoverQuestionClicked .chosen-select-multi').val('').trigger('chosen:updated');
    }

    if ($('.hoverQuestionClicked .slider').find('.range-slider').length > 0) {
      const sliderTxt = $('.hoverQuestionClicked .slider p:last').clone();
      const sliderDiv = $('.hoverQuestionClicked .slider .range-slider:last').clone();
      $('.hoverQuestionClicked .slider').append(sliderTxt).append(sliderDiv);
      $('.hoverQuestionClicked .slider p:last').text(`slider${choiceNum + 1}`);
    }
    if ($('.hoverQuestionClicked .slider').find('.stars-slider').length > 0) {
      const star = $('.hoverQuestionClicked .stars-slider:last').clone();
      star.insertAfter('.hoverQuestionClicked .stars-slider:last');
      $('.hoverQuestionClicked .stars-slider:last span').text(`rate${choiceNum + 1}`);
    }
    if ($('.hoverQuestionClicked').find('.rank').length > 0) {
      const rank = $('.hoverQuestionClicked .rank .rank__body:last').clone();
      $('.hoverQuestionClicked .rank').append(rank);
      $('.hoverQuestionClicked .rank .rank__body:last .rank__body-text').text(`text${choiceNum + 1}`);
      $('.hoverQuestionClicked .rank .rank__body:last .rank__body-rank').text(`${choiceNum + 1}`);
    }
  }

  if ($('.hoverQuestionClicked').find('.matrixLikert').length > 0) {
    let matrixName = new Date().getTime();
    if (choicesCurrentNum() !== 10) {
      if ($('.hoverQuestionClicked .matrix tbody tr:last th').text() !== 'Total') {
        const choiceMatrixStatement = $('.hoverQuestionClicked .statement:last').clone();
        $('.hoverQuestionClicked .matrix tbody').append(choiceMatrixStatement);
        $('.hoverQuestionClicked .statement:last').find('input').attr('name', matrixName);
        $('.hoverQuestionClicked .statement:last th').text(`statement${choicesCurrentNum()}`);
      } else {
        const choiceMatrixStatement = $('.hoverQuestionClicked .statement').eq(-2).clone();
        $('.hoverQuestionClicked .matrix tbody .statement:last').before(choiceMatrixStatement);
        $('.hoverQuestionClicked .statement th').eq(-2).text(`statement${choicesCurrentNum()}`);
      }
    }
  }
  if ($('.hoverQuestionClicked').find('.matrixProfile').length > 0) {
    if (choicesCurrentNum() !== 10) {
      if ($('.hoverQuestionClicked .matrix tbody tr:last th').text() !== 'Total') {
        const clone = $('.hoverQuestionClicked .matrixProfile tr:last').clone();
        const newName = Number($('.hoverQuestionClicked .matrixProfile tr:last td:last input').prop('name')) + 1;
        clone.insertAfter('.hoverQuestionClicked .matrixProfile tr:last');
        $('.hoverQuestionClicked .matrixProfile tr:last th').text(`statement${choiceNum + 1}`);
        $('.hoverQuestionClicked .matrixProfile tr:last td input').prop('name', newName);
      }
    }
  }

  if ($('.hoverQuestionClicked').find('.matrixBipolar').length > 0) {
    let matrixName = new Date().getTime();
    if (choicesCurrentNum() !== 10) {
      if ($('.hoverQuestionClicked .matrix tbody tr:last th').text() !== 'Total') {
        const choiceMatrixStatement = $('.hoverQuestionClicked .statement:last').clone();
        $('.hoverQuestionClicked .matrix tbody').append(choiceMatrixStatement);
        $('.hoverQuestionClicked .statement:last').find('input').attr('name', matrixName);
        $('.hoverQuestionClicked .statement:last th:first').text(`statement${choicesCurrentNum()}`);
      }
    }
  }

  if ($('.hoverQuestionClicked').find('.matrixMaxDiff').length > 0) {
    let matrixName = new Date().getTime();
    if (choicesCurrentNum() !== 10) {
      if ($('.hoverQuestionClicked .matrix tbody tr:last th').text() !== 'Total') {
        const choiceMatrixStatement = $('.hoverQuestionClicked .statement:last').clone();
        $('.hoverQuestionClicked .matrix tbody').append(choiceMatrixStatement);
        $('.hoverQuestionClicked .statement:last').find('input').attr('name', matrixName);
        $('.hoverQuestionClicked .statement:last td').eq(1).text(`statement${choicesCurrentNum()}`);
      }
    }
  }
  if ($('.hoverQuestionClicked').find('.dropdownListChosen').length > 0) {
    $('.matrixDropdownStatement .addImgIcon').remove();
    $('.hoverQuestionClicked .matrixDropdownStatement:last').clone().insertAfter('.hoverQuestionClicked .matrixDropdownStatement:last');
    $('.hoverQuestionClicked .matrixDropdownStatement:last th').text(`statement${choicesCurrentNum()}`);
    $('.hoverQuestionClicked .matrixDropdownStatement:last .chosen-container').remove();
    $('.dropdownListChosen').chosen({
      disable_search_threshold: 10,
      width: '60%',
    });
  }
  $('.choices span').text(choicesCurrentNum);
}

function scalePointDecrease() {
  if ($('.hoverQuestionClicked ').find('.matrixLikert').length > 0) {
    let scalePointHeadCount = scalePointHeadCounts();
    if (scalePointHeadCount !== 2) {
      if ($('.hoverQuestionClicked .matrixLikert thead tr th:last').text() !== 'Total') {
        $('.hoverQuestionClicked thead th:last-child').remove();
        $('.hoverQuestionClicked .statement').each(function () {
          $(this).find('td:last-child').remove();
        });
      } else {

        $('.hoverQuestionClicked thead th').eq(-2).remove();
        $('.hoverQuestionClicked .statement').each(function () {
          $(this).find('td').eq(-2).remove();
        });
      }
    }
  }
  if ($('.hoverQuestionClicked ').find('.matrixBipolar').length > 0) {
    if ($('.hoverQuestionClicked .matrixLikert thead tr th:last').text() !== 'Total') {
      let scalePointHeadCount = scalePointHeadCounts();
      if (scalePointHeadCount !== 2) {
        $('.hoverQuestionClicked .statement').each(function () {
          $(this).find('td:last').remove();
        });
      }
    }
  }
  if ($('.hoverQuestionClicked').find('.matrixProfile').length > 0) {
    if ($('.hoverQuestionClicked .matrixLikert thead tr th:last').text() !== 'Total') {
      let scalePointHeadCount = scalePointHeadCounts();
      if (scalePointHeadCount !== 2) {
        $('.hoverQuestionClicked .matrixProfile tr').each(function () {
          $(this).find('td:last').remove();
        });
      }
    }
  }
  if ($('.hoverQuestionClicked').find('.dropdownListChosen').length > 0) {
    let scalePointHeadCount = scalePointHeadCounts();
    if (scalePointHeadCount !== 2) {
      $('.hoverQuestionClicked .dropdownOneEdit').each(function () {
        $(this).find(':last-child').remove();
      });
      $('.hoverQuestionClicked .dropdownListChosen').each(function () {
        $(this).find(':last-child').remove();
      });
      $('.hoverQuestionClicked .dropdownListChosen').val('').trigger('chosen:updated');
    }
  }
  $('.scalePointSpan').text(scalePointHeadCounts());
}

function scalePointIncrease() {
  if ($('.hoverQuestionClicked').find('.matrixLikert').length > 0) {
    let scalePointHeadCount = scalePointHeadCounts();
    if (scalePointHeadCount !== 10) {
      const scalePointHead = $(`<th scope="col" contenteditable="true">scalePoint${scalePointHeadCount + 1}</th>`);
      if ($('.hoverQuestionClicked .matrixLikert thead tr th:last').text() !== 'Total') {
        $('.hoverQuestionClicked thead tr').append(scalePointHead);
        $('.hoverQuestionClicked .statement').each(function () {
          const lasttd = $(this).find('td:last').clone();
          $(this).append(lasttd);
        });
      } else {
        $('.hoverQuestionClicked thead tr th:last').before(scalePointHead);
        $('.hoverQuestionClicked .statement').each(function () {
          const lasttd = $(this).find('td').eq(-2).clone();
          $(this).append(lasttd);
        });
      }
    }
  }
  if ($('.hoverQuestionClicked ').find('.matrixBipolar').length > 0) {
    if ($('.hoverQuestionClicked .matrixLikert thead tr th:last').text() !== 'Total') {
      let scalePointHeadCount = scalePointHeadCounts();
      if (scalePointHeadCount !== 10) {
        $('.hoverQuestionClicked .statement').each(function () {
          const inc = $(this).find('td:last').clone();
          inc.insertAfter($(this).find('td:last'));
        });
      }
    }
  }

  if ($('.hoverQuestionClicked').find('.matrixProfile').length > 0) {
    if ($('.hoverQuestionClicked .matrixLikert thead tr th:last').text() !== 'Total') {
      let scalePointHeadCount = scalePointHeadCounts();
      if (scalePointHeadCount !== 10) {
        $('.hoverQuestionClicked .matrixProfile tr').each(function () {
          const inc = $(this).find('td:last').clone();
          inc.insertAfter($(this).find('td:last'));
          $(this).find('td:last label').text(`scalePoint${scalePointHeadCount + 1}`);
        });
      }
    }
  }
  if ($('.hoverQuestionClicked').find('.dropdownListChosen').length > 0) {
    let choiceNum = scalePointHeadCounts();
    if (choiceNum !== 10) {
      $('.hoverQuestionClicked .dropdownOneEdit').each(function () {
        const clone = $(this).find(':last-child').clone();
        $(this).append(clone);
        $(this).find(':last-child').text(`option${choiceNum + 1}`).removeClass('editable-focus');
      });
      $('.hoverQuestionClicked .dropdownListChosen').each(function () {
        const clone = $(this).find(':last-child').clone();
        $(this).append(clone);
        $(this).find(':last-child').text(`option${choiceNum + 1}`);
      });
      $('.hoverQuestionClicked .dropdownListChosen').val('').trigger('chosen:updated');
    }
  }
  $('.scalePointSpan').text(scalePointHeadCounts());
}

$('.choicesDecrease').on('click', choicesDecrease);
$('.choicesIncrease').on('click', choicesIncrease);
$('.scalePointDecrease').on('click', scalePointDecrease);
$('.scalePointIncrease').on('click', scalePointIncrease);
/* PROJECTS\SURVEY: INC\DEC end */
/* PROJECTS\SURVEY: CHANGE QUESTION */

// singleAnswers
function singleAnswers() {
  $('.hoverQuestionClicked input:checkbox').prop('checked', false);
  $('.hoverQuestionClicked input:radio').prop('checked', false);
  if ($('.hoverQuestionClicked input').prop('type') === 'checkbox') {
    $('.hoverQuestionClicked .singleMulti input').prop('type', 'radio');
  } else {
    const radioName = new Date().getTime();
    const singleAnswer = $(`
        <div class="questionBlock">
          <div class="questionHeader">
            <h3 contenteditable="true" class="card-title mb-3">
              Single answer
            </h3>
          </div>
          <div class="questionBody singleMulti">
            <div class = "card-text mb-2 alignVertical">
              <input type="radio" name=${radioName}>
              <span contenteditable="true">Click to write Choice 1</span>
            </div>
            <div class="card-text mb-2 alignVertical">
              <input type="radio" name=${radioName}>
              <span contenteditable="true">Click to write Choice 2</span>
            </div>
            <div class="card-text mb-2 alignVertical">
              <input type="radio" name=${radioName}>
              <span contenteditable="true">Click to write Choice 3</span>
            </div>
          </div>
        </div>`);
    $('.hoverQuestionClicked .questionBlock').replaceWith(singleAnswer);
  }
}
// multibleAnswers
function multibleAnswers() {
  $('.hoverQuestionClicked input:checkbox').prop('checked', false);
  $('.hoverQuestionClicked input:radio').prop('checked', false);
  if ($('.hoverQuestionClicked .singleMulti input').prop('type') !== 'radio') {
    singleAnswers();
  }
  $('.hoverQuestionClicked .singleMulti input').prop('type', 'checkbox');
}
// align Ver, Hor, Col
function alignV() {
  if ($('.hoverQuestionClicked').find('.alignColumn').length > 0) {
    const qsTitle = $('.hoverQuestionClicked .questionHeader .card-title').html();
    const tr = $('.hoverQuestionClicked div.alignColumn').removeClass('alignColumn').addClass('alignVertical');
    const alignHor = $(`
    <div class="questionBlock">
      <div class="questionHeader">
        <h3 contenteditable="true" class="card-title mb-3">
          Vertical
        </h3>
      </div>
      <div class="questionBody singleMulti">
      </div>
    </div>
    `);
    $('.hoverQuestionClicked .questionBlock').replaceWith(alignHor);
    $('.hoverQuestionClicked .questionHeader .card-title').html(qsTitle);
    tr.appendTo('.hoverQuestionClicked .questionBody');
  }
  if ($('.hoverQuestionClicked').find('.alignHorizontal').length > 0) {
    const qsTitle = $('.hoverQuestionClicked .questionHeader .card-title').html();
    const trTwo = $('.hoverQuestionClicked .alignHorizontal input');
    const trOne = $('.hoverQuestionClicked .alignHorizontal span');
    const alignVer = $(`
    <div class="questionBlock">
      <div class="questionHeader">
        <h3 contenteditable="true" class="card-title mb-3">
          Vertical
        </h3>
      </div>
      <div class="questionBody singleMulti">
      </div>
    </div>
    `);
    $('.hoverQuestionClicked .questionBlock').replaceWith(alignVer);
    $('.hoverQuestionClicked .questionHeader .card-title').html(qsTitle);
    trTwo.appendTo('.hoverQuestionClicked .questionBody').wrap('<div class="card-text mb-2 alignVertical"></div>');
    trOne.each(function (i) {
      $('.hoverQuestionClicked .alignVertical').eq(i).append($(this));
    });
  }
}

function alignH() {
  if ($('.hoverQuestionClicked').find('.alignColumn').length > 0) {
    alignV();
  }
  if ($('.hoverQuestionClicked').find('.alignVertical').length > 0) {
    const qsTitle = $('.hoverQuestionClicked .questionHeader .card-title').html();
    const trTwo = $('.hoverQuestionClicked .alignVertical input');
    const trOne = $('.hoverQuestionClicked .alignVertical span');
    const alignHor = $(`
    <div class="questionBlock">
    <div class="questionHeader">
        <h3 contenteditable="true" class="card-title mb-3"></h3>
        </div>
        <div class="questionBody singleMulti">
        <table class=" alignHorizontal">
        <tbody>
            <tr class="upperHead text-center"></tr>
            <tr class="lowerHead text-center"></tr>
            </tbody>
        </table>
        </div>
    </div>
    `);
    $('.hoverQuestionClicked .questionBlock').replaceWith(alignHor);
    $('.hoverQuestionClicked .questionHeader .card-title').html(qsTitle);
    trOne.appendTo('.hoverQuestionClicked .alignHorizontal .upperHead').wrap('<td></td>');
    trTwo.appendTo('.hoverQuestionClicked .alignHorizontal .lowerHead').wrap('<td></td>');
  }
}

function alignC() {
  if ($('.hoverQuestionClicked').find('.alignHorizontal').length > 0) {
    alignV();
  }
  if ($('.hoverQuestionClicked').find('.alignVertical').length > 0) {
    const qsTitle = $('.hoverQuestionClicked .questionHeader .card-title').html();
    const tr = $('.hoverQuestionClicked .alignVertical').removeClass('alignVertical').addClass('alignColumn');
    const alignCol = $(`
    <div class="questionBlock">
      <div class="questionHeader">
      <h3 contenteditable="true" class="card-title mb-3"></h3>
      </div>
      <div class="questionBody singleMulti">
      <table class="alignColumn">
          <tbody>
          <tr class="upperHead"></tr>
          </tbody>
        </table>
        </div>
        </div>
        `);
    $('.hoverQuestionClicked .questionBlock').replaceWith(alignCol);
    $('.hoverQuestionClicked .questionHeader .card-title').html(qsTitle);
    tr.appendTo('.hoverQuestionClicked .alignColumn .upperHead').wrap('<td></td>');
  }
}

$('#singleAnswers').on('click', singleAnswers);
$('#multibleAnswers').on('click', multibleAnswers);
$('#vertical').on('click', alignV);
$('#horizontal').on('click', alignH);
$('#column').on('click', alignC);

// dropDownOneAnswer
function dropDownOneAnswer() {
  const dropDownOne = $(`
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
          <div class="dropdownOneEdit d-flex mt-2">
            <p contenteditable="true">option1</p>
            <p contenteditable="true">option2</p>
            <p contenteditable="true">option3</p>
            <p contenteditable="true">option4</p>
          </div>
        </div>
      </div>`);
  $('.hoverQuestionClicked .questionBlock').replaceWith(dropDownOne);
  $('.chosen').chosen({
    disable_search_threshold: 10,
    width: '60%',
  });
}

function dropdownOneEdit() {
  $(this).parent().siblings().chosen('destroy');
  const index = $(this).index();
  const option = $(this).parent().siblings().children()
    .eq(index);
  let val = $(this).text();
  option.val(val).text(val);
  $('.chosen').chosen({
    disable_search_threshold: 10,
    width: '60%',
  });
  $('.dropdownListChosen').chosen({
    disable_search_threshold: 10,
    width: '60%',
  });
}
$('#dropDownOneAnswer').on('click', dropDownOneAnswer);
$('.section-block').on('keyup change paste copy cut', '.dropdownOneEdit p', dropdownOneEdit);

// dropDownMultiAnswer
function dropDownMultiAnswer() {
  const dropDownMulti = $(`
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
          <div class="dropdownMultiEdit d-flex mt-2">
            <p contenteditable="true">option1</p>
            <p contenteditable="true">option2</p>
            <p contenteditable="true">option3</p>
            <p contenteditable="true">option4</p>
          </div>
        </div>
      </div>`);
  $('.hoverQuestionClicked .questionBlock').replaceWith(dropDownMulti);
  $('.chosen-select-multi').chosen({
    disable_search_threshold: 10,
    width: '60%',
  });
}

function dropdownMultiEdit() {
  $(this).parent().siblings().chosen('destroy');
  const index = $(this).index();
  const option = $(this).parent().siblings().children()
    .eq(index);
  let val = $(this).text();
  option.val(val).text(val);
  $('.chosen-select-multi').chosen({
    disable_search_threshold: 10,
    width: '60%',
  });
}
$('#dropDownMultiAnswer').on('click', dropDownMultiAnswer);
$('.section-block').on('keyup change paste copy cut', '.dropdownMultiEdit p', dropdownMultiEdit);

// sliderAnswer
function slider() {
  $('#slider').prop('checked', true);
  $('.choices span').text('3');
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
}

function sliderValue() {
  const value = $('.range-slider__value');
  $(this).next(value).html(this.value);
}

function sliderStars() {
  $('#stars').prop('checked', true);
  $('.choices span').text('3');
  const stars = $(`
  <div class="questionBlock">
    <div class="questionHeader">
      <h3 contenteditable="true" class="card-title mb-3">
        Slider
      </h3>
    </div>
    <div class="questionBody slider">
      <div class='stars-slider d-flex'>
        <span contenteditable="true">rate1</span>
        <ul class='stars'>
          <li class='star' title='Poor' data-value='1'>
            <i class='fa fa-star fa-fw'></i>
          </li>
          <li class='star' title='Fair' data-value='2'>
            <i class='fa fa-star fa-fw'></i>
          </li>
          <li class='star' title='Good' data-value='3'>
            <i class='fa fa-star fa-fw'></i>
          </li>
          <li class='star' title='Excellent' data-value='4'>
            <i class='fa fa-star fa-fw'></i>
          </li>
          <li class='star' title='WOW!!!' data-value='5'>
            <i class='fa fa-star fa-fw'></i>
          </li>
        </ul>
      </div>
      <div class='stars-slider d-flex'>
        <span contenteditable="true">rate2</span>
        <ul class='stars'>
          <li class='star' title='Poor' data-value='1'>
            <i class='fa fa-star fa-fw'></i>
          </li>
          <li class='star' title='Fair' data-value='2'>
            <i class='fa fa-star fa-fw'></i>
          </li>
          <li class='star' title='Good' data-value='3'>
            <i class='fa fa-star fa-fw'></i>
          </li>
          <li class='star' title='Excellent' data-value='4'>
            <i class='fa fa-star fa-fw'></i>
          </li>
          <li class='star' title='WOW!!!' data-value='5'>
            <i class='fa fa-star fa-fw'></i>
          </li>
        </ul>
      </div>
      <div class='stars-slider d-flex'>
        <span contenteditable="true">rate3</span>
        <ul class='stars'>
          <li class='star' title='Poor' data-value='1'>
            <i class='fa fa-star fa-fw'></i>
          </li>
          <li class='star' title='Fair' data-value='2'>
            <i class='fa fa-star fa-fw'></i>
          </li>
          <li class='star' title='Good' data-value='3'>
            <i class='fa fa-star fa-fw'></i>
          </li>
          <li class='star' title='Excellent' data-value='4'>
            <i class='fa fa-star fa-fw'></i>
          </li>
          <li class='star' title='WOW!!!' data-value='5'>
            <i class='fa fa-star fa-fw'></i>
          </li>
        </ul>
      </div>
    </div>`);
  $('.hoverQuestionClicked .questionBlock').replaceWith(stars);
}

$('#sliderAnswer, #slider').on('click', slider);
$('.section-block').on('change input', '.range-slider__range', sliderValue);
$('#stars').on('click', sliderStars);

// sliderSTARS functionality
/* 1. Visualizing things on Hover - See next part for action on click */
function starsMouseOver() {
  $(this).each(function () {
    let onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function (e) {
      if (e < onStar) {
        $(this).addClass('hover');
      } else {
        $(this).removeClass('hover');
      }
    });
  });
}

function starsMouseOut() {
  $(this).each(function () {
    $(this).parent().children('li.star').each(function (e) {
      $(this).removeClass('hover');
    });
  });
}

function starsClick() {
  $(this).each(function () {
    let onStar = parseInt($(this).data('value'), 10); // The star currently selected
    let stars = $(this).parent().children('li.star');

    for (let i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    for (let i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
  });
}
$(document)
  .on('mouseover', '.stars li', starsMouseOver)
  .on('mouseout', '.stars li', starsMouseOut)
  .on('click', '.stars li', starsClick);

// rankAnswer
function rankAnswer() {
  const rank = $(`
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
  $('.hoverQuestionClicked .questionBlock').replaceWith(rank);
  $('.rank').sortable({
    cancel: '.contenteditable',
  });
}

function rankAfterSort() {
  $(this).find('.rank__body-rank').each(function (i) {
    $(this).text(i + 1);
  });
}

$('#rankAnswer').on('click', rankAnswer);
$(document)
  .on('sortstop', '.rank', rankAfterSort)
  .on('click', '.rank__body-rank', function () {
    $(this).focus();
  });

// matrixAnswer
function matrixRadio() {
  $('.hoverQuestionClicked .statement input').prop('checked', false);
  $('.hoverQuestionClicked .statement input').prop('type', 'radio');
}

function matrixCheck() {
  $('.hoverQuestionClicked .statement input').prop('checked', false);
  $('.hoverQuestionClicked .statement input').prop('type', 'checkbox');
}

function matrixLikert() {
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
          <table class="matrixLikert">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col" contenteditable="true">scalePoint1</th>
                <th scope="col" contenteditable="true">scalePoint2</th>
                <th scope="col" contenteditable="true">scalePoint3</th>
              </tr>
            </thead>
            <tbody>
              <tr class="statement text-center">
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
              <tr class="statement text-center">
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
              <tr class="statement text-center">
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
  $('#matrixRadio').prop('checked', true);
  $('#matrixLikert').prop('checked', true);
  $('.choices span').text('3');
  $('.scalePointSpan').text('3');
}

function matrixProfile() {
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
          <table class="matrixProfile">
            <tbody>
              <tr class="statement ">
                <th scope="row" contenteditable="true">statement1</th>
                <td>
                  <label contenteditable="true">scalePoint1</label>
                  <input class="matrix" type="radio" name=${radioName}>
                </td>
                <td>
                  <label contenteditable="true">scalePoint2</label>
                  <input class="matrix" type="radio" name=${radioName}>
                </td>
                <td>
                  <label contenteditable="true">scalePoint3</label>
                  <input class="matrix" type="radio" name=${radioName}>
                </td>
              </tr>
              <tr class="statement ">
                <th scope="row" contenteditable="true">statement2</th>
                <td>
                  <label contenteditable="true">scalePoint1</label>
                  <input class="matrix" type="radio" name=${radioName + 1}>
                </td>
                <td>
                  <label contenteditable="true">scalePoint2</label>
                  <input class="matrix" type="radio" name=${radioName + 1}>
                </td>
                <td>
                  <label contenteditable="true">scalePoint3</label>
                  <input class="matrix" type="radio" name=${radioName + 1}>
                </td>
              </tr>
              <tr class="statement ">
                <th scope="row" contenteditable="true">statement3</th>
                <td>
                  <label contenteditable="true">scalePoint1</label>
                  <input class="matrix" type="radio" name=${radioName + 2}>
                </td>
                <td>
                  <label contenteditable="true">scalePoint2</label>
                  <input class="matrix" type="radio" name=${radioName + 2}>
                </td>
                <td>
                  <label contenteditable="true">scalePoint3</label>
                  <input class="matrix" type="radio" name=${radioName + 2}>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>`);
  $('.hoverQuestionClicked .questionBlock').replaceWith(matrixAnswer);
  $('#matrixRadio').prop('checked', true);
  $('#matrixProfile').prop('checked', true);
  $('.choices span').text('3');
  $('.scalePointSpan').text('3');
}

function matrixMaxDiff() {
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
          <table class="matrixMaxDiff">
            <thead>
              <tr class="statement">
                <th scope="row" contenteditable="true">Point1</th>
                <th scope="row"></th>
                <th scope="row" contenteditable="true">Point2</th>
              </tr>
            </thead>
            <tbody>
              <tr class="statement text-center">
                <td>
                  <input class="matrix" type="radio" name=${radioName}>
                </td>
                <td contenteditable="true">statement1</td>
                <td>
                  <input class="matrix" type="radio" name=${radioName}>
                </td>
              </tr>
              <tr class="statement text-center">
                <td>
                  <input class="matrix" type="radio" name=${radioName +1}>
                </td>
                <td contenteditable="true">statement2</td>
                <td>
                  <input class="matrix" type="radio" name=${radioName +1}>
                </td>
              </tr>
              <tr class="statement text-center">
                <td>
                  <input class="matrix" type="radio" name=${radioName + 2}>
                </td>
                <td contenteditable="true">statement3</td>
                <td>
                  <input class="matrix" type="radio" name=${radioName + 2}>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>`);
  $('.hoverQuestionClicked .questionBlock').replaceWith(matrixAnswer);
  $('#matrixRadio').prop('checked', true);
  $('#matrixMaxDiff').prop('checked', true);
  $('.choices span').text('3');
  $('.scalePointSpan').text('3');
}

function matrixBipolar() {
  $('.hoverQuestionClicked input:checkbox').prop('checked', false);
  $('.hoverQuestionClicked input:radio').prop('checked', false);
  const radioName = $('.hoverQuestionClicked .statement input').prop('name');
  const matrixAnswer = $(`
      <div class="questionBlock">
        <div class="questionHeader">
          <h3 contenteditable="true" class="card-title mb-3">
            Matrix
          </h3>
        </div>
        <div class="questionBody matrix">
          <table class="matrixBipolar">
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
                <th scope="row" contenteditable="true">right</th>
              </tr>
              <tr class="statement">
                <th scope="row" contenteditable="true">statement2</th>
                <td>
                  <input class="matrix" type="radio" name=${radioName}>
                </td>
                <td>
                  <input class="matrix" type="radio" name=${radioName}>
                </td>
                <td>
                  <input class="matrix" type="radio" name=${radioName}>
                </td>
                <th scope="row" contenteditable="true">right</th>
              </tr>
              <tr class="statement">
                <th scope="row" contenteditable="true">statement3</th>
                <td>
                  <input class="matrix" type="radio" name=${radioName}>
                </td>
                <td>
                  <input class="matrix" type="radio" name=${radioName}>
                </td>
                <td>
                  <input class="matrix" type="radio" name=${radioName}>
                </td>
                <th scope="row" contenteditable="true">right</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>`);
  $('.hoverQuestionClicked .questionBlock').replaceWith(matrixAnswer);
  $('#matrixRadio').prop('checked', true);
  $('#matrixBipolar').prop('checked', true);
  $('.choices span').text('3');
  $('.scalePointSpan').text('3');
}

function matrixTxtL() {
  $('.hoverQuestionClicked .statement input').prop('checked', false);
  $('.hoverQuestionClicked .statement input').prop('type', 'text')
    .addClass('form-control w-75')
    .removeClass('w-50 w-25')
    .removeAttr('name');
}

function matrixTxtM() {
  $('.hoverQuestionClicked .statement input').prop('checked', false);
  $('.hoverQuestionClicked .statement input').prop('type', 'text')
    .addClass('form-control w-50')
    .removeClass('w-75 w-25')
    .removeAttr('name');
}

function matrixTxtS() {
  $('.hoverQuestionClicked .statement input').prop('checked', false);
  $('.hoverQuestionClicked .statement input').prop('type', 'text')
    .addClass('form-control w-25')
    .removeClass('w-75 w-50')
    .removeAttr('name');
}

function matrixSumSt() {
  matrixLikert();
  matrixTxtM();
  $('#matrixSumSt').prop('checked', true);
  choicesIncrease();
  $('.hoverQuestionClicked .matrix tbody tr:last th')
    .text('Total')
    .prop('contenteditable', false);
  $('.hoverQuestionClicked .matrix tbody tr:last').addClass('sumTotalStatement');
  $('.choices span').text('3');
  $('.scalePointSpan').text('3');
}

function matrixSumSp() {
  matrixLikert();
  matrixTxtM();
  $('#matrixSumSp').prop('checked', true);
  scalePointIncrease();
  $('.hoverQuestionClicked .matrix thead tr th:last')
    .text('Total')
    .prop('contenteditable', false);
  $('.choices span').text('3');
  $('.scalePointSpan').text('3');
  $('.hoverQuestionClicked .matrix').addClass('sumTotalScalepoint');
}

function matrixDropdown() {
  $('.hoverQuestionClicked .matrix .statement input').prop('checked', false);
  $('.hoverQuestionClicked .matrix thead').remove();
  const dropdownList = $(`
  <table>
    <tbody>
      <tr class="matrixDropdownStatement">
        <th scope="row" contenteditable="true">statement1</th>
        <td>
          <select class="dropdownListChosen">
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
            <option value="option4">option4</option>
          </select>
          <div class="dropdownOneEdit d-flex mt-2">
            <p contenteditable="true">option1</p>
            <p contenteditable="true">option2</p>
            <p contenteditable="true">option3</p>
            <p contenteditable="true">option4</p>
          </div>
        </td>
      </tr>
      <tr class="matrixDropdownStatement">
        <th scope="row" contenteditable="true">statement2</th>
        <td>
          <select class="dropdownListChosen">
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
            <option value="option4">option4</option>
          </select>
          <div class="dropdownOneEdit d-flex mt-2">
            <p contenteditable="true">option1</p>
            <p contenteditable="true">option2</p>
            <p contenteditable="true">option3</p>
            <p contenteditable="true">option4</p>
          </div>
        </td>
      </tr>
      <tr class="matrixDropdownStatement">
        <th scope="row" contenteditable="true">statement3</th>
        <td>
          <select class="dropdownListChosen">
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
            <option value="option4">option4</option>
          </select>
          <div class="dropdownOneEdit d-flex mt-2">
            <p contenteditable="true">option1</p>
            <p contenteditable="true">option2</p>
            <p contenteditable="true">option3</p>
            <p contenteditable="true">option4</p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  `);
  $('.hoverQuestionClicked .matrix table').replaceWith(dropdownList);
  $('.dropdownListChosen').chosen({
    disable_search_threshold: 10,
    width: '60%',
  });
  $('.choices span').text(3);
  $('.scalePointSpan').text(4);
}

$('#matrixAnswer, #matrixLikert').on('click', matrixLikert);
$('#matrixProfile').on('change', matrixProfile);
$('#matrixBipolar').on('change', matrixBipolar);
$('#matrixMaxDiff').on('change', matrixMaxDiff);
$('#matrixRadio').on('change', matrixRadio);
$('#matrixCheck').on('change', matrixCheck);
$('#matrixTxtL').on('change', matrixTxtL);
$('#matrixTxtM').on('change', matrixTxtM);
$('#matrixTxtS').on('change', matrixTxtS);
$('#matrixSumSt').on('change', matrixSumSt);
$('#matrixSumSp').on('change', matrixSumSp);
$('#matrixDropdownList').on('change', matrixDropdown);

// txtSingleLineAnswer
function txtSingleLineAnswer() {
  $('.hoverQuestionClicked input:checkbox').prop('checked', false);
  $('.hoverQuestionClicked input:radio').prop('checked', false);
  const txtSingleLine = $(`
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
  $('.hoverQuestionClicked .questionBlock').replaceWith(txtSingleLine);
}
$('#txtSingleLineAnswer').on('click', txtSingleLineAnswer);

// txtEssayAnswer
function txtEssayAnswer() {
  $('.hoverQuestionClicked input:checkbox').prop('checked', false);
  $('.hoverQuestionClicked input:radio').prop('checked', false);
  const txtEssay = $(`
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
  $('.hoverQuestionClicked .questionBlock').replaceWith(txtEssay);
}
$('#txtEssayAnswer').on('click', txtEssayAnswer);

// txtFormAnswer
function txtFormAnswer() {
  $('.hoverQuestionClicked input:checkbox').prop('checked', false);
  $('.hoverQuestionClicked input:radio').prop('checked', false);
  const txtForm = $(`
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
  $('.hoverQuestionClicked .questionBlock').replaceWith(txtForm);
}
$('#txtFormAnswer').on('click', txtFormAnswer);

// uploadImgAnswer
function uploadImgAnswer() {
  $('.hoverQuestionClicked input:checkbox').prop('checked', false);
  $('.hoverQuestionClicked input:radio').prop('checked', false);
  const className = `class${new Date().getTime()}`;
  const uploadImg = $(`
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
  $('.hoverQuestionClicked .questionBlock').replaceWith(uploadImg);
  $(`.${className}`).dropzone({
    url: '/file/post',
  });
}
$('#uploadImgAnswer').on('click', uploadImgAnswer);

/* PROJECTS\SURVEY: CHANGE QUESTION end-- */
/* PROJECTS\PREVIEW:  */

// copy elements from edit_survey to preview-mobile;
/* $('#previewBTN').on('click', function () {}); */
function preview() {
  $(this)
    .prev()
    .prop('checked', 'checked');
}
// remove unnecessary things when preview
function previewRemovals() {
  $('.preview-mobile *').removeAttr('contenteditable = "true"');
  $('.preview-mobile .questionMove')
    .next()
    .remove();
  $('.preview-mobile .hoverQuestionClicked').remove();
  $('.preview-mobile .questionMove').remove();
  $('.preview-mobile .addQuestionControls').remove();
  $('.preview-mobile .dropdownOneEdit').remove();
  $('.preview-mobile .dropdownMultiEdit').remove();
  $('.preview-mobile .addImgIcon').remove();
}
$('.preview-mobile').on('click', 'span', preview);
$(document).ready(previewRemovals);
/* PROJECTS\PREVIEW:  end--*/
//---------------------------------------------
/* PROJECTS\DISTRIBUTE: web copylick */
function distributeCopyLink(e) {
  e.preventDefault();
  $('#distribute__web').select();
  document.execCommand('copy');
}
$('#distribute__web-btn').on('click', distributeCopyLink);
/* PROJECTS\DISTRIBUTE: web copylick end */

/* PROJECTS\RESPONSES: VIEW ON-CLICK  */
function showResponseOnClick() {
  $('.showResponse').toggleClass('d-none');
}
$('.sport-survey').on('click', showResponseOnClick);
/* PROJECTS\RESPONSES: VIEW ON-CLICK end-- */

/* PROJECTS\REPORTS: ADD NOTE */
if (/reports.html/.test(window.location)) {
  $('.note').summernote({
    height: 100,
  });
  $('.note-editor').addClass('d-none');
}

function reportNoteBTN() {
  $('.reportAddNote').toggleClass('d-none');
  $('.reportCloseNote').toggleClass('d-none');
  $('.note-editor').toggleClass('d-none');
  if ($('.note-editable').val()) {
    $('.noteValue').removeClass('visibilityHidden');
  }
}

function reportNoteEditable() {
  $('.noteVal').html($('.note-editable').html());
  if ($('.noteVal').is(':empty')) {
    $('.noteValue').addClass('visibilityHidden');
  } else {
    $('.noteValue').removeClass('visibilityHidden');
  }
}

$('.reportSection')
  .on('click', '.noteBTN', reportNoteBTN)
  .on('change keypress keyup keydown paste cut', '.note-editable', reportNoteEditable);

/* PROJECTS\REPORTS: ADD NOTE end */

/* PROJECTS\REPORTS: ADD VISUAL */
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

function reportBtnChangeOnClick() {
  $(this).addClass('btn-group-active');
  $(this)
    .siblings()
    .removeClass('btn-group-active');
}

function reportAddVisual() {
  if ($('#bar').hasClass('btn-group-active')) {
    chart('bar');
  }
  if ($('#line').hasClass('btn-group-active')) {
    chart('line');
  }
  if ($('#pie').hasClass('btn-group-active')) {
    chart('pie');
  }
}

function reportRemoveVisual() {
  $(this)
    .next('canvas')
    .remove();
  $(this).remove();
}
if (/reports.html/.test(window.location.href)) {
  chart('bar');
  $('.reportSection').on('click', '.btn-group .btn', reportBtnChangeOnClick);
  $('.reportAddVisual').on('click', reportAddVisual);
  $('.chartSection').on('click', '.btn-danger', reportRemoveVisual);
}
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
          label: 'Survey Per Month',
          data: [
            10, 20, 40, 50,
          ],
          backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 230, 0.8)', 'rgba(54, 162, 240, 0.8)', 'rgba(54, 162, 135, 0.8)'],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor: '#000',
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