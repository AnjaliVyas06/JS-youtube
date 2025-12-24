//Dates



let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());



// console.log(typeof myDate);



// let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toDateString());



let myCreatedDateWTime = new Date(2023, 0, 23,5,3,6);
// console.log(myCreatedDateWTime.toLocaleString());



let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));



let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
//Starts with 0 months...0-11; with+1...1-12;

console.log(`the good day is ${newDate.getDay()} and time is ${newDate.getTime()}`);

newDate.toLocaleString('defult',{
weekday:"long"
})