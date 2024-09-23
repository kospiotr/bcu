import Toast from "js/bootstrap/src/toast";
import Popover from "js/bootstrap/src/popover";

document.addEventListener("DOMContentLoaded", function(){
  let navbar_top = document.getElementById('navbar_top');
  let navbar_height = navbar_top.offsetHeight;
  let classList = navbar_top.classList;
  classList.add('p-5');
  window.addEventListener('scroll', function() {
    if (window.scrollY <= navbar_top.offsetHeight) {
      classList.remove("shadow");
      classList.remove('bg-primary');
      classList.add('p-5');
//      document.body.style.paddingTop = '0';
    } else {
      classList.add("shadow");
      classList.add('bg-primary');
      classList.remove('p-5');
//      document.body.style.paddingTop = navbar_height + 'px';
    }
  });
});