jQuery(document).ready(function($){
  	console.log("js is twerking : )");
  	
  	$('.no-js').hide(); 

  	// Typed Js
  	$(function() {
    	$('#typedJS').typed({
      
	      	strings: [
	      		"Build responsive, mobile first websites.",
	    		"Write reusable, modular, object-oriented code.",
	    		"help startups develop their web or mobile products.",
	    		"have a curious mind and devour at least 2 books a month."
	      	],
	      
	    	typeSpeed: 60,
	      	backSpeed: 60,
	      	backDelay: 1600,
	      	loop: true,
	    });
  	}); 

  	// Smooth Scrolling -- excuse my spaghetti code
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	}); 




});