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
const mainNavUl = document.querySelector("#navbar__list");
const navLinks = document.querySelectorAll('a');
const allSection = document.querySelectorAll(".section")
const inputs = document.querySelectorAll("input")
const form = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone')
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
function createLink(listText, anchorLink) {
    let anchorTag = document.createElement('a');
    anchorTag.href = anchorLink;
    anchorTag.innerHTML = listText;
    return anchorTag;
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */


// build the nav
allSection.forEach(section => {
    let listItem = document.createElement('li');
    let linkListItem = createLink(section.dataset.nav, section.dataset.nav);
    linkListItem.classList.add('menu__link');
    listItem.appendChild(linkListItem)
    mainNavUl.appendChild(listItem)
})


// Add class 'active' to section when near top of viewport
function viewPortMeasure(el) {
    const viewSize = el.getBoundingClientRect();
    return viewSize.top < window.innerHeight * 0.45 && viewSize.bottom > window.innerHeight * 0.45;
}

document.addEventListener('scroll', function () {
    const navBarList = document.querySelectorAll('#navbar__list a');
    allSection.forEach(section => {
        if (viewPortMeasure(section)) {
            console.log("viewport works");
            section.classList.add('your-active-class');
            navBarList.forEach(nav => {
                if (nav.textContent == section.id) {
                    nav.classList.add('active')
                } else {
                    nav.classList.remove('active')
                }
            })
        } else {
            section.classList.remove('your-active-class')
        }
    })
})



// Scroll to anchor ID using scrollTO event
const listTags = document.querySelectorAll('ul a');

// Scroll smooth to section on link click
listTags.forEach(listTag => {
    listTag.addEventListener('click', function (e) {
        //prevent default "jump" from 'a' element
        console.log(listTags);
        e.preventDefault();
        allSection.forEach(section => {
            if (section.id == listTag.getAttribute('href')) {
                section.scrollIntoView({
                    behavior: "smooth",
                    inline: "nearest"
                });
            }
        })
    })
});

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active
// Put alert when someone submit form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputs.value != "") {
        alert(`Thank you ${name.value} filling the information, we have receive your email ${email.value}`)
    } else {
        'You have to fill up your name and email'

    }
})