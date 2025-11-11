// Projects Component
class Projects extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="projects" class="projects">
                <div class="container">
                    <h2 class="section-title">Featured Projects</h2>
                    <div class="projects-grid">
                        ${this.getProjects()}
                    </div>
                </div>
            </section>
        `;
    }

    getProjects() {
        const projects = [
            {
                title: 'E-Commerce Platform',
                description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features user authentication, payment processing, and admin dashboard.',
                technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                github: '#',
                demo: '#',
                icon: 'shopping-cart'
            },
            {
                title: 'Task Management App',
                description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
                technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
                github: '#',
                demo: '#',
                icon: 'tasks'
            },
            {
                title: 'Weather Dashboard',
                description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
                technologies: ['JavaScript', 'API', 'Chart.js', 'CSS3'],
                github: '#',
                demo: '#',
                icon: 'cloud-sun'
            }
        ];

        return projects.map(project => `
            <div class="project-card">
                <div class="project-image">
                    <div class="image-placeholder project-img">
                        <i class="fas fa-${project.icon}"></i>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" class="project-link">
                            <i class="fab fa-github"></i> Code
                        </a>
                        <a href="${project.demo}" class="project-link">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

customElements.define('projects-section', Projects);