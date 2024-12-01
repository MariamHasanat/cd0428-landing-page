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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
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
const isInViewport = (section) => {
    const box = section.getBoundingClientRect();
    return box.top <= 150 && box.bottom >= 150;
};

const removeActiveClasses = () => {
    sections.forEach((section) => section.classList.remove("your-active-class"));
    const navLinks = document.querySelectorAll(".menu__link");
    navLinks.forEach((link) => link.classList.remove("active"));
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
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

// Scroll to section on link click

// Set sections as active


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


