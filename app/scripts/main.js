$(document).ready(function() {

    /* ======= Twitter Bootstrap hover dropdown ======= */   
    /* Ref: https://github.com/CWSpear/bootstrap-hover-dropdown */ 
    /* apply dropdownHover to all elements with the data-hover="dropdown" attribute */
    var global ={
        videoId: null,
        feature_mi_height: 641
    }
    
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
         var video = $(global.videoId);
        video[0].pause();
    });

    //视频自动控制(index页)
    $('#video-btn').click(function  () {
        var id = $(this).attr("data-source");
        global.videoId = id;
        var video = $(id);
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

    //导航栏宽度的调整，悬浮与点击的变化

    function localResize() {
        var mediaWidth = $(document).width();
        var param =((768 - mediaWidth)/768 +1);
        var fmhParam = 1;
        if ($('.feature-mi').height<641) {
            fmhPara = 0;
        }
        else{
            fmhPara = 1;
        }
        if (mediaWidth > 1024){
            $('header ul  li.dropdown a.dropdown-toggle').attr("data-toggle","");
        }else{
            $('header ul  li.dropdown a.dropdown-toggle').attr("data-toggle","dropdown");
        }
        if (mediaWidth < 768){
            $(".mi-headline-bg").css("height", $('.feature-mi').height() + 28*param*fmhParam +"px");
            $(".ee-headline-bg").css("height", $('.feature-ee').height() + 45*param*fmhParam +"px");
        }else{
            $(".mi-headline-bg").removeAttr("style");
            $(".ee-headline-bg").removeAttr("style");
        }
    }

    localResize();

    $(window).resize(function  () {
        localResize();
    });

    //image slider点击向前，向后

    $('.prev-btn').click(function  () {
        var imgslider_container = $(this).parentsUntil(".imgslider-container").parent();
        var img_prev = imgslider_container.find('.img-prev');
        var img_cur = imgslider_container.find('.img-current');
        var img_next = imgslider_container.find('.img-next');
        img_prev.removeClass("img-prev").addClass("img-current");
        img_cur.removeClass("img-current").addClass("img-next");
        img_next.removeClass("img-next").addClass("img-prev");
    });

    $('.next-btn').click(function  () {
        var imgslider_container = $(this).parentsUntil(".imgslider-container").parent();
        var img_prev = imgslider_container.find('.img-prev');
        var img_cur = imgslider_container.find('.img-current');
        var img_next = imgslider_container.find('.img-next');
        img_prev.removeClass("img-prev").addClass("img-next");
        img_cur.removeClass("img-current").addClass("img-prev");
        img_next.removeClass("img-next").addClass("img-current");
    });

    $('.prev-btn,.next-btn').click(function  () {
        var imgslider_container = $(this).parentsUntil(".imgslider-container").parent();
        var img_cur = imgslider_container.find('.img-current');
        var cur_img_text = img_cur.find('.img-text').clone();
        var dest_img_text = $('.controller-wrap .img-text');
        dest_img_text.replaceWith(cur_img_text);
    });

    $('.imgslider').click(function  () {
        if ($(this).hasClass("img-prev")){
             $('.prev-btn').trigger("click");
        }
        if ($(this).hasClass("img-next")){
             $('.next-btn').trigger("click");
        }
    })


    //鼠标悬浮，触发点击下一个图片
    var flag = 0;

    $('.imgslider-container').mouseenter(function  () {
        if (flag == 0) {
            $('.next-btn').trigger("click");
            flag = 1;
        }; 
    })
    //每隔1分钟，将flag变为0；
    setInterval(function(){
        flag = 0;
    },1000*60);


    //小于767下的，导航栏出现黑色遮罩的
    $('.navbar-toggle').click(function() {
        $('.global-header-overlay').toggleClass("overlay-show");
    });

    $('.global-header-overlay').click(function  () {
        $('.navbar-toggle').trigger("click");
    })




});

;(function(document){
var fromValue = (function getURLParameter(name) {
  return encodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
})("from");
if(fromValue){
  document.cookie = "from="+fromValue+";Path=/"+"; Domain=oneapm.com"
}
})(document);