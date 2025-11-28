// if else if else condition

// check alphabet is vowel or consonant

let alpha = "a";

if (
  alpha == "A" ||
  alpha == "E" ||
  alpha == "I" ||
  alpha == "O" ||
  alpha == "U" ||
  alpha == "a" ||
  alpha == "e" ||
  alpha == "i" ||
  alpha == "o" ||
  alpha == "u"
) {
  console.log("Its a Vowel");
} else {
  console.log("Consonant");
}

// check input is alphabet or digit or special character

let input = "t";

if (input >= 0 && input <= 999) {
  console.log("Digit");
} else if ((input >= "A" && input <= "Z") || (input >= "a" && input <= "z")) {
  console.log("Alphabet");
} else {
  console.log("Special Character");
}

// week day

let week_day = "8";

switch (week_day) {
  case "1":
    console.log("Monday");
    break;

  case "2":
    console.log("Tuesday");
    break;

  case "3":
    console.log("Wednesday");
    break;

  case "4":
    console.log("Thursday");
    break;

  case "5":
    console.log("Friday");
    break;

  case "6":
    console.log("Saturday");
    break;

  case "7":
    console.log("Sunday");
    break;

  default:
    console.log("Invalid Input");
}

// Month

// profit or loss

let actual_price = 500;
let selling_price = 490;

if (selling_price > actual_price) {
  console.log("Profit");
} else {
  console.log("Loss");
}

// Result Grade

let maths = 95;
let science = 100;
let social_science = 90;
let hindi = 90;
let gujarati = 80;
let english = 80;
let sanskrit = 80;
let computer = 99;

let total_marks =
  maths +
  science +
  social_science +
  hindi +
  gujarati +
  english +
  sanskrit +
  computer;

console.log(total_marks);

let percentage = total_marks / 8;

console.log(percentage);

if (percentage >= 90 && percentage <= 100) {
  console.log("A Grade");
} else if (percentage >= 80 && percentage < 90) {
  console.log("B Grade");
} else if (percentage >= 70 && percentage < 79) {
  console.log("C Grade");
} else if (percentage >= 60 && percentage < 69) {
  console.log("D Grade");
} else if (percentage >= 50 && percentage < 59) {
  console.log("E Grade");
} else {
  console.log("Fail");
}

// lowercase or uppercase

let value = "K";

if (value >= "A" && value <= "Z") {
  console.log("Uppercase");
} else if (value >= "a" && value <= "z") {
  console.log("Lowercase");
}

//

let amount = 84657;

let n500;
let n200;
let n100;
let n50;
let n20;
let n10;
let n5;
let n2;
let n1;

n500 = n200 = n100 = n50 = n20 = n10 = n5 = n2 = n1 = 0;

console.log(amount);

if (amount >= 500) {
  n500 = parseInt(amount / 500);
  amount = amount - 500 * n500;
}

if (amount >= 200) {
  n200 = parseInt(amount / 200);
  amount = amount - 200 * n200;
}
if (amount >= 100) {
  n100 = parseInt(amount / 100);
  amount = amount - 100 * n100;
}
if (amount >= 50) {
  n50 = parseInt(amount / 50);
  amount = amount - 50 * n50;
}
if (amount >= 20) {
  n20 = parseInt(amount / 20);
  amount = amount - 20 * n20;
}
if (amount >= 10) {
  n10 = parseInt(amount / 10);
  amount = amount - 10 * n10;
}
if (amount >= 5) {
  n5 = parseInt(amount / 5);
  amount = amount - 5 * n5;
}
if (amount >= 2) {
  n2 = parseInt(amount / 2);
  amount = amount - 2 * n2;
}
if (amount >= 1) {
  n1 = parseInt(amount / 1);
  amount = amount - 1 * n1;
}

console.log("500 Notes " + n500);
console.log("200 Notes " + n200);
console.log("100 Notes " + n100);
console.log("50 Notes " + n50);
console.log("20 Notes " + n20);
console.log("10 Notes " + n10);
console.log("5 Coins " + n5);
console.log("2 Coins " + n2);
console.log("1 Coins " + n1);
console.log(amount);
