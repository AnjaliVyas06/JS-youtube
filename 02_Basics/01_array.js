const myArr = [0, 1, 2, 3, 4, 5];

//Array's Methods

// myArr.push(6)
// // myArr.push(7)
// myArr.pop(6)
// myArr.push(7)

// myArr.unshift(0);
// myArr.shift();

// console.log(myArr.includes(9)) //gives you the true and false answers
// console.log(myArr.indexOf(9))

// const newArr = myArr.join();
//  console.log (myArr);
//  console.log(newArr);

//SLICE AND SPLICE

// console.log("A ", myArr); //Og

// const myn1 = myArr.slice(1, 3);
// console.log(myn1);
// console.log("B ", myArr); //with Slice

// const myn2 = myArr.splice(1, 3);
// console.log("C ", myArr); //with Splice
// console.log(myn2);

const marvelHeros = ["thor", "Ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

// marvelHeros.push(dcHeros) //index [1,2,[3]]

// console.log(marvelHeros)
// console.log(marvelHeros[3][1])

// const allHeros = marvelHeros.concat(dcHeros) //index with [1,2,3]
// console.log(allHeros);

// const allNewHeros = [...marvelHeros,...dcHeros] //similar as concat just using for more than 2 values
// console.log(allNewHeros);

// const arr = [1, 2, 3,[4, 5, 6], 7, [6, 7,[4, 5]]];
// const realArr = arr.flat(Infinity);
// console.log(realArr);

console.log(Array.isArray("anjali"));//to ask is array?
console.log(Array.from("anjali"));
console.log(Array.from({name:"Anjali"}));//IMP

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));