/***************************************************** 
                Lista de Exercícios 
*****************************************************/
//1.Crie um array de frutas com os seguintes elementos: Banana, Maça, Pera, Uva, Morango
console.log("----------------------Atividade 1-----------------------");
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.table(frutas);

//2. Adicione Tangerina no final
console.log("----------------------Atividade 2-----------------------");
frutas.push("Tangerina");
console.table(frutas);

//3. Adicione Goiba no inicio
console.log("----------------------Atividade 3-----------------------");
frutas.unshift("Goiaba");
console.table(frutas);

//4. Exiba o conteúdo do índice 5
console.log("----------------------Atividade 4-----------------------");
console.log(frutas[5]);

//5. Exclua o elemento Uva
console.log("----------------------Atividade 5-----------------------");
var posicao = frutas.indexOf("Uva");
frutas.splice(posicao, 1);
console.table(frutas);

//6. Crie uma cópia do array apenas com os elementos com índice 2, 3 e 4
console.log("----------------------Atividade 6-----------------------");
var copia = frutas.slice(2, 5);
console.table(copia);
