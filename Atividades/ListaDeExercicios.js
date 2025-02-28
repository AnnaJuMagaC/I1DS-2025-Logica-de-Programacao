//------------------------------------------------PARTE 1-----------------------------------------------------

//1.
console.log("---------------Atd 1--------------------");
var n1 = 7;
var n2 = 3;
var n3 = 2;

var soma = n1 + n2 + n3;
console.log(`Resultado soma: ${soma}`);

var subtracao = n1 - n2 - n3;
console.log(`Resultado subtração: ${subtracao}`);

var multiplicacao = n1 * n2 * n3;
console.log(`Resultado multiplicação: ${multiplicacao}`);

var divisao = n1 / n2 / n3;
console.log(`Resultado divisão: ${divisao}`);

//2.
console.log("\n---------------Atd 2--------------------");
var nt1 = 9;
var nt2 = 6;
var nt3 = 5;
var media = (nt1 + nt2 + nt3) / 3;

if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

//3.
console.log("\n---------------Atd 3--------------------");
var sBruto = 3000;
var dInss = sBruto * 0.08;
var dIr = sBruto * 0.05;
var sLiquido = sBruto - dInss - dIr;

console.log(`O valor do salário líquido é R$ ${sLiquido} reais`);

//4.
console.log("\n---------------Atd 4--------------------");
Math.PI;
var raio = 7;
console.log(
  "Comprimento de uma circunferência de raio =",
  raio,
  "cm :",
  2 * Math.PI * raio
);
console.log("Área do círculo =", Math.PI * raio ** 2);

//5.
console.log("\n---------------Atd 5--------------------");
console.log(
  `Você comprou dois celulares por ${
    1500 * 2
  } reais, logo recebeu um desconto de ${1500 * 2 * 0.05}`
);
console.log(
  `Você comprou três celulares por ${
    1500 * 3
  } reais, logo recebeu um desconto de ${1500 * 3 * 0.1}`
);
console.log(
  `Você comprou quatro celulares por ${
    1500 * 4
  } reais, logo recebeu um desconto de ${1500 * 4 * 0.15}`
);

//------------------------------------------------PARTE 2-----------------------------------------------------

//6.
console.log("\n---------------Atd 6--------------------");
var numeros = 15;
if (numeros % 3 == 0) {
  console.log("O número é muliplo de 3");
} else {
  console.log("O número não é multiplo de 3");
}

if (numeros % 5 == 0 && 5) {
  console.log("O número é muliplo de 5");
} else {
  console.log("O número não é multiplo de 5");
}

//7.
console.log("\n---------------Atd 7--------------------");
const verificarAnoBissexto = (ano) => {
  if (ano % 400 === 0) {
    return console.log(`${ano} é bissexto porque é divísivel por 400. `);
  }
  if (ano % 100 === 0) {
    return console.log(
      `${ano} não é bissexto porque é divísivel por 100, mas não por 400.`
    );
  }
  if (ano % 4 === 0) {
    return console.log(
      `${ano} é bissexto porque é divísivel por 4, mas não por 100.`
    );
  }
  return console.log(`${ano} não é bissexto porque não é dívisivel por 4`);
};

verificarAnoBissexto(2024);
verificarAnoBissexto(1900);
verificarAnoBissexto(3000);
verificarAnoBissexto(2869);

//8.
console.log("\n---------------Atd 8--------------------");
var numeros = 5;
switch (numeros) {
  case 0:
    console.log(`Domingo`);
    break;
  case 1:
    console.log(`Segunda-Feira`);
    break;
  case 2:
    console.log(`Terça-Feira`);
    break;
  case 3:
    console.log(`Quarta-Feira`);
    break;
  case 4:
    console.log(`Quinta-Feira`);
    break;
  case 5:
    console.log(`Sexta-Feira`);
    break;
  case 6:
    console.log(`Sábado`);
    break;

  default:
    console.log(`Opção Inválida`);
    break;
}
//9.
console.log("\n---------------Atd 9--------------------");
var km = 95;
var limite = 80;

if (km > limite) {
  console.log(`Você foi multado com R$ ${(km - limite) * 5}`);
} else {
  `Você não foi multado`;
}

//10
/*Menos de R$50,00: sem desconto. 
o Entre R$50,00 e R$100,00: 5% de desconto. 
o Acima de R$100,00: 10% de desconto*/
console.log("\n---------------Atd 10--------------------");
var valorCompra = 50;

if (valorCompra >= 50 && 100) {
  console.log(`Você tem um desconto de R$ ${valorCompra * 0.05}`);
} else if (valorCompra > 100) {
  console.log(`Você tem um desconto de R$ ${valorCompra * 0.1}`);
} else {
  console.log(`Não tem desconto`);
}

//------------------------------------------------PARTE 3-----------------------------------------------------

//11.
console.log("\n---------------Atd 11--------------------");
for (let n = 0; n < 51; n++) {
  n % 2 == 0 && console.log(n);
}

//12.
console.log("\n---------------Atd 12--------------------");
for (let i = 1; i < 11; i++) {
  console.log(i * 9);
}

//13.
console.log("\n---------------Atd 13--------------------");
var soma = 0;
var i = 1;
while (i <= 100) {
  soma += i;
  i++;
}
console.log(soma);
//14.
console.log("\n---------------Atd 14--------------------");
var numeros = [3, 5, 7, 9, 11];
console.log(numeros.length);
var somatoria = 0;
for (let i = 0; i < numeros.length; i++) {
  somatoria += numeros[i];
}
console.log(`A soma dos elementos é ${somatoria}`);

//15.
console.log("\n---------------Atd 15--------------------");
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

//------------------------------------------------PARTE 4-----------------------------------------------------

//16.
console.log("\n---------------Atd 16--------------------");
var diaSemana = [
  `Segunda-Feira`,
  `Terça-Feira`,
  `Quarta-Feira`,
  `Quinta-Feira`,
  `Sexta-Feira`,
  `Sabado`,
  `Domingo`,
];
console.log(diaSemana[2]);

//17.
console.log("\n---------------Atd 17--------------------");
var frutas = [`Morango`, `Banana`, `Uva`, `Maracujá`, `Kiwi`];
console.table(frutas);
var posicao = frutas.indexOf(`Uva`);
frutas.splice(posicao, 1);
console.table(frutas);

//18.
console.log("\n---------------Atd 18--------------------");
var array = [2, 41, 62, 7, 33];
for (let i = 0; i < array.length; i++) {
  if (array[i] > 10) {
    console.log(array[i]);
  } else {
    console.log();
  }
}
//19.
console.log("\n---------------Atd 19--------------------");
var frase = `JavaScript é incrível`;
console.log(frase.toUpperCase(frase));

//20.
console.log("\n---------------Atd 20--------------------");
var texto = `A vida é bela e cheia de desafios`;
console.log(`O texto ${texto} tem oito palavras`);
//Sorry teacher não sabia

//------------------------------------------------PARTE 5-----------------------------------------------------

//21.
console.log("\n---------------Atd 21--------------------");
var array = [12, 45, 67, 89, 23];

//22.
console.log("\n---------------Atd 22--------------------");

//23.
console.log("\n---------------Atd 23--------------------");

//24.
console.log("\n---------------Atd 24--------------------");

//25.
console.log("\n---------------Atd 25--------------------");
var vetor = [5, 10, 7, 2, 7];
