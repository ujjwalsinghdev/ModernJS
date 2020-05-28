// object.create : create prototype

const personPrototype = {
    greeting:function(){
        return `Hello There ${this.firsName} ${this.lastName}`;
    },

    getsMarried:function(newLastName){
        this.lastName = newLastName;
    }
}

const marry = Object.create(personPrototype);

marry.firsName = 'Mary';
marry.lastName ="Williams";
marry.age = 30;
marry.getsMarried('Thomson')


console.log(marry.greeting());

const brad = Object.create(personPrototype,{
    firsName: {value:'Brad'},
    lastName:{value:'Know'},
    age:{value:36}
})


console.log(brad);
console.log(brad.greeting());
