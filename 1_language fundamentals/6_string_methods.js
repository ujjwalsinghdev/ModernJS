const firstName = "William";
const lastName = "Johnson";
const age = 44;

const str = ['Hello there how are you']

const tag = 'web dev , web design, ui ux'

let val;

// val = firstName + lastName;

// // concatenation

// val = firstName + " " + lastName;

// // append

// val = "John ";
// val += "Lennon";

// val = "My name is " + firstName + " my age is " + age;

// // escaping

// val = "That's awesome man";

// // length

// val = firstName.length;

// // concat

// val = firstName.concat(" ", lastName);

// // change case

// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[0];

// // indexOf()

// val = firstName.indexOf("W");

// console.log(val);

// // charAt()

// val = firstName.charAt(2);

// get last char

val = firstName.charAt(firstName.length-1);

val = firstName.substring(0,4);

val = firstName.slice(0,4)
val = firstName.slice(-3)

val = firstName.split('')

val = firstName.replace("William","Jack")


val = str.includes("hello")

console.log(val);
console.log(str);
console.log(tag);

