// Primitive Datatype

// 7 types : String, Number, Boolean,  null ,  undefined , Symbol, BigInt

const score = 100
const liveScore = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

//const bigNumber = 1324234534353458793588997583548768589345834575878887345n


//Reference / Non- primitive

// Array, objects, Functions

const heros = ["motu", "patlu", "Dr. Jhatka"];

let myObj  = {
    name:"bhuvi",
    age: 22,
    veg: false
}

const myFunction = function() {
    console.log("Hello World")
}

console.log(typeof bigNumber)