// Skills Component
class Skills extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="skills" class="skills">
                <div class="container">
                    <h2 class="section-title">Skills & Technologies</h2>
                    <div class="skills-grid">
                        ${this.getSkillCategories()}
                    </div>
                </div>
            </section>
        `;
    }

    getSkillCategories() {
        const categories = [
            {
                title: 'Frontend',
                skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'TypeScript']
            },
            {
                title: 'Backend',
                skills: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs']
            },
            {
                title: 'Tools',
                skills: ['Git', 'Docker', 'AWS', 'Figma', 'Webpack', 'Jest']
            }
        ];

        return categories.map(category => `
            <div class="skill-category">
                <h3>${category.title}</h3>
                <div class="skill-list">
                    ${category.skills.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }
}

customElements.define('skills-section', Skills);