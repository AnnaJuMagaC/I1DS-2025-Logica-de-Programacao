//---------------------------------------OBJETOS EM JAVESCRIPT-------------------------------------------
//Definido uma classe em JavaScript (Pessoa)

//1- Classe (O molde'(modelo)' dos objetos) - singular
/*class Pessoa {//Criamos uma classe chamada Pessoa (o molde)
    constructor(pNome,pIdade){//O construtor é como um formulário
    this.nome = pNome
    this.idade = pIdade
}
}*/

//2-Objeto: Criado um personagem/aluno
//var aluno1 =new Pessoa("Anna", 16) //criamos um aluno Anna com 16 anos - Usar o molde que já possui para criar algo novo
//aluno1 é um objeto baseado no molde Pessoa

//3-Métodos - Ações que um objeto pode fazer
class Pessoa {
  constructor(pNome, pIdade) {
    this.nome = pNome;
    this.idade = pIdade;
  }
  apresentarSe() {
    console.log(`Oi meu nome é ${this.nome}, e eu tenho ${this.idade} anos.`);
  }

  envelhecer() {
    this.idade++;
  }
}

var aluno1 = new Pessoa("Anna", 16); //Criamos uma aluna chamada Anna
aluno1.apresentarSe(); //Oi meu nome é Anna, e eu tenho 16 anos
aluno1.envelhecer();
aluno1.apresentarSe();

//Class: Molde para criar objetos ou uma ficha de modelo de jogador de futebol

//Objeto: Uma instância real do model, com Anna ou Arthur

//Atributo: Caracteristicas do objeto, como nome e idade

//Método: Ações que o objeto pode fazer, como falar sua idade ou envelhecer/Todas as funções de uma determinda classe

//-----------------------------------------------------------------------------------------------------//
//Crie uma class para jogador de futebol onde tenha nome, idade e posição
//O objeto criado com base no jogador de futebol poderá apresentar-se
//Da seguinte forma: Olá, meu nome é "Neymar", tenho "33" anos e jogo na posição"Atacante"
//Crie 3 objetos e faça com que eles se apresentem

class Jogador {
  constructor(jNome, jIdade, jPosicao) {
    this.nome2 = jNome;
    this.idade2 = jIdade;
    this.posicao = jPosicao;
  }
  apresentarSe() {
    console.log(
      `\nOlá meu nome é ${this.nome2}, tenho ${this.idade2} anos e jogo na posição ${this.posicao}`
    );
  }
}

var jogador1 = new Jogador("Neymar", 33, "Atacante"); //Objeto criado
jogador1.apresentarSe();

var jogador2 = new Jogador("Cristiano Ronaldo", 40, "Atacante");
jogador2.apresentarSe();

var jogador3 = new Jogador("Messi", 37, "Atacante");
jogador3.apresentarSe();

//-----------------------------------------------------------------------------------------------------//
//Criando classe Retângulo

class Retangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }

  alterarComprimento(comprimento) {
    this.comprimento = comprimento;
  }

  alterarLargura(largura) {
    this.largura = largura;
  }

  obterArea() {
    return this.comprimento * this.largura;
  }
}

var ret = new Retangulo(10, 15);
console.table(ret);

//Apresentando valores (atributos) do objeto instanciado
console.log(`Comprimento: ${ret.comprimento}`);
console.log(`Largura: ${ret.largura}`);

//Apresentando a área
console.log(`Área: ${ret.obterArea()}`);

//Alterando o comprimento do retangulo
ret.alterarComprimento(20);
console.table(ret);

//Alterar a largura do retangulo
ret.alterarLargura(30);
console.table(ret);

//Calculando a área
console.log(`Área: ${ret.obterArea()}`);

/*********************************************************************** 
    Lista de Exercícios – Lógica de Programação em JavaScript (Console)
 ***********************************************************************/
//Crie e utilize uma classe "Sorvete" contendo as propriedades: sabor, preço e tamanho(P / M / G)
//Crie um sorvete de chocolate pequeno
//Crie um sorvete de morango grande
//Crie um sorvete de pistache médio
//Altere o preço do sorvete de morango grande para 10,51
//Altere o tamanho do sorvete de pistache médio para grande

class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
}

var sorvete1 = new Sorvete("chocolate", 3.5, "P");
var sorvete2 = new Sorvete("morango", 3.5, "G");
var sorvete3 = new Sorvete("pistache", 5, "M");

console.log("\n------------------------------------------------");
console.log(
  `Sorvete escolhido: ${sorvete1.sabor} | ${sorvete1.tamanho} | Valor: R$ ${sorvete1.preco}`
);

sorvete2.preco = 10.51;
console.table(sorvete2);

sorvete3.tamanho = "G";
console.table(sorvete3);
