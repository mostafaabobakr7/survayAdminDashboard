"use strict";$("#folder__link").on("click",function(){$(this).parent().toggleClass("menu__folder"),$("#folder__menu").toggleClass("menu__close")}),$("#folder__menu-close").on("click",function(){$("#folder__link").parent().toggleClass("menu__folder"),$("#folder__menu").toggleClass("menu__close")}),$("#folderDropdown").on("click",function(){$(this).toggleClass("dropDownClickBorder")}),$("#folderDropdown-menu .dropdown-item").map(function(){$(this).on("click",function(){$(this).addClass("checked").siblings().removeClass("checked")})}),$("#BlankSurvayProject").on("click",function(){$(this).addClass("d-none"),$("#CreateFromExisting").addClass("d-none"),$(".list-Research").removeClass("d-none")}),$("#createProjectBack").on("click",function(){$(this).parent().addClass("d-none"),$("#CreateFromExisting, #BlankSurvayProject").removeClass("d-none")});