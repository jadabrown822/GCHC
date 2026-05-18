// --- ORIGIINAL HAMBURGER MENU CODE ---
const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', () => {
    navEl.classList.toggle('nav--open');
});


// --- SINGLE PAGE SCROLL TRACKER ---
document.addEventListener("DOMContentLoaded", () => {
    // Targets the layout wrapper blocks we designated in your HTML
    const sections = document.querySelectorAll(".home-section-wrapper, section");
    const navLinks = document.querySelectorAll(".nav_link");

    const observerOptions = {
        root: null, // Uses the browser viewport window
        // Creates a tracking boundary box. 
        // -110px accounts for your top fixed header area cushion.
        rootMargin: "-110px 0px -50% 0px", 
        threshold: 0.1 // Triggers when 10% of the target section enters the boundary
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        // If a section crosses into our viewing boundary
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
        
            // 1. Remove the active highlighting from all navigation links
            navLinks.forEach((link) => link.classList.remove("active"));
        
            // 2. Locate the link pointing to this specific section ID and highlight it
            const activeLink = document.querySelector(`.nav_link[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
        });
    }, observerOptions);

    // Tell the script to monitor each structural block
    sections.forEach((section) => {
        if (section.getAttribute("id")) {
            observer.observe(section);
        }
    });
});