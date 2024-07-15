// abdulwajeed.ai.dev@gmail.com

// Control Structures

// Task-1
let num = 2;
if (num > 0) {
  console.log("Positive Value");
} else if (num < 0) {
  console.log("Negative Value");
} else {
  console.log("Zero");
}

// Task-2
let ageOfThePerson = 20;
if (ageOfThePerson >= 18) {
  console.log("You are Eligible to Vote");
} else if (ageOfThePerson < 18) {
  console.log("You are Not Eligible to Vote");
} else {
  console.log("thank you");
}

// Task-3
let val1 = 23;
let val2 = 30;
let val3 = 40;
if (val1 >= val2) {
  if (val1 >= val3) {
    console.log(`${val1} is the largest value`);
  } else {
    console.log(`${val3} is the largest value`);
  }
} else {
  if (val2 >= val3) {
    console.log(`${val2} is the largest value`);
  } else {
    console.log(`${val3} is the largest value`);
  }
}

// Task-4
let DayInNum = 5;

switch (DayInNum) {
  case 1:
    console.log("Today is Monday");
    break;

  case 2:
    console.log("Today is Tuesday");
    break;

  case 3:
    console.log("Today is Wednesday");
    break;

  case 4:
    console.log("Today is Thursday");
    break;

  case 5:
    console.log(`Today is Friday`);
    break;

  case 6:
    console.log(`Today is Saturday`);
    break;

  case 7:
    console.log("Today is Sunday");
    break;

    default: 
    console.log('Invalid Day')
}

// Task-5
let score = 100;
switch(true){
    case (score>=50 && score<=60):
        console.log('Grade is E');
    break;
    
    case (score>=60 && score<=70):
        console.log("Grade is D");
    break;

    case (score>=70 && score<=80):
        console.log("Grade is C");
    break;

    case (score>=80 && score<=90):
        console.log("Grade is B");
    break;

    case (score>=90 && score<=100):
        console.log(`Grade is A \n !!! congratulations for your ${score}% Score`);
    break;

    default:
        console.log(`Failed`)
        
    
}

// Task-6
let evenOrOdd = 2; 
console.log((evenOrOdd%2==0)? `${evenOrOdd} is a Even Number`:`${evenOrOdd} is a ODD Number`)

// Task-7
let year = 2024; 
if((year % 4===0 && year %100!==0) || (year % 400 === 0)){
  console.log(`${year} is a leap year`)
} 
else {
  console.log(`${year} is not a leap year`)
}