// Programação Orientada a Objetos (POO)
// Não é uma linguagem de programação, nem ferramenta ou framework
// É um estilo de programação, paradigma de programação (forma de fazer a programação), com foco em objetos em vez e funções

//Linguagens que implementam POO (algumas):
// Java
// C#
// C++
// Python
// JavaScript
// Ruby

// Objetos são uma estrutura um pouco mais complexa que as funções

// Programação estruturada - Paradigma com foco em:
// Sequência - instrução executada uma depois da outra
// Decisão - instrução executada após algum teste lógico
// Iteração - trecho de código pode repetir-se após algum teste lógico

// Programação Procedural
// Paradigma com foco no uso de procedimentos e funções para facilitar o reuso
// f1() - x; f2() -y;

// Programação Estruturada e Procedural
// Código espaguete 
// Muito "copia e cola" de funções
// Mudanças em uma função resultam em mudanças em outras funções
// Interdependência entre as funções


//Procedural
let numero1 = 10;
let numero2 = 20;

function add(n1, n2) {
    return n1 + n2;
}

let z = add(numero1, numero2);
console.log(z);

// POO - Paradigma com foco no uso de objetos, onde cada um contém suas variáveis e funções
// Objeto A - Método (função) f1() e atributo (propriedade) x
// Objeto B - Método (função) f2() e atributo (propriedade) y

// Componentes de um Objeto:
// Nome (ex. Dispositivo)
// Atributos (ex. fabricante, modelo, memória)
// Métodos (ex. ligar(), diminuirVolume(), tirarFoto())

// Objeto:
// coleção de dados e/ou funcionalidades com alguma relação entre si
// dados -> variáveis (atributos ou propriedades)
// funcionalidades -> funções (métodos)
// EM Javascript, atributos e métodos são MEMBROS de um objeto, cada um com um nome e um valor

var nomeDoObjeto = {
    nomeMembro1: valorMembro1,
    nomeMembros2: valorMembros2,
    nomeMembros3: valorMembros3
};

var pessoa = {
    nome: 'Joaquim',
    idade: 20,
    sexo: 'M',
    saudar: function () {
        console.log('Ola');
    }
};

// Atributo - acesso duas formas:
// objeto.propriedade
// objeto ['propriedade']

// Atribuilção - duas formas:
// objeto.propriedade = valor
// objeto ['propriedade'] = valor

// Método - acesso duas formas:
// objeto.metodo()
// objeto.metodo(parametro)
// objeto.metodo(parametro1, parametro2, ...)

// Em Javascript QUASE TUDO é objeto
// Javascript possui dois tipos de dados: 
// Tipos de Valor - representações de valores imutáveis:
// Number
// String
// Boolean
// Symbol
// Undefined
// Null

// Tipos de Referência - representações de valores mutáveis e complexos, quando comparados com os Tipos de valor:
// Object (Object, Function, Array)

