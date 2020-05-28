// // var, let, const

// var name = "John Doe";

// console.log(name);

// name = "steve johnson";

// console.log(name);

// // Init a variable

// var greeting;

// console.log(greeting);

// greeting = "Hello";

// console.log(greeting);

// // letters,numbers, _, $
// // can not start with number

// var name = "john";

// // multi word vars

// var firstName = "John"; //Camel cas
// var first_name = "John"; //Underscore
// var FirstName = "John"; //Pascal case
// var firstname = "John"; //lower case

// let : similiar to var

// let name = "John Doe";

// console.log(name);

// name = "steve johnson";

// console.log(name);

// const : it cant reassign and compulsory to assign value

const name = "John Doe";

console.log(name);

// name = "steve johnson";

// console.log(name);

// can change data inside object but cannot change object itself
const person = {
  name: "John",
  age: "30"
};

person.name = "Susy";

console.log(person);

const number = [1, 2, 3, 4, 5];

number.push("cat");

console.log(number);
