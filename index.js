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

//Avaliação de desempenho - Contagem de operações (Complexidade Algorítmica)

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

// Vetor - Array - Armazena dados de forma contígua (que é em sequência) na memória; recurso indexado

const fibonacci = []
fibonacci[1] = 1
fibonacci[2] = 1
for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}
for (let i = 1; i < 20; i++) {
    console.log(fibonacci[i])
}

// Métoods padrão para manipulação de array
// push() - insere no final
// pop() - remove do final
// unshift() - insere no inicio
// shift() - remove do inicio
// splice() - remove e insere
// slice() - copia
// at(pos) ou [pos] - pega pelo indice

//Tipos derivados de Array
//Pilha (LIFO) - push e pop
//Fila (FIFO) - push e shift

// Pilha

class Stack{
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length == 0;
    }
    clear(){
        this.items = [];
    }
    size(){
        return this.items.length;
    }
}

var myStack = new Stack();

myStack.push(5);
console.log(myStack.peek());

myStack.push(8);
console.log(myStack.peek());

myStack.push(11);
console.log(myStack.isEmpty());

myStack.pop();
console.log(myStack.size());

myStack.clear();
console.log(myStack.isEmpty());

//Fila

class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        return this.items.shift();
    }
    peek(){
        return this.items[0];
    }
    isEmpty(){
        return this.items.length == 0;
    }
    clear(){
        this.items = [];
    }
    size(){
        return this.items.length;
    }
}

var myQueue = new Queue();

myQueue.enqueue(5);
console.log(myQueue.peek());

myQueue.enqueue(8);
console.log(myQueue.peek());

myQueue.enqueue(11);
console.log(myQueue.isEmpty());

myQueue.dequeue();
console.log(myQueue.size());

myQueue.clear();
console.log(myQueue.isEmpty());

// Conjuntos(Set) - Não permite que os dados armazenados sejam duplicados

var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add("texto");

var o = {a: 1, b: 2};
mySet.add(o);

for (let i of mySet) {
    console.log(i);
}

// Dicionário (Map) - Permite que os dados armazenados sejam duplicados (dados de forma contígua)

const contacts = new Map();
contacts.set('João', {phone: '1234-5678', address: 'Av. Principal, 123'});
console.log(contacts.has('João')); // true
console.log(contacts.get('Maria')); // undefined

contacts.set('Maria', {phone: '1234-5678', address: 'Av. Principal, 123'});
console.log(contacts.get('João'));  // {phone: '1234-5678', address: 'Av. Principal, 123'}

contacts.delete('Raimundo'); // false
contacts.delete('João'); // true
console.log(contacts.size); // 1

// Forma de iteração

const myMap = new Map()

myMap.set(0, 'zero')
myMap.set(1, 'um')

for (const [key, value] of myMap) {
    console.log(key + ' = ' + value)
}

for (const key of myMap.entries()) {
    console.log(key)
}

// Arrays, Conjuntos e Dicionários são, basicamente , uma estrutura de dados padrão

// Lista encadeada - Determinado número de nodos, cada um com referência para o próximo
// Duas representações usuais: Encadeamento simples e duplo
// Nodo: São conectados por links.
// Normalmente tem dois atributos: element (elemento armazenado no nodo) e next (nó seguinte)

// Implementação de um nodo: Classe Node (auto-referenciada) + Estrutura lista encadeada
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.count = 0;
        this.header = null;
        this.tail = null;
    }
    add(element) {
        if (this.count == 0) {
            this.header = this.tail = element;
        } else {
            this.tail.next = element;
            this.tail = element;
        }
        this.count++;
    }
    print() {
        var aux = this.header;
        while (aux != null) {
            console.log(aux.element);
            aux = aux.next;
        }
    }
}

var myLL = new LinkedList();

myLL.add(new Node(1));
myLL.print();

myLL.add(new Node(2));
myLL.print();

myLL.add(new Node(4));
myLL.print();

myLL.add(new Node(3));
myLL.print();

// Lista encadeada:
// Listas usando estruturas encadeadas:
// Acesso direto ao primeiro elemento (header) obrigatório
// Acesso direto ao último elemento (tail) é desejável

// O uso somente da referência header é ineficiente para inserção de elementos no final da lista

// Passos para inserção de elemnetos em listas encadeadas:
// Alocação de um novo nodo
// Inserção das informações no nodo alocado
// Inserção do nodo na lista com consequente encadeamento nos nodos já existentes

// Para inserção no meio da lista, precisamos de um auxiliar (nó intermediário)
// Alocar o novo nodo
// Inserção das informações no novo nodo
// Encadeamento do novo nodo no auxiliar
// Encadeamento do auxiliar no novo elemento
// Encadeamento do novo elemento no próximo elemento (target)

