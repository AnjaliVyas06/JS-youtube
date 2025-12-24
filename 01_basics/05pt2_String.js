const name = "anjali";
const repoCount = 50;

console.log(`hello My name is ${name} and My repoCount is ${repoCount}`);

const gameName = new String ('anjali-an-com');

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

// const newString = gameName.substring(0,4)
// console.log(newString)

const newString = gameName.slice(-6,2)
console.log(newString)

const url = "https://anjali.com/anjali%20vyas"

console.log(url.replace('%20','-'))

console.log(url.includes('khushi'))

console.log(gameName.split('-'))