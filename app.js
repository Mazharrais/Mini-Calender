

const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekDays = ["sunday","monday","tuesday","wednessday","thursday","friday","saturday"];

date.innerHTML = today.getDate();
day.innerHTML = weekDays[toUpperCase(today.getDay())];
month.innerHTML = today.getMonth();
year.innerHTML = today.getFullYear();
