// //Exercício 1 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt('Qual é o dia da semana?');

if(diaSemana == 'sabado' || diaSemana == 'domingo'){
    alert('Bom final de semana!');
}else{
    alert('Boa semana!');
}

//Exercício 2 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numDigitado = prompt('Digite um número');

if(numDigitado >= 0){
    alert('O número que você digitou é positivo!');  
}else{
    alert('O número que você digitou é negativo!');
}

//Exercício 3 (Jogo de advinhação de um número pré definido, com uma pontuação inicial de 300 pontos, e -50 para cada tentativa falha);
let initialPoints = 300;
let secretNumber = 5;
alert('Jogo de adivinhação');
let choseNumber = parseInt(prompt('Escolha um número de 1 a 10'));

while(choseNumber != secretNumber){
    alert('Número incorreto');
    initialPoints =- 50;
    choseNumber = parseInt(prompt('Escolha outro número'));
}

if(initialPoints >= 100){
    alert(`Parabéns, você venceu! Sua pontuação final: ${initialPoints}`);
}else{
    alert('Tente novamente para ganhar');
}

//Exercício 4 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoConta = 1000;
alert(`Saldo disponível na conta: R$${saldoConta}`);

//Exercício 5 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeUser = prompt('Insira o seu nome:');
alert(`Seja bem vindo! ${nomeUser}`);