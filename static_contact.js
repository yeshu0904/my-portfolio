// Static contact form handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const formMessage = document.getElementById('form-message');
            const originalText = submitButton.innerHTML;
            
            const data = {
                name: contactForm.querySelector('input[name="name"]').value,
                email: contactForm.querySelector('input[name="email"]').value,
                subject: contactForm.querySelector('input[name="subject"]').value,
                message: contactForm.querySelector('textarea[name="message"]').value
            };
            
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            try {
                // For static deployment, we'll use Formspree or Netlify Forms
                const response = await fetch('https://formspree.io/f/your-form-id', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                if (response.ok) {
                    showMessage(formMessage, 'Thank you for your message! I will get back to you soon.', 'success');
                    contactForm.reset();
                } else {
                    showMessage(formMessage, 'There was an error sending your message. Please email me directly at yeshmettu0904@gmail.com', 'error');
                }
                
            } catch (error) {
                showMessage(formMessage, 'Network error. Please email me directly at yeshmettu0904@gmail.com', 'error');
            } finally {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }
        });
    }
    
    function showMessage(element, message, type) {
        if (element) {
            element.textContent = message;
            element.className = `form-message ${type}`;
            element.style.display = 'block';
            setTimeout(() => { element.style.display = 'none'; }, 5000);
        }
    }
});