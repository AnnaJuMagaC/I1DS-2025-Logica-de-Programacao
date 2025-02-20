// Operadres Lógicos
var souPobre = true;
console.log("-------------------------------");
console.log("Sou pobre?", souPobre);
console.log("Negação de souPobre:", !souPobre);

var manhã = true;
var sono = true;
console.log("-------------------------------");
console.log("Manhã?", manhã, "  |  Estou com sono?", sono);

//Condicional Simples
console.log("Operador AND (E):", manhã && sono);
console.log("Operador OR (ou):", manhã || sono);

manhã = false;
console.log("-------------------------------");
console.log("Manhã?", manhã, "  |  Estou com sono?", sono);

console.log("Operador AND (E):", manhã && sono); //somente os dois ao mesmo tempo
console.log("Operador OR (ou):", manhã || sono); //atender um requisito OU outro

sono = false;
console.log("-------------------------------");
console.log("Manhã?", manhã, "  |  Estou com sono?", sono);

console.log("Operador AND (E):", manhã && sono);
console.log("Operador OR (ou):", manhã || sono);
