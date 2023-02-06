console.log("object using literal");
const person={
      firstName:"kirti",
      lastName:"sargar",
      age:23,
      eyeColor:"blue",
       fullName:function(){
            return this.firstName+" "+this.lastName;
       }
};
console.log(person);
console.log("To create a empty object and then adds properties");
const persons={};
persons.firstName="John";
persons.lastName="Doe";
persons.age=60;
console.log(persons);
