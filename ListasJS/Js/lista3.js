//Exercício 1 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;

while (contador <= 10){
    console.log(contador);
    contador++;
}

//Exercício 2 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador2 = 10;

while (contador2 >= 0){
    console.log(contador2);
    contador2--;
}

// //Exercício 3 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contRegressiva = parseInt(prompt('Digite um número para a contagem regressiva'));

while(contRegressiva >= 0 ){
    console.log(`Contagem regressiva: ${contRegressiva}`);
    contRegressiva--;
}

//Exercício 4 - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contProgressiva = parseInt(prompt('Digite um número para a contagem progressiva'));
let pontoPartida = 0
while(pontoPartida <= contProgressiva){
    console.log(`Contagem progressiva: ${pontoPartida}`);
    pontoPartida++;
}
