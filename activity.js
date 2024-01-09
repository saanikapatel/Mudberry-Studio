      /*=============== SHOW MENU ===============*/
      const showMenu = (toggleId, navId) =>{
        const toggle = document.getElementById(toggleId),
              nav = document.getElementById(navId)
     
        toggle.addEventListener('click', () =>{
            // Add show-menu class to nav menu
            nav.classList.toggle('show-menu')
     
            // Add show-icon to show and hide the menu icon
            toggle.classList.toggle('show-icon')
        })
     }
     
     showMenu('nav-toggle','nav-menu')


     // Smooth scrolling to top
     document.getElementById('backToTop').addEventListener('click', function() {
      scrollToTop(500); // Adjust the duration (in milliseconds) as needed
    });

    function scrollToTop(duration) {
      const start = window.scrollY;
      const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

      function scrollStep() {
        const now = 'now' in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, (now - startTime) / duration);

        window.scrollTo(0, Math.ceil(start * (1 - time)));

        if (time < 1) {
          requestAnimationFrame(scrollStep);
        }
      }

      requestAnimationFrame(scrollStep);
    }

    // Show/hide back-to-top button based on scroll position
    window.addEventListener('scroll', function() {
      const backToTopButton = document.getElementById('backToTop');
      if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });


    $(document).ready(function() {
      $(".toggle-button2").click(function() {
          $(".toggle-details2").slideToggle();
          var buttonText = $(".toggle-button2").text() === "Read more" ? "Read less" : "Read more";
          $(".toggle-button2").text(buttonText);
      });
  });

     

    $(document).ready(function() {
        $(".toggle-button").click(function() {
            $(".toggle-details").slideToggle();
            var buttonText = $(".toggle-button").text() === "Read more" ? "Read less" : "Read more";
            $(".toggle-button").text(buttonText);
        });
    });





     let slideIndex = 0;
const changeTime = 3;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide-vis");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, (changeTime * 1000));
}


let slideIndex2 = 0; // Update variable name
const changeTime2 = 3; // Set your desired change time in seconds, and update variable name
showSlides2(); // Update function name

function showSlides2() { // Update function name
  let i2; // Update variable name
  let slides2 = document.getElementsByClassName("slide-vis2"); // Update class name
  let dots2 = document.getElementsByClassName("dot2"); // Update class name
  for (i2 = 0; i2 < slides2.length; i2++) {
    slides2[i2].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }
  for (i2 = 0; i2 < dots2.length; i2++) {
    dots2[i2].className = dots2[i2].className.replace(" active2", ""); // Update class name
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dots2[slideIndex2 - 1].className += " active2"; // Update class name
  setTimeout(showSlides2, changeTime2 * 1000);
}




function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
