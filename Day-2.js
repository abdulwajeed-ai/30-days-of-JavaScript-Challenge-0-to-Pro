//  abdulwajeed.ai.dev@gmail.com
let val_1 = 3;
let val_2 = 6;
// console.log(val_1 + val_2) // Addition 3+6 = 9
// console.log(val_1 - val_2) // Substraction 3-6 = -3
// console.log(val_1 * val_2) // Multiplication 3*6 = 18
// console.log(val_1 / val_2) // Division 3/6 = 0.5


//  to find reminder we use % percent sign in JavaScript it called as modulus
// console.log(val_1 % val_2) // Reminder = 3 big value % small value then it gives 0 if it divides, but small vlaue % big value it gives small value as reminder.


let addSomeVal = 10; 
addSomeVal += 20; // this operator is adding 20 to 10 which is 30 . it's not assinging new value its adding to 10 .
// console.log(addSomeVal)
let removeSomeVal = addSomeVal -= 10; 
// console.log(removeSomeVal);


// some comparsion operators: <, >, >=, <=, ==, !=, ===, !==

let x = 10; 
let y = 20; 
// console.log(x<y) // prints true;
// console.log(x>y) // prints false because 10 is smaller than 20; 
// console.log(x>=y) // which also prints false because 10 is not greaterthan or not equal to 20; 
// console.log(x<=y) // it prints true because x is lessthan but not equal to 20 if one conditions of the operator is true then it prints true.
// console.log(x==y) // which prints false == this sign is used to check equalto 10 is not equal to 20; 
// console.log(x!=y) // prints true because != this sign is used to check not equalto 10 not equal to 20; 
// console.log(x===y) // === what it means is it check value is equal then it check datatyps is equal then it prints true; in curret output it prints false because it check both conditions first value also same and then type also same then it prints true to the console;
// console.log(x!==y) // then it prints true because it check only one condition in this case value is not equal to but datatype is equal it prints true


// Logical operators: logical and &&, logical or ||, logical not ! this excalmation operator prints true = false and false = true; 
let a = 20 ;
let b = 30; 
// console.log(a<b || b<a) // it check if one value is true then prints true
// console.log(a<b && b<a) // in this logical operator both condition should be true then it prints true to the console if not prints false.
// let logicalNot = a==b; // false
// console.log(!logicalNot) // prints false to true;


//  intersting operator ternary operator 
let num = 2; 
// console.log(num==-2? 'Yes': 'No' )


// ########################## Feature Request: ############################
// 1. arithemetic operations Script: HERE I'M USING FUNCTION SOME ADVANCE CONCPET
// function for sum
function addition(a, b){
    return a+b; 
}
// function for sub
function subtraction(a, b){
    return a-b; 
}
// function for product
function multiplication(a, b){
    return a*b; 
}
// function for division
function division(a, b){
    return a/b;
}

// function for take out the reminder
function reminder(a, b){
    return a % b;
}

const Calculator = function(x, y, whatOperationDo){
    return whatOperationDo(x, y);
}

// console.log(Calculator(20, 30, subtraction))
// -------------------------------------------------------------------------------------------------------------------

// 2. Comparison and Logical operators Script: 
let first = 2; 
let second = 3; 

//  logical or || it check only one condition if it is true prints true;
// console.log(first<second || second<first) // prints true;
// console.log(first>second || second>first) // prints true; 
// console.log(first>=second || second>=first) // prints true;
// console.log(first<=second || second<=first) // prints true;

// logical and && it check both conditions if it is true prints true if one is true and another is false prints false; to print true both conditions should be true;

console.log(first<second && second>first) // prints true
console.log(first>second && second>first) // prints false

// logical not ! false ==> true; true==> false

let condition = first>second // false
console.log(!condition) // make false to true; OutPut : true;

// -------------------------------------------------------------------------------------------------------------------


// 3. Ternary Operator Script: ternary operator is a line of conditions if condtions meets true prints first string if not print second 

console.log(first<3? "Yes": "No") // one line checking condtions and writing the statements same like condtionals





