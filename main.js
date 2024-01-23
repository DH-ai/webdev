window.addEventListener('scroll', function() {
    var aboutbox = document.querySelector('.about');
    var projbox = document.querySelector('.projects');
    var scrollPosition = window.scrollY;
    console.log(scrollPosition);
    // Adjust the left position based on the scroll position
    aboutbox.style.left = ((scrollPosition > 150) && (scrollPosition < 1000)) ? '8vw' : '-100vw';
    projbox.style.left = ((scrollPosition > 650) && (scrollPosition < 1230)) ? '20vw' : '100vw';
  });