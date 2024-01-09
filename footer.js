
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