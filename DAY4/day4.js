const person = {
  firstname: "John The Don",
  lastname: "JI",
  age: "50",
  eyecolur: "brown",
  professional: {
    //Double object
    tittle: "Software Enginner",
    comapny: "My Tech",
    experience: 5,
  },
};
console.log(person);
const firstname = person.firstname;
const lastname = person.lastname;
const age = person.age;
const eyecolur = person.eyecolur;

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.eyecolur);

//changing the value
person.professional.experience = 15;
console.log(person.professional.experience);

//function
const calculator = {
  brand: "Casio",
  price: "1000",
  add: function (a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  },
};

console.log(calculator.multiply(5, 5));

//using this
const people = {
  fname: "Rani",
  lname: "Mukhurji",
  fullname: function () {
    return this.fname + " " + this.lname;
  },
};
console.log(people.fullname());
