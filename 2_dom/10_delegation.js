// PUT THE SELECTOR ON BODY AND TARGET ELEMENT BY IF-ELSE 

// EVENT BUBBLING AND EVENT DELEGATION

// document.querySelector('.card-title').addEventListener('click',function(){
//   console.log('card-title');

// })

// document.querySelector('.card-content').addEventListener('click',function(){
//   console.log('card-content');

// })

// document.querySelector('.card').addEventListener('click',function(){
//   console.log('card');

// })

// document.querySelector('.col').addEventListener('click',function(){
//   console.log('col');

// })

// EVENT DELEGATION

// const delItem = document.querySelector(".delete-item");

// delItem.addEventListener("click", deleteItem);

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  e.preventDefault();
  // console.log(`delete`);
  // console.log(e.target);

  // if (e.target.parentElement.className === "delete-item secondary-content") {
  //   console.log(`you have clicked right delete`);
  // }

  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log(`you have clicked right delete`);
    e.target.parentElement.parentElement.remove();
  }
}
