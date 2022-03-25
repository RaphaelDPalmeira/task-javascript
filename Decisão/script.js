//1.	Faça um Programa que peça dois números e imprima o maior deles.
let maior;

let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));

if(n1 > n2){
    maior = n1;
    console.log("O número "+n1+" é maior");
}
else if(n2 > n1){
    maior = n2;  
    console.log("O número "+n2+" é maior"); 
}
else{
    console.log("Os números são iguais");
}

//2.	Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
let valor = parseFloat(prompt("Digite um valor: "));

if(valor >= 0){
    console.log("O valor é "+valor+" é positivo");
}
else {
    console.log("O valor "+valor+" é negativo");
}

//3.	Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
let sexo = prompt("Digite seu sexo: M)Masculino | F)Feminino");

if(sexo == 'M' || sexo == 'm'){
    console.log("Masculino");
}
else if(sexo == 'F' || sexo == 'f'){
    console.log("Feminino");
}
else{
    console.log("Sexo Inválido");
}

//4.	Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
//1.	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//2.	A mensagem "Reprovado", se a média for menor do que sete;
//3.	A mensagem "Aprovado com Distinção", se a média for igual a dez.
let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));

let media = (nota1 + nota2) / 2;

if(media == 10){
    console.log("Aprovado com distinção");
}
else if(media >= 7 && media < 10){
    console.log("Aprovado");
}
else if(media < 7 && media >= 0){
    console.log("Reprovado");
}
else if(media > 10){
    console.log("Média acima do formato esperado");
}
else{
    console.log("Média abaixo do formato esperado");
}

//5.	Faça um Programa que leia três números e mostre o maior e o menor deles.
let menor1;
let maior1;

let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let num3 = parseFloat(prompt("Digite o terceiro número: "));

//Verificando o maior
if(num1 > num2 && num1 > num3){
    maior = num1;
}
else if(num2 > num3){
    maior = num2;
}
else{
    maior = num3;
}

//Verificando o menor
if(num1 < num2 && num1 < num3){
    menor = num1;
}
else if(num2 < num3){
    menor = num2;
}
else{
    menor = num3;
}

console.log("O maior número é "+maior+" e o menor número é "+menor);

//6.	Faça um Programa que leia dois números e mostre se ele é par ou ímpar.
let n = parseFloat(prompt("Digite um número: "));

if(n % 2 == 0){
    console.log("O número é par");
}
else{
    console.log("O número é ímpar");
}
