$(document).ready(function(){
  $(".slidemenu").click(function(){
    // クリックしたところの親要素に戻って、中にあるulをslideToggle
    $(this).parent().children("ul").slideToggle();
    
    // 中の矢印のsrcを取得
    var src = $(this).children(".arrow").attr("src");
    // 今のsrcの中身がdown_iconだったら
    if ( src == "images/top/down_icon.png" ) {
        // next_iconにsrcを変更
        $(this).children(".arrow").attr("src", "images/top/next_icon.png");
    // そうで無ければ
    } else {
        // down_iconにsrcを変更
        $(this).children(".arrow").attr("src", "images/top/down_icon.png");
    }
    
  });
});


//PRODUCT
$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    if ( img_src != "images/products/gray_pro_img.jpg" ) {
      $("#display_img img").attr("src", img_src);
    }
  });
});
