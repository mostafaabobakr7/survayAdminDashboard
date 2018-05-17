"use strict";$("#folder__link").on("click",function(){$(this).parent().toggleClass("menu__folder"),$(".projects-list-container").toggleClass("menu__folder"),$("#folder__menu").toggleClass("menu__close")}),$("#folder__menu-close").on("click",function(){$("#folder__link").parent().toggleClass("menu__folder"),$(".projects-list-container").toggleClass("menu__folder"),$("#folder__menu").toggleClass("menu__close")}),$("#folderDropdown").on("click",function(){$(this).toggleClass("dropDownClickBorder")}),$("#folderDropdown-menu .dropdown-item").each(function(){$(this).on("click",function(){$(this).addClass("checked").siblings().removeClass("checked")})}),$("#createProjectBTN").on("click",function(e){e.preventDefault();var n=$("#projectName").val(),t=new Date,i=(new Date).getTime(),s=t.toLocaleString("en-US",{day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0}),o=$('        <div class="row py-3">\n          <div class="col-md-12">\n            <div class="projects-list-container pl-5">\n              <div class="card">\n                <div class="row">\n                  <div class="col-md-11">\n                    <div class="card-body">\n                      <div class="row">\n                        <div class="col-md-3">\n                          <h6 class="card-title">\n                            <img width="24" height="24" src="./img/research_core.svg" alt="research core img">\n                            <span class="pl-1"> Survey</span>\n                          </h6>\n                          <h2 class="projectName">'.concat(n,'</h2>\n                          <p class="card-text">Modified at: ').concat(s,'</p>\n                        </div>\n                        <div class="col-md-9 d-flex justify-content-end">\n                          <div class="card-body__details d-flex justify-content-start">\n                            <div class="card-body__details-status ">\n                              <h2>NEW</h2>\n                              <h6>Statues</h6>\n                            </div>\n                            <div class="card-body__details-questions ">\n                              <h2>1</h2>\n                              <h6>Questions</h6>\n                            </div>\n                            <div class="card-body__details-languages ">\n                              <h2>0</h2>\n                              <h6>Languages</h6>\n                            </div>\n                          </div>\n\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class="col-md-1 d-flex justify-content-end">\n                    <div class="card-body-icon dropleft">\n                      <a href="#" id=').concat(i,' role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>\n                      </a>\n                      <div class="dropdown-menu" aria-labelledby=').concat(i,'>\n                        <a class="dropdown-item">\n                          <i class="fa fa-check-circle"></i>Activate</a>\n                        <li class="dropdown-divider"></li>\n                        <a class="dropdown-item">\n                          <i class="fa fa-user"></i>Add QC User</a>\n                        <a class="dropdown-item">\n                          <i class="fa fa-font"></i>Rename Project</a>\n                        <li class="dropdown-divider"></li>\n                        <a class="dropdown-item">\n                          <i class="fa fa-pencil"></i>Edit Survey</a>\n                        <a class="dropdown-item">\n                          <i class="fa fa-sign-out"></i>Preview Survey</a>\n                        <a class="dropdown-item">\n                          <i class="fa fa-paper-plane"></i>Distribute Survey</a>\n                        <a class="dropdown-item">\n                          <i class="fa fa-comment"></i>Responses</a>\n                        <a class="dropdown-item">\n                          <i class="fa fa-bar-chart"></i>View Reports</a>\n                        <li class="dropdown-divider"></li>\n                        <a class="dropdown-item">\n                          <i class="fa fa-times-circle"></i>Delete Project</a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>'));$(".projects-list .container-fluid").prepend(o)}),$(".projects-list").on("click",".card-body",function(){var e=$(this).find(".projectName").html();localStorage.setItem("projectCreationName",e);var n="".concat(window.location.protocol,"//").concat(window.location.host,"/").concat("edit_survey.html");window.location=n}),$(document).ready(function(){var e=window.location.href,n=localStorage.getItem("projectCreationName");(/edit_survey/.test(e)||/distributions/.test(e)||/responses/.test(e)||/reports/.test(e))&&$(".projectNameEdit").html("".concat(n))}),$(document).on("click",'[contenteditable="true"]',function(){$(document).find('[contenteditable="true"]').removeClass("editable-focus"),$(this).addClass("editable-focus"),$(this).focusout(function(){$(this).removeClass("editable-focus")}),document.execCommand("selectAll",!1,null)}),$(".section-block").on("click","#addBlock",function(){var e=$('<div class="section-block-card">\n                        <div class="card">\n                          <div class="card-header" >\n                            <h5 contenteditable="true">Default Question Block</h5>\n                          </div>\n                          <div class="card-body">\n                            <div class="row py-3 hoverQuestion ">\n                              <div class="questionMove">\n                                <div class="questionMove__up py-2">\n                                  <i class="fa fa-arrow-up"></i>\n                                </div>\n                                <div class="questionMove__down py-2">\n                                  <i class="fa fa-arrow-down"></i>\n                                </div>\n                              </div>\n                              <div class="col-1">\n                                <div class="questionNumber">\n                                  <h4 contenteditable="true">Q1</h4>\n                                </div>\n                              </div>\n                              <div class="col-11 d-flex justify-content-between">\n                                <div class="questionBlock">\n                                  <div class="questionHeader" >\n                                    <h3 contenteditable="true" class="card-title  mb-3">\n                                      Click to write the question text\n                                    </h3>\n                                  </div>\n                                  <div class="card-text mb-2">\n                                    <input type="radio" name="question">\n                                    <span contenteditable="true">Click to write Choice 1</span>\n                                  </div>\n                                  <div class="card-text mb-2">\n                                    <input type="radio" name="question">\n                                    <span contenteditable="true">Click to write Choice 2</span>\n                                  </div>\n                                  <div class="card-text mb-2">\n                                    <input type="radio" name="question">\n                                    <span contenteditable="true">Click to write Choice 3</span>\n                                  </div>\n                                </div>\n                                <div class="addQuestionControls  justify-content-between">\n                                  <i class="fa fa-plus-circle questionInserBefore" title="Insert Question Before"></i>\n                                  <i class="fa fa-minus-circle questionDelete" title="Delete Question"></i>\n                                  <i class="fa fa-plus-circle questionInserAfter" title="Insert Question After"></i>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class="text-center py-4">\n                          <a id="addBlock" href="#" class="btn btn-primary btn-lg">\n                            <i class="fa fa-plus mr-2"></i> Add Block</a>\n                        </div>\n                      </div>');$(".section-block .col-12").append(e)});var num=1;function addRadio(e,n){var t=(new Date).getTime(),i=$('\n    <div class = "row py-3 hoverQuestion">\n      <div class="questionMove">\n        <div class="questionMove__up py-2">\n          <i class="fa fa-arrow-up"></i>\n        </div>\n        <div class="questionMove__down py-2">\n          <i class="fa fa-arrow-down"></i>\n        </div>\n      </div>\n      <div class="col-1">\n        <div class="questionNumber">\n          <h4 contenteditable="true">Q'.concat(num+1,'</h4>\n        </div>\n      </div> <div class = "col-11 d-flex justify-content-between" > <div class="questionBlock">\n        <div class="questionHeader" >\n          <h3 contenteditable="true" class="card-title  mb-3">\n            Click to write the question text\n          </h3>\n        </div>\n        <div class="card-text mb-2">\n          <input type="radio" name=').concat(t,'>\n            <span contenteditable="true">Click to write Choice 1</span>\n          </div>\n          <div class="card-text mb-2">\n            <input type="radio" name=').concat(t,'>\n              <span contenteditable="true">Click to write Choice 2</span>\n            </div>\n            <div class="card-text mb-2">\n              <input type="radio" name=').concat(t,'>\n                <span contenteditable="true">Click to write Choice 3</span>\n              </div>\n            </div>\n            <div class="addQuestionControls justify-content-between">\n              <i class="fa fa-plus-circle questionInserBefore" title="Insert Question Before"></i>\n              <i class="fa fa-minus-circle questionDelete" title="Delete Question"></i>\n              <i class="fa fa-plus-circle questionInserAfter" title="Insert Question After"></i>\n            </div>\n          </div>\n        </div>\n'));"BEFORE"===e&&i.insertBefore(n),"AFTER"===e&&i.insertAfter(n),++num}function choicesCurrentNum(){return $(".hoverQuestionClicked .card-text").length}$(".section-block").on("click",".questionInserBefore",function(){addRadio("BEFORE",$(this).parent().parent().parent())}),$(".section-block").on("click",".questionInserAfter",function(){addRadio("AFTER",$(this).parent().parent().parent())}),$(".section-block").on("click",".questionDelete",function(){$(this).parent().parent().parent().remove()}),$(".section-block").on("click",".questionMove__up",function(){var e=$(this).parent().parent(),n=e.prev();$(e).insertBefore(n)}),$(".section-block").on("click",".questionMove__down",function(){var e=$(this).parent().parent(),n=e.next();$(e).insertAfter(n)}),$(".section-block").on("click",".hoverQuestion",function(){$(this).addClass("hoverQuestionClicked").siblings().removeClass("hoverQuestionClicked"),0<$(this).find(":radio").length&&($("#singleAnswers").prop("checked",!0),$("#multibleAnswers").prop("checked",!1)),0<$(this).find(":checkbox").length&&($("#multibleAnswers").prop("checked",!0),$("#singleAnswers").prop("checked",!1)),$(this).parent().parent().parent().siblings().children().children().children().removeClass("hoverQuestionClicked"),$(".choices span").text(choicesCurrentNum)}),$(".choicesDecrease").on("click",function(){$(".hoverQuestionClicked .card-text:last-child").remove(),$(".choices span").text(choicesCurrentNum)}),$(".choicesIncrease").on("click",function(){var e=choicesCurrentNum(),n=$(".hoverQuestionClicked input:radio").attr("name"),t=$('<div class="card-text mb-2">\n                                    <input type="radio" name="'.concat(n,'">\n                                    <span contenteditable="true">Click to write Choice ').concat(e+1,"</span>\n                                  </div>")),i=$('<div class="card-text mb-2">\n                                    <input type="checkbox" name="question">\n                                    <span contenteditable="true">Click to write Choice '.concat(e+1,"</span>\n                                  </div>"));0<$(".hoverQuestionClicked").find(":radio").length&&t.insertAfter($(".hoverQuestionClicked .card-text:last-child")),0<$(".hoverQuestionClicked").find(":checkbox").length&&i.insertAfter($(".hoverQuestionClicked .card-text:last-child")),$(".choices span").text(choicesCurrentNum)}),$("#multibleAnswers").on("click",function(){$(".hoverQuestionClicked input:radio").prop("checked",!1),$(".hoverQuestionClicked input:radio").attr("type","checkbox")}),$("#singleAnswers").on("click",function(){$(".hoverQuestionClicked input:checkbox").prop("checked",!1),$(".hoverQuestionClicked input:checkbox").attr("type","radio")}),$("#distribute__web-btn").on("click",function(e){e.preventDefault(),$("#distribute__web").select(),document.execCommand("copy")}),$(".sport-survey").on("click",function(){$(".showResponse").toggleClass("d-none")}),$(".reportSection").on("click",".noteBTN",function(){$(".reportAddNote").toggleClass("d-none"),$(".reportCloseNote").toggleClass("d-none"),$(".note").toggleClass("d-none"),$(".note").val()&&$(".noteValue").removeClass("visibilityHidden")}),$(".reportSection").on("change keyup keydown paste cut",".note",function(){var e=$(this).val();$(this).height(0).height(this.scrollHeight),$("#noteVal").val(e),$("#noteVal").height(0).height(this.scrollHeight),$("#noteVal").val()?$(".noteValue").removeClass("visibilityHidden"):$(".noteValue").addClass("visibilityHidden")});