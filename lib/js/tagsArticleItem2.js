$(function () {
    var zkxgbb = 0,
        xgbbxzH = $(".xgbbxz").height();
    console.log(xgbbxzH);
    if (xgbbxzH > 103) {
        $(".xgbbxz").css({
            "height": "102px"
        });
        $("#morexgbb").show();
    }
    $("#morexgbb").click(function () {
        if (zkxgbb == 0) {
            $(".xgbbxz").animate({
                "height": xgbbxzH + "px"
            }, "fast");
            $(this).html("收起内容");
            zkxgbb = 1;
        } else {
            $(".xgbbxz").animate({
                "height": "102px"
            }, "fast");
            $(this).html("展开全部");
            zkxgbb = 0;
        }
    })
})