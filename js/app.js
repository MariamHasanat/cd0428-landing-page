/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * Helper function to determine if a section is in the viewport
 */
const isInViewport = (section) => {
    const box = section.getBoundingClientRect();
    return box.top <= 150 && box.bottom >= 150;
};

/**
 * Helper function to remove 'active' classes
 */
const removeActiveClasses = () => {
    sections.forEach((section) => section.classList.remove("your-active-class"));
    const navLinks = document.querySelectorAll(".menu__link");
    navLinks.forEach((link) => link.classList.remove("active"));
};

/**
 * Build the navigation menu dynamically
 */
const buildNav = () => {
    sections.forEach((section) => {
        const navItem = document.createElement("li");
        const anchor = document.createElement("a");

        anchor.textContent = section.dataset.nav;
        anchor.href = `#${section.id}`;
        anchor.classList.add("menu__link");

        navItem.appendChild(anchor);
        navbarList.appendChild(navItem);

        // Add smooth scroll behavior
        anchor.addEventListener("click", (event) => {
            event.preventDefault();
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
};

/**
 * Add class 'active' to section and nav item when in the viewport
 */
const setActiveSection = () => {
    sections.forEach((section) => {
        const navLink = document.querySelector(`a[href="#${section.id}"]`);
        if (isInViewport(section)) {
            removeActiveClasses();
            section.classList.add("your-active-class");
            navLink.classList.add("active");
        }
    });
};

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
document.addEventListener("DOMContentLoaded", buildNav);

// Scroll to section on link click
// (handled within the buildNav function for smooth scrolling)

// Set sections as active
document.addEventListener("scroll", setActiveSection);