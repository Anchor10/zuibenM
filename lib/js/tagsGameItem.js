$(".innerSort").on("click", "span", function () {
    $(".innerSort span").removeClass("current");
    $(this).addClass("current");
    $(".indexS").hide();
    $(".indexS").eq($(this).index()).show();
})