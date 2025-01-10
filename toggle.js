// NavBar Hamburger Toggle Variables
const burgerButton = document.getElementsByClassName('burger')[0]
const navbarLinks = document.getElementsByClassName('links')[0]

// Navigation Bar Hamburger Toggle
burgerButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})