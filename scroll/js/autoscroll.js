(function($){
  $(function(){
    //ページトップへ自動スクロール移動
    $(".pagetop").click(function(event){
      $("html, body").animate({
        scrollTop: 0
      });
      event.preventDefault();  //aタグの本来の役割をキャンセル
    });

    //スクロール位置がドキュメントの30%より下にあるとき
    $(window).scroll(function(){
      var s = $(window).scrollTop() / ($(document).height() - $(window).height());
      console.log(s);  //結果
      console.log($(window).scrollTop());   //スクロール上の上位置を取得
      console.log($(document).height());  //ページ全体の表示領域
      console.log($(window).height());  //ブラウザの表示領域
      if (s > 0.3) {
        $(".pagetop").fadeIn();
      } else {
        $(".pagetop").fadeOut();
      }
    });

    //スクロールを上に移動
    //addeventlistenerを使ってリファクタリング可能
    $(".scrollto_1").click(function(event){   //function(e)と書かれている参考書などもある
      console.log(event);
      $("html, body").animate({
        scrollTop: $(window).scrollTop() - 200
      });
      event.preventDefault();
    });

    //スクロールを下に移動
    $(".scrollto_2").click(function(event){
      $("html, body").animate({
        scrollTop: $(window).scrollTop() + 400
      });
      event.preventDefault();
    });

    //スクロールが上下両端にあるとき、ボタンを無効にする
    $(window).scroll(function(){
      var s = $(window).scrollTop() / ($(document).height() - $(window).height());
      //スクロール位置が上橋のとき
      if ( s === 0 ) {
        $(".scrollto_1").addClass("disabled");
      } else {
        $(".scrollto_1").removeClass("disabled");
      }

      //スクロール位置が下端のとき
      if ( s === 1 ) {
        $(".scrollto_2").addClass("disabled");
      } else {
        $(".scrollto_2").removeClass("disabled");
      }
    }).scroll();
  });

})(jQuery);
