// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect for terminal
    const typewriterElements = document.querySelectorAll('.typewriter');
    typewriterElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.animation = 'none';
        }, 500 + (index * 500));
    });

    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Planet interactions
    const planets = document.querySelectorAll('.planet');
    const satellites = document.querySelectorAll('.satellite');
    
    planets.forEach(planet => {
        planet.addEventListener('mouseenter', function() {
            const planetName = this.dataset.planet;
            highlightOrbit(this);
        });
        
        planet.addEventListener('click', function() {
            const planetName = this.dataset.planet;
            showPlanetInfo(planetName);
        });
    });
    
    satellites.forEach(satellite => {
        satellite.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3)';
            this.style.zIndex = '100';
        });
        
        satellite.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = 'auto';
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('messageForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission (replace with actual backend)
            alert(`Message sent! I'll get back to you soon at ${data.email}`);
            this.reset();
        });
    }

    // Animate skill bars on scroll
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-level');
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.transition = 'width 1.5s ease-in-out';
                        bar.style.width = width;
                    }, 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe skills section
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }

    // Add parallax effect to starfield
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const starfield = document.querySelector('.starfield');
        if (starfield) {
            starfield.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Terminal cursor animation
    const cursor = document.querySelector('.terminal-cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    }
});

// Helper functions
function highlightOrbit(planet) {
    const orbit = planet.closest('.orbit');
    if (orbit) {
        orbit.style.borderColor = '#00f3ff';
        orbit.style.boxShadow = '0 0 20px rgba(0, 243, 255, 0.5)';
        
        setTimeout(() => {
            orbit.style.borderColor = '';
            orbit.style.boxShadow = '';
        }, 1000);
    }
}

function showPlanetInfo(planetName) {
    const info = {
        security: 'Cybersecurity & Ethical Hacking',
        code: 'Python & Programming Skills',
        linux: 'Kali Linux & System Administration',
        tools: 'Security Tools & Techniques'
    };
    
    alert(`${info[planetName] || 'Click on planets to learn more!'}`);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Randomize satellite positions
    const satellites = document.querySelectorAll('.satellite');
    satellites.forEach(satellite => {
        const randomX = Math.random() * 600 - 300;
        const randomY = Math.random() * 600 - 300;
        satellite.style.left = `calc(50% + ${randomX}px)`;
        satellite.style.top = `calc(50% + ${randomY}px)`;
    });
});
