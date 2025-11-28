// data type - string,number, boolean,null, undefined, object, array

//   let name = "John",'Raj';
//   console.log(name);

// array - to store multiple values with different data types

let arr = [
  "Raj",
  "Pushpraj",
  "Rajesh",
  "Rajeev",
  20,
  null,
  undefined,
  true,
  false,
];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
document.write(arr);

let movies = [
  "John",
  20,
  "Ahmedabad",
  "India",
  ["Avengers", "Pushpa 2", "Chhava", "Dhoom", "Dhoom 2", [1, 2, 3, 4, 5]],
];
console.log(movies);
console.log(movies[0]);
console.log(movies[1]);
console.log(movies[2]);
console.log(movies[3]);
console.log(movies[4]);
console.log(movies[4][0]);
console.log(movies[4][1]);
console.log(movies[4][2]);
console.log(movies[4][3]);
console.log(movies[4][4]);
console.log(movies[4][5]);
console.log(movies[4][5][0]);
console.log(movies[4][5][1]);
console.log(movies[4][5][2]);
console.log(movies[4][5][3]);
console.log(movies[4][5][4]);

//

let students = [
  "Student_1",
  "Student_2",
  "Student_3",
  "Student_4",
  "Student_5",
  "Student_6",
  "Student_7",
  "Student_8",
  "Student_9",
  "Student_10",
];

// destructuring

let [a, b, c, d, e, f, g, h, i, j] = students;

console.log(a);
console.log(b);

//
let data = [
  "Raj",
  "Sharma",
  20,
  "Ahmedabad",
  "India",
  383315,
  "MCA",
  "Team Leader",
];

// object - key:value

let obj = {
  name: "Raj",
  surname: "Sharma",
  age: 20,
  city: "Ahmedabad",
  country: "India",
  pincode: 383315,
  education: "MCA",
  role: "Team Leader",
};
document.write("<br><br>");

document.write(obj);
document.write(obj.name);
document.write(obj.surname);
console.log(obj.name);
console.log(obj.age);
console.log(obj.role);

//   destructuring

let { name, surname, age, city, country, pincode, education, role } = obj;
console.log(name);
console.log(country);

//   array of object

let arrObj = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    city: "New York",
    country: "USA",
    education: "Bachelor's Degree",
    jobrole: "Software Engineer",
  },
  {
    id: 2,
    name: "Alice Smith",
    age: 25,
    city: "London",
    country: "UK",
    education: "Master's Degree",
    jobrole: "Data Scientist",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 40,
    city: "Paris",
    country: "France",
    education: "PhD",
    jobrole: "Professor",
  },
  {
    id: 4,
    name: "Emily Brown",
    age: 28,
    city: "Sydney",
    country: "Australia",
    education: "Bachelor's Degree",
    jobrole: "Marketing Manager",
  },
  {
    id: 5,
    name: "David Lee",
    age: 35,
    city: "Tokyo",
    country: "Japan",
    education: "Master's Degree",
    jobrole: "Financial Analyst",
  },
];

console.log(arrObj);
console.log(arrObj[0].name);
console.log(arrObj[0].age);
console.log(arrObj[0].education);
console.log(arrObj[1].name);
console.log(arrObj[1].age);
console.log(arrObj[1].education);

//   document.write(arrObj);

arrObj.forEach((ele, index) => {
  let div = document.createElement("div");
  div.innerHTML = `
        <h2>${ele.name}</h2>
        <h2>${ele.age}</h2>
        <h2>${ele.city}</h2>
        <h2>${ele.country}</h2>
    `;
  document.getElementById("body").appendChild(div);
});
