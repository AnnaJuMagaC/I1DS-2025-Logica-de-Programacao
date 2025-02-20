/***************************************************** 
                Lista de Exercícios 
*****************************************************/

//1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa e retorne sua idade
console.log("----------------------Atividade 1-----------------------");

function nascimento(nome, ano) {
  let idade = 2025 - ano;
  console.log("\nA", nome, "nasceu no ano", ano, "e tem", idade, "anos");
}
nascimento("Anna", "2000");

//2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Km ele pode viajar com esse combustível. Considere que o veículo faz uma média de 12Km/L
console.log("\n----------------------Atividade 2-----------------------");

const combustível = (litros) => {
  return litros * 12;
};
var car1 = 20;
var car2 = 8;
var car3 = 2;
console.log("\nCarro 1:", car1, "->", combustível(car1), "Kms.");
console.log("Carro 2:", car2, "->", combustível(car2), "Kms.");
console.log("Carro 3:", car3, "->", combustível(car3), "Kms.");
