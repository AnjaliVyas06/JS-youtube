
const myArr = [0,1,2,3,4,5];

//Array's Methods

// myArr.push(6)
// // myArr.push(7)
// myArr.pop(6)
// myArr.push(7)

// myArr.unshift(0);
// myArr.shift();


console.log(myArr.includes(9)) //gives you the true and false answers
console.log(myArr.indexOf(9)) 


const newArr = myArr.join();
 console.log (myArr);
 console.log(newArr);

 //SLICE AND SPLICE

console.log("A ", myArr); //Og

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr); //with Slice

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr); //with Splice
console.log(myn2);