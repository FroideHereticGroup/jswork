//いわゆる即時関数
// ;(function($){}) という書き方もある → 一行になったときにエラーを防ぐためにある
(function($){
  var jQdm_slideMenu = function(){
    var prop = {
      deferredImage: 'img.deferred',
      subContainer: '#subContainer',
      mainNavigation_trigger: '.mainNavigation_trigger',
      mainNavigation_appear: '.appeared'
    };


    function init(){
      $(prop.deferredImage).lazyload({
        threshold : 10,
        effect : 'fadeIn',
        effectspeed : 1000
      });

      //スライドメニューの開閉 この書き方だと一つの関数に複数のイベントを追加することができる
      $(prop.mainNavigation_trigger).find('a').on('click', function(){
        $(prop.subContainer).toggleClass(replaceString(prop.mainNavigation_appear));
      });
    }

    function replaceString(str){
      var reg = new RegExp('[\.]');
      return str ? str.replace(reg, '') : false;  //三項演算子
    }

    init();
  };

  jQdm_slideMenu();
})(jQuery);
