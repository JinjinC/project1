$(document).ready(function() {

	$('.btn-knowmore').click(function  () {
		var offset_top = $('.btn-knowmore').offset().top+30;
		$('body').animate({scrollTop:offset_top},600);
		setTimeout(function  () {
			$('section.table-contrast').slideDown(600);
		}, 0);
		setTimeout(function (){
			$('section.table-contrast table').stickyheader();
		},600);
	});
});
