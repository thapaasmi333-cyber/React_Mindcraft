console.log("Hello,World");

// the value can be re assigned in let
let a = 5;
a = 10;

console.log("THe value of a is:" + a);
console.log(`the value of a is: ${a} `); //template neutral

// the value cannot be reassigned in const

const isTrue = true;
console.log(typeof isTrue);

let name;
let age = null;
console.log(name);
console.log(age);

console.log(typeof name);
console.log(typeof age);

let age1 = "5";
let age2 = 5;
console.log(age1 == age2); //lose euality
console.log(age1 === age2); //strict equality

//ternary operator
let age3 = 18;
age3 = age3 >= 18 ? "Your are an adult." : "You are a minor";
console.log(age3);

//Task Day1
//Variable declare using const and let
const name1 = "Asmi Thapa";
let age4 = 21;
const email = "asmithapa67@gmail.com";
const isAdmin = false;
const favoriteNumber = 7;
let address = null;

// Template
const summary = `
Name: ${name1}
Age: ${age4}
email: ${email}
AdminStatus: ${isAdmin ? "Yes" : "No"}
FavoriteNumber: ${favoriteNumber}
Address: ${address || "Not provided"};`;

console.log(summary);

//Computations
const ageInMonths = age4 * 12;
const ageInDaysApprox = age4 * 365;

const canVote = age4 >= 18 && "Yes, eligible to vogte";
const isEven = favoriteNumber % 2 === 0 || "No, it is odd";

console.log(`Age in months: ${ageInMonths}`);
console.log(`Approximate age in days: ${ageInDaysApprox}`);
console.log(`Can vote: ${canVote || "No, under 18"}`);
console.log(`Is favorite number even? ${isEven}`);
