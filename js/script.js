jQuery(function ($) {
	'use strict';

	/* ----------------------------------------------------------- */
	/*  Fixed header
	/* ----------------------------------------------------------- */
	$(window).on('scroll', function () {

		// fixedHeader on scroll
		function fixedHeader() {
			var headerTopBar = $('.top-bar').outerHeight();
			var headerOneTopSpace = $('.header-one .logo-area').outerHeight();

			var headerOneELement = $('.header-one .site-navigation');
			var headerTwoELement = $('.header-two .site-navigation');

			if ($(window).scrollTop() > headerTopBar + headerOneTopSpace) {
				$(headerOneELement).addClass('navbar-fixed');
				$('.header-one').css('margin-bottom', headerOneELement.outerHeight());
			} else {
				$(headerOneELement).removeClass('navbar-fixed');
				$('.header-one').css('margin-bottom', 0);
			}
			if ($(window).scrollTop() > headerTopBar) {
				$(headerTwoELement).addClass('navbar-fixed');
				$('.header-two').css('margin-bottom', headerTwoELement.outerHeight());
			} else {
				$(headerTwoELement).removeClass('navbar-fixed');
				$('.header-two').css('margin-bottom', 0);
			}
		}
		fixedHeader();
		
		// Count Up
		function counter() {
			var oTop;
			if ($('.counterUp').length !== 0) {
				oTop = $('.counterUp').offset().top - window.innerHeight;
			}
			if ($(window).scrollTop() > oTop) {
				$('.counterUp').each(function () {
					var $this = $(this),
						countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
						countNum: countTo
					}, {
						duration: 1000,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
						}
					});
				});
			}
		}
		counter();

		// scroll to top btn show/hide
		function scrollTopBtn() {
			var scrollToTop = $('#back-to-top'),
				scroll = $(window).scrollTop();
			if (scroll >= 50) {
				scrollToTop.fadeIn();
			} else {
				scrollToTop.fadeOut();
			}
		}
		scrollTopBtn();
	});

	$(document).ready(function () 
	{

		// navSearch show/hide
		function navSearch() {
			$('.nav-search').on('click', function () {
				$('.search-block').fadeIn(350);
			});
			$('.search-close').on('click', function () {
				$('.search-block').fadeOut(350);
			});
		}
		navSearch();

		// navbarDropdown
		function navbarDropdown() {
			if ($(window).width() < 992) {
				$('.site-navigation .dropdown-toggle').on('click', function () {
					$(this).siblings('.dropdown-menu').animate({
						height: 'toggle'
					}, 300);
				});

				var navbarHeight = $('.site-navigation').outerHeight();
				$('.site-navigation .navbar-collapse').css('max-height', 'calc(100vh - ' + navbarHeight + 'px)');
			}
		}
		navbarDropdown();

		// back to top
		function backToTop() {
			$('#back-to-top').on('click', function () {
				$('#back-to-top').tooltip('hide');
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		}
		backToTop();
	
		//Banner Slide
		function bannerCarousel()
		{
			$('.carousel').carousel({
				interval:3000,
				ride:true,
				wrap:true,
			});			
		}
		bannerCarousel();


		function footerflexslider() {
		  $('.flexslider').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: true,
			itemWidth: 201,
			itemMargin: 6,
			pausePlay: true,
		    start: function(slider){
			$('body').removeClass('loading');
			}
		  });
		};
		footerflexslider();
		//Language Navbar
		function langnavbar()
		{
			var x = document.getElementById("select-lang");
			x.style.display = "none";
			$("#change-lang").hover(function()
			{
				$("#select-lang").show();
			});
			$("#select-lang").mouseleave(function()
			{
				$("#select-lang").hide();
			});
		};
		langnavbar();
		
		$('.fancybox').fancybox();
	
	});	
});

function printcontent()
{
	var divContents = document.getElementById("print-area").innerHTML;  
	var printWindow = window.open();  
	printWindow.document.write('<body><html>');  
	printWindow.document.write(divContents);  
	printWindow.document.write('</body></html>');  
	printWindow.document.close();  
	printWindow.print();
	printWindow.window.close();
};

function fbook_share(url, title, descr, image, winWidth, winHeight)
 {
	var fblink = location.href;
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + fblink + ', 100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + 50 + ',left=' + 50 + ',toolbar=0,status=0,width='+600 +',height='+300);
};

function twitter_share(url, title, descr, image, winWidth, winHeight)
{
	var twlink = location.href;
	window.open('https://twitter.com/share?=' + twlink + ', 100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + 50 + ',left=' + 50 + ',toolbar=0,status=0,width='+600 +',height='+300);
};
