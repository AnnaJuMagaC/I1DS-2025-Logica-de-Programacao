function somar2Mais2() {
  return 2 + 2;
}
console.log(somar2Mais2());

//Criando uma função que soma dois valores e retorna o resultado

function somar(valor1, valor2) {
  return valor1 + valor2;
}
console.log("5 + 3 =", somar(5, 3));
console.log("12 + 8 =", somar(12, 8));
console.log("6,5 + 2,12 =", somar(6.5, 2.12));

//Criando uma unção que escreve "Bom dia!"
function bomDia(nome) {
  console.log("\nOlá,", nome, "\nMuito bom dia pra você!");
}
bomDia("Anna");

//Criando uma unção que calcula e retorna o desconto em uma venda
function desconto(valor) {
  return valor * 0.05;
}

//console.log("\nO desconto do produto no valor de R$100,00 é R$", desconto(100));
var totalPedido = 300;
var totalDesconto = desconto(totalPedido);
var valorFinal = totalPedido - totalDesconto;

console.log("\n----------------------------------------------");
console.log("Total do pedido: R$", totalPedido);
console.log("Total dos descontos: R$", totalDesconto);
console.log("Valor líquido: R$", valorFinal);
console.log("----------------------------------------------");

//Criando uma função que apresenta pessoas com arrow function
const apresentaPessoas = (nomePessoa, idade, cidade) => {
  console.log(
    "\nApresento a vocês:",
    nomePessoa,
    "que tem",
    idade,
    "anos e mora em",
    cidade
  );
}; //Apresento a vocês: Nome "Pessoa", que tem "XX" anos e mora em "Cidade"*/
apresentaPessoas("Zuleika", 19, "Brotas");
apresentaPessoas("Pafúncio", 21, "Jaú");
apresentaPessoas("Epaminondas", 16, "Barra Bonita");
