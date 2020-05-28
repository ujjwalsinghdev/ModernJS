
// person constructor

function Person(name,dob){
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calcAge = function(){
        const diff = Date.now()-this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);
    }
    
}


// console.log(this);this is window object because global object


const brad = new Person('brad','9-10-1996')


// const brad = new Person('Brad',30)
// const john = new Person('John',33)

console.log(brad.calcAge());


// console.log(brad);
// console.log(john);
