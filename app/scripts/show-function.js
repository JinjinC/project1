$(document).ready(function() {

	//
	$('.btn-knowmore').click(function  () {
		var offset_top = $('.btn-knowmore').offset().top+30;
		$('body').animate({scrollTop:offset_top},600);
		setTimeout(function  () {
			$('section.function').slideDown(600);
		}, 0);
	});

	// $(document).scroll(function () {
	// 	if ($('section.function').is(":hidden") == false) {
	// 		var scroll_top = $(document).scrollTop();
	// 		var  col0_width = $('.function .table-stable>thead>tr th:eq(0)').width();
	// 		var  col1_width = $('.function .table-stable>thead>tr th:eq(1)').width();
	// 		var  col2_width = $('.function .table-stable>thead>tr th:eq(2)').width();
	// 		var  col3_width = $('.function .table-stable>thead>tr th:eq(3)').width();

	// 		$('.function .table-hover>thead>tr th:eq(0)').css("width",col0_width);
	// 		$('.function .table-hover>thead>tr th:eq(1)').css("width",col1_width);
	// 		$('.function .table-hover>thead>tr th:eq(2)').css("width",col2_width);
	// 		$('.function .table-hover>thead>tr th:eq(3)').css("width",col3_width);
	// 	}
	// })

	// $(document).scroll(function () {

	// 	if ($('section.function').is(":hidden") == false) {

	// 		var scroll_top = $(document).scrollTop();
	// 		var header_height = $('header').height();
	// 		var th_offset_top = $('.function .table>thead>tr').offset().top;
	// 		var dis_to_window = th_offset_top-scroll_top;
	// 		var tr_offset_top = $('.function tbody tr:eq(0)').offset().top;
	// 		var dis_th_tr = tr_offset_top-th_offset_top;
	// 		var last_tr_offset_top = $('.function tbody tr:last').offset().top;
	// 		var criteria_top = $('.function').offset().top;
	// 		var criteria_btm = $('.function tbody tr:nth-last-child(3)').offset().top;
	// 		// console.log(dis_th_tr);
	// 		// console.log(th_offset_top);
	// 		// console.log(last_tr_offset_top);
	// 		// console.log(scroll_top);

	// 		if (dis_to_window <= header_height && scroll_top  + header_height <= last_tr_offset_top && scroll_top < criteria_btm ){
	// 			$('.function .table>thead>tr').addClass("tr-fixed");
	// 			$('.function .table>thead>tr>th').addClass("th-fixed");
	// 			$('.table-title .btn').hide();
	// 			// $('.title-margin').addClass(".title-margin-b");

	// 		} else{
	// 			$('.function .table>thead>tr').removeClass("tr-fixed");
	// 			$('.function .table>thead>tr>th').removeClass("th-fixed");
	// 			$('.table-title .btn').show();
	// 			// $('.title-margin').removeClass(".title-margin-b");
	// 		}

	// 		if ($('.function .table>thead>tr').hasClass("tr-fixed")) {

	// 			if (dis_to_window>header_height || scroll_top+header_height>last_tr_offset_top || scroll_top>= criteria_btm || scroll_top<criteria_top){
	// 				$('.function .table>thead>tr').removeClass("tr-fixed");
	// 				$('.function .table>thead>tr>th').removeClass("th-fixed");
	// 				// $('.title-margin').removeClass(".title-margin-b");
	// 			}
	// 		}

	// 	}
	// });
	
});