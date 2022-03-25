//9.	Dado um número n, para cada número entre 1 e 100, imprime um valor por linha da seguinte maneira:
//Se i for múltiplo de 3 e 5, imprima o FizzBuzz.
//Se i for múltiplo de 3 (mas não de 5), imprima o Fizz.
//Se i for múltiplo de 5 (mas não de 3), imprima o Buzz.
//Se i não for múltiplo de 3 ou 5, imprima o valor de i.
let n = parseInt(prompt("Digite um valor: "));

for(i=1; i<=n; i++){
    if(i % 3 == 0 && i  % 5 == 0){
        console.log("FizzBuzz")
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}