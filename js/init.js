var INITIAL_NAV_OFFSET = $("nav").offset().top;
function fadeInCodeCampGoalParallaxSection() {
	$("#code-camp-goal-parallax-text").fadeTo( 2500, 1, function() {
  	});
}

function addZdepthToSchedule(){
  $("#schedule-collection").addClass("z-depth-4");
}

function initUpcounter(){
        $('.timer').countTo({
            from: 0,
            to: 18,
            speed: 2000,
            refreshInterval: 50,
        });
}

function fadeInCodeCampDescription(){
    $( "#code-camp-description-1" ).fadeTo( 1000, 1, function() {
      $( "#code-camp-description-2" ).fadeTo( 1000, 1, function() {
        initUpcounter();
      });
    });
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

    $("i.profile").click(function(){
      console.log("click");
    });

    $(window).scroll(function(){
    	scrollingNavBar();
	});

	var options = [
      {selector: '#code-camp-goal-parallax', offset: 380, callback: 'fadeInCodeCampGoalParallaxSection()'},
      {selector: '#schedule-collection', offset: 300, callback: 'Materialize.showStaggeredList("#schedule-collection")' },
      {selector: '#schedule-collection', offset: 400, callback: 'addZdepthToSchedule()' },
      {selector: '#code-camp-description', offset: 100, callback: 'fadeInCodeCampDescription()' }, 
    ];
  	Materialize.scrollFire(options);

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



/* Upcounter */
(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };
    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 18,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: function() {console.log("counting done")},  // callback method for when the element finishes updating
    };
})(jQuery);
})(jQuery); // end of jQuery name space
