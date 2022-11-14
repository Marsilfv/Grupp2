var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
  // added a pageYOffset for compatibility with Internet Explorer
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    console.log('here');
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
    console.log('heredfdsf');
  }
};
   