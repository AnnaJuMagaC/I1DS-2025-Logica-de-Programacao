// Criando variáveis com "var" (var nome_variavel = <valor>;)
var nome = "Tibúrcio";
console.log("Meu nome é", nome);
var idade = 23;
console.log("Meu nome é", nome, ", e eu tenho ", idade, "anos");
idade = idade + 1;
console.log("Meu nome é", nome, ", e agora eu tenho ", idade, "anos");
console.log("---------------------------------");

//JavaScript trabalha com sistema case sensitive (maiúscula são diferentes de minúsculas)
console.log("Criando uma variável teste e tentando acessar com testE.");
let Teste = "variável teste!";
//console.log(testE);
console.log(Teste);

//Regras para nomear IDENTIFICADORES
//Podem iniciar com 'A'-'Z', 'a'-'z','_' ou '$'
let MinhaVariável = 10;
let OutraVariável = 2.65;
const _minhaconstante = "Uma constante qualque!";
var $minhaVariável = -5;

//Variáveis Lógicasd (boolean)
var nome = "Anna Julia";
var rica = false;
var eestudante = true;
console.log("Nome:", nome, "É aluna?", eestudante, "| É rica?", rica);
