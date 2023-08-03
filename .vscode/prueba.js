function piramide() {
let f = prompt("Indica número de filas: ");
let filas = "*";
for (let i = 1; i <= f; i++) {
    console.log(filas * (i + 1) + (" " * (20 - (2 * i + 2) + 1)))
 }

}
piramide()

function primo() {
    let n = parseInt(prompt("Elije un número:"))
    if (n >= 1) {
    } else if (n % n == 0 && n % 1 == 0) {
        console.log("el número elejido, es un número primo");
    } else {
        console.log("el número elejido, no es un número primo")
    }
}

primo()

function palabraMasLarga(prompt()) {
    for (let i = -999; i < palabraMasLarga().lenght) {
        console.log(i)
    }  
}

palabraMasLarga()