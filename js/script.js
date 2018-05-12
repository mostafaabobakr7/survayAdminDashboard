"use strict";$(".nav-link").on("click",function(){$(this).parent().siblings().removeClass("active"),$(this).parent().addClass("active")}),$("#folder__link").on("click",function(){$(this).parent().toggleClass("menu__folder"),$(".projects-list-container").toggleClass("menu__folder"),$("#folder__menu").toggleClass("menu__close")}),$("#folder__menu-close").on("click",function(){$("#folder__link").parent().toggleClass("menu__folder"),$(".projects-list-container").toggleClass("menu__folder"),$("#folder__menu").toggleClass("menu__close")}),$("#folderDropdown").on("click",function(){$(this).toggleClass("dropDownClickBorder")}),$("#folderDropdown-menu .dropdown-item").map(function(){$(this).on("click",function(){$(this).addClass("checked").siblings().removeClass("checked")})}),$("#BlankSurvayProject").on("click",function(){$(this).addClass("d-none"),$("#CreateFromExisting").addClass("d-none"),$(".list-Research").removeClass("d-none")}),$("#createProjectBack").on("click",function(){$(this).parent().addClass("d-none"),$("#CreateFromExisting, #BlankSurvayProject").removeClass("d-none")}),$("#createProjectBTN").on("click",function(){var a=$("#projectName").val(),n=(new Date).toLocaleString("en-US",{day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0}),e=$('\n  <div class="row py-3">\n    <div class="col-md-12">\n      <div class="projects-list-container pl-5">\n        <div class="card">\n          <div class="card-body">\n            <div class="row">\n              <div class="col-md-3">\n                <h6 class="card-title">\n                  <img width="24" height="24" src="./img/research_core.svg" alt="research core img">\n                  <span class="pl-1"> Survey</span>\n                </h6>\n                <h2 class="projectName">'.concat(a,'</h2>\n                <p class="card-text">Modified at: ').concat(n,'</p>\n              </div>\n              <div class="col-md-9 d-flex justify-content-end">\n                <div class="card-body__details d-flex justify-content-start">\n                  <div class="card-body__details-status ">\n                    <h2>NEW</h2>\n                    <h6>Statues</h6>\n                  </div>\n                  <div class="card-body__details-questions ">\n                    <h2>1</h2>\n                    <h6>Questions</h6>\n                  </div>\n                  <div class="card-body__details-languages ">\n                    <h2>0</h2>\n                    <h6>Languages</h6>\n                  </div>\n                </div>\n                <div class="card-body-icon " id="projectCardDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                  <i class="fa fa-ellipsis-h" aria-hidden="true"></i>\n                  <div class="dropdown-menu" aria-labelledby="projectCardDropdown">\n                    <a class="dropdown-item">\n                      <i class="fa fa-check-circle"></i>Activate</a>\n                    <li class="dropdown-divider"></li>\n                    <a class="dropdown-item">\n                      <i class="fa fa-share-alt"></i>Collaborate</a>\n                    <a class="dropdown-item">\n                      <i class="fa fa-folder"></i>Reveal in Folder</a>\n                    <a class="dropdown-item">\n                      <i class="fa fa-font"></i>Rename Project</a>\n                    <a class="dropdown-item">\n                      <i class="fa fa-files-o"></i>Copy Project</a>\n                    <li class="dropdown-divider"></li>\n                    <a class="dropdown-item">\n                      <i class="fa fa-pencil"></i>Edit Survey</a>\n                    <a class="dropdown-item">\n                      <i class="fa fa-sign-out"></i>Preview Survey</a>\n                    <a class="dropdown-item">\n                      <i class="fa fa-language"></i>Translate Survey</a>\n                    <a class="dropdown-item">\n                      <i class="fa fa-paper-plane"></i>Distribute Survey</a>\n                    <a class="dropdown-item">\n                      <i class="fa fa-comment"></i>Data &amp; Analysis</a>\n                    <a class="dropdown-item">\n                      <i class="fa fa-bar-chart"></i>View Reports</a>\n                    <li class="dropdown-divider"></li>\n                    <a class="dropdown-item">\n                      <i class="fa fa-times-circle"></i>Delete Project</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>'));$(".projects-list .container-fluid").append(e)}),$("#projectName").keyup(function(a){13===a.keyCode&&$("#createProjectBTN").click()}),$(".projects-list").on("click",".card",function(){var a=$(this).find(".projectName").html();localStorage.setItem("projectCreationName",a);var n="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname).concat("edit_survey.html");window.location=n}),$(document).ready(function(){var a=window.location.href,n=localStorage.getItem("projectCreationName");/edit_survey/.test(a)&&$(".projectNameEdit").html("".concat(n))});