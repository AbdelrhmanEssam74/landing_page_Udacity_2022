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
//all Section
const mySection = document.querySelectorAll("section");
//ul
const ul = document.getElementById("navbar__list");
//fragment
const frag = document.createDocumentFragment();
/*End Global Variables*/

// now i create the navbar
mySection.forEach((sec) => {
  //create the li element
  const li = document.createElement("li");
  li.innerHTML = `<a href = "#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a>`;
  frag.appendChild(li);
});
ul.appendChild(frag);

//get the navbar element a
const navbarLinks = document.querySelectorAll("#navbar__list a");
//when we clink on the navbar link will go to the section smoothly
//add event click
navbarLinks.forEach((element) =>
  element.addEventListener("click", navbarLinkClick)
);
//create a funcion smooth scroll
function navbarLinkClick(event) {
  smoothScroll(event); //call smoothScroll function
}
//smooth Scrolling function
function smoothScroll(event) {
  event.preventDefault();
  //get Attribute herf
  const secId = event.currentTarget.getAttribute("href");
  //using windo.onscroll() method
  window.scrollTo({
    top: document.querySelector(secId).offsetTop,
    behavior: "smooth",
  });
}
//button to go to the top of the page
//get the button element
const btn = document.querySelector(".up");
//using windo.onscroll() method
document.onscroll = () => {
  if (this.scrollY >= 460) {
    //add className to the butoon "show"
    btn.classList.add("show");
  } else {
    //remove className to the butoon "show"
    btn.classList.remove("show");
  }
};
//then click on the button to go to the top of page
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Set sections as active
//show the action section
window.onscroll = () => {
  mySection.forEach((active) => {
    const rect = active.getBoundingClientRect();
    //get data-nav li attribute
    const activeLi = document.querySelector(`[data-nav=${active.id}]`);
    if (rect.top >= -200 && rect.top <= 200) {
      //add className "your-active-class" to the active Section && "active-link" to the active link
      active.classList.add("your-active-class");
      activeLi.classList.add("active-link");
    } else {
      //remove className "your-active-class" from the active Section && "active-link" from the active link
      active.classList.remove("your-active-class");
      activeLi.classList.remove("active-link");
    }
  });
};
