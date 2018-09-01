
// Parallax effect //

$(window).scroll(function() {
	parallax();
})

function parallax() {

	var wScroll = $(window).scrollTop();
	$('.parallax--bg').css('background-position',
	'center '+(wScroll*0.5)+'px')

	// $('parallax--bg').css(.background-position','center'+ (wScroll*0.75)+'px');
}

// End arallax effect //




// Navbar effect //

// hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 700) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });

// End navbar effect //


// Start slick effect //


$(document).ready(function(){
  $('.carousel').slick({
  slidesToShow: 3,
  dots:true,
  centerMode:true,
  mobileFirst:true,

  });
});

// End slick effect //



// Start animations //
// $(window).scroll(function(){
//     if($(window).scrollTop() > 600){
//       $('.col-lg-4').addClass('animated pulse');
//     } else {
//       $('.col-lg-4').removeClass('animated pulse');
//     }
// });

// $(window).scroll(function(){
//     if($(window).scrollTop() > 2300){
//       $('.animation').addClass('animated tada');
//     } else {
//       $('.animation').removeClass('animated tada');
//     }
// });
// End animations //



AOS.init({
  duration: 1000,
})

// $('.carousel').carousel({
//   interval: 2000
// })

// Start progress bar //
// $(window).load(function(){
//   $(window).scroll(function() {
//     var wintop = $(window).scrollTop(), docheight = $('body').height(), winheight = $(window).height();
//     console.log(wintop);
//     var totalScroll = (wintop/(docheight-winheigt))*100;
//     console.log("total scroll" + totalScroll);
//     $(".KW_progressBar").css("width",totalScroll+"%");
//   });

// });
// End progress bar //



// Init controller
// var controller = new ScrollMagic.Controller({
//   globalSceneOptions: {
//     duration: $('section').height(),
//     triggerHook: .025,
//     reverse: true
//   }
// });


/*
object to hold href values of links inside our nav with
the class '.anchor-nav'

scene_object = {
  '[scene-name]' : {
    '[target-scene-id]' : '[anchor-href-value]'
  }
}
*/
// var scenes = {
//   'intro': {
//     'intro': 'intro-anchor'
//   },
//   'scene2': {
//     'section-1': 'anchor1'
//   },
//   'scene3': {
//     'section-2': 'anchor2'
//   },
//   'scene4': {
//     'section-3': 'anchor3'
//   }
// }

// for(var key in scenes) {
//   // skip loop if the property is from prototype
//   if (!scenes.hasOwnProperty(key)) continue;

//   var obj = scenes[key];

//   for (var prop in obj) {
//     // skip loop if the property is from prototype
//     if(!obj.hasOwnProperty(prop)) continue;

//     new ScrollMagic.Scene({ triggerElement: '#' + prop })
//         .setClassToggle('#' + obj[prop], 'active')
//         .addTo(controller);
//   }
// }


// Change behaviour of controller
// to animate scroll instead of jump
// controller.scrollTo(function(target) {

//   TweenMax.to(window, 0.5, {
//     scrollTo : {
//       y : target,
//       autoKill : true // Allow scroll position to change outside itself
//     },
//     ease : Cubic.easeInOut
//   });

// });


//  Bind scroll to anchor links using Vanilla JavaScript
// var anchor_nav = document.querySelector('.anchor-nav');

// anchor_nav.addEventListener('click', function(e) {
//   var target = e.target,
//       id     = target.getAttribute('href');

//   if(id !== null) {
//     if(id.length > 0) {
//       e.preventDefault();
//       controller.scrollTo(id);

//       if(window.history && window.history.pushState) {
//         history.pushState("", document.title, id);
//       }
//     }
//   }
// });

//  AOS.init();

/* 
 * Bind scroll to anchor links using jQuery

$(document).on("click", "a[href^=#]", function(e) {
  var id = $(this).attr("href");

  if($(id).length > 0) {
    e.preventDefault();

    // trigger scroll
    controller.scrollTo(id);

    // If supported by the browser we can also update the URL
    if (window.history && window.history.pushState) {
      history.pushState("", document.title, id);
    }
  }

});

*/


