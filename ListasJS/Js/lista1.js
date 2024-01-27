//Lista de exercícios introdutórios da Trilha OracleONE

//exercício 1 - Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert('Bem vindo ao nosso site!');

//exercício 2 - Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = 'Lua';

//exercício 3 - Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;

//exercício 4 - Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

//exercício 5 - Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;

//exercício 6 - Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert('Erro! preencha todos os campos');

//exercício 7 - Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let MensagemDeErro = 'Erro! preencha todos os campos';
alert(MensagemDeErro);

//exercício 8 - Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
let nomeUser = prompt('Qual é o seu nome?');

//exercício 9 - Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let idadeUser = parseInt(prompt('Qual a sua idade?'));

//exercício 10 - Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if(idadeUser >= 18){
    alert('Já pode tirar a habilitação!');
}