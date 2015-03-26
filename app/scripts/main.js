$(document).ready(function() {

    /* ======= Twitter Bootstrap hover dropdown ======= */   
    /* Ref: https://github.com/CWSpear/bootstrap-hover-dropdown */ 
    /* apply dropdownHover to all elements with the data-hover="dropdown" attribute */
    
    $('[data-hover="dropdown"]').dropdownHover();
    
    /* ======= Fixed header when scrolled ======= */    
    $(window).bind('scroll', function() {

        var header = $('#header');
        var header_height = header.height();
        var section = header.parent().find('section').first();
        var mediaWidth = $(document).width();
        if(mediaWidth > 768){
            if ($(window).scrollTop() > 0) {
               $('#header').addClass('navbar-fixed-top');
               section.css('margin-top',header_height);
            }
            else {
                $('#header').removeClass('navbar-fixed-top');
                section.css('margin-top',0);
            }
        }else{
            if ($(window).scrollTop() > 0) {
               $('#header').addClass('navbar-fixed-top');
            }
            else {
                $('#header').removeClass('navbar-fixed-top');
            }     
        }
    });
    
    /* ======= jQuery Placeholder ======= */
    /* Ref: https://github.com/mathiasbynens/jquery-placeholder */
    
    $('input, textarea').placeholder();    
    
    /* ======= jQuery FitVids - Responsive Video ======= */
    /* Ref: https://github.com/davatron5000/FitVids.js/blob/master/README.md */
    
    // $(".video-container").fitVids();
    
    /* ======= FAQ accordion ======= */
    function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find('.panel-title a')
        .toggleClass('active')
        .find("i.fa")
        .toggleClass('fa-plus-square fa-minus-square');
    }
    $('.panel').on('hidden.bs.collapse', toggleIcon);
    $('.panel').on('shown.bs.collapse', toggleIcon);    
    
    
    /* ======= Header Background Slideshow - Flexslider ======= */    
    /* Ref: https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties */
    
    // $('.bg-slider').flexslider({
    //     animation: "fade",
    //     directionNav: false, //remove the default direction-nav - https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties
    //     controlNav: false, //remove the default control-nav
    //     slideshowSpeed: 8000
    // });
	
	/* ======= Stop Video Playing When Close the Modal Window ====== */
    $("#modal-video .close").on("click", function() {
        $("#modal-video iframe").attr("src", $("#modal-video iframe").attr("src"));        
    });
     
    
     /* ======= Testimonial Bootstrap Carousel ======= */
     /* Ref: http://getbootstrap.com/javascript/#carousel */
    $('#testimonials-carousel').carousel({
      interval: 8000 
    });
    
    
    /* ======= Style Switcher ======= */    
    $('#config-trigger').on('click', function(e) {
        var $panel = $('#config-panel');
        var panelVisible = $('#config-panel').is(':visible');
        if (panelVisible) {
            $panel.hide();          
        } else {
            $panel.show();
        }
        e.preventDefault();
    });
    
    $('#config-close').on('click', function(e) {
        e.preventDefault();
        $('#config-panel').hide();
    });
    
    
    $('#color-options a').on('click', function(e) { 
        var $styleSheet = $(this).attr('data-style');
		$('#theme-style').attr('href', $styleSheet);	
				
		var $listItem = $(this).closest('li');
		$listItem.addClass('active');
		$listItem.siblings().removeClass('active');
		
		e.preventDefault();
		
	});

    //点击查看详情
    $('#read-more').click(function  () {
        var offset_top = $('section.ca').offset().top;
        $('body').animate({scrollTop:offset_top},600);
    });

    //客户案例翻页
    $('.mail-box .next').click(function  () {
        var mailbox = $('.mail-box.active');
        mailbox.removeClass("active");
        if (mailbox.hasClass("last")) {
            mailbox.siblings().first().addClass("active"); 
        }
        else{
            mailbox.next().addClass("active"); 
        }
        
    });

    $('.mail-box .prev').click(function  () {
        var mailbox = $('.mail-box.active');
        mailbox.removeClass("active");
        if (mailbox.hasClass("first")) {
            mailbox.siblings().last().addClass("active"); 
        }
        else{
            mailbox.prev().addClass("active"); 
        }
        
    });


    //视频播放控制
    $('.play-btn').click(function  () {
        $('.play-btn').hide();
        var video = $('#apm-video');
        video[0].play();
    });

    // $('#apm-video').click(function  () {
    //     var video = $('#apm-video');
    //     if (video[0].pause) {
    //         $('.play-btn').show();
    //     }
    // })

    //scan code 悬浮
    $('#scan-code').mouseover(function () {
        $('#scan-code-img').show();
    });

    $('#scan-code').mouseleave(function () {
        $('#scan-code-img').hide();
    });
    



});