// Variables : var,let,const.

// Data types : Number, String, Boolean ,Undefined,Null,Object,Array.

// Operators : Arithmatic Operator , Assignment, Comparison,logical, typeof ,Ternary

//Arithmatic Operator : 'Addition + ',' Subtraction -' ,'Multiplication * ' , 'Division / ' ,'Modulus (remainder) % ', 'Exponentiation ** '.

let a = 70,
  b = 5;
console.log("Addition :" + (a + b));
console.log("Subtraction : " + (a - b));
console.log("Multiplication : " + a * b);
console.log("Division : " + a / b);
console.log("Modulus : " + (a % b));
console.log("Exponentiation : " + a ** b);

//Assignment Operators (Assign values to variables)

let x = 50;
x += 5;
console.log(x);
x -= 3;
console.log(x);
x *= 2;
console.log(x);
x /= 4;
console.log(x);
x %= 2;
console.log(x);

//Comparison Operators (Compare values, return true or false) : == , === , != , !==, > , < , >= , <= .

console.log(10 == "30");
console.log(10 === "30");
console.log(15 != 5);
console.log(10 !== "10");
console.log(10 > 5);
console.log(10 < 20);
console.log(10 >= 10);
console.log(75 <= 3);

//Logical Operators (Used in conditions) :AND ,OR , NOT

console.log(true && false);
console.log(true || false);
console.log(!true);

//Ternary Operator (Shorter if-else condition)

let age = 18;
let IScanVote = age >= 18 ? "Yes" : "No";
console.log(IScanVote);

//typeof

let name1 = "Bhumi";
console.log(typeof name1);

// if else condition

// eligible for voting

let age1 = 15;

if (age1 > 18) {
  console.log("You are eligible to vote");
}

// find max value from 2

let num = 101;
let num1 = 20;

if (num > num1) {
  console.log("Num is Max");
} else {
  console.log("Num1 is Max");
}

// find max value from 3

let a1 = 10;
let b1 = 50;
let c1 = 300;

if (a1 > b1 && a1 > c1) {
  console.log("A1 is Max");
} else if (b1 > a1 && b1 > c1) {
  console.log("B1 is Max");
} else {
  console.log("C1 is Max");
}

// find max value from 4

let aa = 110;
let bb = 220;
let cc = 330;
let dd = 440;

if (aa > bb && aa > cc && aa > dd) {
  console.log("Aa is Max");
} else if (bb > aa && (bb > cc) & (bb > dd)) {
  console.log("Bb is Max");
} else if (dd > aa && dd > bb && dd > cc) {
  console.log("Dd is Max");
} else {
  console.log("Cc is Max");
}

// find zero, negative and positive

let number = 0;

if (number > 0) {
  console.log("Positive");
} else if (number == 0) {
  console.log("Zero");
} else {
  console.log("Negative");
}

// find week day

let week_day = 5;

if (week_day == 1) {
  console.log("Monday");
} else if (week_day == 2) {
  console.log("Tuesday");
} else if (week_day == 3) {
  console.log("Wednesday");
} else if (week_day == 4) {
  console.log("Thursday");
} else if (week_day == 5) {
  console.log("Friday");
} else if (week_day == 6) {
  console.log("Saturday");
} else {
  console.log("Sunday");
}

// Find Month

// Find Leap Year

let year = 5;

if (year % 4 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}
