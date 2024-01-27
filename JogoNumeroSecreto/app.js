// Importante: Todas as alterações aqui estão sendo feitas através de um código base.
alert('Bem vindo ao jogo do número secreto');
let numeroMaximoR = 1000;
let secretNumber = parseInt(Math.random() * numeroMaximoR + 1);
let qntdTentativas = 1;
let choseNumber;

while(choseNumber != secretNumber){
    choseNumber = prompt(`Escolha um número entre 1 a ${numeroMaximoR}`);

    if (choseNumber == secretNumber){
        break;
    }else if(choseNumber > secretNumber){
        alert(`O número secreto é menor que ${choseNumber}!`);
    }else{
        alert(`O número secreto é maior que ${choseNumber}!`);
    }

    qntdTentativas++;
}

/* Primeiro uso de um operador ternário, nesse caso, ele faz uma condição, se qntdTentativas for maior que 1, 
então ele receberá uma string com a palavra (tentativas), caso contrário, ele receberá a palavra (tentativa) */
let palavraTentativas = qntdTentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí, você descobriu o número secreto: ${secretNumber}, em ${qntdTentativas} ${palavraTentativas}`);

// if(qntdTentativas > 1){
//     alert(`Isso aí, você descobriu o número secreto: ${secretNumber}, em ${qntdTentativas} tentativas`);
// }else{
//     alert(`Isso aí, você descobriu o número secreto: ${secretNumber}, em ${qntdTentativas} tentativa`);
// }

alert('FIM DE JOGO');

