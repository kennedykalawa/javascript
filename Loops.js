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

/* //FOR LOOP 
for(let i=0; i < 10; i++){
    console.log(`for loop number: ${i}`);
}
//while 
let i = 0;
while (i < 10){
    console.log(`while loop number: ${i}`);
    i++;
} */ 

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}
/*for (let todo of todos){
    console.log(todos[1].text);
} */

//forEach, map, filter 
 //forEach
todos.forEach(function(todo){
    console.log(todo.text);
});
//map 
const todoId = todos.map(function(todo){
    return todo.id;
});

console.log(todoId);
//filter 
const todoC = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoC);


