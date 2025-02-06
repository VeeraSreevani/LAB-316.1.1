console.log("Good")
// Menu data structure
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];

//Part 1: Getting Started

//1)Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");

//2)Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)';


//3)Set the content of mainEl to <h1>DOM Manipulation</h1>.
// mainEl.innerText = "<h1>DOM Manipulation</h1>";
const h1 = document.createElement('h1');
h1.textContent = 'DOM Manipulation';
mainEl.appendChild(h1);

//Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

//*************************************************/

//PART 2: Creating a Menu Bar

//2.1)Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");
console.log(topMenuEl);

//2.2)Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%" ;

//2.3)Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//2.4) Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

//********************************************************/
//PART 3: Adding Menu Buttons

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

//3.1)Iterate over the entire menuLinks array and for each "link" object:
// 3.2)Create an <a> element.
// 3.3) On the new element, add an href attribute with its value set to the href property of the "link" object.
// 3.4)Set the new element's content to the value of the text property of the "link" object.
// 3.5)Append the new element to the topMenuEl element.

menuLinks.forEach(link => {
    const a = document.createElement("a");
    a.setAttribute("href", link.href);
    a.textContent = link.text;
    topMenuEl.appendChild(a);
  });

// #####################################################################
// R-ALAB 316.3.1: DOM Manipulation (Part Two)

//Part 3: Creating the Submenu
//3.1)Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
//3.2)Set the height subMenuEl element to be "100%".
//3.3) Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
//3.4) Add the class of flex-around to the subMenuEl element.

const subMenuEl = document.getElementById("sub-menu");
// subMenuEl.style.display = "none"; 
subMenuEl.style.height = " 100%";
subMenuEl.style.backgroundColor =  'var(--sub-menu-bg)';
subMenuEl.classList.add("flex-around");

//Set the CSS position property of subMenuEl to the value of absolute.
//Set the CSS top property of subMenuEl to the value of 0.

subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0" ; 

console.log(subMenuEl);

//Part 4: Adding Menu Interaction***********
//4.1) Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
//4.2) Attach a delegated 'click' event listener to topMenuEl.
// 4.2.1)The first line of code of the event listener function should call the event object's preventDefault() method.
// 4.2.2) The second line of code of the function should immediately return if the element clicked was not an <a> element.
// 4.2.3) Log the content of the <a> to verify the handler is working.
// const topMenuEl = document.getElementById("top-menu");
const topMenuLinks = document.querySelectorAll('a');

topMenuEl.addEventListener("click", function(e){
    e.preventDefault();
    if(e.target.tagName.toLowerCase() !== 'a') return;
    console.log(e.target.textContent);

   // Remove the 'active' class from all the <a> elements in topMenuLinks
  topMenuLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Toggle the 'active' class on the clicked <a> element
  // Add 'active' if not already present, otherwise remove it
  e.target.classList.toggle('active');

  // Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
  // If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
  // Otherwise, set the CSS top property of subMenuEl to 0.
  let linkObject = menuLinks.find(link => link.text.trim().toLowerCase() === e.target.textContent.trim().toLowerCase() && e.target.textContent.trim().toLowerCase() !== "about");
  // Ensure that clicking CATALOG, ORDERS, etc. shows the submenu bar, and that clicking them again hides it. Clicking ABOUT should not show the submenu bar.
  if(!e.target.classList.contains("active") || e.target.textContent.trim().toLowerCase() === "about")
  {
    subMenuEl.style.top = 0;
    mainEl.innerHTML =`<h1>${e.target.textContent}</h1>`;
  }
  else
  {
    if(linkObject && linkObject.subLinks)
      {
        subMenuEl.style.top = "100%";
        buildSubmenu(subMenuEl,linkObject.subLinks);
      }
  }
}); //end of topMenuEl eventListener

// Part 5: Adding Submenu Interaction
//The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu that does the following:
//1) Clear the current contents of subMenuEl.
//2) Iterate over the subLinks array, passed as an argument, and for each "link" object:
// a)Create an <a> element.
// b)Add an href attribute to the <a>, with the value set by the href property of the "link" object.
// c)Set the element's content to the value of the text property of the "link" object.
// d)Append the new element to the subMenuEl.

function buildSubmenu(subMenuEl, subLinks)
{
    subMenuEl.innerHTML = "";
    subLinks.forEach(link=>{
        const a = document.createElement("a");
        // element.setAttribute(attributeName, value);
        a.setAttribute('href',link.href); // eg:<a href="/catalog">Catalog</a>
        a.textContent = link.text.toUpperCase();
        subMenuEl.appendChild(a);
});
// Attach a delegated 'click' event listener to subMenuEl.
  // The first line of code of the event listener function should call the event object's preventDefault() method.
  // The second line of code within the function should immediately return if the element clicked was not an <a> element.
  // Log the content of the <a> to verify the handler is working.
  // Next, the event listener should set the CSS top property of subMenuEl to 0.
  // Remove the active class from each <a> element in topMenuLinks.
  // Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
  // If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
  subMenuEl.addEventListener("click", (e) =>{
    e.preventDefault();
    if(e.target.tagName.toLowerCase() !== "a"){return;}
    console.log("e value---"+e.target);
    subMenuEl.style.top = 0;
    topMenuLinks.forEach(aElement => aElement.classList.remove("active"));
    mainEl.innerHTML =`<h1>${e.target.textContent}</h1>`;
  });
}