// import Toast from "js/bootstrap/src/toast";
// import Popover from "js/bootstrap/src/popover";
import Collapse from "js/bootstrap/src/collapse";
// import Modal from "js/bootstrap/src/modal";
import Dropdown from "js/bootstrap/src/dropdown";

document.addEventListener("DOMContentLoaded", function(){
    let navbar_top = document.getElementById('menu-main');
    let navbar_height = navbar_top.offsetHeight;
    let classList = navbar_top.classList;
    let isResponsive = classList.contains('responsive');
    if(isResponsive){
        classList.add("before-scroll");
        window.addEventListener('scroll', function() {
            if (window.scrollY <= navbar_top.offsetHeight) {
                classList.remove("after-scroll");
                classList.add("before-scroll");
            } else {
                classList.add("after-scroll");
                classList.remove("before-scroll");
            }
        });
    }else{
        document.body.style.paddingTop = navbar_height + 'px';
    }

    // new Collapse(document.getElementById('navbar_toggler'), {})
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".observable-fade");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }else{
                entry.target.classList.remove("visible");
            }
        });
    });

    images.forEach((img) => observer.observe(img));
});

// document.addEventListener("DOMContentLoaded", function () {
//     const images = document.querySelectorAll(".gallery-image");
//
//     images.forEach((img) => observer.observe(img));
// });