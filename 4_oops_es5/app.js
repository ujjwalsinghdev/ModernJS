class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello There ${this.firstName} ${this.lastName}`;
  }
}



class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost(){
      return 500;
  }
}


const John = new Customer('John','Doe','555-555-55','Standard')

console.log(John.greeting());

console.log(Customer.getMembershipCost());

