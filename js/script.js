// === Person Configuration (single source of truth) ===

const PERSON = {
    name: "Amjad Sadiq",
    initials: "AS",
    role: "Creative Software Engineer & Developer",
    tagline: "Crafting digital experiences that soar above expectations",
    projectsIntro: "Here are some of my recent projects that showcase my skills in web development, UI/UX design, and problem-solving.",

    about: {
        heading: "Passionate Developer & Creative Thinker",
        paragraphs: [
            "I'm a dedicated developer with a passion for creating digital experiences that make a difference. With expertise in modern web technologies, I love turning complex problems into simple, elegant solutions.",
            "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or seeking inspiration in the world around me. I believe in continuous learning and pushing the boundaries of what's possible."
        ],
        quote: "Code is poetry, design is art, and innovation is the bridge between dreams and reality.",
        skills: [
            { icon: "💻", title: "Development", description: "Building responsive, modern web applications with clean, efficient code." },
            { icon: "🎨", title: "Design", description: "Creating beautiful, user-centered designs that tell compelling stories." },
            { icon: "⚡", title: "Innovation", description: "Always exploring new technologies and pushing creative boundaries." }
        ]
    },

    projects: [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with modern UI, secure payments, and real-time inventory management.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
            tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
            links: { live: "https://example.com/ecommerce", repo: "https://github.com/johndoe/ecommerce" },
            featured: false
        },
        {
            title: "Task Management App",
            description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
            tech: ["Vue.js", "Firebase", "Tailwind CSS"],
            links: { live: "https://example.com/taskapp", repo: "https://github.com/johndoe/taskapp" },
            featured: false
        },
        {
            title: "Weather Analytics Dashboard",
            description: "Interactive weather dashboard with data visualization, forecasting, and location-based insights using external APIs.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center",
            tech: ["JavaScript", "Chart.js", "Weather API"],
            links: { live: "https://example.com/weather", repo: "https://github.com/johndoe/weather-dashboard" },
            featured: false
        }
    ],

    email: { address: "S202269000@kfupm.edu.sa", mailto: "mailto:S202269000@kfupm.edu.sa" },
    phone: { number: "+966 55 700 6053", tel: "tel:+966557006053" },
    location: "Dhahran, SA",

    links: {
        github: "https://github.com/AmjadKFUPM",
        githubProfileLabel: "View GitHub Profile",
        linkedin: "https://sa.linkedin.com/in/amjad-alsadiq-270258382",
        twitter: "https://x.com/iq_mjood",
    },

    brand: {
        title: "Portfolio",
        footerBlurb: "Crafting digital experiences that soar above expectations. Let's build something amazing together.",
        footerContactTitle: "Get In Touch"
    },

    heroButtons: { primary: "View My Work", secondary: "Get In Touch" }
};

function renderProjects() {
    const grid = document.querySelector(".projects-grid");
    if (!grid) return;

    grid.innerHTML = "";

    PERSON.projects.forEach((proj) => {
        const card = document.createElement("div");
        card.className = "project-card" + (proj.featured ? " featured" : "");
        card.innerHTML = `
      ${proj.featured ? '<div class="project-badge">Featured</div>' : ''}
      <div class="project-image">
        <img src="${proj.image !== 'AA' ? proj.image : ''}" alt="${proj.title}">
        <div class="project-overlay">
          <div class="project-actions">
            <button class="action-btn">🔗</button>
            <button class="action-btn secondary">📁</button>
          </div>
        </div>
      </div>
      <div class="project-content">
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <div class="project-tech">
          ${(proj.tech || []).map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <!-- <div class="project-links">
          <button class="btn btn-primary">🔗 Live Demo</button>
          <button class="btn btn-outline">📁</button>
        </div> -->
      </div>`;

        // buttons
        const [liveBtn, repoBtn] = card.querySelectorAll(".project-links .btn");
        if (liveBtn) liveBtn.onclick = () => window.open(proj.links?.live || "#", "_blank");
        if (repoBtn) repoBtn.onclick = () => window.open(proj.links?.repo || "#", "_blank");
        const [actLive, actRepo] = card.querySelectorAll(".project-actions .action-btn");
        if (actLive) actLive.onclick = () => window.open(proj.links?.live || "#", "_blank");
        if (actRepo) actRepo.onclick = () => window.open(proj.links?.repo || "#", "_blank");

        grid.appendChild(card);
    });
}

