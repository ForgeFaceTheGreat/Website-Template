// // NavBar Hamburger Toggle Variables
// const burgerButton = document.getElementsByClassName('burger')[0]
// const navbarLinks = document.getElementsByClassName('links')[0]
// // const burgerBar1 = document.getElementsByClassName('bar1')[0]
// // const burgerBar2 = document.getElementsByClassName('bar2')[0]
// // const burgerBar3 = document.getElementsByClassName('bar3')[0]

// // Navigation Bar Hamburger Toggle
// burgerButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active')
//     //     burgerBar1.classList.toggle('active')
//     //     burgerBar2.classList.toggle('active')
//     //     burgerBar3.classList.toggle('active')
// })



let burgerMenuClicked = document.querySelector(".burger");
const navbarLinks = document.getElementsByClassName('links')[0]

burgerMenuClicked.addEventListener("click", () => {
    burgerMenuClicked.classList.toggle("clicked");
    navbarLinks.classList.toggle('open')
})