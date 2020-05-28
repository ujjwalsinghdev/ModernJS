// 1 - Element
// 2 - Attribute
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

let val;

const list = document.querySelector("ul.collection");

const listItem = document.querySelector("li.collection-item:first-child");

val = list;
val = listItem;

// Get child  nodes

// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;
val = list.children[1].textContent = "hellpo";

val = list.children[3].children[0];

val = list.firstChild;
val = list.firstElementChild;

// last child;
val = list.lastElementChild;

val = list.childElementCount;

// get parentnode

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get next sibling

val = listItem.nextElementSibling;

val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.previousElementSibling;

console.log(val);
