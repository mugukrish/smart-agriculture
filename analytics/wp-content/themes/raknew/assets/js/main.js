(function ($) {
 "use strict";
 
	//Mobile menu
	//==========================
	//  Main menu
	var MainLiDrop = $('.mainmenu li.menu-item-has-children');
	MainLiDrop.append('<div class="dropdown-btn"></div>');
	//Dropdown Button
	var MainLiDDbtn = $('.mainmenu li.menu-item-has-children .dropdown-btn');
	MainLiDDbtn.on('click', function() {
		$(this).toggleClass('submenu-icon');
		$(this).prev('ul').slideToggle(400);
	});
	
	//sticky
	//==========================
	var SActive = $('.sticky-active');
	SActive.sticky({topSpacing:0});
	 
	//menu a active jquery
	//==============================
	var pgurl = window.location.href.substr(window.location.href
		.lastIndexOf("/")+1);
		var aActive = $('ul li a');
		aActive.each(function(){
		if($(this).attr("href") === pgurl || $(this).attr("href") === '' )
		$(this).addClass("active");
	})
	
/*
 Camera Slider active jquery
================================== */
	var SliDETWO= $('#slider-two');
	SliDETWO.camera({
        height: '39%',
        loader: 'none',
        pagination: false,
        playPause: false,
        thumbnails: false,
        autoAdvance: true,
        navigation: true,
        hover: false,
        time: 10000,
        opacityOnGrid: true,
        overlayer: true,
        fx: 'scrollLeft, scrollRight, scrollHorz, scrollBottom, scrollTop',
    });
	
/*
 bxSlider active jquery
================================== */
	var SliDEONE= $('#slider-one');
	SliDEONE.bxSlider({
		mode: 'fade',
		pager: false,
		speed: 1000,
		nextText: '<i class="zmdi zmdi-long-arrow-right"></i>',
		prevText: '<i class="zmdi zmdi-long-arrow-left"></i>'
	});

/*
 Count Up active jquery
================================== */
	var CounT = $('.counter');
	CounT.counterUp({
		delay: 50,
		time: 3000
	});

/*
	Slick Carousel as Nav
===================================*/
	var ONEIt = $('.one-item');
	var ONEItNOtF = $('.one-item-not-fade');
	var ThrEEIT = $('.three-item');
	ONEIt.slick({
		dots: false,
		arrows: true,
		fade: true,
		prevArrow: '<i class="prev zmdi zmdi-chevron-left"></i>',
		nextArrow: '<i class="next zmdi zmdi-chevron-right"></i>',
	});
	
	ONEItNOtF.slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
	});
	
	ThrEEIT.slick({
		dots: false,
		arrows: true,
		slidesToShow: 3,
		prevArrow: '<i class="prev zmdi zmdi-chevron-left"></i>',
		nextArrow: '<i class="next zmdi zmdi-chevron-right"></i>',
		responsive: [
			{ breakpoint: 1169, settings: { slidesToShow: 3 } },
			{ breakpoint: 969, settings: { slidesToShow: 2 } },
			{ breakpoint: 767, settings: { slidesToShow: 2 } },
			{ breakpoint: 480, settings: { slidesToShow: 1 } }
		]
	});
	
	//center active
	var Center_Activ = $('.center-active');
	Center_Activ.slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 3,
		prevArrow: '<i class="prev zmdi zmdi-chevron-left"></i>',
		nextArrow: '<i class="next zmdi zmdi-chevron-right"></i>',
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: true,
			centerMode: false,
			centerPadding: '40px',
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: true,
			centerMode: false,
			centerPadding: '40px',
			slidesToShow: 1
		  }
		}
		]
	});
/*
 fancybox Popup
================================ */
	var FancYB = $('.fancybox');
	FancYB.fancybox({
		openEffect: 'elastic',
		closeEffect: 'elastic',

		prevEffect: 'fade',
		prevSpeed  : 550,
		nextEffect: 'fade',
		nextSpeed: 550,

		closeBtn: true,

		helpers: {
			title: {
				type: 'inside'
			},
			buttons: {}
		},
		helpers: {
			overlay: {
			  locked: false
			}
		}
    });
	FancYB.attr('rel','gallery');

	var $carVideo = $('.title-description');
	$carVideo.fitVids();
/*
 youtube video popup
================================ */
	var VarIou = $(".various");
	VarIou.fancybox({
		'padding' : 0,
		maxWidth    : 800,
		maxHeight   : 600,
		fitToView   : false,
		width       : '70%',
		height      : '70%',
		autoSize    : false,
		closeClick  : false,
		openEffect  : 'elastic',
		closeEffect : 'elastic'
	});
	
/*
wow js
================================== */
	var wow = new WOW(
		{
			mobile: false,  // trigger animations on mobile devices (default is true)
		}
	);
	wow.init();
/*
 isotope menu
================================ */	
	var ProjMli = $('.project-menu li');
	var ProjGrid = $('.project-grid');
	ProjMli.on('click', function() {
	ProjMli.removeClass("active");
	  $(this).addClass("active");        
		var selector = $(this).attr('data-filter'); 
		ProjGrid.isotope({ 
			filter: selector, 
			animationOptions: { 
				duration: 750, 
				easing: 'linear', 
				queue: false, 
			}
		});
	});

/*
 scrollUp
================================ */
	$.scrollUp({
        scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

/*
 Loding Bar
==================================== */
	jQuery(window).on('load', function(){
		var preeLoad = $('#loading');
		preeLoad.fadeOut(1000);
		
		/* Isotope grid
		---------------*/
		var IsoGriddoload = $('.project-grid');
		IsoGriddoload.isotope({
			itemSelector: '.grid-item',
			masonryHorizontal: {
				rowHeight: 100
			}
		});
	});
	
	
})(jQuery);