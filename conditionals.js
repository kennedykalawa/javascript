const x = 1;
const y = 20;

if(x === 10){
    console.log("x is 10");
} else if(x > 10){
    console.log("x is greater than 10");
} 
else{
    console.log("x is not 10");
}

if(x > 5 || y > 10){
    console.log("x is greater than 5 or y is greater than 10");
}

if(x > 5 &&  y > 10){
    console.log("x is greater than 5 or y is greater than 10");
}

//teneray operator
const color = y > 10 ? "green" : "blue";
console.log(color);

switch (color) {

    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("color is not red or blue");
        break;
}
