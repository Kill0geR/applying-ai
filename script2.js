let autoscrolling = false;
let lastScrollTop = 0;
let timeoutId; // Variable to hold the timeout ID
const header = document.querySelector('header');
header.classList.add('show-header');

document.addEventListener('DOMContentLoaded', function () {
  // Get a reference to the hero image
  const heroImage = document.querySelector('.hero-video img');

  // Get a reference to the scroll target element (the "Get Started" button)
  const scrollTarget = document.querySelector('.cta-button');

  // Calculate the scroll position to center the element vertically
  const scrollPosition = scrollTarget.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2);

  // Add an event listener to the hero image for animationend
  heroImage.addEventListener('animationend', function () {
    // Once the animation is finished, scroll to the calculated scroll position using smooth scrolling
    autoscrolling = true;
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'

    });
    clearTimeout(timeoutId); // Clear any previous timeout
    timeoutId = setTimeout(function () {
      autoscrolling = false;

    }, 1000);
  });
});


window.addEventListener('scroll', function () {
  const scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    // Scrolling down, hide the header immediately
    if(autoscrolling===false){
      header.classList.remove('show-header');
      clearTimeout(timeoutId); // Clear the timeout
    }

  } else {
    // Scrolling up or at the top, show the header
    header.classList.add('show-header');

    // Set a timeout to hide the header after 1 second
    clearTimeout(timeoutId); // Clear any previous timeout
    timeoutId = setTimeout(function () {

      if(scrollTop <= 10){
      } else{
      header.classList.remove('show-header');
    }
    }, 3000); // 1000 milliseconds = 1 second
  }
  lastScrollTop = scrollTop;
});
