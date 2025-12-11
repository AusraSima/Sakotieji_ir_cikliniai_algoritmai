"use strict"

// LEGO robotas

const months = 6;
const price = 150.99;

let sum = 0;

for (let i = 1; i <= months; i++) {
    let x;
    do {
        x = +prompt("Kiek Linas imete pinigu i taupykle?");
        sum += x;
    } while (x > 0);
}

const result = sum >= price ? "Linui uzteks pinigu nusipirkti norima 'Lego' robota" : "Linui neuzteks pinigu nusipirkti norima 'Lego' robota";

document.getElementById("content").innerHTML = `Linas per ${months} sutaupe ${sum.toFixed(2)} Lt.<br>
${result}`;