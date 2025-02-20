/***************************************************** 
                Lista de Exercícios 
*****************************************************/

//1. Crie um vetor que recebrá dados de um usuário
console.log("----------------------Atividade 1-----------------------");
var dados = [];
console.log("Favor informar seu nome:");
dados.push("Anna");

console.table(dados);

console.log("Informe seu CPF:");
dados.push("123.456.789.-09");

console.table(dados);

//Mostre aos usuários os dados e de um bom dia!
console.log("Bom dia", dados[0], "seu CPF é:", dados[1]);
