let producto1 = "Audífonos Bluetooth";
let precio1 = 850;
let stock1 = 15;

let producto2 = "Teclado Inalámbrico";
let precio2 = 620;
let stock2 = 10;

let producto3 = "Mouse Gamer";
let precio3 = 475;
let stock3 = 20;

let valorTotal = (precio1 * stock1) + (precio2 * stock2) + (precio3 * stock3);

console.log("=== SISTEMA BÁSICO DE INVENTARIO ===");

console.log("Producto 1 registrado:", producto1);
console.log("Precio unitario del producto 1: $" + precio1);
console.log("Unidades disponibles del producto 1:", stock1);

console.log("Producto 2 registrado:", producto2);
console.log("Precio unitario del producto 2: $" + precio2);
console.log("Unidades disponibles del producto 2:", stock2);

console.log("Producto 3 registrado:", producto3);
console.log("Precio unitario del producto 3: $" + precio3);
console.log("Unidades disponibles del producto 3:", stock3);

console.log("Valor total del inventario: $" + valorTotal);
