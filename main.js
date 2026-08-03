//ARRAYS- Variables that hold Multiple values

const fruits = ["apples", "mangoes", "oranges"];
console.log(fruits[1])

fruits[3] = 'grapes';
fruits.push('pears');
fruits.unshift('strawberries');
fruits.pop();

console.log(Array.isArray("hello"));

console.log(fruits.indexOf("oranges"));

console.log(fruits);
