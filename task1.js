"use strict"

// Temperatura

function findDifference(day1, day2) {
    return day2 - day1;
}

function checkChange(temp, max){
    return Math.abs(temp) > Math.abs(max) ;
}

const tempArray = [];

let x;
while (true) {
    let input = prompt("Enter temperature");

    if (input === "" || input === null) {   
        break;
    }

    x = Number(input);
    tempArray.push(x);
}

const days = tempArray.length;

const change = [];
let maxChange = 0;

for (let i = 0; i < days - 1; i++) {
    let tempDif = findDifference(tempArray[i], tempArray[i + 1]);
    change.push(tempDif);
    maxChange = checkChange(tempDif, maxChange) ? maxChange = tempDif : maxChange;
}

document.getElementById("content").innerHTML = `Dienų temperatūra: ${tempArray.map(n => n.toFixed(1))}<br>
Temperatūrų pokytis tarp gretimų dienų: ${change.map(n => n.toFixed(1))}<br>Dienų skaičius: ${days}<br>
Didžiausias temperatūros pokytis: ${maxChange.toFixed(1)}`;