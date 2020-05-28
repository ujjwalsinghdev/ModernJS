// Person constructor

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // greeting
  
  Person.prototype.greeting = function(){
      return `Hello There ${this.firstName} ${this.lastName}`
  }
  
  const person1 = new Person('John','Doe');
  
  // console.log(person1.greeting());
  
  // Customer CONSTRUCTOR
  
  
  function Customer(firstName,lastName,phone,membership){
  
      Person.call(this,firstName,lastName);
      this.phone = phone;
      this.membership = membership;
  
  }
  
  
  // Inherit the person prototype method
  
  Customer.prototype = Object.create(Person.prototype);
  
  // make customer.prototype return customer()
  
  Customer.prototype.constructor = Customer()
  
  // Create customer
  
  const customer1 = new Customer('Tom','Smith','555-5555','Standard')
  
  console.log(customer1);
  
  
  // customer
  
  Customer.prototype.greeting = function(){
      return `Welcome to our company ${this.firstName} ${this.lastName}`
  
  }
  
  console.log(customer1.greeting());
  
  
  