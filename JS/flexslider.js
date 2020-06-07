$(window).load(function() {
	"use strict";
	$(".front-slider").flexslider({
		animation: "slide",
		controlNav: false,
		directionNav: false
	});

	$(".story-slider").flexslider({
		animation: "slide",
		controlNav: true,
		directionNav: true
	});
});
