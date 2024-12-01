/**
 * Helper function to determine if a section is in the viewport
 * @param {HTMLElement} section - The section to check
 * @returns {boolean} Whether the section is in the viewport
 */
const isInViewport = (section) => {
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
  
  // Add active class to section in viewport
  const setActiveSection = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add('your-active-class');
      } else {
        section.classList.remove('your-active-class');
      }
    });
  };
  
  // Smooth scrolling to sections
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('menu__link')) {
      event.preventDefault();
      const sectionId = event.target.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
  
  // Event listeners
  document.addEventListener('DOMContentLoaded', () => {
    buildNav();
    document.addEventListener('scroll', setActiveSection);
  });
  