import Toast from "js/bootstrap/src/toast";
import Popover from "js/bootstrap/src/popover";

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
    let navbar_top = document.getElementById('navbar_top');
    let navbar_height = navbar_top.offsetHeight;
    let classList = navbar_top.classList;
    if (window.scrollY <= navbar_top.offsetHeight) {
      classList.remove("shadow");
      classList.remove('bg-primary');
//      document.body.style.paddingTop = '0';
    } else {
      classList.add("shadow");
      classList.add('bg-primary');
//      document.body.style.paddingTop = navbar_height + 'px';
    }
  });
});