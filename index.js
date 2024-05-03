// Javascript:
// Linguagem baseada em objetos, dinâmica
// Fracamente tipada e usualmente interpretada por navegadores

//Pode-se criar scrpits para maipulação de HTML e CSS (front), assim como serem executados no server side (back)

// let: variável mutável dentro de um escopo
// const: variável imutável dentro de um escopo
// var: variável mutável  de um escopo global

console.log('Hello world!');
console.log('Fundamentos de Computação e Algoritmos');

// Comandos de repetição
for (let i = 0; i < 10; i++) {
    console.log("For: ", i);
}

var n = 0;
var x = 0;
while (n < 3) {
    console.log("While: ", x);
    n++;
    x += n;
}

do {
    console.log("Do While: ", x);
    x += 1
} while (x < 10);

// Comandos de selecao

if (x < 10) {
    console.log("If: ", x);
} else if (x < 20) {
    console.log("Else If: ", x);
} else {
    console.log("Else: ", x);
}

switch (x) {
    case 10:
        console.log("Case 10: ", x);
        break;
    case 20:
        console.log("Case 20: ", x);
        break;
    default:
        console.log("Default: ", x);
}

var y = (x < 10) ? (10 + ' - True') : (20 + ' - False');
console.log("Ternario: ", y);

//Modularização - Criação de funções
function soma(a, b) {
    return a + b;
}

//Operadores aritmeticos (+ - * / %)
//Operadores de incremento e decremento (++ --)
//Operadores relacionais (comparação) (== != > < >= <=)
//Operadores logicos (&& ||)

function integrador(limite=Math.random()*10) {
    for(let i=0; i<limite; i++){
        if(i%2 == 0)
            console.log(i+" - Par");
        else
            console.log(i+" - Impar");
    }
}

integrador()

//Avaliação de desempenho - Contagem de operações

function getMin(array) {
    let min; //1 operação
    for (let i = 0; i < array.length; i++) { //1 loop size "n"
        const element = array[i]; //1 operação
        if (min === undefined || min > element) { //1 operação
            min = element; //1 operação (worst case)
        } //3 operações * n
    }
    return min; //1 operação
}// 3(n) + 3

//Exemplos de complexidade - Big-O (https://encurtador.com.br/bioT5)