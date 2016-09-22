
$(window).scroll(function(){
  if($(this).scrollTop()>50){
    $('.nav-wrapper').removeClass("clear").addClass("blue-grey", 500)
    $('nav').removeClass("noboxshadow")
  }
  else{
    $('.nav-wrapper').removeClass("blue-grey").addClass("clear", 500)
    $('nav').addClass("noboxshadow")
  }
})
$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 600) {
            $(".techdiv").removeClass("valign");
            $("#technology").removeClass("valign-wrapper")
    }
    else{
      $(".techdiv").addClass("valign");
      $("#technology").addClass("valign-wrapper")
    }
});
$(document).ready(function(){
      $('.parallax').parallax();
      $(".button-collapse").sideNav({
        menuWidth: 200,
        closeOnClick: true
      });
      $(".dropdown-button").dropdown();
      $(".materialboxed").materialbox();
      $("#name, #title, nav").removeClass("banner-hidden")
      $("#name, #title, nav").addClass('vis')
      if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $(".project-link-label, .contact-label").hide();
      }
      $(".project-link").hover(function(){
        $(this).closest(".col").children("p").show("slow");
      }, function(){
        $(this).closest(".col").children("p").fadeOut("slow");
      })
      $(".contactimg").hover(function(){
        $(this).siblings().show("slow");
      }, function(){
        $(this).siblings().fadeOut("slow");
      })
      var viewportWidth = $(window).width();
      if (viewportWidth < 600) {
              $(".techdiv").removeClass("valign");
              $("#technology").removeClass("valign-wrapper")
      }
      else{
        $(".techdiv").addClass("valign");
        $("#technology").addClass("valign-wrapper")
      }
      $('.aboutbtn').click(function(){
        var targetOffset = $('#about').offset().top - 100;
        $('html, body').animate({
          scrollTop: targetOffset
        },  1000);
        $('.button-collapse').sideNav('hide');
        return false;
      })
      $('.aboutbtn').click(function(){
        var targetOffset = $('#about').offset().top - 100;
        $('html, body').animate({
          scrollTop: targetOffset
        },  1000);
        $('.button-collapse').sideNav('hide');
        return false;
      })
      $('.techbtn').click(function(){
        var targetOffset = $('#technology').offset().top - 100;
        $('html, body').animate({
          scrollTop: targetOffset
        },  1000);
        $('.button-collapse').sideNav('hide');
        return false;
      })
      $('.projbtn').click(function(){
        var targetOffset = $('#projects').offset().top - 100;
        $('html, body').animate({
          scrollTop: targetOffset
        },  1000);
        $('.button-collapse').sideNav('hide');
        return false;
      })
      $('.contactbtn').click(function(){
        var targetOffset = $('#contact').offset().top - 100;
        $('html, body').animate({
          scrollTop: targetOffset
        },  1000);
        $('.button-collapse').sideNav('hide');
        return false;
      })
      $('#getoutbtn').click(function(){
        var targetOffset = $('#getout').offset().top - 100;
        $('html, body').animate({
          scrollTop: targetOffset
        },  1000);
        $('.button-collapse').sideNav('hide');
        return false;
      })
      $('#forgebtn').click(function(){
        var targetOffset = $('#forge').offset().top - 100;
        $('html, body').animate({
          scrollTop: targetOffset
        },  1000);
        $('.button-collapse').sideNav('hide');
        return false;
      })
      $('#mapsharebtn').click(function(){
        var targetOffset = $('#mapshare').offset().top - 100;
        $('html, body').animate({
          scrollTop: targetOffset
        },  1000);
        $('.button-collapse').sideNav('hide');
        return false;
      })
      $('#iosbtn').click(function(){
        var targetOffset = $('#mapios').offset().top - 100;
        $('html, body').animate({
          scrollTop: targetOffset
        },  1000);
        $('.button-collapse').sideNav('hide');
        return false;
      })
});
