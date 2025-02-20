//Precedência de Operadores
var x = 22;
var y = 5;
console.log("x =", x, "| y =", y);

var resultado = x + y - 3;
console.log(resultado);

var resultado = x + y * 3;
console.log(resultado);

var resultado = (x + y) * 3;
console.log(resultado);

var resultado = (x + y) / 3;
console.log(resultado);

var resultado = (x / 2 + 3 * y + (x - 10)) / 2;
console.log(resultado);

console.log("-----------------------------------------");
const pi = 3.14159265359;
var raio = 5;
console.log(
  "Comprimento de uma circunferência de raio =",
  raio,
  "cm :",
  2 * pi * raio
);
console.log("Tentando alterar o valor de pi, vai obter uma mensagem de erro!");
// pi = 3,14 //a linha foi comentada pois se estiver no código ela apresentara erros.

//Operadores Relacionais ou comparadores
var x = 22;
var y = 5;
console.log("-----------------------------------------");
console.log("x =", x, "| y =", y);
console.log("x é igual a y?", x == y); //== = comparação
console.log("x é diferente que y?", x != y); //diferente de
console.log("x é maior que y?", x > y); //maior que
console.log("x é menor que y?", x < y); // menor que
console.log("x é maior ou igual a y?", x >= y); //
console.log("x é menor ou igual a y?", x <= y); //
