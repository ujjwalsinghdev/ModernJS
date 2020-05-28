// set local storage:stay untill manually clear
// session storage: delete when browser cleared

// localStorage.setItem("name", "John");
// localStorage.setItem("age", "23");

// session storage
// localStorage.setItem('name','Beth')

// remove from storage

// localStorage.removeItem('name')

// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");

// console.log(name);
// console.log(age);

// clear

// localStorage.clear();

document.querySelector("form").addEventListener("submit", function(e) {
  const task = document.getElementById("task").value;

  let tasks;

  if(localStorage.getItem('tasks')===null){
      tasks = [];
  }

  else{
      tasks = JSON.parse(localStorage.getItem('tasks'));
  }


  tasks.push(task)

  localStorage.setItem("tasks", JSON.stringify(tasks));

  alert("Task save");

  e.preventDefault();
});


