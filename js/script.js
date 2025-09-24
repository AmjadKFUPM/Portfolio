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
    }

    updateThemeIcons() {
        const icons = document.querySelectorAll('.theme-icon');
        icons.forEach(icon => {
            icon.textContent = this.theme === 'dark' ? '☀️' : '🌙';
        });
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
                mobileMenu.classList.toggle('active');
                const icon = menuToggle.querySelector('.menu-icon');
                icon.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
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
                    const icon = menuToggle.querySelector('.menu-icon');
                    icon.textContent = '☰';
                }
            });
        });

        // Scroll listener for header
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        const header = document.getElementById('header');
        if (header) {
            // Header is always visible with backdrop blur
            if (window.scrollY > 50) {
                header.style.background = this.theme === 'light' 
                    ? 'rgba(255, 255, 255, 0.95)' 
                    : 'rgba(10, 10, 10, 0.95)';
            } else {
                header.style.background = this.theme === 'light' 
                    ? 'rgba(255, 255, 255, 0.9)' 
                    : 'rgba(10, 10, 10, 0.9)';
            }
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

            greetingElement.textContent = `${greeting}! 👋`;
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

    // Add smooth reveal animation to hero content
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }
    }, 300);
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    const mobileMenu = document.getElementById('mobile-menu');
    const menuToggle = document.getElementById('mobile-menu-toggle');
    
    if (window.innerWidth > 768 && mobileMenu) {
        mobileMenu.classList.remove('active');
        if (menuToggle) {
            const icon = menuToggle.querySelector('.menu-icon');
            if (icon) icon.textContent = '☰';
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