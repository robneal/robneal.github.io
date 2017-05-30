jQuery(document).ready(function($){
  	console.log("js is twerking : )");
  	
  	$('.no-js').hide(); 

  	// Typed Js
  	$(function() {
    	$('#typedJS').typed({
      
	      	strings: [
	      		"Build responsive, mobile first websites.",
	    		"Write resuable, modular, and object-oriented code.",
	    		//"Read two books a month."
	      	],
	      
	    	typeSpeed: 60,
	      	backSpeed: 60,
	      	backDelay: 1600,
	      	loop: true,
	    });
  	}); 

  	// Smooth Scrolling -- excuse my spagetti code
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