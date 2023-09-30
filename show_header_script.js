let prevScrollPos = window.pageYOffset;
const header = document.querySelector("header");

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-220px";
    }

    prevScrollPos = currentScrollPos;
};

header.style.transition = "top 0.3s ease-in-out";
