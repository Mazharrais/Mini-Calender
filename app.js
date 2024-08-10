

const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

// const array = ["sunday","monday","tuesday","wednessday","thursday","friday","saturday"];
// console.log(array[6]);

// let text = array.toString();
// console.log(text.toUpperCase());

// // text.toUpperCase();
// // console.log(text);

// var array1 = text;
// console.log(array1.toLowerCase());

// console.log(array1.toUpperCase());




let weekDays = ["sunday","monday","tuesday","wednessday","thursday","friday","saturday"];








const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


date.innerHTML = (today.getDate() < 10 ?"0" : "") + today.getDate();
day.innerHTML = weekDays[6].toUpperCase([today.getDay()]);
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();
