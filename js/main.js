// variables

let inputDay = document.getElementById('day').value;
let inputMonth = document.getElementById('month').value;
let inputYear = document.getElementById('year').value;
let validDay = document.getElementById('vidDay');
let vadidMonth = document.getElementById('vidMonth');
let validYear = document.getElementById('vidYear');

const currentDate = new Date();
const cYear = currentDate.getFullYear();
const cMonth = currentDate.getMonth();
const cDay = currentDate.getDay();

// console.log(cYear);


 let aDay = String(cDay - inputDay);
 let aMonth = String(cMonth - inputMonth);
 let aYear = String(cYear - inputYear);


console.log(aMonth)