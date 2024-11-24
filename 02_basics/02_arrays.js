const marvel_heros = ["thor", "Iron-man", "spiderman"]
const dc_heros = ["batman", "superman", "flash"]


marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

let allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


//Spread syntax (...) - use to merge or concatinate easily multiple functions
let every_heros = [...dc_heros, ...marvel_heros]       
// console.log(every_heros);

const pink = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const yellow = pink.flat(Infinity)
// console.log(yellow);


console.log(Array.isArray("Bhuneshwar"))
console.log(Array.from('Bhuneshwar'))
console.log(Array.from({name: 'Bhuneshwar'}))  //Interesting case interview point of view (keys or value they ask) it give empty array

let one = 100
let two = 200
let three = 300

console.log(Array.of(one, two, three))


