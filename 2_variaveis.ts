//var permite redeclarar uma variavel
var a = "teste"
var a = "outro teste"

console.log(a)

//e também fica acessível em qualquer escopo (variavel declarada dentro do if, mas acessada fora dele)

if (true) {
var b = "teste"
}

console.log(b)

//já o let não permite redeclarar a variavel, o que é acontece na maioria das linguagens

let c = "teste"
let c = "outro teste"

// se você quiser alterar o valor da variavel, é so chama-la, sem usar o termo let

let d = "teste"
d = "outro teste"

console.log(d)

// porem com o let a variavel fica presa no escopo que ela foi declarada, então,
// uma variavel declarada dentro de um if não pode ser acessada fora dele

if (true) {
let e = "teste"
}

console.log(e)

// const é utilizado para declarar constantes
// apos ser declarada, uma const não pode ter seu valor alterado

const z = "teste final"
z = "não funciona"

// TIPAGEM DE DADOS
// com a tipagem você consegue determinar regras para o conteudo que sera inserido na variavel

//boolean
let isDone: boolean = false;

//number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//string
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

//array
let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

//enum

enum Color {Red, Green, Blue}
let cor: Color = Color.Green;
let nomeCor: string = Color[2];

console.log(cor) //imprime "1", que é a posição do enum no array
console.log(nomeCor) //imprime "Blue", que é o nome da cor na posição 2

// Quando você não coloca uma tipagem, o typescript faz a inferencia do tipo automaticamente,
// logo se você tentar alterar o valor da variavel para outro tipo dará erro
var teste = "abc"
teste = 123

//tipo ANY permite você colocar qualquer tipo de dado e alterá-lo a qualquer momento
var teste2:any = "abc"
teste2 = 123
teste2 = true