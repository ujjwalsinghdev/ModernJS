let val = 5;

// Number to string

val = String(5555);

val = String(4 + 4);

// Boolean to string

val = String(true);

val = String(new Date());

// Array to string

val = String([1, 2, 3, 4, 5, 6]);

// toString()

val = (5).toString();

// STRINGS TO NUMBER

val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("Hello"); // returen NaN when value get parsed but it cant

val = parseInt("100.2022020010203300302");
val = parseFloat("100.2022020010203300302");

// TYPE COERCION

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);

// Output

console.log(val);
console.log(typeof val);
//console.log(val.length); //only works on string
console.log(val.toFixed());

// let newval = val.toString();

// console.log(newval);
// console.log(typeof newval);
// console.log(newval.length);
