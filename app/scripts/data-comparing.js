$(document).ready(function  () {

	var tbody = $('.function tbody');
	var datasource = tbody.attr("data-source");
	var jsonURL = '../../data/'+ datasource;

	
	$.getJSON(jsonURL, function (data) {

		var html = '';
		$.each(data, function(index, item){
			html += '<tr>';
			if (item.epr == ""){
				html += '<td class="title">' + item.title + "</td>";
				html += '<td></td>';
				html += '<td></td>';
				html += '<td></td>';
			} else{
				html += '<td>' + item.title + "</td>";
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

		tbody.html(html);
	})
});