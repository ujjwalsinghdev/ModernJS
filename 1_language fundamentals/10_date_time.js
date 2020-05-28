let val;

const today = new Date();

let birthdate = new Date("9-10-1981 11:20:00");
// birthdate = new Date('September 10 1981');
// birthdate = new Date('21/01/2000');
// val = birthdate;

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMilliseconds();

birthdate.setMonth(1);
birthdate.setDate(12);
birthdate.setFullYear(2000);
birthdate.setHours(3);

birthdate.setMinutes(20);

console.log(birthdate);
