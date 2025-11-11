// Hero Component
class Hero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="home" class="hero">
                <div class="hero-container">
                    <div class="hero-content">
                        <h1 class="hero-title">
                            Hi, I'm <span class="highlight">${this.getAttribute('name') || 'Developer'}</span>
                        </h1>
                        <h2 class="hero-subtitle">${this.getAttribute('title') || 'Full Stack Developer'}</h2>
                        <p class="hero-description">
                            ${this.getAttribute('description') || 'I create beautiful and functional web applications with modern technologies.'}
                        </p>
                        <div class="hero-buttons">
                            <a href="#projects" class="btn btn-primary">View My Work</a>
                            <a href="#contact" class="btn btn-secondary">Get In Touch</a>
                        </div>
                        <div class="hero-social">
                            ${this.getSocialLinks()}
                        </div>
                    </div>
                    <div class="hero-image">
                        <div class="image-placeholder">
                            <i class="fas fa-code"></i>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getSocialLinks() {
        const socials = [
            { platform: 'github', url: this.getAttribute('github') },
            { platform: 'linkedin', url: this.getAttribute('linkedin') },
            { platform: 'twitter', url: this.getAttribute('twitter') },
            { platform: 'instagram', url: this.getAttribute('instagram') }
        ];

        return socials.map(social => 
            social.url ? `<a href="${social.url}" class="social-link" target="_blank"><i class="fab fa-${social.platform}"></i></a>` : ''
        ).join('');
    }
}

customElements.define('hero-section', Hero);