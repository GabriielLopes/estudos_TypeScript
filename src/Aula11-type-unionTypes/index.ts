// union types é quando eu quero dois ou mais tipos no retorno de uma função

function addOuConcatena(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  if (typeof a === 'string' && typeof b === 'string') return a + b;
  return `${a}${b}`;
}

console.log(addOuConcatena("Gabriel", "Lopes"))
console.log(addOuConcatena('Gabriel', 25));
