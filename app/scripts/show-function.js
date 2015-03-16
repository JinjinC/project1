$(document).ready(function() {

	//
	$('.btn-knowmore').click(function  () {
		var offset_top = $('.btn-knowmore').offset().top;
		$('body').animate({scrollTop:offset_top},1000);
		setTimeout(function  () {
			$('section.function').slideDown(1000);
		}, 1000);
	});

	$(document).scroll(function () {
		var scroll_top = $('body').scrollTop();
		if (scroll_top >= 1400 ){
			$('.function .table>thead>tr').addClass("tr-fixed");
			$('.function .table>thead>tr>th').addClass("th-fixed");
		} else{
			$('.function .table>thead>tr').removeClass("tr-fixed");
			$('.function .table>thead>tr>th').removeClass("th-fixed");
		}
	});
	
});