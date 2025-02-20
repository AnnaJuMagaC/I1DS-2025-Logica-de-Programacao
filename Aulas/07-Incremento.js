//Operadores de Incremento e Decremento / pré e pós incremento
var idade = 16;
console.log(idade);

idade++; //idade = idade + 1
console.log(idade);

idade--; //idade = idade - 1
console.log(idade);
console.log("---------------------------");

var NovaIdade = idade++;
console.log("Idade:", idade, " | Nova Idade:", NovaIdade);

NovaIdade = ++idade;
console.log("Idade:", idade, " | Nova Idade:", NovaIdade);

// Operadores de Atribuição Aritimética
console.log("---------------------------");
var x = 10;
var y = 5;
console.log("x =", x, " | y =", y);

x += y; //x = x + y | pegar oq tem dentro da variável e somar com outra coisa
console.log("x =", x, " | y =", y);

x -= y; //x = x - y
console.log("x =", x, " | y =", y);

x *= y; //x = x * y
console.log("x =", x, " | y =", y);

x /= y; // x = x / y
console.log("x =", x, " | y =", y);

x **= y; // x = x elevado a y
console.log("x =", x, " | y =", y);

x %= y; // x = resto da divisão inteira x por y
console.log("x =", x, " | y =", y);

x = 13;
x %= y; // x = resto da divisão inteira x por y
console.log("x =", x, " | y =", y);
