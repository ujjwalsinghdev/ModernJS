//string

const name1 = "Jeff";
const name2 = new String("Jeff");

name2.foo = "bar";

console.log(typeof name1);
console.log(typeof name2);

if (name2 === "Jeff") {
  console.log(`Yes`);
} else {
  console.log(`No`);
}

// Number

const num1 = 5;

const num2 = new Number(5);

console.log(typeof num1);
console.log(typeof num2);

// boolean

const bool1 = true;

const bool2 = new Boolean(true);

console.log(typeof bool1);
console.log(typeof bool2);

// function

const getSum1 = function(x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return");

console.log(getSum1(1, 1));
console.log(getSum2(1, 1));
// object

const john = { name: "john" };

const john2 = new Object({ name: "John" });
console.log(john);
console.log(john2);


// array

const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(typeof arr1);
console.log(typeof arr2);

// Regular Expression

const re1 = /\w+/;
const re2 = new RegExp('\\w+')

console.log(re1);
console.log(re2);



