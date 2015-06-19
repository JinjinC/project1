$(document).ready(function(){

	function headerResize() {
	    var mediaWidth = $(document).width();
	    var param =((768 - mediaWidth)/768 +1);
	    var fmhParam = 1;
	    if ($('.feature-mi').height<641) {
	        fmhPara = 0;
	    }
	    else{
	        fmhPara = 1;
	    }
	    if (mediaWidth < 768){
	        $(".mi-headline-bg").css("height", $('.feature-mi').height() + 28*param*fmhParam +"px");
	        $(".ee-headline-bg").css("height", $('.feature-ee').height() + parseInt($('.feature-ee').css("padding-top")) + 20*param +"px");
	    }else{
	        $(".mi-headline-bg").removeAttr("style");
	        $(".ee-headline-bg").removeAttr("style");
	    }
	}

	headerResize();

	$(window).resize(function  () {
	    headerResize();
	});

});