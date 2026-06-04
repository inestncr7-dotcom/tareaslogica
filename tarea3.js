console.log("=== NÚMEROS PARES DEL 1 AL 20 ===");

for (let numero = 1; numero <= 20; numero++) {

    if (numero % 2 == 0) {
        console.log(numero);
    }
}

console.log("=== NÚMEROS IMPARES DEL 1 AL 20 ===");

for (let numero = 1; numero <= 20; numero++) {

    if (numero % 2 != 0) {
        console.log(numero);
    }
}

console.log("=== NÚMEROS PRIMOS DEL 1 AL 20 ===");

for (let numero = 2; numero <= 20; numero++) {

    let esPrimo = true;

    for (let divisor = 2; divisor < numero; divisor++) {

        if (numero % divisor == 0) {
            esPrimo = false;
        }

    }

    if (esPrimo == true) {
        console.log(numero);
    }
}
console.log("=== SUMATORIA DEL 1 AL 10 ===");

let suma = 0;

for (let numero = 1; numero <= 10; numero++) {
    suma = suma + numero;
}

console.log("La suma es:", suma);