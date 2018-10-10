// nav-main tab切换
$(".second-nav").on("click", ".subnav_run", function () {
    console.log($(this).index());
    $(".subnav_run").removeClass("on");
    $(this).addClass("on");
    $(".nav-main-tab").hide();
    $(".nav-main-tab").eq($(this).index()).show();
})

// 判断系统
$(function () {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        $(".i-nav").hide();
        $(".a-nav").show();
    } else if (isiOS) {
        $(".a-nav").hide();
        $(".i-nav").show();
    }
})