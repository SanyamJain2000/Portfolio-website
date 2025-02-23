document.addEventListener('DOMContentLoaded', () => {
    // Typewriter Effect
    const text = "HCI Researcher & UI/UX Designer";
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
  
    // Projects Array with updated structure
    const projects = [
      // Project 1: 4 sections (same as original)
      {
        title:
          "ENVISION OpenFDA Adverse Drug Events Database Exploratory Interactive Visualization",
        image: "project1.png",
        desc: [
          "Solved the complexity of large Adverse Drug Event datasets with ENVISION, turning raw data into interactive, actionable insights",
          "Achieved dynamic, multi-level analysis using hierarchical treemaps, Sankey diagrams, and real-time filtering for instant pattern detection",
          "Championed user-centered design and human–computer interaction principles to drive quicker decision-making and bolster patient safety"
        ],
        tech: [
          "D3.js",
          "Underscore.js",
          "HTML/CSS",
          "Python",
          "SQL",
          "HCI Principles",
          "JavaScript",
          "Research",
          "PowerApps",
          "Power Automate",
          "Other Microsoft 365 Tools",
          "PowerBI",
          "Wireframing"
        ],
        projectUrl: "https://sanyamjain2000.github.io/ENVISION/",
        sections: [
          {
            title: "Interactive Landing Page",
            image: "project1.png",
            caption: "The main page featuring real-time filters, timeline controls, and a treemap for immediate data exploration.", 
            bullets: [
              "Tackles the overwhelming complexity of raw ADE data with instantly adjustable demographic and outcome filters",
          "Motivated by the need for rapid, personalized insights that replace cumbersome, static reports",
          "Helps users focus on relevant patterns quickly, enabling faster, evidence-based decision-making",
          "Novel in its human–computer interaction approach, merging clarity and interactivity on a global scale"
            ]
          },
          
        {
        title: "Linked Sankey Diagram",
        image: "project2.png",
        caption: "Visualizing how medication uses connect to specific adverse reactions, with clickable links.",
        bullets: [
            "Solves the challenge of correlating indications and adverse reactions in a single, intuitive flow.",
            "Driven by the desire to see real-time connections between causes and effects in complex datasets.",
            "Empowers users to pinpoint high-risk medication-outcome links instantly, boosting efficiency.",
            "Groundbreaking in seamlessly linking the Sankey to the treemap, reflecting a user-centered design philosophy."
        ]
        },
        {
        title: "Focused Outcome Filtering",
        image: "project3.png",
        caption: "Isolating specific outcomes (e.g., congenital anomaly) with a single click for deeper insights.",
        bullets: [
            "Addresses the problem of identifying critical but rare outcomes in vast ADE repositories.",
            "Motivated by the need for rapid spotlighting of specific concerns without irrelevant clutter.",
            "Enables healthcare professionals to focus on priority risks, accelerating targeted interventions.",
            "Uniquely combines a color-coded legend and interactive filtering, guided by user cognition principles."
        ]
        },
        {
        title: "Split-Screen Correlation View",
        image: "project4.png",
        caption: "Treemap and Sankey displayed side by side, allowing direct comparison and seamless cognition.",
        bullets: [
            "Resolves visual discontinuity by placing complementary views together for immediate correlation.",
            "Inspired by the necessity to compare drug-outcome relationships without switching screens.",
            "Empowers decision-makers to analyze multiple dimensions simultaneously, reducing oversight.",
            "Pioneers a dual-visual approach, leveraging best practices in cognitive design for global innovation."
        ]
        }
        ]
      },
      // Project 2: 5 sections with different names
      {
        title: "Healthcare Appointment Booking Webpage",
        image: "project2-main.png",
        desc:  [
            "A well-structured platform merging seamless doctor discovery, user-friendly appointment booking, and real-time filter options",
            "Modern UI/UX crafted with Figma, HTML, CSS, and Bootstrap for effortless healthcare navigation",
            "Tailored for patients and clinics alike, ensuring swift communication, timely scheduling, and improved user engagement"
          ],
        tech: ["Figma", "HTML", "CSS", "Bootstrap", "Wireframing", "User Cognition", "HCI", "JavaScript", "Pen/Pencil", "SharePoint", "Power Apps Dev"],
        projectUrl: "https://sanyamjain2000.github.io/healthcare-appointment/",
        sections: [
          {
            title: "User-Centric Landing Concepts",
            image: "project2-main.png",
            caption: "Immersive first impression with doctor profiles and top navigation",
            bullets: [
              "A visually appealing entry point featuring a doctor profile and top navigation",
              "Displays multiple doctors with clickable icons for fast switch",
              "Intuitive menu with Services, Contact, Help, and Blog for quick access",
              "Sets a professional tone, boosting user confidence from the start"
            ]
          },
          {
            title: "Doctor Discovery & Clinic Credibility",
            image: "project2-research.png",
            caption: "Advanced search panel, clinic stats, and confidence-building blog details",
            bullets: [
              "Seamless search by name or specialty with a toggle filter for real-time availability",
              "Displays clinic performance stats to reinforce credibility",
              "Blog-style info on various procedures for enhanced user trust",
              "Empowers users to find the perfect doctor with minimal effort"
            ]
          },
          {
            title: "Interactive Service Highlights",
            image: "project2-concept.png",
            caption: "Engaging cards depicting core treatments and easy expansions",
            bullets: [
              "Visual service cards for dental, bone treatments, and diagnostics with short descriptions",
              "Clickable interface for deeper insights into each service",
              "Encourages user engagement through straightforward design",
              "Creates a holistic overview of clinic capabilities and expertise"
            ]
          },
          {
            title: "Holistic Service & Booking System",
            image: "project2-prototype.png",
            caption: "Integrated appointment form and comprehensive service display",
            bullets: [
              "Top-of-page appointment booking form with name, email, department, and time fields",
              "Showcases different services in a visually appealing layout",
              "Streamlines scheduling by merging service details with real-time booking",
              "Enhances user satisfaction through efficient and cohesive design"
            ]
          },
          {
            title: "Streamlined Communication & Support",
            image: "project2-testing.png",
            caption: "Simple webform for instant clinic connectivity and assistance",
            bullets: [
              "Direct communication channel through a concise webform",
              "Collects name, email, and message for prompt clinic follow-up",
              "Builds trust by offering an accessible support system",
              "Ensures users can resolve queries quickly and effectively"
            ]
          }
        ]
      },
      // Project 3: 2 sections
      {
        title: "Public News Webpage Interface",
        image: "project3-main.png",
        desc: [
          "Redefined public news presentation with an engaging and intuitive UI",
          "Showcased the main headline prominently while effectively organizing latest updates",
          "Delivered a user-focused experience through real-time news and trending topics"
        ],
        tech: [
          "Figma",
          "Semantic HTML5 Markup",
          "Flexbox",
          "Grid",
          "Responsive Design",
          "CSS Animations",
          "Media Queries",
          "Advanced JavaScript (ES6+)",
          "Node.js",
          "Git Version Control",
          "Prototyping",
          "Microsoft 365 Tools",
          "API"
        ],
        projectUrl: "https://sanyamjain2000.github.io/public-news/",
        sections: [
          {
            title: "Full-Width Web Layout",
            image: "project3-main.png",
            caption: "A dynamic desktop view emphasizing the day's top news and real-time updates",
            bullets: [
              "Highlighted main headline with a large, visually compelling image",
              "Created a right-aligned news list, updated live with timestamps",
              "Showcased trending news horizontally at the bottom for quick browsing",
              "Leveraged flexible Grid and CSS Animations for an engaging user experience"
            ]
          },
          {
            title: "Mobile-Optimized Interface",
            image: "project3-research.png",
            caption: "A responsive, streamlined view for on-the-go news consumption",
            bullets: [
              "Adaptive layout reshuffles content for easy vertical scrolling",
              "Maintains key headline prominence while optimizing screen space",
              "Ensures minimal load times and instant refresh for latest stories",
              "Employs Media Queries and Flexbox for consistent responsiveness"
            ]
          }
        ]
      },      
      // Project 4: 12 sections, each with one bullet (first is main overview)
      {
        title: "Ayurvedic Solutions for All Diseases",
        image: "project4-1.jpg",
        desc: [
          "Marries ancient Ayurvedic principles with modern software to deliver personalized healthcare insights",
          "Meets user and business needs by simplifying prescription workflows and broadening Ayurvedic reach",
          "Promotes a socially impactful solution, encouraging practitioners to preserve and elevate traditional healing methods"
        ],
        tech: [
          "Figma",
          "Android Studio",
          "Canva",
          "Advanced Algorithms",
          "User-Centered Research",
          "API Integrations",
          "Firebase",
          "RESTful Architecture",
          "Microsoft Power Apps",
          "Share Point",
          "Teams"
        ],
        sections: (function () {
          const sections = [];
      
          // Main Overview with 3 bullet points
          sections.push({
            title: "Main Overview",
            image: "project4-1.jpg",
            caption: "Foundational research and conceptual framework behind Ayurvedic solutions",
            bullets: [
              "Deep exploration of ancient Ayurvedic texts to create a holistic healing framework",
              "Algorithm-driven recommendation system tailored to individual symptoms and histories",
              "A socially impactful tool preserving tradition while meeting modern healthcare demands"
            ]
          });
      
          // Detail 3: Welcome Page
          sections.push({
            title: "Welcome Page",
            image: "project4-2.jpg",
            caption: "Engaging introduction to the app for practitioners and students alike",
            bullets: [
              "Prompts immediate trust and clarity through user-friendly design"
            ]
          });
      
          // Detail 4: Login/Sign-Up Page
          sections.push({
            title: "Login/Sign-Up Page",
            image: "project4-3.jpg",
            caption: "Streamlined user authentication options for distinct roles",
            bullets: [
              "Facilitates quick, secure access to personalized Ayurvedic insights"
            ]
          });
      
          // Detail 5: Login Page
          sections.push({
            title: "Login Page",
            image: "project4-4.jpg",
            caption: "Minimalist form ensuring user privacy and data protection",
            bullets: [
              "Encourages rapid entry with robust security for sensitive health records"
            ]
          });
      
          // Detail 6: Sign-Up Page
          sections.push({
            title: "Sign-Up Page",
            image: "project4-5.jpg",
            caption: "Simple, guided registration for new Ayurvedic practitioners or students",
            bullets: [
              "Collects essential user data to tailor treatment recommendations"
            ]
          });
      
          // Detail 7: Practitioner/Student Selection
          sections.push({
            title: "Practitioner/Student Selection",
            image: "project4-6.jpg",
            caption: "Role-based interfaces catering to unique Ayurvedic requirements",
            bullets: [
              "Creates specialized pathways for research, learning, and clinical practice"
            ]
          });
      
          // Detail 8: Home Page
          sections.push({
            title: "Home Page",
            image: "project4-7.jpg",
            caption: "Central dashboard presenting curated remedies and daily insights",
            bullets: [
              "Facilitates quick exploration of formulations and latest Ayurvedic updates"
            ]
          });
      
          // Detail 9: Profile Page
          sections.push({
            title: "Profile Page",
            image: "project4-8.jpg",
            caption: "User-specific data hub ensuring continuity of care",
            bullets: [
              "Tracks personal history for precise and evolving healthcare suggestions"
            ]
          });
      
          // Detail 10: Medicines Page
          sections.push({
            title: "Medicines Page",
            image: "project4-9.jpg",
            caption: "Extensive catalog of Ayurvedic formulations for various conditions",
            bullets: [
              "Allows quick look-up of remedies and their usage guidelines"
            ]
          });
      
          // Detail 11: Ingredients Page
          sections.push({
            title: "Ingredients Page",
            image: "project4-10.jpg",
            caption: "Detailed listings of herbs and compounds integral to Ayurvedic treatments",
            bullets: [
              "Empowers practitioners to understand and combine ingredients effectively"
            ]
          });
      
          // Detail 12: Products Page
          sections.push({
            title: "Products Page",
            image: "project4-11.jpg",
            caption: "Varied offerings that translate traditional remedies into modern packaging",
            bullets: [
              "Bridges classical herbal formulas with contemporary consumer needs"
            ]
          });
      
          // Detail 13: Formulation Page
          sections.push({
            title: "Formulation Page",
            image: "project4-12.jpg",
            caption: "Dynamic recipe generator deriving precision-based prescriptions",
            bullets: [
              "Uses algorithmic intelligence to map symptoms to accurate treatment combinations"
            ]
          });
      
          return sections;
        })()
      }
      
      
    ];
  
    const container = document.getElementById('projectsContainer');
  
    projects.forEach((project) => {
      const card = document.createElement('div');
      card.className = 'project-card';
  
      // Title
      const title = document.createElement('h3');
      title.textContent = project.title;
      card.appendChild(title);
  
      // Image
      const img = document.createElement('img');
      img.src = project.image;
      img.alt = project.title;
      img.className = 'project-image';
      card.appendChild(img);
  
      // Description as bullet list if an array, else as a paragraph
      if (Array.isArray(project.desc)) {
        const ul = document.createElement('ul');
        project.desc.forEach((point) => {
          const li = document.createElement('li');
          li.textContent = point;
          ul.appendChild(li);
        });
        card.appendChild(ul);
      } else {
        const p = document.createElement('p');
        p.textContent = project.desc;
        card.appendChild(p);
      }
  
      // Tech Stack
      const techStack = document.createElement('div');
      techStack.className = 'tech-stack';
      project.tech.forEach((tech) => {
        const span = document.createElement('span');
        span.className = 'tech-item';
        span.textContent = tech;
        techStack.appendChild(span);
      });
      card.appendChild(techStack);
  
      // Button Container
      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'button-container';
  
      // View More Button
      const viewMoreBtn = document.createElement('button');
      viewMoreBtn.className = 'project-btn view-more-btn';
      viewMoreBtn.textContent = 'View More';
      viewMoreBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showModal(project);
      });
      buttonContainer.appendChild(viewMoreBtn);
  
      // Open Project Button
      const openProjectBtn = document.createElement('button');
      openProjectBtn.className = 'project-btn open-project-btn';
      openProjectBtn.textContent = 'Open Project';
      openProjectBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open(project.projectUrl, '_blank');
      });
      buttonContainer.appendChild(openProjectBtn);
  
      card.appendChild(buttonContainer);
      container.appendChild(card);
    });
  
    // Create an image container with overlay that retains event listeners
    function createImageWithOverlay(src, caption) {
        const container = document.createElement('div');
        container.className = 'image-container';
        
        const img = document.createElement('img');
        img.src = src;
        img.className = 'modal-image';
        
        const descOverlay = document.createElement('div');
        descOverlay.className = 'image-description';
        descOverlay.textContent = caption; // use the new caption
        
        container.appendChild(img);
        container.appendChild(descOverlay);
        
        // Click handler for enlarging images
        img.addEventListener('click', (e) => {
          e.stopPropagation();
          showEnlargedImage(src, caption);
        });
        
        return container;
      }      
  
    function showEnlargedImage(src, description) {
      const overlay = document.createElement('div');
      overlay.className = 'image-overlay';
  
      const enlargedContainer = document.createElement('div');
      enlargedContainer.className = 'enlarged-image-container';
  
      enlargedContainer.innerHTML = `
              <div class="enlarged-image-content">
                  <img src="${src}" class="enlarged-image">
                  <div class="enlarged-description">${description}</div>
                  <span class="close-enlarged">&times;</span>
              </div>
          `;
  
      overlay.appendChild(enlargedContainer);
      document.body.appendChild(overlay);
  
      const closeBtn = enlargedContainer.querySelector('.close-enlarged');
      closeBtn.addEventListener('click', () => {
        document.body.removeChild(overlay);
      });
  
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          document.body.removeChild(overlay);
        }
      });
    }
  
    // Revised showModal function – builds modal content dynamically
    function showModal(project) {
      const modal = document.getElementById('projectModal');
      const modalContent = document.getElementById('modalContent');
      modalContent.innerHTML = '';
  
      // Project Title
      const title = document.createElement('h2');
      title.textContent = project.title;
      modalContent.appendChild(title);
  
      // Technologies Used Section
      const techSection = document.createElement('div');
      techSection.className = 'modal-tech';
      const techHeading = document.createElement('h3');
      techHeading.textContent = 'Technologies Used';
      techSection.appendChild(techHeading);
      const techList = document.createElement('div');
      techList.className = 'tech-stack';
      project.tech.forEach((t) => {
        const span = document.createElement('span');
        span.className = 'tech-item';
        span.textContent = t;
        techList.appendChild(span);
      });
      techSection.appendChild(techList);
      modalContent.appendChild(techSection);
  
      // Modal Grid Container for Sections
      const grid = document.createElement('div');
      grid.className = 'modal-grid';
  
      project.sections.forEach((section) => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'modal-section';
        const sectionTitle = document.createElement('h3');
        sectionTitle.textContent = section.title;
        sectionDiv.appendChild(sectionTitle);
        sectionDiv.appendChild(createImageWithOverlay(section.image, section.caption));
        const ul = document.createElement('ul');
        section.bullets.forEach((bullet) => {
          const li = document.createElement('li');
          li.textContent = bullet;
          ul.appendChild(li);
        });
        sectionDiv.appendChild(ul);
        grid.appendChild(sectionDiv);
      });
  
      modalContent.appendChild(grid);
  
      // Add hover effects to image containers
      const imageContainers = modalContent.querySelectorAll('.image-container');
      imageContainers.forEach((container) => {
        container.addEventListener('mouseenter', () => {
          const img = container.querySelector('.modal-image');
          const desc = container.querySelector('.image-description');
          if (img) img.style.opacity = '0.7';
          if (desc) desc.style.opacity = '1';
        });
        container.addEventListener('mouseleave', () => {
          const img = container.querySelector('.modal-image');
          const desc = container.querySelector('.image-description');
          if (img) img.style.opacity = '1';
          if (desc) desc.style.opacity = '0';
        });
      });
  
      modal.style.display = 'block';
    }
  
    // Modal Close Handlers
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close');
    closeBtn.onclick = () => (modal.style.display = 'none');
    window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    };
  
    // Resume Button Handler
    document.querySelector('.resume-btn').addEventListener('click', () => {
      window.open('https://sanyamjain2000.github.io/Portfolio-2025/', '_blank');
    });
  });
  