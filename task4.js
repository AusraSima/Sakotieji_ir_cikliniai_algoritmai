"use strict"

// Lenktynes

function checkSpeed(target, speed) {
    return speed > target;
}

function calculateIfUnfinished(speed) {
    return speed - (speed * 0.2);
}

const n = +prompt("Enter number of pilots");
const v = +prompt("Enter target speed");

let sum = 0; // pilots with speed above targetSpeed

for (let i = 1; i <= n; i++) {
    let pilotSpeed = +prompt(`Enter speed of pilot ${i}`);
    let pilotFinished = +prompt("Enter 1 if pilot finished and 0 if doesn't");

    if (!pilotFinished) {
        pilotSpeed = calculateIfUnfinished(pilotSpeed);

    } 
    
    if (checkSpeed(v, pilotSpeed)) {
        sum++;
    }
}
document.getElementById("content").innerHTML = `Duota greiti virsijo ${sum} pilotai`;