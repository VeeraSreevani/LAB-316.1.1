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
const topMainEl = document.getElementById("top-menu");
console.log(topMainEl);

//2.2)Set the height of the topMenuEl element to be 100%.
topMainEl.style.height = "100%" ;

//2.3)Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMainEl.style.backgroundColor = 'var(--top-menu-bg)';

//2.4) Add a class of flex-around to topMenuEl.
topMainEl.classList.add("flex-around");

//********************************************************/
//PART 3: Adding Menu Buttons

var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

//3.1)Iterate over the entire menuLinks array and for each "link" object:

    for(let i=0; i<menuLinks.length; i++)
    {
        const link = menuLinks[i];
        console.log(`Text: ${link.text}, Href: ${link.href}`)
    }
// menuLinks.forEach(link => {("top-menu")
//     console.log(`Text: ${link.text}, Href: ${link.href}`);
// });

// 3.2)Create an <a> element.
// 3.3) On the new element, add an href attribute with its value set to the href property of the "link" object.
// 3.4)Set the new element's content to the value of the text property of the "link" object.
// 3.5)Append the new element to the topMenuEl element.
// function link(menuLinks){
//     const a = document.createElement("a");
//         a.textContent = link.text;
//         a.setAttribute ("href", link.href); 
//         a.setAttribute("target", "_blank");
//         topMainEl.appendChild (a);}


    const a = document.createElement("a");
        a.textContent = "ABOUT";
        a.setAttribute ("href", "https://www.about.com"); 
        a.setAttribute("target", "_blank");
        topMainEl.appendChild (a);

    const b = document.createElement("a");
        b.textContent = "Catalog";
        b.setAttribute ("href", "https://www.catalog.com");
        b.setAttribute("target", "_blank");
        topMainEl.appendChild (b);

    const c = document.createElement("a");
        c.textContent = "orders";
        c.setAttribute ("href", "http://127.0.0.1:5500/Module-316/ALAB-316.1.1/pages/orders.html");
        c.setAttribute("target", "_blank");
        topMainEl.appendChild (c);

    const d = document.createElement("a");
        d.textContent = "account";
        d.setAttribute ("href", "http://127.0.0.1:5500/Module-316/ALAB-316.1.1/pages/account.html");
        d.setAttribute("target", "_blank");
        topMainEl.appendChild (d);