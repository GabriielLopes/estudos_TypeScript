/* eslint-disable */

// tipos básicos (aqui ocorre a inferência de tipos)
let nome: string = 'Gabriel';
let idade: number = 23;
let adulto: boolean = true;
let simbolo: symbol = Symbol('Qualquer-symbol');
// let big: bigint = 10n;

// arrays

let arraysDeNumeros: Array<number> = [1,2,5];
let arrayDeNumeros2: number[] = [1,2,5];

let arraysDeStrings: Array<string> = ['Gabriel', 'Karla', 'Elias'];
let arraydeStrings2: string[] = ['a','b','c'];

// Objetos

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Gabriel',
  idade: 15
}

// Funções

function soma(x: number, y: number) {
  return x + y;
}

const result = soma(2,3);

const soma2: (x: number, y: number) => number = (x, y) => x + y;
