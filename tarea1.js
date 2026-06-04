const product_name = "cafe"
const product_price = 25.50
const product_stock = 7
let total_inventory = parseFloat(product_price) * parseFloat(product_stock)
total_inventory = total_inventory.toFixed(2)
const message =
console.log("== SISTEMA BASICO DE INVENTARIO ==");
console.log("Producto registrado: " + product_name);
console.log("Precio unitario: $" + product_price);
console.log("Unidades disponibles: " + product_stock);
console.log("Valor total del inventario: $" + total_inventory);
