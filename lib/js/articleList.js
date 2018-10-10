// 绑定下拉菜单
$('.select_nav').on('click', 'a', function () {

  if ($(this).hasClass('rotate-active')) {
    $(this).removeClass('rotate-active');
    var index = $('.select_nav a').index(this);
    $('.select_box .select-list').eq(index).hide();
    $('.select_box').hide();
    $("html,body").css("overflow", "auto");
    $("html,body").css("height", "auto");
  } else {
    $(this).addClass('rotate-active').siblings().removeClass('rotate-active');
    var index = $('.select_nav a').index(this);
    $('.select_box').show()
    $('.select_box .select-list').eq(index).show().siblings().hide();
    $("html,body").css("overflow", "hidden");
    $("html,body").css("height", "100%");
  }
  return false;
});
// 绑定选项
$('.select-list').on('click', 'a', function () {
  $("html,body").css("overflow", "auto");
  $("html,body").css("height", "auto");
  var index = $('.select-list').index($(this).parents('.select-list'));
  var title;
  if (index == 2) {
    $(this).addClass('active').siblings().removeClass('active');
  } else {
    if (typeof ($(this).attr('data-title')) == "undefined") {
      title = $(this).html();
    } else {
      title = $(this).attr('data-title');
    }
    $('.select_nav a').eq(index).html(title);
    $('.select-list').eq(index).find('a').removeClass('active');
    $(this).addClass('active');
    $('.select-list').hide();
    $('.select_box').hide();
    $('.select_nav a').removeClass('rotate-active');
  }
  return false;
});