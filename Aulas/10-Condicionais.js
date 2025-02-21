//Condicional simples com IF
var anoNascimento = 2003;

if (anoNascimento > 2003) {
  console.log("A pessoa nasceu depois de 2003");
}

if (anoNascimento < 2003) {
  console.log("A pessoa nasceu antes de 2003");
}

if (anoNascimento == 2003) {
  console.log("A pessoa nasceu em 2003");
}

//Condições simples com IF-Else
var anoNascimento = 2005;
if (anoNascimento > 2000) {
  console.log("A pessoa nasceu depois de 2000");
} else {
  console.log("A pessoa nasceu em");
}

//Condições compostas com If
const login = "adimin";
const senha = "12345";

var loginUser = "Pafúncio";
var senhaUser = "aaaaa";

if (loginUser == login && senhaUser == senha) {
  console.log("Acesso permitido!");
} else {
  console.log("Acesso negado!"); //Para dar "permitido" tem que ser tudo igual(login e senha)
}

//Desvio condicional aninhado - IF-ELSE-IF-ELSE
var semaforo = "vermelho";

if (semaforo == "verde") {
  console.log("Siga");
} else if (semaforo == "amarelo") {
  console.log("Atenção");
} else {
  console.log("Pare!");
}

// Desvio condicional IF com bloco de comandos
var idade = 18;

if (idade <= 18) {
  console.log("\nEntrei no if...");
  idade++;
  console.log("Incrementa a idade..."), console.log("A nova idade é", idade);
  console.log("Agora estou saindo do bloco if");
}
console.log("Terminei");

//Criando variáveis locais com "let" (só existe dentro do bloco onde foram criadas)
var mes = "Agosto";
var dia = 15;

if (dia == 15 && mes == "Agosto") {
  let mensagem = "Hoje é dia 15 de Agosto";
  console.log(mensagem);
}
console.log("Tentando acessar a variável local fora do bloco, vai dar erro!");
//console.log(mensagem);

// Criando uma função com desvio condicional IF
const desconto = (valorCompra) => {
  let desconto = 0;
  if (valorCompra >= 1000) {
    desconto = valorCompra * 0.12;
  }
  return desconto;
};
var totalCompra = 950;
console.log(
  "\nValor total da compra: R$",
  totalCompra,
  "::: Desconto: R$",
  desconto(totalCompra)
);
totalCompra = 1800;
console.log(
  "\nValor total da compra: R$",
  totalCompra,
  "::: Desconto: R$",
  desconto(totalCompra)
);

//Desvio condicional If inline (ternário) - "se fizer algo faz um, se fizer outro faz 2"
// condição ?expressão_se_verdadeira | :expressão_se_falso
var preco = 500;
var resultado = preco <= 100 ? "Tá barato!" : "Vish tá caro!"; //O operador acima é o mesmo que escrever: if(preco <=100){resultado = "Tá barato!"}else{resultado = "Vish, tá caro!"}
// "?" = "então"
// ":" "ou"
console.log("\nPreço: R$", preco, "-", resultado);

//If ternário com somente uma expressão
//condição && expressão
var logado = true;
logado && console.log("Usuário está logado!"); //"se *logado*(true), então = frase" | caso *logado*(false) = não aparece no cosole

// DESVIO CONDICIONAL - Switch Case
console.log(
  "\n-------------------------Switch Case-----------------------------"
);
switch (1) {
  case 1:
    console.log("\nO usuário digitou o número 1!");
    break;

  default:
    console.log("\nO usário informou um número diferente de 1!");
    break;
}

//MENU DE SELEÇÃO
console.log("\n----------------------------------------------------------");
var menuSelecionado = "Contato";

switch (menuSelecionado) {
  case "Home":
    console.log("Você clicou no link 'Home'!");

    break;
  case "Quem somos":
    console.log("Você clicou no link 'Quem somos'");
    break;
  case "Contato":
    console.log("Você clicou no link 'Contato'");

  default:
    console.log("Opção inválida de menu");

    break;
}

console.log("\n----------------------------------------------------------");
//VARIAS OPÇÕES COM MESMO CASE - Switch Case
var mes = 10;
switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log("Primeiro trimestre!");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Segundo trimestre!");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Terceiro trimestre!");
    break;
  case 10:
  case 11:
  case 12:
    console.log("Quarto trimestre!");
    break;
  default:
    console.log("Mês inválido");
    break;
}
