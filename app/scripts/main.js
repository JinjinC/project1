$(document).ready(function() {

    /* ======= Twitter Bootstrap hover dropdown ======= */   
    /* Ref: https://github.com/CWSpear/bootstrap-hover-dropdown */ 
    /* apply dropdownHover to all elements with the data-hover="dropdown" attribute */

    //global varible about videoId,beforescroll
    var global ={
        videoId: null,
        beforescroll: 0
    }
    
    $(function () {
      $('[data-hover="dropdown"]').dropdownHover();
      $('[data-toggle="tooltip"]').tooltip();
    })
    
    /* ======= Fixed header when scrolled ======= */    
    $(window).bind('scroll', function() {

        var header = $('#header');
        var header_height = header.height();
        var section = header.parent().find('section').first();
        var mediaWidth = $(document).width();

        if(mediaWidth > 767){
            if ($(window).scrollTop() > 0) {              
                if ( $(window).scrollTop() < global.beforescroll) {
                    $('#header').addClass('navbar-fixed-top');
                    section.css('margin-top',header_height);
                    setTimeout(function(){
                        $('#header').addClass('navbar-fixed-top-show');
                    }, 200);
                    global.beforescroll = $(window).scrollTop();
                }else {
                    $('#header').removeClass('navbar-fixed-top-show');
                    global.beforescroll = $(window).scrollTop();
                }
            }
            else {
                $('#header').removeClass('navbar-fixed-top');
                section.css('margin-top',0);
                global.beforescroll = $(window).scrollTop();
            }
        }
    });
    
    /* ======= jQuery Placeholder ======= */
    /* Ref: https://github.com/mathiasbynens/jquery-placeholder */
    
    $('input, textarea').placeholder();    
    
    
    /* ======= FAQ accordion ( + <====> - ) ======= */
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
    

	
	// /* ======= Stop Video Playing When Close the Modal Window ====== */
 //    $("#modal-video .close").on("click", function() {
 //        $("#modal-video iframe").attr("src", $("#modal-video iframe").attr("src"));        
 //    });
     
    
     /* ======= Testimonial Bootstrap Carousel ======= */
     /* Ref: http://getbootstrap.com/javascript/#carousel */
    // $('#testimonials-carousel').carousel({
    //   interval: 8000 
    // });
    
    
    /* ======= Style Switcher ======= */    
 //    $('#config-trigger').on('click', function(e) {
 //        var $panel = $('#config-panel');
 //        var panelVisible = $('#config-panel').is(':visible');
 //        if (panelVisible) {
 //            $panel.hide();          
 //        } else {
 //            $panel.show();
 //        }
 //        e.preventDefault();
 //    });
    
 //    $('#config-close').on('click', function(e) {
 //        e.preventDefault();
 //        $('#config-panel').hide();
 //    });
    
    
 //    $('#color-options a').on('click', function(e) { 
 //        var $styleSheet = $(this).attr('data-style');
	// 	$('#theme-style').attr('href', $styleSheet);	
				
	// 	var $listItem = $(this).closest('li');
	// 	$listItem.addClass('active');
	// 	$listItem.siblings().removeClass('active');
		
	// 	e.preventDefault();
		
	// });

    //点击查看详情
    // $('#read-more').click(function  () {
    //     var offset_top = $('section.ca').offset().top;
    //     $('body').animate({scrollTop:offset_top},600);
    // });

    //客户案例翻页
    // $('.mail-box .next').click(function  () {
    //     var mailbox = $('.mail-box.active');
    //     mailbox.removeClass("active");
    //     if (mailbox.hasClass("last")) {
    //         mailbox.siblings().first().addClass("active"); 
    //     }
    //     else{
    //         mailbox.next().addClass("active"); 
    //     }
        
    // });

    // $('.mail-box .prev').click(function  () {
    //     var mailbox = $('.mail-box.active');
    //     mailbox.removeClass("active");
    //     if (mailbox.hasClass("first")) {
    //         mailbox.siblings().last().addClass("active"); 
    //     }
    //     else{
    //         mailbox.prev().addClass("active"); 
    //     }
        
    // });


    //视频播放控制
    $('.play-btn').click(function  () {
        $(this).hide();
        var video = $(this).parent().find("video");
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
    // $('#scan-code').mouseover(function () {
    //     $('#scan-code-img').show();
    // });

    // $('#scan-code').mouseleave(function () {
    //     $('#scan-code-img').hide();
    // });

    //点击查看各个语言安装步骤

    $('.lang-button a').click(function  () {
        var header_height = $('#header').height();
        var offset_top = $('.lang-content .last-item').offset().top-header_height;
        $('body').animate({scrollTop:offset_top},600);
    });

    //导航栏宽度的调整，悬浮与点击的变化

    function sidebarResize() {
        var mediaWidth = $(document).width();

        if (mediaWidth > 1024){
            $('header ul  li.dropdown a.dropdown-toggle').attr("data-toggle","");
        }else{
            $('header ul  li.dropdown a.dropdown-toggle').attr("data-toggle","dropdown");
        }
    }

    sidebarResize();

    $(window).resize(function  () {
        sidebarResize();
    });

    //image slider点击向前，向后

    $('.prev-btn').click(function  () {
        var imgslider_container = $(this).closest(".imgslider-container");
        var img_prev = imgslider_container.find('.img-prev');
        var img_cur = imgslider_container.find('.img-current');
        var img_next = imgslider_container.find('.img-next');
        img_prev.removeClass("img-prev").addClass("img-current");
        img_cur.removeClass("img-current").addClass("img-next");
        img_next.removeClass("img-next").addClass("img-prev");
    });

    $('.next-btn').click(function  () {
        var imgslider_container = $(this).closest(".imgslider-container");
        var img_prev = imgslider_container.find('.img-prev');
        var img_cur = imgslider_container.find('.img-current');
        var img_next = imgslider_container.find('.img-next');
        img_prev.removeClass("img-prev").addClass("img-next");
        img_cur.removeClass("img-current").addClass("img-prev");
        img_next.removeClass("img-next").addClass("img-current");
    });

    $('.img-wrapper').click(function(){
        var imgslider_container = $(this).closest(".imgslider-container");
        var mediaWidth = $(document).width();
        if (mediaWidth < 992) {
            imgslider_container.find('.next-btn').trigger("click");
        };
    });

    // $('.prev-btn,.next-btn').click(function  () {
    //     var imgslider_container = $(this).closest(".imgslider-container");
    //     var img_cur = imgslider_container.find('.img-current');
    //     var cur_img_text = img_cur.find('.img-text').clone();
    //     var dest_img_text = $('.controller-wrap .img-text');
    //     dest_img_text.replaceWith(cur_img_text);
    // });

    $('.imgslider').click(function  () {
        var imgslider_container = $(this).closest(".imgslider-container");
        if ($(this).hasClass("img-prev")){
            imgslider_container.find('.prev-btn').trigger("click");
        }
        if ($(this).hasClass("img-next")){
            imgslider_container.find('.next-btn').trigger("click");
        }
    })


    //鼠标悬浮，触发点击下一个图片
    var flag = 0;

    $('.imgslider-container').mouseenter(function  () {
        if (flag == 0) {
            $(this).find('.next-btn').trigger("click");
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
        $('.product').removeClass('open');
        $('#navbar-collapse').css("left","0");
        $('.subnav-container').css("left","100%");

    })

    $('#navbar-toggle-btn').click(function(){
        if ($('.product').hasClass("open")) {
            $('.product').removeClass('open');
            $('#navbar-collapse').css("left","0");
            $('.subnav-container').css("left","100%");
        }
    })



    $('#product a,.subnav').mouseenter(function(){
        var mediaWidth = $(window).width();
        if (mediaWidth>767) {
            $('.product').addClass('open');
        }
    })

    $('.nav-item').mouseenter(function(e){
        var mediaWidth = $(window).width();
        if (e.target!==$('.forward').get(0)) {
            if (mediaWidth>767) {
                $('.product').removeClass('open');
            }
        }
    })

    $('#product a,.subnav,#navbar-collapse').mouseleave(function(e){
        var mediaWidth = $(window).width();
        if (e.target!==$('.forward').get(0)){
            if (mediaWidth>767) {
                $('.product').removeClass('open');
            }
        }
    })




    $('#product a').click(function(){
        var mediaWidth = $(window).width();
        if (mediaWidth<768) {
            $('#navbar-collapse').css("left","-100%");
            $('.product').addClass('open');
            $('.subnav-container').css("left","0");
        }else{
            $('.product').toggleClass('open');
        }
    })

    $('.subnav #back').click(function(){
        $('#navbar-collapse').css("left","0");
        $('.subnav-container').css("left","100%");
        setTimeout(function(){
            $('.product').removeClass('open');
        }, 500);
    })

    $('.drop-down').on("click mouseenter",function(e){
        var mediaWidth = $(window).width();
        if(mediaWidth<768){
            var $thisDropDown = $(this);
            $('.drop-down').each(function(){
                if ($(this).get(0) !== $thisDropDown.get(0)) {
                    // $(this).find('.pro-content').removeAttr("style");
                    // console.log($(this).get(0));
                    $(this).removeClass("open");
                }
            })
            // $thisDropDown.find('.pro-content').toggle();
            $thisDropDown.toggleClass("open");
            e.preventDefault();
        }
        
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