$(function () {
    // nav-main tab切换
    $(".second-nav").on("click", ".subnav_run", function () {
        console.log($(this).index());
        $(".subnav_run").removeClass("on");
        $(this).addClass("on");
        $(".nav-main-tab").hide();
        $(".nav-main-tab").eq($(this).index()).show();
    })
})