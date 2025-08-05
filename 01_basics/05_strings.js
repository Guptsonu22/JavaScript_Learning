const name = "Sonu"
const repoCount = 50

// console.log(name + repostiry);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Sonu-sg')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

 const newString = gameName.substring(0,1)
console.log(newString);

const anotherString = gameName.slice(-3,1) 
console.log(anotherString);

const newStringOne = " sonu "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sonu.com/sonu%75kumar"
console.log(url.replace('%75' , '_'));

console.log(url.includes('sonu'))

console.log(gameName.split('_'));