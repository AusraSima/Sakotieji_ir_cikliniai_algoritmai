"use strict"

// Keliautojai

const n = +prompt("Enter how many friends will go");
const b = +prompt("Enter price per kilogram of baggage");

let kgb = 0;

for (let i = 1; i <= n; i++){
    kgb += +prompt("Enter persons baggage weight");
}

const price = kgb * b;

document.getElementById("content").innerHTML = `Visi draugai vezasi ${kgb.toFixed(1)} bagazo.<br>
Draugams reikes sumoketi ${price} Lt uz bagaza`;
