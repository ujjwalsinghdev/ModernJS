const num1 = 100;
const num2 = 50;

let val;

val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math object: means Math have properties and methods
// Method: function inside of object

val = Math.PI;
val = Math.E;
val = Math.round(2.892898989);
val = Math.ceil(2.892898989); //up
val = Math.floor(2.892898989); //down
val = Math.sqrt(2.892898989);
val = Math.abs(-2.892898989);
val = Math.pow(2, 2);
val = Math.min(2, 33, 22, 11, -2, 3, 4, 5, 5, 6, 7, 7, 7);
val = Math.max(2, 33, 22, 11, 2, 3, 4, 5, 5, 6, 7, 7, 7);
val = Math.random();
val = Math.random() * 20; //range 0-19
val = Math.floor(Math.random() * 20); //range 0-19 whole number

console.log(val);
