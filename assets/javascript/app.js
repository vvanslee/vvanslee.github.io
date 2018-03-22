$(document).ready(function() {
  $('a#mailbutton').click(function(event) {
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
      }, 1400, function(){
        window.location.hash = hash;
      });
    } // End if
  });
});

// toggle switch
$(document).ready(function(){
  $("#devLabel").hide();
  $("#devGallery").hide();
  var checkboxes = $('input[id="gallerySwitch"]');
  checkboxes.change(function() {
    if ($(this).prop('checked') === true) {
      $("#devLabel").show();
      $("#designLabel").hide();
      $("#designGallery").hide();
      $("#devGallery").show();
    } else {
      $("#devLabel").hide();
      $("#designLabel").show();
      $("#devGallery").hide();
      $("#designGallery").show();
    }
  })
});

$(document).ready(function(){
  var animEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  var waypoint = new Waypoint({
    element: document.getElementById('skills'),
    handler: function(direction) {
      $('.basicWaypt').addClass('animated bounceIn');
      $('.basicWaypt').one(animEnd, function() {
        $('.workingWaypt').addClass('workingColor animated bounceIn');
      });
      $('.workingWaypt').one(animEnd, function() {
        $('.jediWaypt').addClass('jediColor animated bounceIn');
      });
    },
    offset: '30%' 
  })
});

$(document).ready(function(){
  var inview = new Waypoint.Inview({
    element: $('#skillsWaypt')[0],
    entered: function(direction) {
      $('.skillsNav').addClass('activeNavLink');
    },
    exit: function(direction) {
      $('.skillsNav').removeClass('activeNavLink');
    }
  })
});

$(document).ready(function(){
  var inview = new Waypoint.Inview({
    element: $('#resumeWaypt')[0],
    entered: function(direction) {
      $('.resumeNav').addClass('activeNavLink');
    },
    exited: function(direction) {
      $('.resumeNav').removeClass('activeNavLink');
    }
  })
});

$(document).ready(function(){
  var inview = new Waypoint.Inview({
    element: $('#portfolioWaypt')[0],
    entered: function(direction) {
      $('.portfolioNav').addClass('activeNavLink');
    },
    exited: function(direction) {
      $('.portfolioNav').removeClass('activeNavLink');
    }
  })
});

$(document).ready(function(){
  var inview = new Waypoint.Inview({
    element: $('#galleryWaypt')[0],
    entered: function(direction) {
      $('.portfolioNav').addClass('activeNavLink');
    },
    exited: function(direction) {
      $('.portfolioNav').removeClass('activeNavLink');
    }
  })
});

$(document).ready(function(){
  var inview = new Waypoint.Inview({
    element: $('#contactWaypt')[0],
    entered: function(direction) {
      $('.contactNav').addClass('activeNavLink');
    },
    exited: function(direction) {
      $('.contactNav').removeClass('activeNavLink');
    }
  })
});