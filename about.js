// About Component
class About extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="about" class="about">
                <div class="container">
                    <h2 class="section-title">About Me</h2>
                    <div class="about-content">
                        <div class="about-text">
                            <h3>${this.getAttribute('heading') || 'Curious developer passionate about creating digital solutions'}</h3>
                            ${this.getAboutParagraphs()}
                            <div class="about-stats">
                                ${this.getStats()}
                            </div>
                        </div>
                        <div class="about-image">
                            <div class="image-frame">
                                <div class="placeholder-avatar">
                                    <i class="fas fa-user"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getAboutParagraphs() {
        const paragraphs = this.getAttribute('paragraphs');
        if (paragraphs) {
            return paragraphs.split('|').map(p => `<p>${p}</p>`).join('');
        }
        return `
            <p>I'm a full-stack developer with 2+ years of experience building web applications. 
            I love turning complex problems into simple, beautiful designs.</p>
            <p>When I'm not coding, you can find me exploring new technologies, 
            contributing to open-source projects, or enjoying outdoor activities.</p>
        `;
    }

    getStats() {
        const stats = [
            { number: this.getAttribute('projects') || '10+', label: 'Projects' },
            { number: this.getAttribute('experience') || '2+', label: 'Years Experience' },
            { number: this.getAttribute('clients') || '5+', label: 'Happy Clients' }
        ];

        return stats.map(stat => `
            <div class="stat">
                <span class="stat-number">${stat.number}</span>
                <span class="stat-label">${stat.label}</span>
            </div>
        `).join('');
    }
}

customElements.define('about-section', About);