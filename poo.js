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

// var nomeDoObjeto = {
//     nomeMembro1: valorMembro1,
//     nomeMembros2: valorMembros2,
//     nomeMembros3: valorMembros3
// };

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

// Atribuição - duas formas:
// objeto.propriedade = valor
// objeto ['propriedade'] = valor

// Método - acesso duas formas:
// objeto.metodo()
// objeto.metodo(parametro)
// objeto.metodo(parametro1, parametro2, ...)

// Em Javascript QUASE TUDO é objeto
// Javascript possui dois tipos de dados: 
// Tipos de Valor (tipos primitivos) - representações de valores imutáveis:
// Number
// String
// Boolean
// Symbol
// Undefined
// Null

// Tipos de Referência (tipos definidos pelo usuário) - representações de valores mutáveis e complexos, quando comparados com os Tipos de valor:
// Object (Object, Function, Array)

const empregado = {
    nome: 'Joaquim',
    salarioBase: 10000,
    valorHoraExtra: 50,
    qtHorasExtra: 2,
    calculaSalario() {
        return this.salarioBase + (this.qtHorasExtra * this.valorHoraExtra);
    }
}
console.log(empregado.calculaSalario());

// Orientação a objetos - Conceitos principais
// Encapsulamento
// Abstração
// Herança
// Polimorfismo

// Encapsulamento:
// Permitir atributos e métodos sejam agrupados em uma interface bem definida, para manipulação de forma eficiente
// Isolamento entre partes de um programa
// Saber o que um objeto faz e não como ele faz
// Proteção de atributos

const empregado1 = {
    nome: 'Joaquim',
    salarioBase: 5000,
    valorHoraExtra: 50,
    qtHorasExtra: 5,
    calculaSalario() {
        return this.salarioBase + (this.qtHorasExtra * this.valorHoraExtra);
    }
}
console.log(empregado1.calculaSalario());

// Abstração:
// POO é amplamente baseada na abstração digital da vida real
// Objetos são representações/abstrações do que queremos implementar do que observamos no mundo ao nosso redor
// Buscamos essencial e deixamos de lado o que não importa
// Entender o problema que tem de ser resolvido e como implementar

// Carro - Nome

// Atributos:
// Marca
// Modelo
// ano
// cor
// velocidade
// velocidadeMaxima

// Metodos:
// ligar()
// acelerar()
// frear()
// buzinar()

// Herança:
// Permite compartilhamento de atributos e métodos entre objetos
// Reaproveita código e agrupa o que é comum a diferentes objetos
// Identificar e agrupar comportamentos generalizados ou especificos
// Elimina redundâncias

// Usuário, administrador e Operador tem atributos relacionados, afinal operadores e administradores +
// + também são usuários, afinal todos tem id, e-mail e senha, além de login(), trocarEmail() e trocarSenha()
// Administrador e Operador tem atributos diferentes, mas ambos tem todos atributos que um Usuario (Usuário é uma +
// + generalização de administrador e operador, e estes são uma especialização de um usuário)

// Polimofismo (muitsa formas):
// Através da herança é possível alterar um comportamento herdado de um objeto-pai
// Forte separação de interesses
// Limpeza de código, removendo lógica excedente

// Cada objeto tem seus interesses:
// Operador precisar trocarSenha(), porém usuário não. Então haverá uma sobrescrita de método
// trocarSenha() (métodos com o mesmo nome e assinatura(mesmo nome e atributos)) em diferentes objetos, relacionados por herança
// trocarSenha(valor) (métodos com o mesmo nome, mas diferentes assinaturas) em diferentes objetos, relacionados por herança
// Javascript NÃO SUPORTA sobrecarga

// Vantagens e ganhos:
// Encapsulamento - Redução complexidade / Proteção de dados
// Abstração - Redução complexidade / Maior reuso
// Herança - Eliminar redundâncias no código
// Polimorfismo - ELiminar lógica desnecessária no código

// Criando objetos:
// Literais

// var nomeDoObjeto1 = {
//    nomeMembro1: valorMembro1,
//    nomeMembros2: valorMembros2,
//    nomeMembros3: valorMembros3
//};

// Fábricas (ensinar função para criar objetos)

// function criarPessoa (nome, idade, sexo) {
//     return {
//         nome: nome,
//         idade: idade,
//         sexo: sexo
//     }
// }
// 
// const pessoa1 = criarPessoa('Joaquim', 25, 'Masculino');
// const pessoa2 = criarPessoa('Maria', 30, 'Feminino');
// const pessoa3 = criarPessoa('Pedro', 35, 'Masculino');

// Construtores (aplicação entre construtor e fábrica são diferentes)



// Protótipos


// Classes