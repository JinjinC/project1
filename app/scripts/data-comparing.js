$(document).ready(function  () {
	
	$.getJSON('../../data/apm-function.json', function (data) {

		var html = '';
		$.each(data, function(index, item){
			html += '<tr>';
			if (item.epr == ""){
				html += '<td class="">' + item.title + "</td>";
				html += '<td></td>';
				html += '<td></td>';
				html += '<td></td>';
			} else{
				html += '<td class="">' + item.title + "</td>";
				if (item.free == 1){
					html += '<td>' + '<i class="fa fa-check"></i>' + '</td>';
				}
				else{
					html += '<td></td>';
				}
				if (item.pro == 1){
					html += '<td>' + '<i class="fa fa-check"></i>' + '</td>';
				}
				else{
					html += '<td></td>';
				}
				if (item.epr == 1){
					html += '<td>' + '<i class="fa fa-check"></i>' + '</td>';
				}
				else{
					html += '<td></td>';
				}
			}
			html += '</tr>';
		});

		$('.function tbody').html(html);
	})
});