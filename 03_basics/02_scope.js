//var c = 400

// let a = 200
// if(true) {
//     let a = 10
//     const b = 20
//     c = 30

// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

//console.log(a)
// console.log(b)
// console.log("Inner :", a)
// console.log(c)


//Nested functions

function one() {
    
    const username = "Bhuneshwar"

    function two() {
        let box = "google"
        console.log(username);
    }
    // console.log(box);
    
    two()
}
// one()

if (true) {
    const username = "Bhuneshwar"
    if(username === "Bhuneshwar") {
        const website =  " youtube"
        // console.log(username + website)

    }
    // console.log(website);
    
}
// console.log(username);

// +++++++++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++++

function  addOne(num) {
    return num + 1

}

// console.log(addOne(4));

const two = function(num) {
    return num + 2
}
console.log(two(5))
