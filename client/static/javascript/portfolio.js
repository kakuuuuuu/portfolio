
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


// fontsize = function(){
//   var fontSize = $("#slide01").width()*0.016;
//   var fontSize2 = $("#slide01").height()*0.03;
//   $("#slide01 p").css('font-size', Math.min(fontSize,fontSize2));
// };
// var win = $(window);
// $(window).resize(fontsize)
// $(window).scroll(function(){
//           console.log($(this).scrollTop())
//           console.log($('#slide01').offset().top)
//           if($(this).scrollTop()>50){
//               $(".nav").addClass("scrolledNav");
//               $('.navlink').addClass('black')
//               $('#navname').addClass('small')
//               $('#navname').removeClass('large')
//              }
//           else{
//               $('.nav').removeClass('scrolledNav')
//               $('.navlink').removeClass('black')
//               $('#navname').addClass('large')
//               $('#navname').removeClass('small')
//           }
//           if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//             if($(this).scrollTop() > $('#slide01').offset().top-230){
//                 $("#abttitle, .about, .abtpic, #down2").fadeIn(1800).addClass("come-in")
//             }
//             if($(this).scrollTop() > $('#slide02').offset().top-230){
//                 $(".tech, .techtext, #down3").fadeIn(1800).addClass("come-in")
//             }
//             if($(this).scrollTop() > $('#getout').offset().top-230){
//                 $("#getoutcarousel, .getouttext, #projtitle, #down4").fadeIn(1800).addClass("come-in")
//             }
//             if($(this).scrollTop() > $('#forge').offset().top-300){
//                 $("#forgeimg, #forgetext, #down5").fadeIn(1800).addClass("come-in")
//             }
//             if($(this).scrollTop() > $('#mapshare').offset().top-300){
//                 $("#mapsharecarousel, .mapsharetext, #down6").fadeIn(1800).addClass("come-in")
//             }
//             if($(this).scrollTop() > $('#mapshareios').offset().top-300){
//                 $("#ioscarousel, .iostext, #down7").fadeIn(1800).addClass("come-in")
//             }
//             if($(this).scrollTop() > $('#contact').offset().top-230){
//                 $("#contacttitle, .contactdiv").fadeIn(1800).addClass("come-in")
//             }
//           }
//       });
//
// $(document).ready(fontsize)
//   $(document).ready(function(){
//     if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//       $("#abttitle, .about, .abtpic, #down2, .tech, .techtext, #down3, #getoutcarousel, .getouttext, #projtitle, #down4, #forgeimg, #forgetext, #down5, #mapsharecarousel, .mapsharetext, #down6, #ioscarousel, .iostext, #down7, #contacttitle, .contactdiv").hide()
//
//     }
//     else{
//       $(".projlinkimg").removeClass(".hovershake")
//     }
//     $('#name, #title, #down1, #nav').removeClass("banner-hidden")
//     $('#name, #title, #down1, #nav').addClass('vis')
//     $('#down1, #abtbtn').click(function(){
//       var targetOffset = $('#slide01').offset().top - 45;
//       $('html, body').animate({
//         scrollTop: targetOffset
//       },  1000);
//       return false;
//     })
//     $('#down2, #techbtn').click(function(){
//       var targetOffset = $('#slide02').offset().top - 45;
//       $('html, body').animate({
//         scrollTop: targetOffset
//       },  1000);
//       return false;
//     })
//     $('#down3, #projbtn').click(function(){
//       var targetOffset = $('#slide03').offset().top - 45;
//       $('html, body').animate({
//         scrollTop: targetOffset
//       },  1000);
//       return false;
//     })
//     $('#contactbtn, #down7').click(function(){
//       var targetOffset = $('#contact').offset().top - 45;
//       $('html, body').animate({
//         scrollTop: targetOffset
//       },  1000);
//       return false;
//     })
//     $('#getoutbtn').click(function(){
//       var targetOffset = $('#getout').offset().top - 45;
//       $('html, body').animate({
//         scrollTop: targetOffset
//       },  1000);
//       return false;
//     })
//     $('#forgebtn, #down4').click(function(){
//       var targetOffset = $('#forge').offset().top - 130;
//       $('html, body').animate({
//         scrollTop: targetOffset
//       },  1000);
//       return false;
//     })
//     $('#mapsharebtn, #down5').click(function(){
//       var targetOffset = $('#mapshare').offset().top - 130;
//       $('html, body').animate({
//         scrollTop: targetOffset
//       },  1000);
//       return false;
//     })
//     $('#mapshareiosbtn, #down6').click(function(){
//       var targetOffset = $('#mapshareios').offset().top - 130;
//       $('html, body').animate({
//         scrollTop: targetOffset
//       },  1000);
//       return false;
//     })
//   })
