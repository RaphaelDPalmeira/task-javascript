//1.	Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.
while(true){
    let nota = parseFloat(prompt("Digite uma nota entre 0 e 10"));

    if(nota >= 0 && nota <= 10){
        alert("A nota é: "+ nota);
        break;
    }
    alert("Nota inválida, tente novamente");
}

//2.	MOSTRAR DIFERENÇA ENTRE VAR E LET
// Enquanto as variáveis declaradas com let têm escopo de bloco, instrução ou expressão, as variáveis declaradas com var têm escopo global ou escopo de função. 
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // O escopo é dentro do bloco if
  var b = 1; // O escopo é dentro da função

  console.log(a);  // 4
  console.log(b);  // 1
}

console.log(a); // 5
console.log(b); // 1

//3.	Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
while(true){
    let nome = prompt("Digite seu nome: ");
    let senha = prompt("Digite sua senha: ");

    if(nome != senha){
        break;
    }
    alert("A senha não pode ser igual ao nome do usuário");
}

//4.	Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. 
for(i=1; i<=20; i++){
    console.log(i);
}

//5.	Faça um programa que leia 5 números e informe o maior número.
let maior;

for(i=0; i<5; i++){
    let n = parseFloat(prompt("Digite um número: "));

    if(i===0){
        maior = n;
    }
    
    if(n > maior){
        maior = n;
    }
}
alert("O maior número é "+maior);

//6.	Faça um programa que leia 5 números e informe a soma e a média dos números.
let sum = 0;
for(i=0; i<5; i++){
    let n = parseFloat(prompt("Digite um número: "));
    sum += n;
}

let media = sum / 5;
alert("A média é igual a: "+ media);

//7.	Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.
for(i=1; i<=50; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

//8.	Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
//a.	Tabuada de 5:
//b.	5 X 1 = 5
//c.	5 X 2 = 10
//d.	...
//e.	5 X 10 = 50

let n = parseFloat(prompt("Informe o número desejado para ver a tabuada: "));

for(i=1; i<=10; i++){
    console.log(n+" X "+i+" = "+ n * i);
}