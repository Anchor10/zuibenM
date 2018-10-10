function contScroll() {
    var conHeight = $("#contheme .g-cont-scroll").height();
    var i = 0;
    setTimer = setTimeout(function () {
        window.setInterval(function () {
            i++;
            if (i <= conHeight) {
                $("#contheme .g-cont-scroll").animate({
                    top: -i
                }, 0)
            } else {
                i = 0;
                $("#contheme .g-cont-scroll").animate({
                    top: -i
                }, 0)
            }
        }, 50)
    }, 3000)

}
$("#g-look-desc,.g-cont-scroll,#g-black-bg,#g-desc-bg").click(function () {
    console.log(123);
    var winHeight = $(window).height();
    var showHeight = $(".g-cont-scroll").height() + 36;
    if (showHeight <= winHeight * 0.7) {
        var descHtml = $(".g-cont-scroll").html();
        $("body").append("<div class=\"m-desc-alert\">" + descHtml + "<b id=\"m-close-desc\">" + "关闭" + "</b>" + "</div>" + "<b id=\"m-alert-bg\">" + "</b>");
        $("html,body").css("overflow", "hidden");
        var topHeight = (winHeight - showHeight) / 2;
        $(".m-desc-alert,#m-close-desc").css("top", topHeight);
    } else {
        var descHtml = $(".g-cont-scroll").html();
        $("body").append("<div class=\"m-desc-alert\">" + descHtml + "<b id=\"m-close-desc\">" + "关闭" + "</b>" + "</div>" + "<b id=\"m-alert-bg\">" + "</b>");
        $("html,body").css("overflow", "hidden");
    }

    $("#m-close-desc,#m-alert-bg").click(function () {
        $(".m-desc-alert,#m-alert-bg").remove();
        $("html,body").css("overflow", "auto");
    })
});
$(function () {
    contScroll();
})