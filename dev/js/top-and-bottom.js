/*********************************************************** 
	1. Java Script variable is have to write by camelCase 
************************************************************/
	var agent = navigator.userAgent.toLowerCase();
	var msie = (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1);
	
	var $floatingHeaderReal = $("#floating_header_nav");	
	var $body = (msie === true) ? $("html") : $("html body");
	var $smallMenu = $(".small_menu");
	var $menuRight = $(".menu_right");
    var $headerRightMenu = $(".floating_header_inner_container_contents_right");
	var $smallMenuDiv = $(".floating_header_inner_container_contents_right_minimal");
	var $selectFirstDiv = $(".select_first_div");
	var $floatingSearch = $("#floating_search");
	var $floatingSearchBigBtn = $("#floating_search_big_btn");
	var $floatingSearchBigText = $(".floating_search_big_text");
	var $searchHideenBar = $(".search_hideen_bar");

	$(function(){
		$("#bottom_go_top").click(function(e){
			if(e.preventDefault){
				e.preventDefault();
			} else {
				e.returnValue = false;
			}			
			$body.animate({scrollTop:0},"swing");					
		});
		
		$(window).scroll(function(){
			var bodyScroll = $body.scrollTop();
			
			if(bodyScroll > 0 && $floatingHeaderReal.hasClass("floating_header_real")){
				$floatingHeaderReal.removeClass("floating_header_real").addClass("floating_header_virtual");
			}
			if(bodyScroll <= 0 && $floatingHeaderReal.hasClass("floating_header_virtual")){
				$floatingHeaderReal.addClass("floating_header_real").removeClass("floating_header_virtual");				
			}
		});
		
		$(window).resize(function(){
			if($smallMenuDiv.css("display") === "none"){
				$menuRight.removeClass("small_menu_right").addClass("menu_right");
			}else{
				$menuRight.addClass("small_menu_right").removeClass("menu_right");
			}
		});
		
		//모바일 메뉴 클릭
		$smallMenu.click(function(e){			
			if($headerRightMenu.hasClass("hidden-sm") || $headerRightMenu.hasClass("hidden-xs") === true){
				$headerRightMenu.removeClass("hidden-sm").removeClass("hidden-xs");
				$menuRight.addClass("small_menu_right").removeClass("menu_right")
				$headerRightMenu.hide();
				$headerRightMenu.stop().slideToggle("slow");
			}else{
				$headerRightMenu.stop().slideToggle("slow",function(){
					$headerRightMenu.addClass("hidden-sm").addClass("hidden-xs");
					$menuRight.removeClass("small_menu_right").addClass("menu_right");
					$headerRightMenu.show();
				});
			}
		});
				
		//모바일 버전 찾기 버튼
		$floatingSearch.on("click",function(){
			$searchHideenBar.toggle();
			
			if($searchHideenBar.css("display") === "none"){
				$("#fsglyphicon").addClass("glyphicon-search").removeClass("glyphicon-remove");
			}else{				
				$("#fsglyphicon").addClass("glyphicon-remove").removeClass("glyphicon-search");
			}
		});	
						
		//피씨 버전 찾기 버튼
		$floatingSearchBigBtn.on("click",function(e){
			if(e.preventDefault){
				e.preventDefault();
			} else {
				e.returnValue = false;
			}
			
			if($floatingSearchBigText.css("display") === "none"){				
				$floatingHeaderReal.css({"opacity":"1"});
				$floatingSearchBigText.css("display","inline-block");
				//$menuRight.css("visibility","hidden");
				$(this).removeClass("glyphicon glyphicon-search").addClass("glyphicon glyphicon-menu-hamburger");
			}else{
				$floatingHeaderReal.css({"opacity":"0.93"});
				$floatingSearchBigText.css("display","none");
				//$menuRight.css("visibility","");
				$(this).removeClass("glyphicon glyphicon-menu-hamburger").addClass("glyphicon glyphicon-search");
			}
		});
		
		$(window).trigger("scroll");		
	});