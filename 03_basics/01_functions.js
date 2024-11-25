// function is like a briefcase that  multiple items can put inside and carry one place to another

function myBox() {
    console.log("B")
    console.log("H")
    console.log("U")
    console.log("V")
    console.log("I")
}

// myBox()


// function addTwoNums(num1 , num2) {                   //here in function's the inputs are called parameters
//     console.log(num1 + num2)
// }
// addTwoNums(2,4)                                     // function call is known as Arguments

function addTwoNums(num1 , num2) {                   //here in function's the inputs are called parameters
    
    //console.log("hello")                           //  before return it will  executed 
    // let result = num1 + num2
    // return result                                   //  console.log("bhuvi") after return   is cannot be execute 
    return num1 + num2

}
// let user = addTwoNums(2,4)
// console.log("Result : ", user)


// Some if statement example
function loginUserMessage(username) {
//function loginUserMessage(user = "monu") {      // at same time both user is defined then program overwrites then last 42 line executed
    //
    if(!username) {                                        // ( user === undefined || !username)
        console.log("please enter a username below")
        return
        //
    }
    return `${username} just loggedIn `
}
// console.log(loginUserMessage())                         // if i give the username it executes bcz of priority (line 33)


function calculateCartPrice(...num1) {                    // some case where (...) it called as spread or rest operator
    return num1
}

// console.log(calculateCartPrice(399,200,100,199))

const user = {
    username: "Bhuvi",
    price : "199"
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

}
// handleObject(user)

// handleObject({
//     username : "Sam",
//     price :  199
// })

const newArray = [200, 300, 400]
function books(getPrice) {
    return getPrice[1]

}
// console.log(books(newArray));
console.log(books([2, 4,5,6,6]));
