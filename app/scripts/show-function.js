$(document).ready(function() {

	//
	$('.btn-knowmore').click(function  () {
		var offset_top = $('.contact-lead.text-center').offset().top;
		$('body').animate({scrollTop:offset_top},1000);
		setTimeout(function  () {
			$('section.function').slideDown(1000);
		}, 1000)
	});
	
});