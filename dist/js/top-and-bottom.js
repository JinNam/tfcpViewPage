var agent=navigator.userAgent.toLowerCase(),msie="Netscape"==navigator.appName&&agent.indexOf("trident")!=-1||agent.indexOf("msie")!=-1,$floatingHeaderReal=$("#floating_header_nav"),$body=msie===!0?$("html"):$("html body"),$smallMenu=$(".small_menu"),$menuRight=$(".menu_right"),$headerRightMenu=$(".floating_header_inner_container_contents_right"),$smallMenuDiv=$(".floating_header_inner_container_contents_right_minimal"),$selectFirstDiv=$(".select_first_div"),$floatingSearch=$("#floating_search"),$floatingSearchBigBtn=$("#floating_search_big_btn"),$floatingSearchBigText=$(".floating_search_big_text"),cbExample=function(e){setTimeout(function(){document.querySelector(".header_line").style.opacity="1"},1e3)};$(function(){$("#bottom_go_top").click(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,$body.animate({scrollTop:0},"swing")}),$(window).scroll(function(){var e=$body.scrollTop();e>0&&$floatingHeaderReal.hasClass("floating_header_real")&&(document.querySelector(".header_line").style.opacity="0",$floatingHeaderReal.removeClass("floating_header_real").addClass("floating_header_virtual")),e<=0&&$floatingHeaderReal.hasClass("floating_header_virtual")&&(cbExample(),$floatingHeaderReal.addClass("floating_header_real").removeClass("floating_header_virtual"))}),$smallMenu.click(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,$headerRightMenu.hasClass("hidden-sm")||$headerRightMenu.hasClass("hidden-xs")===!0?($headerRightMenu.removeClass("hidden-sm").removeClass("hidden-xs"),$menuRight.addClass("small_menu_right").removeClass("menu_right"),$headerRightMenu.hide(),$headerRightMenu.stop().slideToggle("slow")):$headerRightMenu.stop().slideToggle("slow",function(){$headerRightMenu.addClass("hidden-sm").addClass("hidden-xs"),$menuRight.removeClass("small_menu_right").addClass("menu_right"),$headerRightMenu.show()})}),$(window).resize(function(){"none"===$smallMenuDiv.css("display")?$menuRight.removeClass("small_menu_right").addClass("menu_right"):$menuRight.addClass("small_menu_right").removeClass("menu_right")}),$floatingSearch.on("focus",function(){$floatingHeaderReal.find(".floating_header_inner_container_contents_left").hide(),$floatingSearch.animate({right:"+=50%",width:"+=50%",display:"block"},"swing")}),$floatingSearch.on("focusout",function(){$floatingHeaderReal.find(".floating_header_inner_container_contents_left").show(),$floatingSearch.animate({right:"-=50%",width:"-=50%",display:"inline-block"},"swing")}),$floatingSearchBigBtn.on("click",function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,"none"===$floatingSearchBigText.css("display")?($floatingHeaderReal.css({opacity:"1"}),$floatingSearchBigText.css("display","inline-block"),$menuRight.css("visibility","hidden"),$(this).removeClass("glyphicon glyphicon-search").addClass("glyphicon glyphicon-menu-hamburger")):($floatingHeaderReal.css({opacity:"0.93"}),$floatingSearchBigText.css("display","none"),$menuRight.css("visibility",""),$(this).removeClass("glyphicon glyphicon-menu-hamburger").addClass("glyphicon glyphicon-search"))}),$(window).trigger("scroll"),$(".menu_left").on("click",function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,document.location.href="../index.html"})});