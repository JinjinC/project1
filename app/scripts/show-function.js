$(document).ready(function() {

	//
	$('.btn-knowmore').click(function  () {
		var offset_top = $('.btn-knowmore').offset().top-10;
		$('body').animate({scrollTop:offset_top},1000);
		setTimeout(function  () {
			$('section.function').slideDown(1000);
		}, 1000);
	});

	$(document).scroll(function () {

		if ($('section.function').is(":hidden") == false) {

			var scroll_top = $(document).scrollTop();
			var th_offset_top = $('.function .table>thead>tr').offset().top;
			var dis_to_window = th_offset_top-scroll_top;
			var tr_offset_top = $('.function tbody tr:eq(0)').offset().top;
			var dis_th_tr = tr_offset_top-th_offset_top;
			var last_tr_offset_top = $('.function tbody tr:last').offset().top;
			// console.log(dis_th_tr);
			// console.log(th_offset_top);
			// console.log(last_tr_offset_top);
			// console.log(scroll_top);

			if (dis_to_window <= 80 && th_offset_top <= last_tr_offset_top && scroll_top <= 3400 ){
				$('.function .table>thead>tr').addClass("tr-fixed");
				$('.function .table>thead>tr>th').addClass("th-fixed");
				// $('.title-margin').addClass(".title-margin-b");

			} else{
				$('.function .table>thead>tr').removeClass("tr-fixed");
				$('.function .table>thead>tr>th').removeClass("th-fixed");
				// $('.title-margin').removeClass(".title-margin-b");
			}

			if (dis_th_tr > 38){
				$('.function .table>thead>tr').removeClass("tr-fixed");
				$('.function .table>thead>tr>th').removeClass("th-fixed");
				// $('.title-margin').removeClass(".title-margin-b");
			}

		}
	});
	
});