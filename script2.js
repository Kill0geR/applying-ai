let timeoutId;
let animating = false;
const header = document.querySelector('header');
header.classList.add('show-header');
let lastScrollTop = 0; // Declare lastScrollTop

document.addEventListener('DOMContentLoaded', function () {
  const heroImage = document.querySelector('.hero-video img');
  const scrollTarget = document.querySelector('.cta-button');
  animating = true;
  const scrollPosition = scrollTarget.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2);

  heroImage.addEventListener('animationend', function () {
    autoscrolling = true;
    animating = false;
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      autoscrolling = false;
    }, 1000);
  });
});

function scroll_to(target_id) {
  const scrollTarget = document.querySelector(target_id);
  animating = true;
  const scrollPosition = scrollTarget.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2);
  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function () {
  const scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    // Scrolling down, hide the header immediately
    if (autoscrolling === false) {
      header.classList.remove('show-header');
      clearTimeout(timeoutId); // Clear the timeout
    }
  } else {
    // Scrolling up or at the top, show the header
    header.classList.add('show-header');

    // Set a timeout to hide the header after 1 second
    clearTimeout(timeoutId); // Clear any previous timeout
    timeoutId = setTimeout(function () {
      if (scrollTop <= 10) {
      } else {
        header.classList.remove('show-header');
      }
    }, 1000); // 1000 milliseconds = 1 second
  }
  lastScrollTop = scrollTop;
});

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  if (animating === false) {
    document.getElementById("myBar").style.height = scrolled + "%";
  }
}
