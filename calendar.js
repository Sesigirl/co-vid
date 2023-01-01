"use strict"
/*
  Created by: Kathato Mthethwa
  File Name: calendar.js
  Date: 11/24/2022
*/

let today = new Date();
let thisYear = today.getFullYear();
let thisMonth = today.getMonth();
// Adopted from Nitin Patel's calendarHTML-JavaScript (niinpatel)
let firstofMonth = new Date(thisYear, thisMonth).getDay();
// Calc number of days in month
let numDaysInMonth = 32 - new Date(thisYear, thisMonth, 32).getDate();
let table = document.getElementById("calendar-body");

let date = 1;
for (let i = 0; i < 6; i++) {
    // create table row
    let row = document.createElement("tr");
    // create and populate cells
    for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstofMonth) {
            let cell = document.createElement("td");
            row.appendChild(cell);
        } else if (date > numDaysInMonth) {
            break;
        } else {
            let cell = document.createElement("td");
            cell.textContent = date;
            if (date === today.getDate() ) {
                $(cell).addClass("calendar-today"); 
            } 
            if (date === 2 || date === 3 || date === 4 || date === 9 || date === 10 || date === 11) {
                $(cell).addClass("calendar-class-cancelled");
            } else if (j === 1 || j === 2 || j === 3) {
                $(cell).addClass("calendar-class-day");
                switch (j) {
                    case 1: 
                        cell.insertAdjacentHTML("beforeend", "<br>Intro to Dance @ 5:15pm<br>Tone Zone @ 6:15pm");
                        break;
                    case 2: 
                        cell.insertAdjacentHTML("beforeend", "<br>Step @ 6pm<br>Ballet/Jazz @ 6:30pm");
                        break;
                    case 3: 
                        cell.insertAdjacentHTML("beforeend", "<br>Zumba Kids @ 5:15pm<br>Zumba @ 6pm");
                        break;
                }
            }
            row.appendChild(cell);
            date++;
        }
    }
    table.appendChild(row);
}