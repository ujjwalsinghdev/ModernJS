// document.getElementById()
const taskTitle = console.log(document.getElementById('task-title'));


// Get things from the elements

console.log(document.getElementById('task-title').id);


document.getElementById('task-title').style.background="#b2b2b2"
document.getElementById('task-title').style.color="#fff"
document.getElementById('task-title').style.padding="5px"
document.getElementById('task-title').style.border="5px"
// document.getElementById('task-title').style.display="none"

// Change content

document.getElementById('task-title').textContent="I am Task List"
document.getElementById('task-title').innerText="I am InnerText"
document.getElementById('task-title').innerHTML="I am InnerHTML"
document.getElementById('task-title').innerHTML="<span>Hello</span>"


// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector("li").style.color = 'red';
document.querySelector("ul li").style.color = 'blue';

document.querySelector('li:last-child').style.color ='green';

document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(odd)').style.background = 'purple';
document.querySelector('li:nth-child(even)').style.background = 'cyan';



