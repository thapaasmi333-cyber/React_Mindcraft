//function multiply(a, b) {
//  return a * b;
//}
//const result = multiply(5, 10);
//console.log(result);

//arrow function
const multiply = (c, d, e) => {
  return c * d * e;
};
const result = multiply(2, 2, 2);
console.log(result);

//function
console.log(greet("bobo"));

function greet(name = "bob") {
  return `hello, ${name}`;
}

//sum with arrow function using no return in 1 line
const sum = (f, g) => f + g;
console.log(sum(10, 11));
