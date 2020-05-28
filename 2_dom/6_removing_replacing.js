// Replace elements

// create element

const newHeading = document.createElement("h2");

// Add id

newHeading.id = "task-title";

newHeading.appendChild(document.createTextNode("THIS IS NEW"));

// get old heading

const oldHeading = document.getElementById("task-title");
// console.log(oldHeading);

// Parent

const cardAction = document.querySelector(".card-action");
// console.log(cardAction);

// Replace

cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT

const lis = document.querySelectorAll("li");

const list = document.querySelector("ul");

// Remove list item

lis[0].remove();
// lis[1].remove();
// lis[2].remove();
// lis[3].remove();
// lis[4].remove();

// remove child element

list.removeChild(lis[2]);

// CLASSES AND ATTRIBUTE

const firstLi = document.querySelector("li:first-child");

const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];
val = link.classList.add("test");
val = link.classList.remove("test");


// Attributes


val = link.getAttribute('href');
val = link.setAttribute('href','www.google.com');
val = link.hasAttribute('title')

link.setAttribute('title','Google')

console.log(val);

// console.log(newHeading);
