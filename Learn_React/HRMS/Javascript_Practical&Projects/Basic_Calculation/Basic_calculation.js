//  base salary
let salary = 20000;
let HRA = 50; // 10% of salary
let DA = 15; // 5% of salary
let TA = 12; // 2% of salary

let total_salary =
  salary + (HRA * salary) / 100 + (DA * salary) / 100 + (TA * salary) / 100;
console.log("Total Salary : " + total_salary);

// ==========================================================================================
// celcius to ferenheit

let celcius = 50;

let ferenheit = celcius * (9 / 5) + 32;

console.log("celcius to ferenheit : " + ferenheit);
//===========================================================================================
// ferenheit to celcius

let fer = 100;

let cel = ((fer - 32) * 5) / 9;
console.log("ferenheit to celcius : " + cel);
//===========================================================================================
// meter to foot

let meter_1 = 80;
let foot_1 = meter_1 * 3.281;
console.log("Meter to foot : " + foot_1);

//===========================================================================================
// mm to meter

let mm = 30;
let meter_2 = mm / 1000;

console.log("mm to meter : " + meter_2);

//===========================================================================================
// mile to km

let mile1 = 500;

let km2 = mile1 * 1.609;
console.log("mile to km : " + km2);

//===========================================================================================
// km to miles

let km = 49;

let mile = km * 0.621371;

console.log("km to mile : " + mile);

//===========================================================================================
//mile to meter

let mile2 = 15;
let meter_3 = mile2 * 1609;
console.log("mile to meter : " + meter_3);

//===========================================================================================
// seconds to hour

let seconds = 70000;

let hour = seconds / 3600;

console.log("seconds to hour : " + hour);

//===========================================================================================
// Hours to Minutes

let hour1 = 5;
let minute = hour1 * 60;
console.log("Hours to Minuts : " + minute);
