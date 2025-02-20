/***************************************************** 
                Lista de Exercícios 
*****************************************************/

//1. Crie e imprima um vetor com 5 elementos numéricos
//console.log("----------------------Atividade 1-----------------------");

var numeros = [1, 3, 7, 4, 2];

//2. Imprima na tela o 3° elemento do vetor
console.log("----------------------Atividade 2-----------------------");

console.log(numeros[2]);

//3. Faça uma cópia do vetor original
console.log("----------------------Atividade 3-----------------------");

var copia = numeros.slice();
console.log("Copiando vetor:");
console.table(numeros);

//4. Altere o conteúdo do vetor cópia para que seus valores sejam o dobro dos valores do vetor original
console.log("----------------------Atividade 4-----------------------");

copia[0] = numeros[0] * 2;
copia[1] = numeros[1] * 2;
copia[2] = numeros[2] * 2;
copia[3] = numeros[3] * 2;
copia[4] = numeros[4] * 2;
console.table(numeros);

//5. Crie uma matriz 3x3
console.log("----------------------Atividade 5-----------------------");

var matriz = [
  [1, 3, 7],
  [4, 22, 6],
  [17, 9, 8],
];
console.table(matriz);

//6. Imprima os valores da diagonal principal
console.log("----------------------Atividade 6-----------------------");

//console.log("Matriz[0,0] =", matriz[0][0]);
//console.log("Matriz[1,1] =", matriz[1][1]);
//console.log("Matriz[2,2] =", matriz[2][2]);
console.log(matriz[0][0], " | ", matriz[1][1], " | ", matriz[2][2]);
console.table(matriz);
