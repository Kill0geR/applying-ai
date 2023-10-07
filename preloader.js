window.onload = function () {
var preloaderOverlay = document.querySelector('.preloader-overlay');

setTimeout(function () {
    preloaderOverlay.classList.add('fade-out');
    setTimeout(function () {
        preloaderOverlay.style.display = 'none';
    }, 1000); // Zeit für den Fade-Effekt
}, 1500); // Gesamte Ladezeit des Preloaders
};
