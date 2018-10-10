// 安全下载
$("#check-box").on("click", function () {
    console.log($("#down-box").hasClass("pp-highspeed-status"));
    if ($("#down-box").hasClass("pp-highspeed-status")) {
        $("#down-box").removeClass("pp-highspeed-status");
    } else {
        $("#down-box").addClass("pp-highspeed-status");
    }

})

// #tab切换
$("#tab").on("click", "span", function () {
    $("#tab span").removeClass("cur");
    $(this).addClass("cur");
    $(".tab-show").hide();
    $(".tab-show").eq($(this).index()).show();
})

// 详情截图
var mySwiper1 = new Swiper('#swiper1', {
    freeMode: true,
    freeModeMomentumBounce: false,
    slidesPerView: 'auto',
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        snapOnRelease: false,
        hide: true,
    },
});

//图片点击放大
$.fn.ImgZoomIn = function () {
    var window_h = $(window).height();
    var scroll_h = $(window).scrollTop();
    bgstr = '<div id="ImgZoomInBG" style="position: fixed;left:0;top:0;right:0;bottom:0;margin:auto;opacity:0;z-index: 10000;background-color: #000;width:0px;height:0;max-width:640px;"></div>';
    imgstr = '<img id="ImgZoomInImage" src="' + $(this).attr('src') + '" style="cursor:pointer; position:fixed; z-index:10001;left:0;top:0;right:0;bottom:0;margin:auto;width:0px;max-width:576px;opacity:0;" />';
    closestr = '<span id="close" style="position:absolute;left:50%;bottom:5px;margin-left:-20px;line-height:35px;text-align:center;opacity:1;display:block;z-index:10005;height:40px;width:40px;font-size:40px;background:#000;color:#fff;border-radius:50%;border:2px solid #fff;">×</span>'
    if ($('#ImgZoomInBG').length < 1) {
        $('body').append(bgstr);
        // $('#ImgZoomInBG').append(closestr);        
    }
    if ($('#ImgZoomInImage').length < 1) {
        $('body').append(imgstr);
    } else {
        $('#ImgZoomInImage').attr('src', $(this).attr('src'));
    }
    $('#ImgZoomInBG').animate({
        width: '100%',
        height: window_h + 'px',
        opacity: "0.7"
    }, 300);
    $('#ImgZoomInImage').animate({
        width: '90%',
        opacity: "1"
    }, 300);
    $('#ImgZoomInImage').css('top', 0 + 'px').css('left', 0 + 'px');
};
$(document).ready(function () {
    $(document).on('click', '#swiper1 img', function () {
        $(this).ImgZoomIn();
        $('body').css('overflow', 'hidden');
    });
    $(document).on('click', '#ImgZoomInImage', function () {
        $('#ImgZoomInBG').animate({
            width: '0',
            height: '0',
            opacity: "0"
        }, 300);
        $('#ImgZoomInImage').animate({
            width: '0',
            opacity: "0"
        }, 300);
        $('body').css('overflow', 'auto');
    });
});

// GM权限
$('.yuyueBtn').click(function () {
    $('.zzc').fadeIn();
    $('.tanchu').removeClass('aniHide').addClass('aniBlow').fadeIn();
})
$('.close').click(function () {
    $('.zzc').fadeOut();
    $('.tanchu').removeClass('aniBlow').addClass('aniHide').fadeOut();
})
var a = document.querySelectorAll('.chakan');
var b = document.querySelectorAll('.gmlist');

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", () => {
        for (let j = 0; j < b.length; j++) {
            b[j].setAttribute("style", "display:none;");
        }
        b[i].setAttribute("style", "display:block;");
    })
}
$(".chakan").on("click", function () {
    $(".zzc").show();
})
$('.t-title span').click(function () {
    $(this).parent().parent().hide();
    $('.zzc').hide();
})