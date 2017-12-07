$(document).ready(function() {
    $('#mailbutton').click(function(event) {
      window.location = "mailto:vvanslee@gmail.com";
    });
  });

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1500, function(){
          window.location.hash = hash;
        });
      } // End if
    });
  });