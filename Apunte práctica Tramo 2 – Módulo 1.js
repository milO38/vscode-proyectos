//ejercicio 1 mostrar números en consola
function contar() {
let number = prompt("escribe un número ");

for (let i = 0; i < number; i++) {
    console.log(i)
 }
}

//Ejercicio 2: FizzBuzz

function contar2() {
let number = prompt("escribe un número ");

for (let i = 0; i < number; i++) {
    console.log(i)
    
    if number % 3 == 0 {
        console.log("Fizz");
    } else if number % 5 == 0 {
        console.log("Buzz");
    } else if number % 3 == 0 && number % 5 == 0 {
        console.log("FizzBuzz");
    } else {
    console.log(number)
    }
 }
}

//Ejercicio 3: pirámide

function piramide() {
let fila = prompt("Número de filas: ");
let * = "*"
for i in Range(fila++) {
    console.log()
}
}