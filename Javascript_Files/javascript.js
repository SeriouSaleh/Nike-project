

// let x = document.getElementsByClassName("link").querySelectorAll("a");
// x.forEach(e => {
//   e.style.color="red"
//   e.style.font_weight="700"
// });




///////footer menu1

const menu1 = document.getElementById("Footter-menun1");
const open_button1 = document.getElementById("button-open-menu1");
const close_button1 = document.getElementById("button-close-menu1");
function opener_1(){
  menu1.style.display ="block";
  open_button1.style.display="none";
  close_button1.style.visibility="visible";
}
function closer_1(){
  menu1.style.display="none"; 
  close_button1.style.visibility="hidden";
  open_button1.style.display=""
}
open_button1.addEventListener("click", opener_1 );
close_button1.addEventListener("click", closer_1);

///////footer menu2

const menu2 = document.getElementById("Footter-menun2");
const open_button2 = document.getElementById("button-open-menu2"); 
const close_button2 = document.getElementById("button-close-menu2");
function opener_2(){
  menu2.style.display ="block";   
  open_button2.style.display="none";
  close_button2.style.visibility="visible";
}
function closer_2(){
  menu2.style.display="none"; 
  close_button2.style.visibility="hidden";
  open_button2.style.display=""
}
open_button2.addEventListener("click", opener_2 );
close_button2.addEventListener("click", closer_2);





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
  
