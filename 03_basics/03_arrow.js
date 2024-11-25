const user = {
    username:  "Bhuvi",
    price : 100,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to my website`);
        console.log(this);
        
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);      // global

// function tea() {
//     const user = "Bhuneshwar"
//     // console.log(this.user)

// }
// // tea()

// const tea = function() {
//     let user = "Bhuvi"
//     console.log(this.user)
// }
const tea = () => {
    let user = "Bhuvi"
    console.log(this)
}
// tea()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2                // this is called implicite which is written in same line means here didn't use this {} and there is no required to write return 

// const addTwo = (num1, num2) => (num1 + num2  ) 
const addTwo = (num1, num2) => ({username: "bhuvi"})  // always use ()parenthesis

console.log(addTwo(2, 3))



// const myArray = [2,3,4,5,6]
// myArray.forEach(() => ())