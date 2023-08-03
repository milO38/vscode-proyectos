function contar() {
    let number = prompt("elije un número: ");
    for (let i = 0; i <= number; i++) {
        console.log(i);
    }
}
contar()

function contar2() {
    let number1 = parseInt(prompt("elije un número: "));
        console.log(contar(number1));
        
    if ((number1 % 3 == 0) && (number1 % 5 == 0)) {
        console.log("FizzBuzz");
    } else if (number1 % 5 == 0) {
        console.log("Buzz");
    } else if (number1 % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(number1);
    } 
} 

contar2()

function piramide() {
    let f = prompt("Indica número de filas: ");
    for (let i = 1; i <= f; i++) {
        for (let filas = "*"; strlen(filas) < i; filas * i) {
            console.log(filas)
        }
    }

}

piramide()

function piramide2() {
    for (let i = 1 ; i <= f; i++){
        let pr = "";
        for (let j = f; j > i; j--){
            pr += espacio
        }

        for ( k = f * 2; k > f * 2 - i * 2; k--) {
            if (k == f * 2){

            } else {
                pr += "*"
            }
        }
        console.log(pr);
    }
}
piramide2()

let response = {
    status: "success",
    data: {
    productos: [
    {
    id: 1,
    nombre: "remera",
    precio: 20,
    colores: ["rojo", "azul", "verde"],
    tallas: {
    disponible: ["S", "M", "L"],
    agotado: ["XL"],
    },
    detalles: {
    material: "algodón",
    peso: "200g",
    },
    },
    {
    id: 2,
    nombre: "campera",
    precio: 35,
    colores: ["negro", "gris"],
    tallas: {
    disponible: ["M", "L"],
    agotado: ["S", "XL"],
    },
    detalles: {
    material: "denim",
    peso: "400g",
    },
    },
    ],
    total: 2,
    },
    };

    console.log(response.data.productos[1].detalles.material);