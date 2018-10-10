
$(function(){
    $(".tab-list").on("click",".tab-item",function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab-game-list").hide();
        $(".tab-game-list").eq($(this).index()).show();
    })
})

