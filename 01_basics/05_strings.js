const name = "Bhuneshwar"
const repoCount = 50;

//console.log(`Hello Everyone my name is ${name} and my repoCount is ${repoCount}`);

const newGame = new String('Bhuvi')
console.log(newGame[0]);
console.log(newGame.__proto__);

console.log(newGame.length)
console.log(newGame.toUpperCase())
console.log(newGame.charAt(3))
console.log(newGame.indexOf('u'))

const newString = newGame.substring(0,4)
console.log(newString)

const anotherString = newGame.slice(2,5)
console.log(anotherString)

const userOne = "    hello   "
console.log(userOne);
console.log(userOne.trim())

const url = "https://bhuneshwar.com/bhuneshwar%20kumar"
console.log(url.replace('%20','-'))

console.log(url.includes('bhuneshwar'))