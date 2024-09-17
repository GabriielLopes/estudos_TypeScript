// ele recebe qualquer coisa
// o unknown é bem mais seguro.
// se vc for realizar algum cálculo o typescript irá te obrigar a verificar o tipo da variável.
let x: unknown;

x = 'Gabriel';
x = 15;
const y: number = 175;
console.log(typeof x === 'number' ? x + y : x)
