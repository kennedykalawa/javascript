//ARRAYS- Variables that hold Multiple values

const fruits = ["apples", "mangoes", "oranges"];
console.log(fruits[1])

fruits[3] = 'grapes';
fruits.push('pears');
fruits.unshift('strawberries');
fruits.pop();

//console.log(Array.isArray("hello"));

//console.log(fruits.indexOf("oranges"));

//console.log(fruits);



//OBJECT LITERALS
const person = {
     firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

//console.log(person.firstName, person.lastName);

/*const{ firstName, lastName, address: { city }} = person;

console.log(firstName);
console.log(city);
*/

const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true 
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true
    },
    {
        id: 3,
        text: "Dentist appt",
        isCompleted: false 
    }
];

console.log(todos[1]);

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);
