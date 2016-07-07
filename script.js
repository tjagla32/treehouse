$(function(){
  $('a[href^="#"]').click(function(e){
    
    var target = $(this).attr('href');
    var strip = target.slice(1);
                                  //var hjh = $(this.hash);
    var anchor = $("section[id='" + strip + "']");
    
    e.preventDefault(); //zapobiega przeładowaniu
    
    $('html, body').animate({
      
      scrollTop: anchor.offset().top
      
    }, 'slow');
    
  });
  
  
  $(window).scroll(function(){
    if($(document).width()>=765)
    {
      var scrollh = $(this).scrollTop();
      if (scrollh <= 50) {
        $('.navbar-default').css('height', '90px');
        $('.navbar-nav > li').css('height', '90px');
        $('.navbar-nav > li > a').css({
          "height": "90px",
          "line-height": "60px"
        });
        $('.navbar-default .navbar-brand').css('margin', '20px 0');
      } else {
        $('.navbar-default').css('height', '50px');
        $('.navbar-nav > li').css('height', '50px');
        $('.navbar-nav > li > a').css({
          "height": "50px",
          "line-height": "25px"
        });
        $('.navbar-default .navbar-brand').css('margin', '0');
      }
    }
  
});
    
});
