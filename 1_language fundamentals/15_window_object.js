// window is global object in client side javascript

// WINDOW METHODS/OBJECTS/PROPERTIES

// window.console.log("Hello");

// Alert

// window.alert("Hello World")

// Prompt: use to take input

// const input = prompt();
// alert(input)

// CONFIRM

// if (confirm("are you sure")) {
//   console.log(`yes`);
// }

let val;

// outer height and width

val = window.outerHeight;
val = window.outerWidth;

// Scroll points

val = window.scrollY;
val = window.scrollX;

// Location object

val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect

// window.location.href='http://google.com';
// window.location.reload();

// History Object

// window.history.go(-1);

// val = window.history.length;

// NAVIGATOR OBJECT

val = window.navigator; 
val = window.navigator.appName; 
val = window.navigator.appVersion; 
val = window.navigator.userAgent; 
val = window.navigator.platform; 
val = window.navigator.vendor; 
val = window.navigator.language; 


console.log(val);
