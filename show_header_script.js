let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Scrollt nach oben
        document.querySelector("header").style.top = "0";
    } else {
        // Scrollt nach unten
        document.querySelector("header").style.top = "-220px";
    }

    prevScrollPos = currentScrollPos;
}
