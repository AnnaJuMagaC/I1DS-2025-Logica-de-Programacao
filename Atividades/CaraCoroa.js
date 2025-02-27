// Jogo cara e coroa - melhor de três rodadas - aleatório - DO-WHILE
//apresentar um placar das rodadas ex:
var cara = 0;
var coroa = 0;
var i = 1;

do {
  let face = Math.random() * 100;
  face < 50 ? cara++ : coroa++;
  i++;
} while (i <= 3);

console.log(`------------------------------------`);
console.log(`---------------PLACAR---------------`);
console.log(`------------------------------------`);
console.log(`Cara: ${cara}`);
console.log(`Coroa: ${coroa}`);
console.log(`------------------------------------`);
