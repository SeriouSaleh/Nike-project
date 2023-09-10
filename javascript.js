const swiperEl = document.querySelector('swiper-container');
const swiper = swiperEl.swiper;

var appendNumber = 4;
var prependNumber = 1;
document
.querySelector(".prepend-2-slides")
.addEventListener("click", function (e) {
  e.preventDefault();
  swiper.prependSlide([
    '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>",
    '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>",
  ]);
});
document
.querySelector(".prepend-slide")
.addEventListener("click", function (e) {
  e.preventDefault();
  swiper.prependSlide(
      '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>"
      );
    });
    document
    .querySelector(".append-slide")
    .addEventListener("click", function (e) {
        e.preventDefault();
  swiper.appendSlide(
    '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>"
  );
});
document
.querySelector(".append-2-slides")
.addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
        '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>",
        '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>",
    ]);
});

let x = document.getElementsByClassName("link").querySelectorAll("a");
x.forEach(e => {
  e.style.color="red"
  e.style.font_weight="700"
});
//down menu 
const hidden_menu = document.getElementById("hidden-menu");
const downer_nav_container = document.getElementById("downer_nav_container");

$("#hidden_menu").hover(function(){
  $("#downer-nav-container").css("display", "none");
  }, function(){
  $(hidden_menu).css("display", "block");
});