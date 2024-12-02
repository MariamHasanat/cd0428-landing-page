/**
 * Helper function to determine if a section is in the viewport
 * @param {HTMLElement} section - any section is html element
 * @returns {boolean} - any function will return a boolean value 
 */
const isInViewPort = (section) => {
    const box = section.getBoundingClientRect();
    return box.top <= 150 && box.bottom >= 150;
};

// Build the navigation menu
const buildNav = () => {
    const navList = document.getElementById('navbar__list');
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
        const navItem = document.createElement('li');
        navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        navList.appendChild(navItem);
    });
};

// Add active class to section and navigation link in viewport
const makeActive = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu__link');

    sections.forEach((section, index) => {
        const navLink = navLinks[index]; // Get the corresponding navigation link

        if (isInViewPort(section)) {
            section.classList.add('your-active-class');
            navLink.classList.add('active-link'); // Highlight the corresponding nav link
        } else {
            section.classList.remove('your-active-class');
            navLink.classList.remove('active-link'); // Remove highlight from inactive links
        }
    });
};

// Smooth scrolling to sections
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('menu__link')) {
        event.preventDefault();
        const sectionID = event.target.getAttribute('href').substring(1); // Remove the # from the ID
        const section = document.getElementById(sectionID);
        section.scrollIntoView({ behavior: 'smooth' });
    }
});

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    buildNav();
    document.addEventListener('scroll', makeActive);
});