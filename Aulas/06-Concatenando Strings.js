console.log(1 + 1); //n°+n°=n°
console.log("1" + "1"); //texto+texto=texto
console.log("1" + 1); //texto+n°=texto
console.log(1 + "1"); //n°+texto=texto

var texto1 = "Estudar JavaScript";
var texto2 = " é muito legal"; //colocar espaço no começo, quando não é começo de frase
console.log(texto1 + texto2);

var resultado = texto1 + texto2;
console.log(resultado);

resultado += "\n E nós vamos ficar bons nisso!"; //+= = resultado + resultado | digitar o mesmo var 2x
console.log(resultado);
