

// let x = document.getElementsByClassName("link").querySelectorAll("a");
// x.forEach(e => {
//   e.style.color="red"
//   e.style.font_weight="700"
// });




///////footer adding menu

const add_button1 = document.getElementById("button-add-menu1");
const menu1 = document.getElementById("Footter-menun1");

function adder_1(){
  menu1.style.display ="block";
  console.log("test");
  }
  add_button1.addEventListener("click", adder_1 );



const add_button2 = document.getElementById("button-add-menu2");
const menu2 = document.getElementById("Footter-menun2");
add_button2.addEventListener("click", adder_2 );

function adder_2(){
  menu2.style.display ="block";   
  }




var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  centeredSlides: false,
  spaceBetween: 0.2,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }  
});  

var appendNumber = 4;
var prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    ]);  
  });  
document  
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );  
  });  
document  
  .querySelector(".append-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );  
  });  
document  
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    ]);  
  });  
  
