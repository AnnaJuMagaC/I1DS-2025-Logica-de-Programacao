/*********************************************************************** 
    Lista de Exercícios – Lógica de Programação em JavaScript (Console)
 ***********************************************************************


1. Par ou Ímpar?
Escreva um programa que peça um número ao usuário e exiba no console se ele é par ou ímpar.


📌 Dica: Use o operador % para verificar o resto da divisão.
------------------------------------------------------------------------


2. Tabuada
Peça ao usuário um número e exiba no console a tabuada desse número de 1 a 10.


📌 Exemplo (se o número for 3):
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
------------------------------------------------------------------------


3. Fatorial de um Número
Solicite um número ao usuário e exiba no console o seu fatorial.


📌 Fatorial de 5: 5! = 5 × 4 × 3 × 2 × 1 = 120
------------------------------------------------------------------------


4. Soma dos Números de um Array
Crie um programa que tenha um array com números aleatórios e exiba no console a soma total desses números.


📌 Exemplo:
let numeros = [10, 20, 30, 40];  
// Saída: Soma = 100
------------------------------------------------------------------------


5. Ordenação de Números
Peça ao usuário para inserir vários números separados por vírgula. Depois, exiba os números ordenados de forma crescente no console.


📌 Exemplo:
Entrada: 8, 3, 5, 1, 9  
Saída: 1, 3, 5, 8, 9 
------------------------------------------------------------------------


*/

//1.
console.log("\n----------------------Atividade 2-----------------------");
const imparpar = (num) => {
  return num % 2 == 0 ? "O número é par" : "O número é ímapar";
};
console.log(imparpar(10));
console.log(imparpar(5));
console.log(imparpar(2));

//2.
console.log("\n----------------------Atividade 2-----------------------");

var tabuada = 6;
console.log(tabuada, "x 1 =", tabuada * 1);
console.log(tabuada, "x 2 =", tabuada * 2);
console.log(tabuada, "x 3 =", tabuada * 3);
console.log(tabuada, "x 4 =", tabuada * 4);
console.log(tabuada, "x 5 =", tabuada * 5);
console.log(tabuada, "x 6 =", tabuada * 6);
console.log(tabuada, "x 7 =", tabuada * 7);
console.log(tabuada, "x 8 =", tabuada * 8);
console.log(tabuada, "x 9 =", tabuada * 9);
console.log(tabuada, "x 10 =", tabuada * 10);

//3.
console.log("\n----------------------Atividade 3-----------------------");

console.log("Fatorial de 5! =", 5 * 4 * 3 * 2 * 1);

//4.
console.log("\n----------------------Atividade 4-----------------------");
let numeros = [10, 20, 30, 40];
let soma = numeros[0] + numeros[1] + numeros[2] + numeros[3];
console.log("A soma de todos os numeros é:", soma);

//5.
console.log("\n----------------------Atividade 5-----------------------");
const numeroz = [8, 3, 5, 1, 9];
console.table(numeroz);
console.log(numeroz.sort());

/*Estourando o cartão - versão While - utilizando o navegador
1. Crie uma variável e solicite o seu nome; 
2. Crie uma variável e solicite o nome ao seu banco; 
3. Crie uma variável e solicite a sua agência; 
4. Crie uma variável e solicite o número da conta; 
5. Crie uma variável e solicite o saldo da conta; 
6. Exiba ao usuário os dados e o saldo da conta; 
7. Efetue e Exiba ao usuário 5 movimentações na conta utilizando o laço while com valores aleatórios; 
8. Exiba ao usuário novamente os dados e o saldo da conta;
*/
/*var nome = prompt("Informe seu nome:");
var banco = prompt("Informe seu banco:");
var agencia = prompt ("Informe sua agência:");
var conta = prompt ("Informe sua conta");
var saldo =prompt ("Informe seu saldo:");
console.log(`Olá ${nome}! Seu banco ${banco} numero de conta: ${conta} | seu saldo é ${saldo}`)*/

/*var contador = 1;
while (contador <= 5) {
  let gasto = Math.random() * 100; //Valor aleatório entre 0 e 99.999...
  saldo -= gasto;
  contador++;
}
//console.log(saldo.toFixed(2));//Deixa o valor decimal somente com 2
console.log(
  `Olá ${nome}! Seu banco ${banco} numero de conta: ${conta} | seu saldo é ${saldo.toFixed(
    2
  )}`
);

/*********************************************************************** 
    Lista de Exercícios – Lógica de Programação em JavaScript (Console)
 ************************************************************************/

/*
    Supondo que a população de um país A seja de a habitantes com uma taxa anual de crescimento de 3% e que a população de um país B seja de b habitantes, com uma taxa anual de crescimento de 1,5%. Fazer um algoritimo que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas essas taxas de crescimento
    */

//Definir a população A e a população B; População A cresce 3% a cada ano; população B cresce 1.5% a cada ano;

var a = 800000;
var b = 950000;
var ano = 0;

while (a < b) {
  ano++;
  a += (a * 3) / 100;
  b += (b * 1.5) / 100;
  console.log(
    `Ano: ${ano} | População A: ${Math.round(a)} | População B: ${Math.round(
      b
    )}`
  );
}
console.log(
  `A quantidade de anos para a população A superar ou igualar a B é de ${ano}`
);

//Math.round = arredondar o número
