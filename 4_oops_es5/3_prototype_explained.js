// each object has prototype Object.prototype
// Person.prototype

function Person(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calcAge = function(){
    //     const diff = Date.now()-this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear()-1970);
    // }
    
}


// Calculate age

Person.prototype.calcAge = function(){
    const diff = Date.now()-this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970);
}

// get full name

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

// get married

Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

const john = new Person('John','Doe','8-12-1990')
const marry = new Person('Marry','Jarry','8-02-1910')

console.log(marry);
console.log(john.calcAge());
console.log(marry.getFullName());

marry.getsMarried('Smith')

console.log(marry.getFullName());


console.log(marry.hasOwnProperty('firstName'));
console.log(marry.hasOwnProperty('getFullName'));
