/***************************************************** 
                Lista de Exercícios 
*****************************************************/
/*  
1. Realize as seguintes instruções: 
- Crie uma variável texto e armazene o nome de uma pessoa 
- Crie uma variável numérica e armazene o ano de nascimento 
- Escreva "Nome da pessoa" nasceu em "ano de nascimento" 
- Calcule a idade da pessoa 
- Escreva "Nome da pessoa" tem "idade" anos 
2. Se um retângulo possui comprimento=12cm e largura=6cm, qual a sua área?  
3. E se adicionarmos uma dimensão altura=5cm, qual seria o volume?  
4. Se temos uma equação 2x² + 3x -1, qual seria o valor de delta?  
5. Um cliente fez um compra no valor de R$ 450,00 e obteve 3% de desconto. 
Qual o valor do desconto e o valor final da compra ?  
6. Um carro viaja por três horas e meia a uma velocidade média de 95 Km/h.  
Calcule a distância percorrida, sabendo que Vmedia = S/T 
*/

console.log("----------------------Atividade 1-----------------------");
var nome = "Anna";
var nascimento = "2012";
console.log(nome, "nasceu em", nascimento);

var atualmente = "2025";
console.log("\nEla tem", atualmente - nascimento, "anos");

console.log("\n----------------------Atividade 2-----------------------");
x = 12; //var base = 12;
y = 6; //var altura = 6;
//var área = base * altura;
console.log("\nA área do retângulo é:", x * y); //console.log("A área do retângulo de base", base,"e altura", altura, "é:", área);

console.log("\n----------------------Atividade 3-----------------------");
z = 5; //var profundidade = 5;
console.log("\nO volume do retângulo é:", x * y * z); //var volume =  área * profundidade | clg("O volume do retângulo é:", volume )

console.log("\n----------------------Atividade 4-----------------------");
var a = 2;
var b = 3;
var c = -1;
var delta = b ** 2 - 4 * a * c;
console.log("\nO valor de delta é:", delta);

console.log("\n----------------------Atividade 5-----------------------");
var compra = 450;
var desconto = 0.03; // var desconto = 3 / 100
desconto = compra * desconto;
var total = compra - desconto;
console.log(
  "\nCompra: R$",
  compra,
  " - Desconto: R$",
  desconto,
  " - Total: R$",
  total
);

console.log("\n----------------------Atividade 6-----------------------");
var tempo = 3.5;
var velocidade = 95;
var distância = tempo * velocidade;
console.log("\nA distância percorrida é de:", distância, "Km");
