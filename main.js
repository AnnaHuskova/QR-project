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