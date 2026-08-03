// you can use var, let, const to assign variables
/*console.log("Hello Ktec!");
let a, b, c;
a = 5;
b = 10;
c = (a+b);
b = (c*a);

console.log(c);
console.log(b);
*/ 
// Strings Number Boolean Null Undefined

const name = "John";
const age = 20;
const rating = 7.5;
const iscool = true;
const x = null;
const y = undefined;
let z;

//console.log(typeof iscool);

//Concatenation
 // the old way
console.log("My name is " + name + "and I am " + age );
 /* new way or template String
  * here we use back ticks (``) 
  * and also you can assign it as a */
console.log(`My name is ${name} and I am ${age}`);
const hello = (`My name is ${name} and I am ${age}`);
console.log(hello);

//String Properties and methonds
const s = "Hello Ktec!";
console.log(s.toUpperCase().substring(0, 5));
//console.log(s.split(''))
