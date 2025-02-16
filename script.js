document.addEventListener('DOMContentLoaded', () => {
    // Typewriter Effect
    const text = "HCI Researcher & Full Stack Developer";
    let index = 0;
    const typewriterElement = document.getElementById('typewriter');

    function typeWriter() {
        if (index < text.length) {
            typewriterElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // Project Data
    const projects = [
        {
            title: "ENVISION OpenFDA Adverse Drug Events Database Exploratory Interactive Visualization",
            image: "project1.png",
            desc: "Interactive visualization system for drug safety analysis",
            tech: ["D3.js", "Underscore.js", "HTML/CSS", "Python", "SQL", "HCI Principles", "JavaScript", "Research"],
            details: {
                methodology: [
                    "Combined tree map and Sankey diagram visualizations",
                    "Implemented real-time filtering capabilities",
                    "Utilized openFDA dataset for analysis",
                    "Integrated human-computer interaction principles"
                ],
                results: [
                    "40% improvement in data analysis efficiency",
                    "Enhanced hypothesis generation capabilities",
                    "Improved drug safety monitoring processes"
                ],
                images: {
                    main: "project1.png",
                    research: "project2.png",
                    concept: "project3.png",
                    prototype: "project4.png"
                },
                techUsed: ["D3.js", "Underscore.js", "HTML/CSS", "Python", "SQL", "HCI Principles", "JavaScript", "Research"]
            }
        },
        {
            title: "E-Commerce Platform Redesign",
            image: "project2.png",
            desc: "Modern UI/UX redesign for enhanced shopping experience",
            tech: ["Figma", "React.js", "User Testing", "Node.js"],
            details: {
                methodology: [
                    "Conducted user interviews and surveys",
                    "Performed A/B testing on prototypes",
                    "Implemented responsive design principles",
                    "Optimized checkout flow"
                ],
                results: [
                    "35% increase in conversion rates",
                    "20% reduction in cart abandonment",
                    "Improved user satisfaction scores"
                ],
                images: {
                    main: "project2-main.png",
                    research: "project2-research.png",
                    concept: "project2-concept.png",
                    prototype: "project2-prototype.png"
                },
                techUsed: ["React", "Node.js", "MongoDB", "Express"]
            }
        },
        {
            title: "Healthcare Management System",
            image: "project3.png",
            desc: "Patient portal with telemedicine capabilities",
            tech: ["Java", "Spring Boot", "MySQL", "React"],
            details: {
                methodology: [
                    "Agile development methodology",
                    "User-centered design approach",
                    "HIPAA compliant security measures",
                    "Iterative prototyping"
                ],
                results: [
                    "50% reduction in appointment scheduling time",
                    "Improved patient-provider communication",
                    "30% increase in portal adoption"
                ],
                images: {
                    main: "project3-main.png",
                    research: "project3-research.png",
                    concept: "project3-concept.png",
                    prototype: "project3-prototype.png"
                },
                techUsed: ["Java", "Spring Boot", "React", "AWS"]
            }
        },
        {
            title: "Social Media Analytics Dashboard",
            image: "project4.png",
            desc: "Real-time social media monitoring platform",
            tech: ["Python", "Django", "D3.js", "MongoDB"],
            details: {
                methodology: [
                    "Data mining from multiple APIs",
                    "Sentiment analysis implementation",
                    "Real-time data visualization",
                    "Customizable dashboard components"
                ],
                results: [
                    "45% faster trend identification",
                    "Improved campaign performance tracking",
                    "25% increase in user engagement"
                ],
                images: {
                    main: "project4-main.png",
                    research: "project4-research.png",
                    concept: "project4-concept.png",
                    prototype: "project4-prototype.png"
                },
                techUsed: ["Python", "Django", "D3.js", "MongoDB"]
            }
        }
    ];

    // Generate Project Cards
    const container = document.getElementById('projectsContainer');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <p>${project.desc}</p>
            <div class="tech-stack">
                ${project.tech.map(t => `<span class="tech-item">${t}</span>`).join('')}
            </div>
        `;
        card.addEventListener('click', () => showModal(project));
        container.appendChild(card);
    });

    // Modal Handling
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close');

    function showModal(project) {
        const modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = `
            <h2>${project.title}</h2>
            
            <div class="modal-tech">
                <h3>Technologies Used</h3>
                <div class="tech-list">
                    ${project.details.techUsed.map(t => `<span class="tech-item">${t}</span>`).join('')}
                </div>
            </div>

            <div class="modal-grid">
                <div class="modal-section">
                    <h3>Main Overview</h3>
                    <img src="${project.details.images.main}" class="modal-image">
                    <p>${project.desc}</p>
                </div>

                <div class="modal-section">
                    <h3>Research & Methodology</h3>
                    <img src="${project.details.images.research}" class="modal-image">
                    <ul>
                        ${project.details.methodology.map(m => `<li>${m}</li>`).join('')}
                    </ul>
                </div>

                <div class="modal-section">
                    <h3>Concept Design</h3>
                    <img src="${project.details.images.concept}" class="modal-image">
                    <ul>
                        ${project.details.results.slice(0,2).map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>

                <div class="modal-section">
                    <h3>Working Prototype</h3>
                    <img src="${project.details.images.prototype}" class="modal-image">
                    <ul>
                        ${project.details.results.slice(2).map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        modal.style.display = 'block';
    }

    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => e.target === modal && (modal.style.display = 'none');

    // Resume Button
    document.querySelector('.resume-btn').addEventListener('click', () => {
        window.open('https://sanyamj-154.github.io/Portfolio-2025/', '_blank');
    });
});