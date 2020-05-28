// Primitive Data Types:stored directly in the location the variable access.Stored on Stack
// Reference Data Types:access by reference, Object are stored on the heap, A pointer to a location in memory.

//6 PRIMITIVE DATA TYPES

// String
// Number
// Boolean
// Null
// Undefined
// Symbols(ES6)

// REFERENCE TYPES

// Array
// Object Literals
// Function
// Dates
// Anything Else

// Dynamically Type: means the data type associated with actual value not the variable itself.

// Statically Typed: Java, C#, C++

// superset(JS+more) of JS allowed static typed: TypeScript, Flow

// PRIMITIVE
// String
const name = "John Doe";
// Number
const number = 122;
// Boolean
const hasKids = true;
// Null
const car = null; //null is primitive type but it return object which is mistake done by JS dev
// Undefined
let test = undefined;
// Symbol
const sym = Symbol();

// console.log(typeof name);
// console.log(typeof number);
// console.log(typeof hasKids);
// console.log(typeof car);
// console.log(typeof test);
// console.log(typeof sym);

// REFERENCE TYPES

// Array
const emoji = ["😎"];

const fruits = ["apple", "orange", "pear"];

// Object literals

const address = {
  city: "Boston",
  state: "MA"
};

const today = new Date();

console.log(typeof emoji);
console.log(typeof fruits);
console.log(typeof address);
console.log(typeof today);

// console.log(typeof emoji);
// console.log(typeof fruits);
