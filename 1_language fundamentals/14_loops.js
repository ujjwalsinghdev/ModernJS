// FOR LOOP
// i++ means i=i+1
// continue: stops iteration without reading further and go back initial
// break : break out the loop

for (let index = 0; index <= 10; index++) {
  console.log(`Number ${index}`);
}

for (let index = 0; index <= 10; index++) {
  if (index===2) {
    console.log(`${index} is my fav number`);
    continue;
  }
  console.log(index);
}

for (let index = 0; index <= 10; index++) {
    if (index===2) {
      console.log(`${index} is my fav number`);
      break;
    }
    console.log(index);
  }

// WHILE LOOP:use when you dont know how many loop are going to be there

// let index = 0;

// while (index < 10) {
//   console.log(`I am from while loop number ${index}`);
//   index++;
// }

// DO WHILE LOOP

// let index = 0;

// do {
//   console.log(`Number ${index}`);
//   index++;
// } while (index < 10);

// LOOP THROUGH ARRAY
const cars = ["Ford", "Honda", "Chevy", "Toyota", "Merc"];

// for (let index = 0; index < cars.length; index++) {
//   console.log(cars[index]);
// }

// FOREACH

cars.forEach(function(car, index, array) {
  console.log(`${index}:${car}`);
  console.log(array);
});

// MAP : return a diff array

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Jara" },
  { id: 4, name: "Carry" },
  { id: 5, name: "Marry" }
];

const ids = users.map(function(user) {
  return user.id;
});

console.log(ids);

// FOR IN LOOP

const newusers = {
  firstName: "John",
  lastName: "Doe",
  age: 40
};

for (let x in newusers) {
  console.log(`${x}: ${newusers[x]}`);
}
