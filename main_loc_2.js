const hamburger = document.querySelector(".hamburger");
const menuLocations = document.querySelector(".menu_locations");
const navbarLocations = document.querySelector(".nav__item_2");

// --------Hamburger---------
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menuLocations.classList.toggle("active");

})

// ---------NavBar------------

navbarLocations.addEventListener("click", () => {
    navbarLocations.classList.toggle("active");
    menuLocations.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuLocations.classList.remove("active");
}))

// ---------ProgressBar-----------

const circleBar = document.querySelectorAll('.circle-bar');
window.addEventListener('load', function(){
    circleBar.forEach(item => {
        let numElement = item.querySelector('.num');
        let num = parseInt(numElement.innerText);
        let count = 0;
        let circle = item.querySelector('.circle');
        let time = 2000 / num;
    

        this.setInterval(() => {
            if(count == num){
            } else {
                count += 1;
            numElement.innerText = count;

            }
        
        }, time)

        circle.style.strokeDashoffset = 964 - ( 964 * ( num / 100));

        let dot = item.querySelector('.dot_progress');
        dot.style.transform = 
                   `rotate(${360 * (num / 100)}deg)`;
         if(num == 100){
         dot.style.opacity = 0;
         }

        // let dot = item.querySelector('.dot_progress');
        // dot.style.transform = `rotate(${360 ( num / 100 )}deg)`;

        

    })

});


// -------------Slider-Bar-------------
var slides = document.getElementsByClassName("slide");
var index = 0;
function goLeft() {
  if(index == 0) index = slides.length - 1;
  else index--;

  slides[0].style.marginLeft = "-" + index * 1200 + "px";
}
function goRight() {
  if(index == slides.length -1) index = 0;
  else index++;

  slides[0].style.marginLeft = "-" + index * 1200 + "px";
}

// -------------Slider-Pagination-------------
// var slides = document.querySelectorAll('.slide');
// var btns = document.querySelectorAll('.btn');

// let currentSlide = 1;

// // ---------slider-manual-navigation---------
// var manualNav = function(manual) {
//     slides[manual].classList.add('active');
//     btns[manual].classList.add('activ');

// }

// btns.forEach((btn, i => {
//     btn.addEventListener("click", () => {
//         manualNav(i);
//         currentSlide = i;


//     });

// }));




var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
// var repeat = function(activeClass){
//   let active = document.getElementsByClassName('active');
//   let i = 1;

//   var repeater = () => {
//     setTimeout(function(){
//       [...active].forEach((activeSlide) => {
//         activeSlide.classList.remove('active');
//       });

//     slides[i].classList.add('active');
//     btns[i].classList.add('active');
//     i++;

//     if(slides.length == i){
//       i = 0;
//     }
//     if(i >= slides.length){
//       return;
//     }
//     repeater();
//   }, 10000);
//   }
//   repeater();
// }
 
// repeat();
