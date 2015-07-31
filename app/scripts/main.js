$(document).ready(function() {

    /* ======= Twitter Bootstrap hover dropdown ======= */   
    /* Ref: https://github.com/CWSpear/bootstrap-hover-dropdown */ 
    /* apply dropdownHover to all elements with the data-hover="dropdown" attribute */

    //global varible about videoId,beforescroll
    var global ={
        videoId: null,
        beforescroll: 0,
        browser: function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                trident: u.indexOf("Trident") > -1, //IE内核
                presto: u.indexOf("Presto") > -1, //opera内核
                webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
                gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或者uc浏览器
                iPhone: u.indexOf("iPhone") > -1 , //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf("iPad") > -1, //是否iPad
                webApp: u.indexOf("Safari") == -1, //是否web应该程序，没有头部与底部
                mqq: u.indexOf("MQQ") >-1
            };
        }()
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
        //img-slider随滚动展开
        $('.imgslider-container').each(function(){
            var docScrollTop = $(document).scrollTop();
            var elmtTopToDocTop = $(this).offset().top;
            if (docScrollTop > elmtTopToDocTop - $(window).height()/2) {
                $(this).find('.img-wrapper').removeClass("folded");
            }
        })

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

        var indicator = imgslider_container.find('.indicator');
        var idc_prev = indicator.find('.prev');
        var idc_cur = indicator.find('.cur');
        var idc_next = indicator.find('.next');

        img_prev.removeClass("img-prev").addClass("img-current");
        img_cur.removeClass("img-current").addClass("img-next");
        img_next.removeClass("img-next").addClass("img-prev");
        
        idc_prev.removeClass("prev").addClass("cur");
        idc_cur.removeClass("cur").addClass("next");
        idc_next.removeClass("next").addClass("prev");
    });

    $('.next-btn').click(function  () {
        var imgslider_container = $(this).closest(".imgslider-container");
        var img_prev = imgslider_container.find('.img-prev');
        var img_cur = imgslider_container.find('.img-current');
        var img_next = imgslider_container.find('.img-next');

        var indicator = imgslider_container.find('.indicator');
        var idc_prev = indicator.find('.prev');
        var idc_cur = indicator.find('.cur');
        var idc_next = indicator.find('.next');

        img_prev.removeClass("img-prev").addClass("img-next");
        img_cur.removeClass("img-current").addClass("img-prev");
        img_next.removeClass("img-next").addClass("img-current");

        idc_prev.removeClass("prev").addClass("next");
        idc_cur.removeClass("cur").addClass("prev");
        idc_next.removeClass("next").addClass("cur");
    });

    $('.indicator li').click(function(){
        var imgslider_container = $(this).closest(".imgslider-container");
        if ($(this).hasClass("prev")){
            imgslider_container.find('.prev-btn').trigger("click");
        }
        if ($(this).hasClass("next")){
            imgslider_container.find('.next-btn').trigger("click");
        }
    })

    $('.img-wrapper').click(function(){
        var imgslider_container = $(this).closest(".imgslider-container");
        var mediaWidth = $(document).width();
        if (mediaWidth < 992) {
            imgslider_container.find('.next-btn').trigger("click");
        };
    });

    $('.imgslider').click(function  () {
        var imgslider_container = $(this).closest(".imgslider-container");
        if ($(this).hasClass("img-prev")){
            imgslider_container.find('.prev-btn').trigger("click");
        }
        if ($(this).hasClass("img-next")){
            imgslider_container.find('.next-btn').trigger("click");
        }
    })

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

    $('#product a,.subnav-container,.main-nav').mouseleave(function(e){
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

    $('.drop-down').on("click",function(e){
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

    $('.drop-down .pro-content a').click(function(e){
        e.stopPropagation();
    })

    if(!global.browser.mobile){
        $('.drop-down').on("mouseenter",function(e){
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
    }
});



;(function(document){
var fromValue = (function getURLParameter(name) {
  return encodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
})("from");
if(fromValue){
  document.cookie = "from="+fromValue+";Path=/"+"; Domain=oneapm.com"
}
})(document);