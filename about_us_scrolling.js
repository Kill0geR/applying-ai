let timeoutId;
let animating = false;
let lastScrollTop = 0; // Declare lastScrollTop

document.addEventListener('DOMContentLoaded', function () {
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
