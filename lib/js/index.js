$(function () {

    var _width = $('.swiper-slide img').width();
    if (_width * 0.55 > 378) {
        $('.swiper-container .swiper-slide img').height(378);
    } else {
        $('.swiper-container .swiper-slide img').height(_width * 0.524155);
    }

    // nav-main tab切换
    $(".second-nav").on("click", ".subnav_run", function () {
        console.log($(this).index());
        $(".subnav_run").removeClass("on");
        $(this).addClass("on");
        $(".nav-main-tab").hide();
        $(".nav-main-tab").eq($(this).index()).show();
    })
})