// const tinderUser = new Object {}

const tinderUser = {}

tinderUser.id = "945@bk"
tinderUser.name = "Bhuvi"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname :  {
        userfullname: {
            firstname: "bhuvi",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname)

const new1 =  {a : 1, b : 2}
const new2 = {c : 3, d : 4}

// const new3 = {new1 , new2}

// const new3 = Object.assign( {}, new1, new2)  //Object assign function

const new3 = {...new1, ...new2}                  // Spread method to assign value easily
// console.log(new3);

const users = [
    {
        id : 1, 
        email : "h@gmail.com"
    },
    {
        id : 2, 
        email : "j@gmail.com"
    },
    {
        id : 3, 
        email : "k@gmail.com"
    },
]

users[1].email  // to access any properties from the array


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));     // we get keys from the array
// console.log(Object.values(tinderUser));    // we get values from the array
// console.log(Object.entries(tinderUser));     // converts all key values into array form

// console.log(tinderUser.hasOwnProperty('isLogged'));               // to check any property is present or not

// console Notes: const obj1 = {a : 2, b : 3}  -- obj1 -- all methods



const course = {
    coursename :  "Education",
    price : "999",
    courseInstructor : "Bhuvi",

}

// course.courseInstructor
const {courseInstructor : instructor } = course      // Destructure in Objects
// console.log(courseInstructor );
// console.log( instructor);


//use  in React
const navbar =  ({company})  => {               //props.company bla bla  -- but then we use destructuring method using {} directly 
 
}

// navbar(company = "Bhuvi")


/*

[
    {},
    {},
    {}
]

*/