$(document).ready(function(){

	function headerResize() {
	    var mediaWidth = $(window).width();
	    var param =((768 - mediaWidth)/768 +1);
	    var fmhParam = 1;
	    if ($('.feature-mi').height()<641 || $('.feature-ai').height()<641 || $('.feature-bi').height()<641) {
	        fmhPara = 0;
	    }
	    else{
	        fmhPara = 1;
	    }
	    if (mediaWidth < 768){
	        $(".mi-headline-bg").css("height", $('.feature-mi').height() + 28*param*fmhParam +"px");
	        $(".ai-headline-bg").css("height", $('.feature-ai').height() + 28*param*fmhParam +"px");
	        $(".bi-headline-bg").css("height", $('.feature-bi').height() + 28*param*fmhParam +"px");
	        $(".ee-headline-bg").css("height", $('.feature-ee').height() + parseInt($('.feature-ee').css("padding-top")) + 20*param +"px");
	    }else{
	        $(".mi-headline-bg").removeAttr("style");
	        $(".ai-headline-bg").removeAttr("style");
	        $(".bi-headline-bg").removeAttr("style");
	        $(".ee-headline-bg").removeAttr("style");
	    }
	}

	setTimeout(function(){
		headerResize();
	}, 100);

	$(window).resize(function  () {
	    headerResize();
	});

});