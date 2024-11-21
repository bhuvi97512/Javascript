// Primitive Datatype

// 7 types : String, Number, Boolean,  null ,  undefined , Symbol, BigInt

const score = 100
const liveScore = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)

//const bigNumber = 1324234534353458793588997583548768589345834575878887345n


//Reference / Non- primitive

// Array, objects, Functions

// const heros = ["motu", "patlu", "Dr. Jhatka"];

// let myObj  = {
//     name:"bhuvi",
//     age: 22,
//     veg: false
// }

// const myFunction = function() {
//     console.log("Hello World")
// }

// console.log(typeof bigNumber)


//----------------------------------------------Memory-----------------------------------------------------------------------------------

// Stack(Primitive)- it uses copy(duplicate) in memory     and Heap( Non-Primitive)- it uses original(reference) in memory
    
let homeName = "Bhanu"

let anotherName = homeName
anotherName = "Bihar"

console.log(homeName)
console.log(anotherName)


let userOne = {
    email : "more@gmail.com",
    upi : "more@ybl"
}

let userTwo = userOne

userTwo.email = "hello@google.com"

console.log(userTwo.email)
console.log(userOne.email)