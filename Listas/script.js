//1.	Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.
let lista = [];

for(i=0; i<5; i++){
    let n = parseInt(prompt("Digite um número: "));
    lista[i] = n;
}

for(i=0; i<5; i++){
    console.log(lista[i]);
}

//2.	Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.
let nums = [];

for(i=0; i<10; i++){
    let n = parseFloat(prompt("Digite um número: "));
    nums[i] = n;
}

for(i=9; i>=0; i--){
    console.log(nums[i]);
}

//3.	Faça um Programa que leia 4 notas, mostre as notas e a média na tela.
let notas = [];

for(i=0; i<4; i++){
    let n = parseFloat(prompt("Digite uma nota: "));
    notas[i] = n;
}

let sum = 0;
for(i=0; i<4; i++){
    sum += notas[i];
}

let media = sum / notas.length;
console.log("A média é: "+media);

//4.	Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.
let vetor = [];
let consoantes = [];
let quantidade_conso = 0;

for(i=0; i<10; i++){
    let c = prompt("Digite um caractere: ");
    vetor.push(c);

    if(c != 'A' && c != 'a' && c != 'E' && c != 'e' && c != 'I' && c != 'i' && c != 'O' && c != 'o' && c != 'U' && c != 'u'){
        consoantes.push(c);
        quantidade_conso++;
    }
}

console.log("Foram lidas: "+quantidade_conso+" consoantes");
for(i=0; i<consoantes.length; i++){
    console.log(consoantes[i]);
}

//5.	Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor ímpar. Imprima os três vetores.
let vet = [];
let par = [];
let impar = [];

for(i=0; i<20; i++){
    let n = parseInt(prompt("Digite um número: "));
    vet.push(n);

    if(n % 2 == 0){
        par.push(n);
    }
    else{
        impar.push(n);
    }
}

console.log("Vetor: ");
for(i=0; i<vet.length; i++){
    console.log(vet[i]);
}

console.log("Vetor com pares: ");
for(i=0; i<par.length; i++){
    console.log(par[i]);
}

console.log("Vetor com ímpares: ");
for(i=0; i<impar.length; i++){
    console.log(impar[i]);
}

//6.	Faça um Programa que peça as quatro notas de 10 alunos, calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.
let nota = [];
let medias = [];
let aprovado = 0;

for(i=0; i<10; i++){
    let soma = 0;
    let nota = [];
    for(j=0; j<4; j++){
        let n = parseFloat(prompt("Digite sua nota : "));
        nota.push(n);
        
        soma += nota[j];
    }

    medias.push(soma / nota.length);
    
    if(medias[i] >= 7){
        aprovado++;
    }
}

console.log("A quantidade de alunos com média maior ou igual a 7 são: "+aprovado+" aluno(s)");

//7.	Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números.
let int = [];
let sum1 = 0;
let subtr = 0;
let multi = 1;


for(i=0; i<5; i++){
    let n = parseInt(prompt("Digite um número: "));
    int.push(n);

    sum1 += int[i];
    subtr -= int[i];
    multi *= int[i];
}

for(i=0; i<int.length; i++){
    console.log("A soma é: "+sum1);
    console.log("A subtração é: "+subtr);
    console.log("A multiplicação é: "+multi);
}

//8.	Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.
let idades = [];
let alturas = [];

for(i=0; i<5; i++){
    let idade = parseInt(prompt("Digite sua idade: "));
    let altura = parseFloat(prompt("Digite sua altura: "));

    idades.push(idade);
    alturas.push(altura);
}

for(i=4; i>=0; i--){
    console.log(idades[i]);
    console.log(alturas[i]);
}

//9.	O instrutor deve elaborar esse programa.
//Cria um script que receba o nome de várias pessoas até o usuário desejar parar o programa, bote o nome dessas pessoas em uma lista e sorteie uma dessas pessoas para pagar o churrasco. 
//O output do código deve ter o seguinte formato: 
//“{nomeDaPessoa} foi sorteada para pagar o churrasco!”
var nomes = [];
var i = 0;
while (true) { 
    nomes.push(prompt("Digite os nomes e depois 0 para finalizar o sorteio"));
    if (parseInt(nomes[i]) === 0) { 
        nomes.pop(nomes[i]);
        break; 
    }  
    i++; 
}

i = Math.floor(Math.random() * nomes.length);

console.log(nomes[i] + " vai pagar o churrass!");

//10.	Cria um script que receba o nome de várias pessoas até o usuário desejar parar o programa, bote o nome dessas pessoas em uma lista e sorteie duas dessas pessoas para te dar um presente.
//As pessoas não podem ser repetidas.
//O output do código deve ter o seguinte formato:
//“{nomeDaPessoa} e { nomeDaOutra } foram sorteados para te dar um presente!”
let terminou=true;
let pessoa=[];
let cont=0;
while (terminou) {
    pessoa[cont]=prompt("Digite o nome:");
    let resp=  prompt("Deseja adicionar concorrente:")
    if(resp.toLowerCase() === "sim"){
        cont++;  
    }
    else{ 
        terminou=false;
        alert("acaboy")
    }  
}  

let sort1 = Math.floor(Math.random() * cont);
let p=pessoa[sort1];
pessoa.splice(sort1,1);
let sort2 = Math.floor(Math.random() * (parseInt(cont)-1 ));
console.log(p+" e "+ pessoa[sort2]+" vao lhe dar um presente");