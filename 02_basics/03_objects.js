//Singleton
//Object.create

// Objects literals

const mySym  = Symbol("Key1")                 // Symbol is a datatype where we have to create in [] --[sym] = "Mine"   ---line no: 12


const JsUser = {
    name: "Bhuneshwar",
    "full name":"Bhuneshwar kumar" ,
    [mySym] : "myKey1",                        // symbol --- interview pointofview imp  
    age : 22,
    gender: "Male",
    email: "Bhuvi97512@gmail.com",
    location: "lucknow",
    isLoggedIn: false,
    lastLoggedInDays : ["Monday", "Tuesday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log( JsUser[mySym])              //sym

JsUser.email = "bhuvippt@gmail.com"
// console.log(JsUser)

// Object.freeze(JsUser)                // use to lock values-- cannot change the value(fixed)

JsUser.email = "bhuvigpt@gmail.com"
// console.log(JsUser)

//++++++++++++++++++++++++++++++++++++++++++++= Functions ++++++++++++++++++++++++++++++++++++++++++++

JsUser.greeting = function() {
    console.log("Hello jsUsers")

} 

JsUser.greeting2 = function() {
    console.log(`Hello jsUser, ${this.name}`)             // this-- is used for take same reference of the objects (jaise ek array me se koi elements check krna hai ki kon kon sa elements present hai)

} 
    
console.log(JsUser.greeting())
console.log(JsUser.greeting2())