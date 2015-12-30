var INITIAL_NAV_OFFSET = $("nav").offset().top;
function fadeInCodeCampGoalParallaxSection() {
	$("#code-camp-goal-parallax-text").fadeTo( 2500, 1, function() {
     console.log("Animation complete.");
  	});
}

function addZdepthToSchedule(){
  $(".collection").addClass("z-depth-4");
}

(function($){

/*
	Creates the sticky nav effect when scrolling by the nav bar
*/
  function scrollingNavBar() {
   var scrollPos = $(document).scrollTop();
   	if (scrollPos > INITIAL_NAV_OFFSET) {  			
   		if (!($("nav").hasClass("navbar-stuck-to-top")) ) {
   			$("nav").addClass("navbar-stuck-to-top");
   			$("#about-text").css("padding-top","5%");

   		}
   	} else {
   		if ($("nav").hasClass("navbar-stuck-to-top")) {
   			$("nav").removeClass("navbar-stuck-to-top");
   			$("#about-text").css("padding-top","0%");
   		}
   	}
}

  $(function(){

    //$('.button-collapse').sideNav();
    $('.parallax').parallax();

    $( ".iowa-girls-code-camp-section" ).fadeIn(1500);

    $(window).scroll(function(){
    	scrollingNavBar();
	});

	var options = [
      {selector: '#code-camp-goal-parallax', offset: 380, callback: 'fadeInCodeCampGoalParallaxSection()'},
      {selector: '.collection', offset: 400, callback: 'Materialize.showStaggeredList(".collection")' },
      {selector: '.collection', offset: 600, callback: 'addZdepthToSchedule()' }
    ];
  	Materialize.scrollFire(options);

    $("#register-button").click(function() {
      Materialize.toast("Registration is not open yet.", 1500 );
    });

  }); // end of document ready

/* Smooth scrolling function */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      console.log(target);

      if (target.length) {
        $('html,body').animate({ scrollTop:  (target.selector == "#about-text") ? (INITIAL_NAV_OFFSET + 1) : (target.offset().top - 50)  }, 1500);
        return false;
      }
    }
  });
});

})(jQuery); // end of jQuery name space