function applyPersonConfig() {
    // Hero
    const titleEl = document.querySelector(".title-highlight");
    if (titleEl) titleEl.textContent = PERSON.role;
    const taglineEl = document.querySelector(".hero-tagline");
    if (taglineEl) taglineEl.textContent = PERSON.tagline;
    const heroBtns = document.querySelectorAll(".hero-buttons .btn");
    if (heroBtns[0]) heroBtns[0].textContent = PERSON.heroButtons.primary;
    if (heroBtns[1]) heroBtns[1].textContent = PERSON.heroButtons.secondary;

    // About
    const aboutHeading = document.querySelector(".about-text h3");
    if (aboutHeading) aboutHeading.textContent = PERSON.about.heading;
    const aboutParas = document.querySelectorAll(".about-text p");
    PERSON.about.paragraphs.forEach((text, i) => { if (aboutParas[i]) aboutParas[i].textContent = text; });
    const quoteEl = document.querySelector(".about .quote p");
    if (quoteEl) quoteEl.textContent = PERSON.about.quote;

    // Profile initials (About)
    const initialsEl = document.querySelector(".profile-avatar span");
    if (initialsEl) initialsEl.textContent = PERSON.initials;

    // Nav (Name)
    const nameEl = document.querySelector(".logo span");
    if (nameEl) nameEl.textContent = PERSON.name;

    // Skills
    const skillCards = document.querySelectorAll(".skills-grid .skill-card");
    PERSON.about.skills.forEach((skill, i) => {
        const card = skillCards[i];
        if (card) {
            const iconEl = card.querySelector(".skill-icon");
            const titleEl = card.querySelector("h4");
            const descEl = card.querySelector("p");
            if (iconEl) iconEl.textContent = skill.icon;
            if (titleEl) titleEl.textContent = skill.title;
            if (descEl) descEl.textContent = skill.description;
        }
    });

    // Projects intro text
    const projDesc = document.getElementById("projects-description");
    if (projDesc) projDesc.textContent = PERSON.projectsIntro;

    // Render projects from config
    renderProjects();

    // Projects CTA (View GitHub Profile)
    const ghBtn = document.getElementById("view-github-profile");
    if (ghBtn) {
        ghBtn.textContent = PERSON.links.githubProfileLabel || "View GitHub Profile";
        ghBtn.onclick = () => window.open(PERSON.links.github || "#", "_blank");
    }

    // Contact cards (main Contact section)
    document.querySelectorAll(".contact-card").forEach((card) => {
        const label = card.querySelector("h4")?.textContent?.trim().toLowerCase();
        const p = card.querySelector("p");
        if (label === "email") { card.setAttribute("href", PERSON.email.mailto); if (p) p.textContent = PERSON.email.address; }
        else if (label === "phone") { card.setAttribute("href", PERSON.phone.tel); if (p) p.textContent = PERSON.phone.number; }
        else if (label === "location") { if (p) p.textContent = PERSON.location; }
    });

    // Footer overrides (Get In Touch)
    const footerTitle = document.getElementById("footer-contact-title");
    if (footerTitle) footerTitle.textContent = PERSON.brand.footerContactTitle || "Get In Touch";
    const footLoc = document.getElementById("footer-location");
    if (footLoc) footLoc.textContent = PERSON.location;
    const footEmail = document.getElementById("footer-email");
    if (footEmail) footEmail.textContent = PERSON.email.address;
    const footPhone = document.getElementById("footer-phone");
    if (footPhone) footPhone.textContent = PERSON.phone.number;

    // Footer brand + blurb
    const footerBrand = document.querySelector(".footer-logo span");
    if (footerBrand) footerBrand.textContent = PERSON.brand.title;
    const footerBlurb = document.querySelector(".footer .footer-section p");
    if (footerBlurb) footerBlurb.textContent = PERSON.brand.footerBlurb;

    // Social links
    const socialLinks = document.querySelectorAll(".social-links a");
    if (socialLinks[0]) socialLinks[0].setAttribute("href", PERSON.links.github || "#");
    if (socialLinks[1]) socialLinks[1].setAttribute("href", PERSON.links.linkedin || "#");
    if (socialLinks[2]) socialLinks[2].setAttribute("href", PERSON.links.twitter || "#");
}

// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        this.applyTheme();
        this.bindEvents();
        this.updateThemeIcons();
    }

    applyTheme() {
        if (this.theme === 'light') {
            document.body.classList.add('light');
        } else {
            document.body.classList.remove('light');
        }
        localStorage.setItem('theme', this.theme);
    }

    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme();
        this.updateThemeIcons();
        window.dispatchEvent(new Event('scroll'));
    }

    updateThemeIcons() {
        const holders = document.querySelectorAll('.theme-icon');
        holders.forEach(holder => {
            // Ensure there is an <i data-lucide="..."> inside
            let i = holder.querySelector('[data-lucide]');
            if (!i) {
                holder.innerHTML = '<i data-lucide="moon"></i>';
                i = holder.querySelector('[data-lucide]');
            }

            // ThemeManager uses `this.theme` = 'dark' | 'light'
            const want = (this.theme === 'dark') ? 'moon' : 'sun';
            i.setAttribute('data-lucide', want);
        });

        // Re-render Lucide after changing attributes
        if (window.lucide && typeof lucide.createIcons === 'function') {
            lucide.createIcons();
        }
    }

    bindEvents() {
        const themeButtons = document.querySelectorAll('#theme-toggle, #mobile-theme-toggle');
        themeButtons.forEach(button => {
            button.addEventListener('click', () => this.toggleTheme());
        });
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.handleScroll();
    }

    bindEvents() {
        // Mobile menu toggle
        const menuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', () => {
                
                let isOpen = mobileMenu.classList.toggle('active');

                const menuToggle = document.getElementById('mobile-menu-toggle');
                if (!menuToggle) return;

                const holder = menuToggle.querySelector('.menu-icon');
                if (!holder) return;

                let i = holder.querySelector('[data-lucide]');
                if (!i) {
                    holder.innerHTML = '<i data-lucide="menu"></i>';
                    i = holder.querySelector('[data-lucide]');
                }

                i.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
                if (window.lucide && typeof lucide.createIcons === 'function') {
                    lucide.createIcons();
                }

            });
        }

        // Navigation links
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.scrollToSection(targetId);
                
                // Close mobile menu
                if (mobileMenu) {
                    mobileMenu.classList.remove('active');

                    const holder = menuToggle?.querySelector('.menu-icon');
                    if (holder) {
                        // Ensure there's a Lucide icon element
                        let i = holder.querySelector('[data-lucide]');
                        if (!i) {
                            holder.innerHTML = '<i data-lucide="menu"></i>';
                            i = holder.querySelector('[data-lucide]');
                        }

                        // Set to the closed-state icon
                        i.setAttribute('data-lucide', 'menu');

                        // Re-render the SVG
                        if (window.lucide && typeof lucide.createIcons === 'function') {
                            lucide.createIcons();
                        }
                    }
                }

            });
        });

        // Scroll listener for header
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        const header = document.getElementById('header');
        if (!header) return;

        const isLight = document.body.classList.contains('light');

        if (window.scrollY > 50) {
            header.style.background = isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(10, 10, 10, 0.95)';
        } else {
            header.style.background = isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(10, 10, 10, 0.9)';
        }
    }


    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const elementPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    }
}

// Greeting Management
class GreetingManager {
    constructor() {
        this.init();
    }

    init() {
        this.updateGreeting();
    }

    updateGreeting() {
        const greetingElement = document.getElementById('greeting');
        if (greetingElement) {
            const hour = new Date().getHours();
            let greeting = '';

            if (hour < 12) {
                greeting = 'Good Morning';
            } else if (hour < 17) {
                greeting = 'Good Afternoon';
            } else {
                greeting = 'Good Evening';
            }

            greetingElement.textContent = `${greeting}!`;
        }
    }
}

// Contact Form Management
class ContactFormManager {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }

    init() {
        if (this.form) {
            this.bindEvents();
        }
    }

    bindEvents() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const submitButton = this.form.querySelector('.btn-submit');
        const formData = new FormData(this.form);
        
        // Show loading state
        submitButton.classList.add('loading');
        submitButton.disabled = true;

        // Simulate form submission
        try {
            await this.simulateSubmission();
            this.showSuccess();
            this.form.reset();
        } catch (error) {
            this.showError();
        } finally {
            submitButton.classList.remove('loading');
            submitButton.disabled = false;
        }
    }

    simulateSubmission() {
        return new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
    }

    showSuccess() {
        this.showNotification('Message Sent!', 'Thank you for your message. I\'ll get back to you soon!', 'success');
    }

    showError() {
        this.showNotification('Error', 'Something went wrong. Please try again.', 'error');
    }

    showNotification(title, message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <strong>${title}</strong>
                <p>${message}</p>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'var(--gold-primary)' : '#ef4444'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 9999;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }
}

// Utility Functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Footer Year Update
function updateFooterYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll(
        '.skill-card, .project-card, .contact-card, .about-text, .profile-image'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Parallax Effect for Hero Background
function initParallaxEffect() {
    const heroSection = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroSection && heroBg) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const rate = scrollTop * -0.5;
            heroBg.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize managers
    const themeManager = new ThemeManager();
    const navigationManager = new NavigationManager();
    const greetingManager = new GreetingManager();
    const contactFormManager = new ContactFormManager();

    // Initialize utilities
    updateFooterYear();
    initScrollAnimations();
    initParallaxEffect();
    applyPersonConfig();

    // Add smooth reveal animation to hero content
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }
    }, 300);

    // === Icons ===

    if (window.lucide && lucide.createIcons) {
        lucide.createIcons();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    const mobileMenu = document.getElementById('mobile-menu');
    const menuToggle = document.getElementById('mobile-menu-toggle');
    
    if (window.innerWidth > 768 && mobileMenu) {
        mobileMenu.classList.remove('active');
        if (menuToggle) {
            const holder = menuToggle.querySelector('.menu-icon');
            if (holder) {
                let i = holder.querySelector('[data-lucide]');
                if (!i) {
                    holder.innerHTML = '<i data-lucide="menu"></i>';
                    i = holder.querySelector('[data-lucide]');
                }
                i.setAttribute('data-lucide', 'menu');
                if (window.lucide && typeof lucide.createIcons === 'function') {
                    lucide.createIcons();
                }
            }
        }
    }
});

// Prevent form submission on demo links
document.addEventListener('click', (e) => {
    if (e.target.onclick && e.target.onclick.toString().includes('window.open(\'#\'')) {
        e.preventDefault();
        console.log('Demo link clicked - would open:', e.target.textContent);
    }
});

// Initialize hero content animation
document.querySelector('.hero-content').style.cssText = `
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
`;