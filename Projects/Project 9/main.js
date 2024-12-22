// Form Handling
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Message sent successfully!');
});

document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    alert('Thank you for subscribing!');
});

// Product Cards
document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Lazy Loading Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Mobile Menu Toggle
const createMobileMenu = () => {
    const nav = document.querySelector('nav');
    const ul = nav.querySelector('ul');
    
    // Create menu button if it doesn't exist
    if (!nav.querySelector('.mobile-menu-button')) {
        const menuButton = document.createElement('button');
        menuButton.classList.add('mobile-menu-button');
        menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        
        menuButton.addEventListener('click', () => {
            ul.classList.toggle('active');
            // Toggle icon between bars and times
            const icon = menuButton.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
        
        nav.appendChild(menuButton);
    }
};

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const nav = document.querySelector('nav');
    const ul = nav.querySelector('ul');
    const menuButton = nav.querySelector('.mobile-menu-button');
    
    if (!nav.contains(e.target) && ul.classList.contains('active')) {
        ul.classList.remove('active');
        const icon = menuButton.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    }
});

window.addEventListener('load', createMobileMenu);