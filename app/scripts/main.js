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
        if(mediaWidth > 767){
            if ($(window).scrollTop() > 0) {
               $('#header').addClass('navbar-fixed-top');
               section.css('margin-top',header_height);
            }
            else {
                $('#header').removeClass('navbar-fixed-top');
                section.css('margin-top',0);
            }
        }
        // else{
        //     if ($(window).scrollTop() > 0) {
        //        $('#header').addClass('navbar-fixed-top');
        //     }
        //     else {
        //         $('#header').removeClass('navbar-fixed-top');
        //     }     
        // }
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
        video.attr("controls","controls");
    });


    //视频关闭控制(index页)
    $('.modal.modal-video button.close').click(function  () {
         var video = $('#index-video');
        video[0].pause();
    });

    //视频自动控制(index页)
    $('#video-btn').click(function  () {
        console.log('12');
        var video = $('#index-video');
        video[0].play();
    })


    //scan code 悬浮
    $('#scan-code').mouseover(function () {
        $('#scan-code-img').show();
    });

    $('#scan-code').mouseleave(function () {
        $('#scan-code-img').hide();
    });

    //点击查看各个语言安装步骤

    $('.lang-button a').click(function  () {
        var header_height = $('#header').height();
        var offset_top = $('.lang-content .last-item').offset().top-header_height;
        $('body').animate({scrollTop:offset_top},600);
    });

    var mediaWidth = $(document).width();
    if (mediaWidth > 1024){
        $('header ul  li.dropdown a.dropdown-toggle').attr("data-toggle","");
    }else{
        $('header ul  li.dropdown a.dropdown-toggle').attr("data-toggle","dropdown");
    }

    $(window).resize(function  () {
        var mediaWidth = $(document).width();
        if (mediaWidth > 1024){
            $('header ul  li.dropdown a.dropdown-toggle').attr("data-toggle","");
        }else{
            $('header ul  li.dropdown a.dropdown-toggle').attr("data-toggle","dropdown");
        }
    });

    //小于 767px 时导航样式
    var ai = "<p>Application Insight</p>";
    var bi = "<p>Browser Insight</p>";
    var mi = "<p>Mobile Insight</p>";

    if (mediaWidth < 768) {
        $('#logo-ai').append(ai);
        $('#logo-bi').append(bi);
        $('#logo-mi').append(mi);
        $('.navbar-toggle').click(function() {
            $('.global-header-overlay').toggle();    
            
        });

       
        
        // if ($('#navbar-collapse').css('display')!='none') {
        //     $(document).click(function(e){
        //         var e_id = $(e.target).attr('id'); 
        //         alert(e_id);
        //         if (e_id!='navbar-collapse') {
        //             $('#navbar-collapse').hide();
        //             $('.global-header-overlay').hide();
        //         };
        //         e.stopPropagation();
        //     })
            
        // };
      
    }
            
});