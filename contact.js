// Contact Component
class Contact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="contact" class="contact">
                <div class="container">
                    <h2 class="section-title">Get In Touch</h2>
                    <div class="contact-content">
                        <div class="contact-info">
                            <h3>${this.getAttribute('heading') || "Let's work together!"}</h3>
                            <p>${this.getAttribute('subheading') || "I'm always interested in new opportunities and exciting projects."}</p>
                            <div class="contact-details">
                                ${this.getContactDetails()}
                            </div>
                            <div class="contact-social">
                                ${this.getSocialLinks()}
                            </div>
                        </div>
                        <form class="contact-form" id="contact-form">
                            <div class="form-group">
                                <input type="text" name="name" placeholder="Your Name" required>
                            </div>
                            <div class="form-group">
                                <input type="email" name="email" placeholder="Your Email" required>
                            </div>
                            <div class="form-group">
                                <input type="text" name="subject" placeholder="Subject" required>
                            </div>
                            <div class="form-group">
                                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-paper-plane"></i> Send Message
                            </button>
                            <div id="form-message" class="form-message"></div>
                        </form>
                    </div>
                </div>
            </section>
        `;
    }

    getContactDetails() {
        const details = [
            { icon: 'envelope', value: this.getAttribute('email') || 'hello@example.com' },
            { icon: 'phone', value: this.getAttribute('phone') || '+1 (555) 123-4567' },
            { icon: 'map-marker-alt', value: this.getAttribute('location') || 'New York, NY' }
        ];

        return details.map(detail => `
            <div class="contact-item">
                <i class="fas fa-${detail.icon}"></i>
                <span>${detail.value}</span>
            </div>
        `).join('');
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

customElements.define('contact-section', Contact);