// Navigation Bar
class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
            <nav class="navBar">
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </nav>
        `
    }
}

// Footer
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
            <footer class="footerMain">
                
                <hr>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </nav>
                <div class="social">
                    <a href-'' class="fa fa-facebook"></a>
                    <a href-'' class="fa fa-twitter"></a>
                    <a href-'' class="fa fa-linkedin"></a>
                    <a href-'' class="fa fa-instagram"></a>
                    <a href-'' class="fa fa-youtube"></a>
                </div>
                <p>2024 | Designed by <a href=''>ForgeFace</a></p>
            </footer>
        `
    }
}

customElements.define('nav-bar', NavBar)
customElements.define('footer-univ', Footer)