// Lista encadeada - métodos suportados:
// add(e) - insere um novo elemento no fim da lista
// add(index, e) - insere um novo elemento em uma posição especifica
// get(index,e) / set(index, e) - retorna e altera o elemento em uma posição especifica
// remove(e) - remove um elemento da lista
// isEmpty() - verifica se a lista está vazia
// size() - retorna o número de elementos da lista
// contains(e) - verifica se um elemento está na lista
// indexOf(e) - retorna o índice de um elemento
// clear() - remove todos os elementos da lista


// Árvores - Caracteristicas:
// Estruturas de dados não lineares
// Permitem a implementação de vários algoritmos mais rápidos do que no uso de estrutura de dados lineares como as listas
// Forneccem uma forma natural de organizar os dados de sistemas de arquivos, bancos de dados e sites da web

// Conceitos e terminologia:
// Tipo abstrato de dados que armazena elementos de maneira hierárquica
// Normalmente, são desenhadas colocando-se os elementos dentro de elipses ou retângulos e conectando-os com linhas retas

// Árvore T
// Cada nodo v de T diferente da raiz tem único nodo pai, w
// Todo nodo com pai w é filho de w
// Pela definição:
// Árvore pode ser vazia (sem nodos)
// Permite que se defina uma árvore recursivamente
// Árvore T ou está vazia, ou consiste de um nodo r, chamado de raiz de T, e um conjunto de árvoes cujas raizes são os filhos de r

// Dois nodos que são filhos de um mesmo pai são irmãos
// Nodo v é externo se não tem filhos, e interno se tiver algum
// Nodo interno também é conhecido como galho
// Nodo externo também é conhecido como folha

// Recursão:
// Método para resolução de problemas
// Solucionar partes menores do mesmo problema
// Finaliza quando o problema original é resolvido

// É alcançada chamando-se a própria função
// Será recursiva sepuder chamar a si mesmo diretamente

// Exemplo básico de recursão:

function fatorial(n) {
if (n < 0) {
    return undefined;
}
let total = 1;
for (let i = n; i > 1; i--) {
    total *= i;
}
return total;
}

console.log(fatorial(5));

function fatorialRecursivo(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    return n * fatorialRecursivo(n - 1);
}

console.log(fatorialRecursivo(5));

// A raiz de uma árvore é chamada de pai de suas sub-árvores
// As raízes das sub-árvores de um nodo são chamadas de irmãoes, que, por sua vez, são filhos de seu nodo pai

// Árvore - Grau: número de sub-árvores de um nodo
// Nível de um nodo: número de linhas que liga o nodo à raíz
// Altura: nível mais alto da árvore

// Métodos esperados de uma árvore:
// root() - retorna o nodo raíz da árvore
// parent(n) - retorna o pai de um nodo, ocorrendo um erro se for a raiz
// children(n) - retorna os filhos de um nodo

// Métodos de consulta:
// isInternal(n) - verifica se um nodo é interno
// isExternal(n) - verifica se um nodo é externo
// isRoot(n) - verifica se um nodo é raíz

// Métodos "genéricos" de uma árvore:
// size() - retorna o número de nodos da árvore
// isEmpty() - verifica se a árvore está vazia
// positions() - retorna uma lista de todos os nodos da árvore
// replaceElement(n, e) - substitui o elemento de um nodo, ocorrendo um erro se o nodo não existir

// Representação em memória
// Por contiguidade (espaço comum de memória)
// Por encadeamento (não contiguidade) - Diferentes espaços de memória

// Binária - Ordenada com as seguintes propriedades:
// Todos os nodos tem no máximo dois filhos
// Cada nodo filho é rotulado como sendo um filho da esquerda ou da direita
// O da esquerda precede o da direita na ordenação

// Subárvores:
// O da esquerda de um nodo interno é chamado de subárvore da esquerda; o da direita é subárvore da direita

// Binária própria (cheia):
// Cada nodo tem 0 ou 2 filhos

// Estruturas de árvores binárias são muito utilizadas na computação

// Métodos para manipulação de árvores binárias:
// Criar árvore
// Inserir nodos
// Pesquisar nodos
// Excluir nodos
// Determinar altura da árvore e nível de um nodo
// Caminhar em uma árvore, visitando os nodos
// ...

// Forma mais usual de implementação:
// Estruturas encadeadas (alocação dinâmica)
// Cada nodo conterá:
// Informação, referência para nodo pai, referência para subárvore da esquerda e da direita

// Exemplo:

class Node {
    constructor(element) {
        this.element = element;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}