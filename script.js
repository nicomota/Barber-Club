// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header Background on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// CTA Button Actions
document.addEventListener('DOMContentLoaded', function() {
    // Primary CTA buttons (Começar Agora, Começar Teste Gratuito)
    const primaryCTAs = document.querySelectorAll('.btn-primary');
    primaryCTAs.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show loading state
            const originalText = this.textContent;
            this.textContent = 'Carregando...';
            this.disabled = true;
            
            // Simulate redirect to signup
            setTimeout(() => {
                alert('Redirecionando para o cadastro...\n\nEm um site real, isto levaria você para a página de registro.');
                this.textContent = originalText;
                this.disabled = false;
            }, 1500);
        });
    });
    
    // Secondary CTA buttons (Ver Demonstração, Falar com Especialista)
    const secondaryCTAs = document.querySelectorAll('.btn-secondary');
    secondaryCTAs.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.textContent.includes('Demonstração')) {
                // Demo modal or redirect
                alert('Abrindo demonstração do sistema...\n\nEm um site real, isto abriria uma demo interativa ou vídeo.');
            } else if (this.textContent.includes('Especialista')) {
                // Contact form or chat
                alert('Conectando com especialista...\n\nEm um site real, isto abriria um chat ou formulário de contato.');
            }
        });
    });
    
    // Pricing buttons
    const pricingButtons = document.querySelectorAll('.pricing-card .btn');
    pricingButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const card = this.closest('.pricing-card');
            const planTitle = card.querySelector('.pricing-title').textContent;
            
            if (this.textContent.includes('Teste')) {
                alert(`Iniciando teste gratuito do plano ${planTitle}...\n\nEm um site real, isto levaria você para o processo de cadastro.`);
            } else if (this.textContent.includes('Vendas')) {
                alert(`Entrando em contato sobre o plano ${planTitle}...\n\nEm um site real, isto abriria um formulário ou chat com vendas.`);
            }
        });
    });
});

// Form Validation (if contact forms are added)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Typing Effect for Hero Title (Optional Enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Stats Counter Animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString('pt-BR');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString('pt-BR');
        }
    }
    
    updateCounter();
}

// Initialize counter animation when stats come into view
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                const suffix = text.replace(/[\d,]/g, '');
                
                animateCounter(stat, number);
                // Add suffix back after animation
                setTimeout(() => {
                    stat.textContent = number.toLocaleString('pt-BR') + suffix;
                }, 2000);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
});

// Enhanced Mobile Menu Styles
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile menu styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                top: 0;
                right: -100%;
                width: 80%;
                height: 100vh;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(20px);
                flex-direction: column;
                justify-content: center;
                align-items: center;
                transition: right 0.3s ease;
                z-index: 999;
                box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
            }
            
            .nav-menu.active {
                right: 0;
            }
            
            .nav-menu .nav-link {
                font-size: 1.2rem;
                margin: 1rem 0;
                padding: 1rem;
                border-radius: 8px;
                width: 80%;
                text-align: center;
            }
            
            .nav-toggle.active span:nth-child(1) {
                transform: rotate(-45deg) translate(-5px, 6px);
            }
            
            .nav-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .nav-toggle.active span:nth-child(3) {
                transform: rotate(45deg) translate(-5px, -6px);
            }
        }
        
        .animate-in {
            animation: fadeInUp 0.8s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .header.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
    `;
    document.head.appendChild(style);
});

// Loading Animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add to head for loading styles
document.addEventListener('DOMContentLoaded', function() {
    const loadingStyles = document.createElement('style');
    loadingStyles.textContent = `
        body:not(.loaded) {
            overflow: hidden;
        }
        
        body:not(.loaded)::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #667eea;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }
        
        body.loaded::before {
            opacity: 0;
            pointer-events: none;
        }
    `;
    document.head.appendChild(loadingStyles);
});