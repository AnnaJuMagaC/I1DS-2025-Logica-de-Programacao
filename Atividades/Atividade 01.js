/***************************************************** 
                Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta;
*/

var nome = "Rogéria";
var banco = "Santander";
var agencia = 7;
var conta = "1315-0";
var saldo = 2030;
console.log("*****************", banco, "******************");
console.log("Cliente:", nome);
console.log("Agência:", agencia, "| Conta", conta);
console.log("Seu saldo é de R$", saldo);

console.log("    + Depósito: R$75,00");
saldo = saldo + 75;
console.log("    - Saque: R$10,00");
saldo = saldo - 10;
console.log("    + Depósito: R$1501,00");
saldo = saldo + 1501;
console.log("    + Depósito: R$3,00");
saldo = saldo + 3;
console.log("    - Saque: R$302,00");
saldo = saldo - 302;
//saldo 2= 302; |outra maneira de subtrair o > saldo = saldo - 302

console.log("*****************", banco, "******************");
console.log("Cliente:", nome);
console.log("Agência:", agencia, "| Conta", conta);
console.log("Seu saldo é de R$", saldo);
