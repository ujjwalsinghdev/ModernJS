

const person = {
  firstName: "Steve",
  lastName: "Jobs",
  age: 24,
  email: "steve@aol.com",
  hobbies: ["music", "spoorts"],
  address: {
    city: "Miami",
    state: "FL"
  },

  getBirthYear: function() {
    return 2020 - this.age;
  }
};

let val;

val = person;
// get specific value
val = person.firstName;
val = person["firstName"];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();

console.log(val);

const people = [
  { name: "john", age: 30 },
  { name: "mike", age: 23 },
  { name: "mike", age: 23 },
  { name: "mike", age: 23 },
  { name: "mike", age: 23 },
  { name: "mike", age: 23 },
  { name: "Nancy", age: 23 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
