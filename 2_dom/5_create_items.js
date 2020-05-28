// create element

const li = document.createElement("li");

// add class

li.className = "collection-item";

// add id
li.id = "new-item";

// Add attribute

li.setAttribute('title','New Item')

// create text node and append

li.appendChild(document.createTextNode('Hello World'));

document.querySelector('ul.collection').appendChild(li);

// create new link

const link = document.createElement('a');

// add class

link.className = "delete-item secondary-content";

// Add icon html

link.innerHTML =`<i class="fa fa-remove"></i>`

li.appendChild(link)


console.log(link);

console.log(li);


