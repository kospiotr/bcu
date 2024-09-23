import Toast from "js/bootstrap/src/toast";
import Popover from "js/bootstrap/src/popover";
import Collapse from "js/bootstrap/src/collapse";

document.addEventListener("DOMContentLoaded", function(){
    let navbar_top = document.getElementById('navbar_top');
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

    new Collapse(document.getElementById('navbar_toggler'), {})
});