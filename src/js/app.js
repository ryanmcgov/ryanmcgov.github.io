$(function () {
	// scrollTo's
	$(".about-scrollTo").on("click", function(event) {
		event.preventDefault();
		$(window).scrollTo($("#about"), 400);
	});
	$(".exp-scrollTo").on("click", function(event) {
		event.preventDefault();
		$(window).scrollTo($("#experience"), 300);
	});
	$(".projects-scrollTo").on("click", function(event) {
		event.preventDefault();
		$(window).scrollTo($("#projects"), 200);
	});
	$(".contact-scrollTo").on("click", function(event) {
		event.preventDefault();
		$(window).scrollTo($("#contact"), 100);
	});
	
});