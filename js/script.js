"use strict";$(function(){$('[data-toggle="tooltip"]').tooltip()}),$("#folder__link").on("click",function(){$(this).parent().toggleClass("menu__folder"),$(".projects-list-container").toggleClass("menu__folder"),$("#folder__menu").toggleClass("menu__close")}),$("#folder__menu-close").on("click",function(){$("#folder__link").parent().toggleClass("menu__folder"),$(".projects-list-container").toggleClass("menu__folder"),$("#folder__menu").toggleClass("menu__close")}),$("#folderDropdown").on("click",function(){$(this).toggleClass("dropDownClickBorder")}),$("#folderDropdown-menu .dropdown-item").each(function(){$(this).on("click",function(){$(this).addClass("checked").siblings().removeClass("checked")})}),$("#createProjectBTN").on("click",function(e){e.preventDefault();var n=$("#projectName").val(),t=new Date,i=(new Date).getTime(),o=t.toLocaleString("en-US",{day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0}),s=$('        <div class="row py-3">\n          <div class="col-md-12">\n            <div class="projects-list-container pl-5">\n              <div class="card">\n                <div class="row">\n                  <div class="col-md-11">\n                    <div class="card-body">\n                      <div class="row">\n                        <div class="col-md-3">\n                          <h6 class="card-title">\n                            <img width="24" height="24" src="./img/research_core.svg" alt="research core img">\n                            <span class="pl-1"> Survey</span>\n                          </h6>\n                          <h2 class="projectName">'.concat(n,'</h2>\n                          <p class="card-text">Modified at: ').concat(o,'</p>\n                        </div>\n                        <div class="col-md-9 d-flex justify-content-end">\n                          <div class="card-body__details d-flex justify-content-start">\n                            <div class="card-body__details-status ">\n                              <h2>NEW</h2>\n                              <h6>Statues</h6>\n                            </div>\n                            <div class="card-body__details-questions ">\n                              <h2>1</h2>\n                              <h6>Questions</h6>\n                            </div>\n                            <div class="card-body__details-languages ">\n                              <h2>0</h2>\n                              <h6>Languages</h6>\n                            </div>\n                          </div>\n\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class="col-md-1 d-flex justify-content-end">\n                    <div class="card-body-icon dropdown dropleft">\n                      <a href="#" id=').concat(i,' role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>\n                      </a>\n                      <div class="dropdown-menu" aria-labelledby=').concat(i,'>\n                        <a class="dropdown-item">\n                          <i class="fa fa-check-circle"></i>Activate</a>\n                        <li class="dropdown-divider"></li>\n                        <a class="dropdown-item">\n                          <i class="fa fa-user"></i>Add QC User</a>\n                        <a class="dropdown-item">\n                          <i class="fa fa-font"></i>Rename Project</a>\n                        <li class="dropdown-divider"></li>\n                        <a class="dropdown-item">\n                          <i class="fa fa-pencil"></i>Edit Survey</a>\n                        <a class="dropdown-item">\n                          <i class="fa fa-sign-out"></i>Preview Survey</a>\n                        <a class="dropdown-item">\n                          <i class="fa fa-paper-plane"></i>PROJECTSDISTRIBUTE Survey</a>\n                        <a class="dropdown-item">\n                          <i class="fa fa-comment"></i>Responses</a>\n                        <a class="dropdown-item">\n                          <i class="fa fa-bar-chart"></i>View Reports</a>\n                        <li class="dropdown-divider"></li>\n                        <a class="dropdown-item">\n                          <i class="fa fa-times-circle"></i>Delete Project</a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>'));n?($("#projectName").removeClass("is-invalid"),$(".projects-list .container-fluid").prepend(s),$("#create_project").modal("hide")):$("#projectName").addClass("is-invalid")}),$("#projectName").on("change keyup paste",function(){$(this).removeClass("is-invalid"),$(this).addClass("is-valid")}),$("#projectName").keypress(function(e){13==e.which&&$("#createProjectBTN").click()}),$(".projects-list").on("click",".card-body",function(){var e=$(this).find(".projectName").html();if(localStorage.setItem("projectCreationName",e),"mostafaabobakr7.github.io"===window.location.host){window.location.pathname="survayAdminDashboard/edit_survey.html"}else if("invadems.com"===window.location.host||"www.invadems.com"===window.location.host){window.location.pathname="projects/FreeMinds/edit_survey.html"}else window.location.pathname="edit_survey.html"}),$(document).ready(function(){var e=window.location.href,n=localStorage.getItem("projectCreationName");(/edit_survey/.test(e)||/distributions/.test(e)||/responses/.test(e)||/reports/.test(e))&&$(".projectNameEdit").html("".concat(n))}),/edit_survey.html/.test(window.location)&&($(".rightControls").sticky(),$(document).on("click",'[contenteditable="true"]',function(){$(document).find('[contenteditable="true"]').removeClass("editable-focus"),$(this).addClass("editable-focus"),$(this).focusout(function(){$(this).removeClass("editable-focus")})})),$(".section-block").on("click","#addBlock",function(){var e=$('<div class="section-block-card">\n                        <div class="text-right">\n                          <button type="button" class="blockClose btn btn-danger px-3 mx-1" title="Delete">\n                            <i class="fa fa-times"></i>\n                          </button>\n                        </div>\n                        <div class="card">\n                          <div class="card-header" >\n                            <h5 contenteditable="true">Default Question Block</h5>\n                          </div>\n                          <div class="card-body">\n                            <div class="row py-3 hoverQuestion ">\n                              <div class="questionMove">\n                                <div class="questionMove__up py-2">\n                                  <i class="fa fa-arrow-up"></i>\n                                </div>\n                                <div class="questionMove__down py-2">\n                                  <i class="fa fa-arrow-down"></i>\n                                </div>\n                              </div>\n                              <div class="col-1">\n                                <div class="questionNumber">\n                                  <h4 contenteditable="true">Q1</h4>\n                                </div>\n                              </div>\n                              <div class="col-11 d-flex justify-content-between">\n                                <div class="questionBlock">\n                                  <div class="questionHeader" >\n                                    <h3 contenteditable="true" class="card-title  mb-3">\n                                      Click to write the question text\n                                    </h3>\n                                  </div>\n                                  <div class="questionBody">\n                                    <div class="card-text mb-2">\n                                      <input type="radio" name="question">\n                                      <span contenteditable="true">Click to write Choice 1</span>\n                                    </div>\n                                    <div class="card-text mb-2">\n                                      <input type="radio" name="question">\n                                      <span contenteditable="true">Click to write Choice 2</span>\n                                    </div>\n                                    <div class="card-text mb-2">\n                                      <input type="radio" name="question">\n                                    <span contenteditable="true">Click to write Choice 3</span>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class="addQuestionControls  justify-content-between">\n                                  <i class="fa fa-plus-circle questionInserBefore" title="Insert Question Before"></i>\n                                  <i class="fa fa-plus-circle questionInserAfter" title="Insert Question After"></i>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class="text-center py-4">\n                          <a id="addBlock" href="#" class="btn btn-primary btn-lg">\n                            <i class="fa fa-plus mr-2"></i> Add Block</a>\n                        </div>\n                      </div>');$(".section-block .col-12").append(e)}),$(".section-block").on("click",".blockClose",function(){$(this).parent().parent().remove()});var num=1;function addRadio(e,n){var t=(new Date).getTime(),i=$('\n    <div class = "row py-3 hoverQuestion">\n      <div class="questionMove">\n        <div class="questionMove__up py-2">\n          <i class="fa fa-arrow-up"></i>\n        </div>\n        <div class="questionMove__down py-2">\n          <i class="fa fa-arrow-down"></i>\n        </div>\n      </div>\n      <div class="col-1">\n        <div class="questionNumber">\n          <h4 contenteditable="true">Q'.concat(num+1,'</h4>\n        </div>\n      </div> <div class = "col-11 d-flex justify-content-between" > <div class="questionBlock">\n        <div class="questionHeader">\n          <h3 contenteditable="true" class="card-title  mb-3">\n            Click to write the question text\n          </h3>\n        </div>\n        <div class="questionBody">\n          <div class="card-text mb-2">\n            <input type="radio" name=').concat(t,'>\n              <span contenteditable="true">Click to write Choice 1</span>\n          </div>\n          <div class="card-text mb-2">\n            <input type="radio" name=').concat(t,'>\n              <span contenteditable="true">Click to write Choice 2</span>\n          </div>\n          <div class="card-text mb-2">\n            <input type="radio" name=').concat(t,'>\n              <span contenteditable="true">Click to write Choice 3</span>\n            </div>\n          </div>\n        </div>\n        <div class="addQuestionControls justify-content-between">\n          <i class="fa fa-plus-circle questionInserBefore" title="Insert Question Before"></i>\n          <i class="fa fa-minus-circle questionDelete" title="Delete Question"></i>\n          <i class="fa fa-plus-circle questionInserAfter" title="Insert Question After"></i>\n        </div>\n      </div>\n    </div>\n'));"BEFORE"===e&&i.insertBefore(n),"AFTER"===e&&i.insertAfter(n),++num}function choicesCurrentNum(){var e;return 0<$(".hoverQuestionClicked").find(".card-text").length&&(e=$(".hoverQuestionClicked .card-text").length),0<$(".hoverQuestionClicked").find(".chosen").length&&(e=$(".hoverQuestionClicked .chosen option").length),0<$(".hoverQuestionClicked").find(".chosen-select-multi").length&&(e=$(".hoverQuestionClicked .chosen-select-multi option").length),0<$(".hoverQuestionClicked").find(".range-slider").length&&(e=$(".hoverQuestionClicked .range-slider").length),0<$(".hoverQuestionClicked").find(".rank__body").length&&(e=$(".hoverQuestionClicked .rank__body").length),0<$(".hoverQuestionClicked").find(".matrix").length&&(e=$(".hoverQuestionClicked .matrix tbody tr").length),e}function scalePointHeadCounts(){return $("thead tr th").length-1}function chart(e){var n="class".concat((new Date).getTime()),t=$('\n  <div class="responseControls text-right">\n    <button type="button" class="btn btn-danger px-3 mx-1" title="Delete">\n      <i class="fa fa-times"></i>\n    </button>\n    <canvas class='.concat(n,' width="300" height="100"></canvas>\n  </div>\n'));$(".chartSection").append(t);var i=document.querySelector(".".concat(n)).getContext("2d");new Chart(i,{type:"".concat(e),data:{labels:["answer1","answer2"],datasets:[{label:"number of answers",data:[1,2],backgroundColor:["rgba(255, 99, 132, 0.8)","rgba(54, 162, 235, 0.8)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}function chartDashboard(e,n){if(/index.html/.test(window.location.href)){var t=document.querySelector("#".concat(n)).getContext("2d");new Chart(t,{type:"".concat(e),data:{datasets:[{label:"First dataset",data:[0,20,40,50],backgroundColor:["rgba(255, 99, 132, 0.8)","rgba(54, 162, 230, 0.8)","rgba(54, 162, 240, 0.8)","rgba(54, 162, 135, 0.8)"]}],labels:["January","February","March","April"]},options:{scales:{yAxes:[{ticks:{suggestedMin:1,suggestedMax:50}}]}}})}}$(".section-block").on("click",".questionInserBefore",function(){addRadio("BEFORE",$(this).parent().parent().parent())}),$(".section-block").on("click",".questionInserAfter",function(){addRadio("AFTER",$(this).parent().parent().parent())}),$(".section-block").on("click",".questionDelete",function(){$(this).parent().parent().parent().remove()}),$("input[type=radio][name=answers]").on("change",function(){if($(".choices span").text(choicesCurrentNum),0<$(".hoverQuestionClicked").find(".matrix").length){$(".statementSmall").removeClass("d-none"),$(".scalePoint").removeClass("d-none");var e=$("thead tr th").length-1;$(".scalePointSpan").text(e)}else $(".statementSmall").addClass("d-none"),$(".scalePoint").addClass("d-none")}),$(".section-block").on("click",".questionMove__up",function(){var e=$(this).parent().parent(),n=e.prev();$(e).insertBefore(n)}),$(".section-block").on("click",".questionMove__down",function(){var e=$(this).parent().parent(),n=e.next();$(e).insertAfter(n)}),/edit_survey.html/.test(window.location.href)&&$(".section-block").on("click",".hoverQuestion",function(){$(this).addClass("hoverQuestionClicked").siblings().removeClass("hoverQuestionClicked"),0<$(this).find(":radio").length&&($("#singleAnswers").prop("checked",!0),$("#singleAnswers").siblings().prop("checked",!1)),0<$(this).find(":checkbox").length&&($("#multibleAnswers").prop("checked",!0),$("#multibleAnswers").siblings().prop("checked",!1)),0<$(this).find(".chosen").length&&($("#dropDownOneAnswer").prop("checked",!0),$("#dropDownOneAnswer").siblings().prop("checked",!1)),0<$(this).find(".chosen-select-multi").length&&($("#dropDownMultiAnswer").prop("checked",!0),$("#dropDownMultiAnswer").siblings().prop("checked",!1)),0<$(this).find(".slider").length&&($("#sliderAnswer").prop("checked",!0),$("#sliderAnswer").siblings().prop("checked",!1)),0<$(this).find(".rank").length&&($("#rankAnswer").prop("checked",!0),$("#rankAnswer").siblings().prop("checked",!1)),0<$(this).find(".matrix").length&&($("#matrixAnswer").prop("checked",!0),$("#matrixAnswer").siblings().prop("checked",!1)),0<$(this).find(".txtSingleLine").length&&($("#txtSingleLineAnswer").prop("checked",!0),$("#txtSingleLineAnswer").siblings().prop("checked",!1)),0<$(this).find(".txtEssayAnswer").length&&($("#txtEssayAnswer").prop("checked",!0),$("#txtEssayAnswer").siblings().prop("checked",!1)),0<$(this).find(".txtFormAnswer").length&&($("#txtFormAnswer").prop("checked",!0),$("#txtFormAnswer").siblings().prop("checked",!1)),0<$(this).find(".uploadImgAnswer").length&&($("#uploadImgAnswer").prop("checked",!0),$("#uploadImgAnswer").siblings().prop("checked",!1)),$(this).parent().parent().parent().siblings().children().children().children().removeClass("hoverQuestionClicked"),$(".choices span").text(choicesCurrentNum)}),$(".choicesDecrease").on("click",function(){"2"!==$(".choices span").html()&&(0<$(".hoverQuestionClicked").find(".card-text").length&&$(".hoverQuestionClicked .card-text:last-child").remove(),0<$(".hoverQuestionClicked").find(".chosen").length&&($(".hoverQuestionClicked .chosen option:last").remove(),$(".hoverQuestionClicked .dropdownOneEdit p:last-child").remove(),$(".chosen").val("").trigger("chosen:updated")),0<$(".hoverQuestionClicked").find(".chosen-select-multi").length&&($(".hoverQuestionClicked .chosen-select-multi option:last").remove(),$(".hoverQuestionClicked .dropdownMultiEdit p:last-child").remove(),$(".chosen-select-multi").val("").trigger("chosen:updated")),0<$(".hoverQuestionClicked").find(".slider").length&&($(".slider .range-slider:last-child").prev().remove(),$(".slider .range-slider:last-child").remove()),0<$(".hoverQuestionClicked").find(".rank").length&&$(".rank .rank__body:last-child").remove(),0<$(".hoverQuestionClicked").find(".matrix").length&&$(".matrix tbody tr:last-child").remove()),$(".choices span").text(choicesCurrentNum)}),$(".choicesIncrease").on("click",function(){var e=choicesCurrentNum(),n=$(".hoverQuestionClicked input:radio").attr("name"),t=$('<div class="card-text mb-2">\n                                    <input type="radio" name="'.concat(n,'">\n                                    <span contenteditable="true">Click to write Choice ').concat(e+1,"</span>\n                                  </div>")),i=$('<div class="card-text mb-2">\n                                    <input type="checkbox" name="question">\n                                    <span contenteditable="true">Click to write Choice '.concat(e+1,"</span>\n                                  </div>")),o=$('<p class="m-0 p-0" contenteditable="true">slider'.concat(e+1,'</p>\n          <div class="range-slider d-flex py-2">\n            <input class="range-slider__range" type="range" name="slider" min="0" max="100" value="0">\n            <span class="range-slider__value">0</span>\n          </div>')),s=$('<div class="rank__body">\n            <span class="rank__body-text contenteditable" contenteditable="true">text'.concat(e+1,'</span>\n            <span class="rank__body-rank">').concat(e+1,"</span>\n          </div>")),a=$('<option value="option'.concat(e+1,'">option').concat(e+1,"</option>")),c=$('<p contenteditable="true">option'.concat(e+1,"</p>"));if(0<$(".hoverQuestionClicked").find(":radio").length&&t.insertAfter($(".hoverQuestionClicked .card-text:last-child")),0<$(".hoverQuestionClicked").find(":checkbox").length&&i.insertAfter($(".hoverQuestionClicked .card-text:last-child")),0<$(".hoverQuestionClicked").find(".chosen").length&&($(".chosen").append(a),$(".chosen").val("").trigger("chosen:updated")),0<$(".hoverQuestionClicked").find(".chosen").length&&$(".dropdownOneEdit").append(c),0<$(".hoverQuestionClicked").find(".chosen-select-multi").length&&($(".chosen-select-multi").append(a),$(".chosen-select-multi").val("").trigger("chosen:updated")),0<$(".hoverQuestionClicked").find(".chosen-select-multi").length&&$(".dropdownMultiEdit").append(c),0<$(".hoverQuestionClicked").find(".slider").length&&$(".slider").append(o),0<$(".hoverQuestionClicked").find(".rank").length&&$(".rank").append(s),0<$(".hoverQuestionClicked").find(".matrix").length&&10!==choicesCurrentNum()){var l=(new Date).getTime(),r=$(".statement:last").clone();$(".statement:last").find("input").attr("name",l),$(".matrix tbody").append(r),$(".statement:last th").text("statement".concat(choicesCurrentNum()))}$(".choices span").text(choicesCurrentNum)}),$(".scalePointDecrease").on("click",function(){var e=scalePointHeadCounts();2!==e&&($("thead th:last-child").remove(),$(".hoverQuestionClicked .statement").each(function(){$(this).find("td:last-child").remove()})),$(".scalePointSpan").text(e)}),$(".scalePointIncrease").on("click",function(){var e=scalePointHeadCounts(),n=$('<th scope="col" contenteditable="true">scalePoint'.concat(e+1,"</th>"));10!==e&&($("thead tr").append(n),$(".scalePointSpan").text(e+1),$(".hoverQuestionClicked .statement").each(function(){var e=$(this).find("td:last input").attr("name"),n=$('<td>\n                      <input class="matrix" type="radio" name='.concat(e,">\n                    </td>"));$(this).append(n)}))}),$("#singleAnswers").on("click",function(){$(".hoverQuestionClicked input:checkbox").prop("checked",!1),$(".hoverQuestionClicked input:radio").prop("checked",!1);var e=(new Date).getTime(),n=$('\n      <div class="questionBlock">\n        <div class="questionHeader">\n          <h3 contenteditable="true" class="card-title mb-3">\n            Single answer\n          </h3>\n        </div>\n        <div class="questionBody">\n          <div class="card-text mb-2">\n            <input type="radio" name='.concat(e,'>\n            <span contenteditable="true">Click to write Choice 1</span>\n          </div>\n          <div class="card-text mb-2">\n            <input type="radio" name=').concat(e,'>\n            <span contenteditable="true">Click to write Choice 2</span>\n          </div>\n          <div class="card-text mb-2">\n            <input type="radio" name=').concat(e,'>\n            <span contenteditable="true">Click to write Choice 3</span>\n          </div>\n        </div>\n      </div>'));$(".hoverQuestionClicked .questionBlock").replaceWith(n)}),$("#multibleAnswers").on("click",function(){$(".hoverQuestionClicked input:checkbox").prop("checked",!1),$(".hoverQuestionClicked input:radio").prop("checked",!1);var e=(new Date).getTime(),n=$('\n      <div class="questionBlock">\n        <div class="questionHeader">\n          <h3 contenteditable="true" class="card-title mb-3">\n            Multiple answers\n          </h3>\n        </div>\n        <div class="questionBody">\n          <div class="card-text mb-2">\n            <input type="checkbox" name='.concat(e,'>\n            <span contenteditable="true">Click to write Choice 1</span>\n          </div>\n          <div class="card-text mb-2">\n            <input type="checkbox" name=').concat(e,'>\n            <span contenteditable="true">Click to write Choice 2</span>\n          </div>\n          <div class="card-text mb-2">\n            <input type="checkbox" name=').concat(e,'>\n            <span contenteditable="true">Click to write Choice 3</span>\n          </div>\n        </div>\n      </div>'));$(".hoverQuestionClicked .questionBlock").replaceWith(n)}),$("#dropDownOneAnswer").on("click",function(){var e=$('\n      <div class="questionBlock">\n        <div class="questionHeader">\n          <h3 contenteditable="true" class="card-title mb-3">\n            Dropdown single answer\n          </h3>\n        </div>\n        <div class="questionBody py-4">\n          <select class="chosen">\n            <option value="option1">option1</option>\n            <option value="option2">option2</option>\n            <option value="option3">option3</option>\n            <option value="option4">option4</option>\n          </select>\n          <div class="dropdownOneEdit mt-3">\n            <p contenteditable="true">option1</p>\n            <p contenteditable="true">option2</p>\n            <p contenteditable="true">option3</p>\n            <p contenteditable="true">option4</p>\n          </div>\n        </div>\n      </div>');$(".hoverQuestionClicked .questionBlock").replaceWith(e),$(".chosen").chosen({disable_search_threshold:10})}),$(".section-block").on("keyup change paste copy cut",".dropdownOneEdit p",function(){$(this).parent().siblings().chosen("destroy");var e=$(this).index(),n=$(this).parent().siblings().children().eq(e),t=$(this).text();n.val(t).text(t),$(".chosen").chosen({disable_search_threshold:10})}),$("#dropDownMultiAnswer").on("click",function(){var e=$('\n      <div class="questionBlock">\n        <div class="questionHeader">\n          <h3 contenteditable="true" class="card-title mb-3">\n            Dropdown Multi answer\n          </h3>\n        </div>\n        <div class="questionBody py-4">\n          <select multiple class ="chosen-select-multi">\n            <option value="option1">option1</option>\n            <option value="option2">option2</option>\n            <option value="option3">option3</option>\n            <option value="option4">option4</option>\n          </select>\n          <div class="dropdownMultiEdit mt-3">\n            <p contenteditable="true">option1</p>\n            <p contenteditable="true">option2</p>\n            <p contenteditable="true">option3</p>\n            <p contenteditable="true">option4</p>\n          </div>\n        </div>\n      </div>');$(".hoverQuestionClicked .questionBlock").replaceWith(e),$(".chosen-select-multi").chosen({disable_search_threshold:10})}),$(".section-block").on("keyup change paste copy cut",".dropdownMultiEdit p",function(){$(this).parent().siblings().chosen("destroy");var e=$(this).index(),n=$(this).parent().siblings().children().eq(e),t=$(this).text();n.val(t).text(t),$(".chosen-select-multi").chosen({disable_search_threshold:10})}),$("#sliderAnswer").on("click",function(){$(".hoverQuestionClicked input:checkbox").prop("checked",!1),$(".hoverQuestionClicked input:radio").prop("checked",!1);var e=$('\n      <div class="questionBlock">\n        <div class="questionHeader">\n          <h3 contenteditable="true" class="card-title mb-3">\n            Slider\n          </h3>\n        </div>\n        <div class="questionBody slider">\n          <p class="m-0 p-0" contenteditable="true">slider1</p>\n          <div class="range-slider d-flex py-2">\n            <input class="range-slider__range" type="range" name="slider" min="0" max="100" value="0">\n            <span class="range-slider__value">0</span>\n          </div>\n          <p class="m-0 p-0" contenteditable="true">slider2</p>\n          <div class="range-slider d-flex py-2">\n            <input class="range-slider__range" type="range" name="slider" min="0" max="100" value="0">\n            <span class="range-slider__value">0</span>\n          </div>\n          <p class="m-0 p-0" contenteditable="true">slider3</p>\n          <div class="range-slider d-flex py-2">\n            <input class="range-slider__range" type="range" name="slider" min="0" max="100" value="0">\n            <span class="range-slider__value">0</span>\n          </div>\n        </div>\n      </div>');$(".hoverQuestionClicked .questionBlock").replaceWith(e)}),$(".section-block").on("change input",".range-slider__range",function(){var e=$(".range-slider__value");$(this).next(e).html(this.value)}),$("#rankAnswer").on("click",function(){var e=$('\n      <div class="questionBlock">\n        <div class="questionHeader">\n          <h3 contenteditable="true" class="card-title mb-3">\n            Rank\n          </h3>\n        </div>\n        <div class="questionBody rank">\n          <div class="rank__body">\n            <span class="rank__body-text contenteditable" contenteditable="true">text1</span>\n            <span class="rank__body-rank">1</span>\n          </div>\n          <div class="rank__body">\n            <span class="rank__body-text contenteditable" contenteditable="true">text2</span>\n            <span class="rank__body-rank">2</span>\n          </div>\n          <div class="rank__body">\n            <span class="rank__body-text contenteditable" contenteditable="true">text3</span>\n            <span class="rank__body-rank">3</span>\n          </div>\n        </div>\n      </div>');$(".hoverQuestionClicked .questionBlock").replaceWith(e),$(".rank").sortable({cancel:".contenteditable"})}),$(".section-block").on("sortstop",".rank",function(){$(this).find(".rank__body-rank").each(function(e){$(this).text(e+1)})}),$(".section-block").on("click",".rank__body-rank",function(){$(this).focus()}),$("#matrixAnswer").on("click",function(){$(".hoverQuestionClicked input:checkbox").prop("checked",!1),$(".hoverQuestionClicked input:radio").prop("checked",!1);var e=(new Date).getTime(),n=$('\n      <div class="questionBlock">\n        <div class="questionHeader">\n          <h3 contenteditable="true" class="card-title mb-3">\n            Matrix\n          </h3>\n        </div>\n        <div class="questionBody matrix">\n          <table class="table">\n            <thead>\n              <tr>\n                <th scope="col"></th>\n                <th scope="col" contenteditable="true">scalePoint1</th>\n                <th scope="col" contenteditable="true">scalePoint2</th>\n                <th scope="col" contenteditable="true">scalePoint3</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class="statement">\n                <th scope="row" contenteditable="true">statement1</th>\n                <td>\n                  <input class="matrix" type="radio" name='.concat(e,'>\n                </td>\n                <td>\n                  <input class="matrix" type="radio" name=').concat(e,'>\n                </td>\n                <td>\n                  <input class="matrix" type="radio" name=').concat(e,'>\n                </td>\n              </tr>\n              <tr class="statement">\n                <th scope="row" contenteditable="true">statement2</th>\n                <td>\n                  <input class="matrix" type="radio" name=').concat(e+1,'>\n                </td>\n                <td>\n                  <input class="matrix" type="radio" name=').concat(e+1,'>\n                </td>\n                <td>\n                  <input class="matrix" type="radio" name=').concat(e+1,'>\n                </td>\n              </tr>\n              <tr class="statement">\n                <th scope="row" contenteditable="true">statement3</th>\n                <td>\n                  <input class="matrix" type="radio" name=').concat(e+2,'>\n                </td>\n                <td>\n                  <input class="matrix" type="radio" name=').concat(e+2,'>\n                </td>\n                <td>\n                  <input class="matrix" type="radio" name=').concat(e+2,">\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>"));$(".hoverQuestionClicked .questionBlock").replaceWith(n)}),$("#txtSingleLineAnswer").on("click",function(){$(".hoverQuestionClicked input:checkbox").prop("checked",!1),$(".hoverQuestionClicked input:radio").prop("checked",!1);var e=$('\n      <div class="questionBlock">\n        <div class="questionHeader">\n          <h3 contenteditable="true" class="card-title mb-3">\n            Text Single Line\n          </h3>\n        </div>\n        <div class="questionBody txtSingleLine">\n          <input type="text" class="form-control">\n        </div>\n      </div>');$(".hoverQuestionClicked .questionBlock").replaceWith(e)}),$("#txtEssayAnswer").on("click",function(){$(".hoverQuestionClicked input:checkbox").prop("checked",!1),$(".hoverQuestionClicked input:radio").prop("checked",!1);var e=$('\n      <div class="questionBlock">\n        <div class="questionHeader ">\n          <h3 contenteditable="true" class="card-title mb-3">\n            Text Essay\n          </h3>\n        </div>\n        <div class="questionBody txtEssayAnswer">\n          <textarea class="form-control" rows="5"></textarea>\n        </div>\n      </div>');$(".hoverQuestionClicked .questionBlock").replaceWith(e)}),$("#txtFormAnswer").on("click",function(){$(".hoverQuestionClicked input:checkbox").prop("checked",!1),$(".hoverQuestionClicked input:radio").prop("checked",!1);var e=$('\n      <div class="questionBlock">\n        <div class="questionHeader">\n          <h3 contenteditable="true" class="card-title mb-3">\n            Text Form\n          </h3>\n        </div>\n        <div class="questionBody txtFormAnswer">\n          <form>\n            <div class="form-group row text-right">\n              <label class="col-sm-2">Date:</label>\n              <div class="col-sm-10">\n                <input autocomplete="off" type="date" class="form-control w-25">\n              </div>\n            </div>\n            <div class="form-group row text-right">\n              <label class="col-sm-2">Phone:</label>\n              <div class="col-sm-10">\n                <input autocomplete="off" type="tel" class="form-control w-50" placeholder="Phone Number...">\n              </div>\n            </div>\n            <div class="form-group row text-right">\n              <label class="col-sm-2">E-mail:</label>\n              <div class="col-sm-10">\n                <input autocomplete="off" type="email" class="form-control w-75" placeholder="E-mail...">\n              </div>\n            </div>\n            <div class="form-group row text-right">\n              <label class="col-sm-2">Password:</label>\n              <div class="col-sm-10">\n                <input autocomplete="off" type="password" class="form-control w-75" placeholder="Password" required>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>');$(".hoverQuestionClicked .questionBlock").replaceWith(e)}),$("#uploadImgAnswer").on("click",function(){$(".hoverQuestionClicked input:checkbox").prop("checked",!1),$(".hoverQuestionClicked input:radio").prop("checked",!1);var e="class".concat((new Date).getTime()),n=$('\n      <div class="questionBlock">\n        <div class="questionHeader">\n          <h3 contenteditable="true" class="card-title mb-3">\n            Upload Image\n          </h3>\n        </div>\n        <div class="questionBody text-center uploadImgAnswer">\n          <form action="../img/media/" class=\'dropzone '.concat(e,'\' enctype="multipart/form-data">\n            <div class="dz-default dz-message"><span>Drop files here to upload</span></div>\n          </form>\n        </div>\n      </div>'));$(".hoverQuestionClicked .questionBlock").replaceWith(n),$(".".concat(e)).dropzone({url:"/file/post"})}),$(".preview-mobile").on("click","span",function(){$(this).prev().prop("checked","checked")}),$(document).ready(function(){$(".preview-mobile *").removeAttr('contenteditable = "true"'),$(".preview-mobile .questionMove").next().remove(),$(".preview-mobile .hoverQuestionClicked").remove(),$(".preview-mobile .questionMove").remove(),$(".preview-mobile .addQuestionControls").remove(),$(".preview-mobile .dropdownOneEdit").remove(),$(".preview-mobile .dropdownMultiEdit").remove()}),$("#distribute__web-btn").on("click",function(e){e.preventDefault(),$("#distribute__web").select(),document.execCommand("copy")}),$(".sport-survey").on("click",function(){$(".showResponse").toggleClass("d-none")}),/reports.html/.test(window.location)&&($(".note").summernote({height:100}),$(".note-editor").addClass("d-none")),$(".reportSection").on("click",".noteBTN",function(){$(".reportAddNote").toggleClass("d-none"),$(".reportCloseNote").toggleClass("d-none"),$(".note-editor").toggleClass("d-none"),$(".note-editable").val()&&$(".noteValue").removeClass("visibilityHidden")}),$(".reportSection").on("change keypress keyup keydown paste cut",".note-editable",function(){$(".noteVal").html($(".note-editable").html()),$(".noteVal").is(":empty")?$(".noteValue").addClass("visibilityHidden"):$(".noteValue").removeClass("visibilityHidden")}),$(".reportSection").on("click",".btn-group .btn",function(){$(this).addClass("btn-group-active"),$(this).siblings().removeClass("btn-group-active")}),$(".reportSection").on("click",".reportAddVisual",function(){}),/reports.html/.test(window.location.href)&&chart("bar"),$(".reportAddVisual").on("click",function(){$("#bar").hasClass("btn-group-active")&&chart("bar"),$("#line").hasClass("btn-group-active")&&chart("line"),$("#pie").hasClass("btn-group-active")&&chart("pie")}),$(".chartSection").on("click",".btn-danger",function(){$(this).next("canvas").remove(),$(this).remove()}),chartDashboard("bar","New-Survey-per-Month");