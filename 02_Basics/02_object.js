//Singleton
//=define as literals not a singleton
//=using constructor so it will be singleton

//object literals
//Object.create // through constructor

const mySym = Symbol("key1");

const jsUser = {
  name: "Anjali",
  "full Name":"Anjali Vyas",//Can't use with the dot(.) oprator
  [mySym]:"myKey1",
  age:18,
  location:"Ahm",
  email:"Anj123@mail.com",
  isLoggedin:false,
  lastLoginDays:["Monday","Saturday"]
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
//console.log(jsUser.full Name);//correct : 
// console.log(jsUser["full Name"])
// console.log(jsUser[mySym]);

jsUser.email="anjali@gpt.com" //to override the value
// Object.freeze(jsUser) //to freeze to not change the value

jsUser.email="anjali@ms.com"

// console.log(jsUser);

jsUser.greeting = function(){
  console.log("Hello jsUser");
}
jsUser.greetingTwo = function(){
  console.log(`Hello jsUser,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

