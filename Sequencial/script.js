//1.	Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console 
let nome = prompt("Digite seu nome: ");
alert("Seu nome é: "+ nome);
console.log("Seu nome é: "+ nome);

//2.	Crie um script que leia do usuário dois números e mostre a soma desses dois números.
let n1 = parseInt(prompt("Digite o primeiro número: "));
let n2 = parseInt(prompt("Digite o segundo número: "));

console.log("A soma dos dois número é: "+ (n1+n2));

//3.	Crie um script que leia duas notas do usuário e calcule a média do aluno.
let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));

console.log("A média entre os números é: "+ (nota1+nota2)/2);

//4.	Crie um programa leia o ano em que o usuário nasceu e diga a idade atual dele. 
let ano_nascimento = parseInt(prompt("Digite seu ano de nascimento: "));
let ano_atual = new Date().getFullYear();

console.log("Sua idade é: "+ ano_atual - ano_nascimento);

//5.	Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
let valorHora = parseFloat(prompt("Digite o valor por hora: "));
let quantidadeHoras = parseInt(prompt("Digite a quantidade de horas trabalhadas: "));

console.log("O total do salário é de: "+ valorHora * quantidadeHoras);

//6.	Faça um script que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.    C = 5 * ((F-32) / 9).
let fahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit: "));
let celsius = 5 * ((fahrenheit - 32) / 9);

console.log("A temperatura em graus Celsius corresponde a: "+celsius+" graus");

