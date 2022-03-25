//1.	Crie uma função que receba um inteiro e diga se ele é “Par” para números pares ou “Ímpar” para números impares.
let n = parseInt(prompt("Digite um número: "));

function parImpar(n){
    if(n % 2 == 0){
        return "O número é par";
    } 
    else{
        return "O número é ímpar";
    }
}

console.log(parImpar(n));

//2.	Crie uma função que receba dois números e retorne o resultado da soma entre eles.
let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));

function soma(n1, n2){
    return n1 + n2;
}

console.log("A soma é: "+ soma(n1, n2));

//3 - Crie uma função que receba um número e retorne o oposto desse número. Exemplos de retornos: 
//negativo(1) // return -1
//negativo(-5) // return 5
let num = parseFloat(prompt("Digite um número: "));

function oposto(num){
    return -(num);
}

console.log(oposto(num));

//4 - Crie uma função que receba um array de números, e retorne a suma de todos os números positivos desse array. Exemplos de retornos: somaDePositivos([1,-4,7,12]) // 1 + 7 + 12 = 20 -> return 20
function somaPositivos(numeros) {
    let soma = 0;
    for (i = 0; i < 4; i++) {
        if (parseInt(numeros[i]) > 0) {
            soma += parseInt(numeros[i]);
        } 
    }
    return ("A soma dos números é: " + soma);
} 

console.log(somaPositivos([1, -4, 7, 12]));

//5.	Dado um array de números inteiros, crie uma função que retorne o valor do menor número desse array. Exemplos de outputs:
//Dado [34, 15, 88, -2] sua solução deve retornar o -2
//qDado [34, -500, -1, 100] sua solução deve retornar o -345
function menorNumero(numeros){
    let menor = numeros[0]; 
    for (i = 0; i < 4; i++) {
        if (parseInt(numeros[i]) < menor) {
            menor = parseInt(numeros[i]);
        } 
    }
    return ("O menor número do array é: " + menor);
}

console.log(menorNumero([34, 15, 88, -2]));
console.log(menorNumero([34, -500, -1, 100]));