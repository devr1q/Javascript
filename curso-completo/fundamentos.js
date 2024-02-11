// Fundamentos

let p1Variavel = "Olá, Mundo!";

console.log(p1Variavel);

// Tipos de dados
let meuNumero = 15;

console.log(meuNumero);

console.log(meuNumero - 7);

console.log(typeof meuNumero);

let booleano = true; 

console.log(typeof booleano);

let meuObejeto = {};
let meuArray = [];
let meuNull = null; // variavel q possa ser alterada
let meuUndefined = undefined;

console.log(typeof meuObejeto);
console.log(typeof meuArray);
console.log(typeof meuNull);
console.log(typeof meuUndefined);

// let e const => novas formas de declarar

let x = 10; // pode mudar
const y = 5; // n irá mudar

x = 15;

console.log(typeof x);
console.log(x, y);

// Operadores aritimeticos

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// Operadores de comparação 

console.log(x == y); // "igual"
console.log(x != y); // "diferente"
console.log(x === y); // "igual", considerando o tipo

console.log("5" == 5);
console.log("5" === 5);

if (x == y) {
    y = y + 1;
} else {
    console.log(p1Variavel);
}

// Operadores logicos
// AND => && --- false: APENAS UM precisam ser falso
// OR => || ---- false: TODOS precisam ser falso

console.log(10 > 5 && 20 > 5);
console.log(10 > 5 && 20 < 5);

console.log(10 > 5 || 20 < 5);

// Conversão de tipos

const meuNumero2 = "123";

const meuNumeroConvertivo = Number(meuNumero2);
console.log(meuNumeroConvertivo);
console.log(typeof meuNumeroConvertivo);

// Estrutura de condição - if,   else,   else if

const idade = 15

if (idade <= 12) {
    console.log("Criança");
} else if (idade >= 13 && idade <= 17) {
    console.log("Adolescente");
} else {
    console.log("Adulto");
}

// Switch
const fruta = "Banana";

switch(fruta) {
    case "Banana":
        console.log("Banana é a fruta!");
        break;
    case "Maçã":
        console.log("Maçã é a fruta!");
        break;
    default:
        console.log("Fruta não encontrada!");
}

// Estruturas de repetição

// contador, condição de limite, incremento
for (let i = 0; i < 5; i++) {
    console.log("O valor de i é: " + i);
}

// while
let k = 0;

while(k < 5) {
        console.log("O valor de k é: " + k);
    k++;
}

// do while 
let j = 0;

do {
    console.log("O valor de j é: " + j);

    j++;
} while (j < 5);

// Funções
// function nome(arg1, arg2) { corpo }

function cumprimentar(nome) {
    console.log("Olá, " + nome + "!")
}

// invocação = nome()
cumprimentar("Ana Julia");

// escopo de variaveis
let cor = "azul marinho";

function mostrarCor() {
    let cor = "verde";

    console.log(cor);
}

console.log(cor);
mostrarCor();

// hoisting = içamento
testeHoisting();

function testeHoisting() {
    console.log("Deu certo!");
}

// arrow function
const testeArrow = () => console.log("Isso tambpem é uma função!");

testeArrow();


// truthy e falsy
const minhaVariavel1 = ""; // falsy
const minhaVariavel2 = "Algum texto"; // truthy

if (minhaVariavel1) {
    console.log("É verdadeiro!");
} else {
    console.log("É falso!");
}

if (minhaVariavel2) {
    console.log("É verdadeiro! 2");
} else {
    console.log("É falso! 2");
}

// array, listas => começando sempre a contar pelo 0
const numeros = [1, 2, 3, 4, 5];

console.log(numeros);

console.log(numeros[1]);
console.log(numeros[3]);

// adiciona um elemento no array = .push

numeros.push(6);
console.log(numeros);


// elimina um elemento no array = .pop

numeros.pop();
console.log(numeros);

// strings
const minhaStringNova = "Olá, String!";

const minhaString3 = minhaStringNova + " Como você está?"
console.log(minhaString3);

// interpolação

const minhaString4 = `${minhaStringNova} Como nós está?`;
console.log(minhaString4);