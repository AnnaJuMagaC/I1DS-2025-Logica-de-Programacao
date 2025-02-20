/***************************************************** 
                Lista de Exercícios 
*****************************************************/

/*1. Crie uma função que receba a idade de uma pessoa e retorne uma mensagem informando se ela pode votar no Brasil
Regras para votar no Brasil:
-Menores de 16 anos: Não podem votar; 
-Entre 16 e 17 anos ou acima de 70 anos: O voto é facultativo;
-Entre 18 e 70 anos: O voto é obrigatório*/

console.log("----------------------Atividade 1-----------------------");

const podevotar = (idade) => {
  if (idade < 16) {
    return "Não pode votar!";
  } else if (idade >= 18 && idade < 70) {
    return "Pode votar!";
  } else {
    return "Voto facultativo!";
  }
};
var nome = [
  "Matheus Miranda",
  "Batata",
  "Ygonna",
  "Oh Denise",
  "Sefalade Maisgurizão",
];
console.log("Olá", nome[0], "você tem 16 anos e", podevotar(16));
console.log("Olá", nome[1], "você tem 22 anos e", podevotar(22));
console.log("Olá", nome[2], "você tem 70 anos e", podevotar(70));
console.log("Olá", nome[3], "você tem 12 anos e", podevotar(12));
console.log("Olá", nome[4], "você tem 67 anos e", podevotar(67));
