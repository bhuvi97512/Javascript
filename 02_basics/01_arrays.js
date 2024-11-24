// arrays

const myArr = [0,1,2,3,4,5,6]
 const myHeros = ["motu, patlu, penguin, doremon, nobita, sizuka"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log({myArr,myHeros, myArr2})

//Array methods

myArr.push(8)
myArr.pop()
//myArr.unshift(10)
myArr.shift(10)



// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr = myArr.join()    //by join() its converts array into string and join it
// console.log(myArr);
// console.log(typeof newArr)         //it also change into string not array


// Slice  , Splice

console.log("A ", myArr)
 
const myNum1  = myArr.slice(1,3)
console.log(myNum1)
console.log("B " ,myArr )

const myNum2 = myArr.splice(1,3)
console.log("C ", myArr)
console.log(myNum2)

//notes for console : const myArr = [1, 2, 3, 4, 5]
                        //myArr       --- check all prototypes and methods


