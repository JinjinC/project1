
$(function(){
	$.fn.sineWavesControl = function(options){
		return this.each(function(){
			var elmt = $(this);
			$(window).bind('scroll', function() {
				
				var docScrollTop = $(document).scrollTop();
				var docScrollBtm = $(document).scrollTop() + $(window).height();
				var elmtBtmToDocTop = elmt.offset().top + elmt.height();
				var elmtTopToDocTop = elmt.offset().top;
				//console.log(docScrollTop,docScrollBtm,elmtBtmToDocTop,elmtTopToDocTop);
				if (docScrollTop < elmtBtmToDocTop && docScrollBtm > elmtTopToDocTop){
					// console.log(true,elmt);
					return true;
				}else{
					return false;
				}
			})
		})
	}
});