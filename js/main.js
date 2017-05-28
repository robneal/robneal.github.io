$(document).ready(function(){
  	console.log("js is twerking : )");
  	
  	$('.no-js').hide(); 

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

});