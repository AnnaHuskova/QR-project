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
        let time = 2000 / num;

        this.setInterval(() => {
            if(count == num){
            } else {
                count += 1;
            numElement.innerText = count;

            }
        
        }, 20)

        let circle = item.querySelector('.circle');
        circle.style.strokeDashoffset = 964 - ( 964 * ( num / 100));

    })

});