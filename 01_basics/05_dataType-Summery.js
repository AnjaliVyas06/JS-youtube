//Primitive
//7 types : String, Number, Boolean , null , undefinded, symbol
//BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTEmp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);


//reference (non primitive)
//array,object,function

const heros = ["iron man","thor","loki"];
let myObj={
    name : "anjali",
    age :19,
}

const myFunction = function(){
    console.log("Hi!");
}

console.log(typeof anothherid);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive) heap(non-primitve)

let fruit = "guvava";

let anotherFruit = fruit;
anotherFruit = "banana";

console.log(fruit)
console.log(anotherFruit)

let user1 = {
    email:"user@google.com",
    upi:"use2ybl",
}

let user2 = user1

user2.email = "anjali@gmail.com"

console.log(user1.email);
console.log(user2.email);