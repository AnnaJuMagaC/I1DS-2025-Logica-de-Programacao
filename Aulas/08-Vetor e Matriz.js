// Criando variáveis do tipo array (VETOR)
var numeros = [1, 2, 3, 4, 5];
console.log(numeros); // imprimindo os dados do array
console.table(numeros); // imprimi os dados em forma de tabela
console.log(numeros[1]); // imprimindo o íitem de índice 1
console.log("O vetor tem:", numeros.length, "elementos.");

var dinos = [
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Titanossauro",
];
console.log(dinos); //imprimindo os dados
console.table(dinos); //imprimindo os dados em forma de tabela
console.log("O vetor dinos tem:", dinos.length, "elementos.");

// Adicionamos elementos a um vetor existente
dinos.push("Brontossauro"); // Adiciona um elemento no final do vetor
console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos.");

dinos.unshift("Tricerátopes"); // Adiciona um elemento no início do vetor
console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos.");

//Obtendo um elemento com base em seu índice (posição)
console.log("1ª posição:", dinos[0]);
console.log("3ª posição:", dinos[2]);
console.log("20ª posição:", dinos[19]); //quando não temos o item, apresenta um erro (undefined)

//Alterando elementos com base em seu índice (posição)
dinos[3] = "Velociraptor";
console.table(dinos);

//Remover elementos do vetor
var dinos = [
  "Tricerátores",
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
];
console.table(dinos);

dinos.pop(); //Remove o último elemnto do array (VETOR)
console.table(dinos);

dinos.shift(); //Removendo o primeiro item do array (VETOR)
console.table(dinos);

dinos.splice(1, 1); //Remove o elemento de índice 1 (a partir da posição 1, exclui 1 elemento)
console.table(dinos);

//Procurando o índice (posição) de elementos
var dinos = [
  "Tricerátops",
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
  "Ictiossauro",
  "Pterodáctilo",
  "Espinossauro",
];

console.log(dinos);
console.table(dinos);

var elementoProcurado = "Pterodáctilo";
var posição = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no índice:", posição);

elementoProcurado = "Estegossauro";
posição = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no índice:", posição);

elementoProcurado = "Catellossauro";
posição = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no índice:", posição);
console.log(
  "indexOf = -1 significa que o elemento não foi encontrado no vetor!"
);

//Excluindo um  elemento com base no seu nome
var elementoExcluir = "Pterodáctilo";
var posição = dinos.includes(elementoExcluir);
dinos.splice(posição, 1);
console.table(dinos);

//Criando uma cópia de um array (VETOR)
var cópia = dinos.slice();
console.log("Copiando o Vetor!");
console.table(cópia);

//Criando um array numérico
var numeros = [4, 3, 1, 9, 7, 2];
console.table(numeros);

//Em primeiro os elementos das posições ímapares
console.log(numeros[1]);
console.log(numeros[3]);
console.log(numeros[5]);

// Verificando se o array tem um item
console.log("Contém 9:", numeros.includes(9));
var contem0 = numeros.includes(0);
console.log("Contém 0:", contem0);

//Ordenando os elementos do vetor- Crescente
numeros.sort();
console.table(numeros);

//Invertando a ordem ou posição dos itens- Decrescente
numeros.reverse();
console.table(numeros);

// Alterando o valor de um elemento com base em sua posição
numeros[2] = [5];
console.table(numeros);

numeros[0] += 3;
console.table(numeros);

numeros[5] = numeros[0] + numeros[1];
console.table(numeros);

// Criando array´s híbridos
var hibrido = [10, "Pafúncio", 3.45, "Zuleika", 7];
console.table(hibrido);

hibrido[1] = 9;
console.table(hibrido);

hibrido[0] = "Tibúrcio";
console.table(hibrido);

//---------------------------------------------------CRIANDO UMA MATRIZ---------------------------------------
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [1, 3, 9],
];
console.table(matriz);

// Obtendo elemento com base em seus índices
console.log("Matriz[1,2] =", matriz[1][2]);
console.log("Matriz[2,0] =", matriz[2][0]);

//Alterando valores de elementos com base em seus índices
matriz[1][2] = 20;
matriz[2][0] = 30;
console.table(matriz);
