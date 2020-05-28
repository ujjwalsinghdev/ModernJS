// FUNCTION DECLARATIONS

// if we assign value in parameter then it will take it bu default if argument is not passed

function greet(firstName = "Susy", lastName = "Chan") {
  return `Hello ${firstName} ${lastName}`;
}

console.log(greet());

// FUNCTION EXPRESSION

const square = function(x) {
  return x * x;
};

console.log(square(6));

// IMMIDIATLY INVOKABLE FUNCTION EXPRESSION -IIFEs

(function() {
  console.log(`I am from IIFEs`);
})();

(function(name) {
  console.log(`I am from ${name}`);
})("steve");

// when function put inside object called as method
// PROPERTY METHODS

const todo = {
  add: function() {
    console.log(`Add todo`);
  },
  edit: function(id = 1) {
    console.log(`Edit todo ${id}`);
  }
};

todo.delete = function() {
  console.log(`Delete to  do.....`);
};

todo.add();
todo.edit(22);
todo.delete(22);
