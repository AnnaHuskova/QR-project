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

