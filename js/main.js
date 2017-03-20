$(document).ready(function(){
  $('.nojs').hide(); 

  $(function() {
    console.log("js is (t)werking");
    $('#typedJS').typed({
      strings: [
      "Hey there stanger!",
      //"I'm robert.",
      "I'm re-building this site ...",
      "but stalk me below.",
      "Robert Neal"
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
    });
  }); 

});