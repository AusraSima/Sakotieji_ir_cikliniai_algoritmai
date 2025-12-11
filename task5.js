"use strict"

// Kelių eismo taisyklės. 

const n = +prompt("Enter quantity of students");
let firstInstructor = "";
let secondInstructor = "";
let thirdInstructor = "";

for (let i = 1; i <= n; i++){
    let level = +prompt("Enter student's driving level");
    if (level >= 1 && level <= 3){
        firstInstructor += `${i} `;
    } else if (level >= 4 && level <= 6){
        secondInstructor += `${i} `;
    } else if (level >= 7 && level <= 10){
        thirdInstructor += `${i} `;
    } else {
        alert("Wrong data!");
    }
}

document.getElementById("content").innerHTML = `Pirmasis: ${firstInstructor}<br>
Antrasis: ${secondInstructor}<br> Treciasis: ${thirdInstructor}`;