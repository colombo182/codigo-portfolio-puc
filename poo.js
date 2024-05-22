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
// Funções que criam objetos
function Pessoa() {
    this.nome = ['Fulano', 'de Tal'];
    this.anoDeNascimento = 1990;
    this.profissao = "Estudante";
    this.calculaIdade = function () {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
};

const pessoa1 = new Pessoa();
console.log(pessoa1);

// this é uma referência ao objeto que chamou a função, nesse caso, Pessoa
// Quando preisamos acessar um membro dentro do próprio objeto, usamos o this

// Construtor Object()

const pessoaa = new Object();

pessoaa.nome = ['Fulano', 'de Tal'];
pessoaa.anoDeNascimento = 1994;
pessoaa.profissao = "Estudante";
pessoaa.calculaIdade = function () {
    return new Date().getFullYear() - this.anoDeNascimento;
}

console.log(pessoaa)
console.log(pessoaa.calculaIdade())

// Protótipos

// Mecanismo de herança entre objetos
// pegar exemplo de Pessoa()

const pessoa_prototype = new Pessoa();
console.log(pessoa_prototype.valueOf())

// Javascript é descrita como uma linguagem baseada em protótipos
// Objetos podem ter um objeto de protótipo
// Modelo que fornece atributos e métodos
// Cadeia de protótipos (prototype chain) - objeto de protótipo pode ter outros objetos

// Formas de acessar:
// Object.getPrototypeOf()
// __proto__ (somente na console)
// Em funções construtoras existe a propriedade prototype
// Método Object.create() usa protótipos

const pessoinha = new Object()

console.log('pessoinha');
console.log(Object.getPrototypeOf(pessoinha));

const pessoinha2 = Object.create(pessoaa)

console.log('pessoinha2');
console.log(Object.getPrototypeOf(pessoinha2));

// Herança prototipada

function Pessoaaa(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function () {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

const pessoinha3 = new Pessoaaa(['Fulano', 'de Tal'], 1998,'Estudante');

console.log('pessoinha3');
console.log(pessoinha3);

Pessoaaa.prototype.saudar = function(){
    console.log('Olá');
};

console.log('pessoinha3-2');
console.log(pessoinha3.saudar());

const pessoinha22 = new Pessoaaa(['Fulano', 'de Tal'], 1985,'Estudante');
console.log(pessoinha22.saudar());


// Classes

// Modelos para criar objetos

class People {
    constructor (nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };
    ola() {
        console.log('Ola');
    };
    calculaIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    };
};

const person = new People('Fulano', 1990, 'Estudante');

console.log(person);

// Herança

class Estudante extends People {
    constructor (nome, anoDeNascimento, profissao, matricula) {
        super(nome, anoDeNascimento, profissao);
        this.matricula = matricula;
    };
};

const aluno = new Estudante('Fulano', 1990, 'Estudante', 123456);

console.log(aluno)

// Polimorfismo

class Estudante1 extends People {
    constructor (nome, anoDeNascimento, profissao, matricula) {
        super(nome, anoDeNascimento, profissao);
        this.matricula = matricula;
    };
    ola() {
        super.ola();
        console.log(' colega!');
    };
};

const aluno1 = new Estudante1('Fulano', 1990, 'Estudante', 123456);

console.log(aluno1)
console.log(aluno1.ola())

// Referência

function criarPessoa () {
    return {
        nome: 'Fulaninho',
        anoDeNascimento: 2000,
        profissao: 'Estudante'
    }
};

const pessoa11 = criarPessoa();
const pessoa22 = pessoa11;

pessoa22.anoDeNascimento = 1983;

console.log(pessoa11)
console.log(pessoa22)

const pessoa33 = criarPessoa();

pessoa33.anoDeNascimento = 2005;
console.log(pessoa33)

// Altera no pessoa22, altera no pessoa11 também

// Adicionar atributos ou métodos - objeto.novo_membro = algo;
// objeto.membro = algo;

pessoa33.apelido = "pessoinha";
console.log(pessoa33)

// Remover atributos ou métodos - delete objeto.novo_membro;

delete pessoa33.apelido
console.log(pessoa33)

// Alterar atributos ou métodos de um protótipo

// Herança prototipada - Altera todos os objetos criados pelo protótipo

criarPessoa.prototype.apelido = "pessoinha feia";

const pessoa44 = criarPessoa();

console.log(pessoa11)
console.log(pessoa22)
console.log(pessoa33)
console.log(pessoa44)

// Membros e suas propriedades:
//Podem ser de objetos (cada objeto possui o seu) ou estáticos (compartilhados)

// Atributos estáticos - Dados que valem para qualquer objeto de um tipo ou classe
// Para usar, não precisa criar um objeto

class Pessoaa1 {
    static NOME_CLASSE = "Pessoa";
    constructor (nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };
    ola() {
        console.log('Ola');
    };
    calculaIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    };
};

console.log(Pessoaa1.NOME_CLASSE)

// Visibilidade (encapsulacamento)
// Atributos e métodos podem ser públicos ou privados

// Públicos - Padrão, não é necessário fazer nada

// Privados - ariáveis locais e identifiadores pré-fixados

// Variáveis locais

function Pessoinha () {
    let nome = 'Fulano';
    let anoDeNascimento = 1990;
    let profissao = 'Estudante';
    let calculaIdade = function () {
        return new Date().getFullYear() - anoDeNascimento;
    }
};

const persona = new Pessoinha();

console.log(persona)

// Identificadores pré-fixados

class Estudantes extends People {
    #matricula;
    constructor (nome, anoDeNascimento, profissao, matricula) {
        super(nome, anoDeNascimento, profissao);
        this.#matricula = matricula;
    this.#ola();
    };
    getMatricula() {
        return this.#matricula;
    };
    setMatricula(valor) {
        this.#matricula = valor;
    };
    #ola() {
        super.ola();
        console.log(' colega!');
    };
};

const aluninho = new Estudantes('Fulano', 1990, 'Estudante', 123456);

console.log(aluninho)
console.log(aluninho.getMatricula())
aluninho.setMatricula(1234567)
console.log(aluninho.getMatricula())