//dates  (it is an object)

let myDate = new Date() 
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2023,0,23,3,33)
let myCreatedDate = new Date("2023-01-23")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp =  Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))           //for interview point of view : to change in sec then we divide by 1000


let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth() + 1)

//string interpolation - `${} and ${}`

newDate.toLocaleString('default', {weekday: "long"

})
