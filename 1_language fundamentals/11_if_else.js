// = assignment
// == comparison
// === comparison on value and type

const id = 100;

// //EQUAL TO

// if (id == 100) {
//   console.log("correct");
// } else {
//   console.log("Incorrect");
// }

// // NOT EQUAL TO
// if (id !== 100) {
//   console.log("correct");
// } else {
//   console.log("Incorrect");
// }

// // EQUAL TO VALUE AND TYPE

// if (id === 100) {
//   console.log("correct");
// } else {
//   console.log("Incorrect");
// }

// if(typeof id !== 'undefined'){
//     console.log(`the is id is ${id}`);

// }

// else{
//     console.log(`No id`);

// }

if (id >= 200) {
  console.log(`correct`);
} else {
  console.log(`incorrect`);
}

// IF ELSE

const color = "magenta";

if (color === "red") {
  console.log("Color is red");
} else if (color === "blue") {
  console.log("Color is blue");
} else {
  console.log("color is not found");
}

// LOGICAL OPERATOR

const name = "Steve";
const age = 20;

// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is adult`);
}

//OR ||

if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for race`);
}

// TERNIARY OPERATOR
console.log(id === 100 ? "correct" : "incorrect");

// WITHOUT BRACES

if (id === 100) console.log(`correct`);
else console.log(`incorrect`);
