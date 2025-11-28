// array - to store multiple data with different data types

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array);

// slice  -Array Mathi Etlo Portion return kri dese je index thi data joto hoi te ane jya sudhi joto hoi te index sudhi no vache no portion return krse

let slice = array.slice(2, 8);

console.log(slice);

// pop method -to delete Last Value

array.pop();

console.log(array);

// push method - to Add Value in Last

array.push(9);

console.log(array);

// shift - to delete first Value

array.shift();

console.log(array);

// unshift - to add value  first position
array.unshift(1);

console.log(array);

// splice - to add or delete value anywhere in array

array.splice(3, 0, 444, 555, 666);

console.log(array);

//

let arrObj = [
  { name: "Raj", age: 20 },
  { name: "Pushpraj", age: 30 },
  {
    name: "Vihaan",
    age: 50,
  },
];

console.log(arrObj);

arrObj.pop();

console.log(arrObj);

arrObj.push({ name: "Bhumi", age: 21 });

console.log(arrObj);

//Indexof() - Get Index From Array

const names = ["Bhumi", "Priya", "Jalpa", "Rudra"];
console.log("Get Index Using Index Of : " + names.indexOf("Rudra"));

//Sort() , Reverse()

const products = [
  "Wireless Mouse",
  "Bluetooth Headphones",
  "Yoga Mat",
  "Coffee Maker",
  "Backpack",
];

console.log(products);

products.sort();
console.log("Sorting array data using sort : " + products);

//Reverse()
products.reverse();
console.log("Reverse data using Reverse :  " + products);

//length()
console.log("Check Arra Length : " + products.length);

//Normal Function

function add(a, b) {
  return a + b;
}

console.log("Normal Function Used Addition is : " + add(60, 50));

// Arrow Function

const addition = (a, b) => a + b;

console.log("Use Arrow function Addition is : " + addition(80, 33));

//New Date()

const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

//Math.floor

let a = 56.9999999;
console.log(Math.floor(a));

// Math.Ceil

let c = 89.895476;
console.log(Math.ceil(c));

//Math.random

console.log(Math.random());

//include()  -check karse array ma jai ne ke ae value che ke nahi hse to true otherwise false return karse

temp = ["Riya", "Bhumi", 54, 89];

console.log(temp.includes("Bhumi"));
console.log(temp.includes("Bhatt"));
console.log(temp.includes("bhumi"));

// Reduce()

let no = [10, 8, 80];
let number = no.reduce((a, b) => a + b * 10);
console.log(number);

//foreach()

const fruits = ["apple", "banana", "orange"];

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

//map()
const numbers = [10, 20, 30];
const squared = numbers.map((num) => num * num);

console.log(squared);

//findindex()

const numb = [4, 9, 16, 25];

const index = numb.findIndex((num) => num > 10);

console.log(index);

//find()

const fruit = ["apple", "banana", "cherry", "date"];

const foundaFruit = fruit.find((fruit) => fruit.startsWith("c"));

console.log(foundaFruit);

//filter

const nos = [5, 12, 8, 130, 44];

const filtered = nos.filter((num) => num > 10);

console.log(filtered);

//some
const numbs = [5, 12, 8, 130, 44];

const hasLargeNumber = numbs.some((num) => num > 100);

console.log(hasLargeNumber);

//every

const number1 = [5, 12, 8, 130, 44];
const allPositive = number1.every((num) => num > 0);

console.log(allPositive);
