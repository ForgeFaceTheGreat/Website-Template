// Addresses
var company = "ForgeFace Web Design";
var email = "example@email.com";
var phone = "(123)456-7890";
var address = "123 Example Rd. Focity, JK 00000";

// Navigation Bar
class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
            <nav class="navBar">
            <div class="brand-title">Template Website</div>

            <a href="#" class="burger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>

            <div class="links">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
        </nav>
        `
    }
}

// Footer
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
            <footer class="footerMain">
                         
            <address>
                <span class="address">` + company + `</span>
                <button class="address" value="` + email + `" onclick="copyText(this.value)"><i class="fa-solid fa-envelope"></i><i id="icoHide" class="fa-solid fa-envelope-open"></i>&#160&#160&hairsp;` + email + `</button>
                <button class="address" value="` + phone + `" onclick="copyText(this.value)"><i class="fa-solid fa-phone"></i><i id="icoHide" class="fa-solid fa-phone-volume"></i>&#160&#160&hairsp;` + phone + `</button>
                <button class="address" value="` + address + `" onclick="copyText(this.value)"><i class="fa-solid fa-location-dot">&#160&#160&hairsp;</i><i id="icoHide" class="fa-solid fa-map-location-dot">&thinsp;</i>` + address + `</button>
            </address>

                <hr>

                <nav>
                    <a href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </nav>

                <div class="social">
                    <a href='https://www.facebook.com/' target="_blank" class="fa fa-facebook"></a>
                    <a href='https://www.x.com/' target="_blank" class="fa-brands fa-x-twitter"></a>
                    <a href='https://www.linkedin.com/' target="_blank" class="fa-brands fa-linkedin"></a>
                    <a href='https://www.instagram.com/' target="_blank" class="fa fa-instagram"></a>
                    <a href='https://www.youtube.com/' target="_blank" class="fa fa-youtube"></a>
                </div>
                <p>2024 | Designed by <a href='https://github.com/ForgeFaceTheGreat' target="_blank">ForgeFace</a></p>
            </footer>
        `
    }
}

function copyText(text) {
    navigator.clipboard.writeText(text);
}

customElements.define('nav-bar', NavBar)
customElements.define('footer-univ', Footer)