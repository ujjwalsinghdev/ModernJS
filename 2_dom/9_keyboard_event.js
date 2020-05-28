const form = document.querySelector("form");

const taskInput = document.getElementById("task");

const heading = document.querySelector("h5");

const select = document.querySelector("select");

// Clear Input
taskInput.value = "";

// form.addEventListener("submit", runEvent);

// taskInput.addEventListener(`keydown`, runEvent);
// taskInput.addEventListener(`keyup`, runEvent);
// taskInput.addEventListener(`keypress`, runEvent);
// taskInput.addEventListener(`focus`, runEvent);
// taskInput.addEventListener(`blur`, runEvent);
// taskInput.addEventListener(`cut`, runEvent);
// taskInput.addEventListener(`copy`, runEvent);
// taskInput.addEventListener(`paste`, runEvent);
// taskInput.addEventListener(`input`, runEvent);
// CHANGE EVENT

select.addEventListener("change", runEvent);

function runEvent(e) {
  console.log(`${e.type}`);

  // Get input value
  // console.log(taskInput.value);

  // console.log(e.target.value);

  // heading.innerText = e.target.value;

  e.preventDefault();
}
