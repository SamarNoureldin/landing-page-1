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

// navigation global var
const navigats = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navigatBuilder = () => {

    let navSA = '';
    // looping over all sections
    sections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navSA += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

    });
    // append all elements to the navigation
    navigats.innerHTML = navSA;


};

navigatBuilder();

// Add class 'active' to section when near top of viewport

// getting the largest value that's less or equal to the number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
// adding the active class
const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        //add css to make the scrolling clear to the viewer 
        section.style.cssText = "background-color: #5353c6";
    };
};

//implementating the function

const sectionActivation = () => {
    sections.forEach(section => {
        // working on the offset function 
        const elementOffset = offset(section);
     //working on the condition of the addactive function
        inviewport = () => elementOffset < 100 && elementOffset >= -100;

        removeActive(section);
        addActive(inviewport(),section);
    });
};

window.addEventListener('scroll' ,sectionActivation);
 

// Scroll to anchor ID using scrollTO event

const scrolling = () => {
//creat new variable to store all the links by using querySelectorAll because it's more than one element
    const links = document.querySelectorAll('.navbar__menu a');
    //start to looping by the 'for each loop'
    links.forEach(link => {
        link.addEventListener('click', () => {
            //loop all the sections and add the scrolling effect 
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });

};

scrolling();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active