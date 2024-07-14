// Day-1 of 30days of javascript challenge --(abdulwajeed.ai.ml@gmail.com)

var num = 9848;
// console.log(num)

let str = "hello 30days of javascript challenge";
// console.log(str)

const bool = true;
// console.log(bool)

// Different data types (number, string, boolean, object, array) loggin with typeof operator

let number = 1234;
let string = "hello world";
let boolean = true;
// declaring object
let object = {
  name: "abdul wajeed",
  role: "full stack developer",
  id: 9293842349,
};
// declaring array with different data types
let array = ["first", 9848, true];

// console.log(typeof number); //  OutPut: number
// console.log(typeof string); //  OutPut: string
// console.log(typeof boolean); // OutPut: boolean
// console.log(typeof object); //  OutPut: object 
// console.log(typeof array); //   OutPut: object (array also comes under object data types)

// reassigning value
let a = 'initial value'
a = 'assigning new value'
// console.log(a)

// understanding const
const uniqe = 9848 // we cannot reassign the value in const varaible decarling method.



// !important points
// let and var can be resassign the values
// const never re assign the value it will once declared variable method
// when you use typeof operator with array it will shows you the it also a object so array is also an object. then when you check by a Array.isArray(varaible_name) then it return on console true. so it is an array but type is comes under javascript objects


// printing value and its datatype using typeof operator in one string concatinating the string with types
let datatype_1 = 'string'
console.log(`value ${datatype_1} and Datatype is: ${typeof datatype_1}`)
let datatype_2 =  true;
console.log(`value ${datatype_2} and Datatype is: ${typeof datatype_2}`)
let datatype_3 =  9848;
console.log(`value ${datatype_3} and Datatype is: ${typeof datatype_3}`)

let datatype_4 =  {
    name: 'abdul wajeed', 
    phone: 9848384823
}
console.log(`value ${datatype_4} and Datatype is: ${typeof datatype_4}`)

let datatype_5 = [`first`, `second`, 123, true, null, undefined]
console.log(`value ${datatype_5} and Datatype is: ${typeof datatype_5}`) // because of undefined a simple space and comma appears in output ,, like this