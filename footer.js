// Footer Component
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="container">
                    <div class="footer-content">
                        <p>&copy; ${new Date().getFullYear()} ${this.getAttribute('name') || 'Your Name'}. All rights reserved.</p>
                        <div class="footer-links">
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-section', Footer);