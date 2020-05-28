// document.querySelector(".clear-tasks").addEventListener("click", function(e) {
//   e.preventDefault();
//   document.querySelector(".collection").remove();
//   console.log("hello");
// });

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  let val;

  val = e;

  // Element target element

  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = "hello";

  //   EVENT TYPE
  val = e.type;
  val = e.timeStamp;

  //   coordinate event relative to window

  val = e.clientY;

  //   coordinate relative to element itself

  val = e.offsetY;
  val = e.offsetX;

  console.log(val);

  //   console.log("hello i have been clicked");
}
