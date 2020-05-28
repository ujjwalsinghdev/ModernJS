
// // document.getElementsByClassName

// const items = document.getElementsByClassName("collection-item");

// // console.log(items);

// // console.log(items[0]);
// items[0].style.color = 'red';
// items[0].textContent = 'hello';

// const listItem = document.querySelector('ul').getElementsByClassName('collection-item')

// // console.log(listItem);

// // document.getElementsByTagName

// let lis = document.getElementsByTagName("li");

// console.log(lis[0]);

// lis[0].style.color = 'cyan';

// // Convert html collection into array

// lis = Array.from(lis)

// lis.reverse();

// lis.forEach(function(li,index){
//     console.log(li);
//     li.textContent=`${index}:Hello`

// })

// console.log(lis);

// document.querySelectorAll

const items = document.querySelectorAll("ul.collection li.collection-item");

console.log(items);

items.forEach(function(item, index) {
  item.textContent = `${index}:hello`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function(li, index) {
  li.style.background = "#b2b2b2";
});

for (let index = 0; index < liEven.length; index++) {
  liEven[index].style.background = "#c2c2c2";
}
