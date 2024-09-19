type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
// --------------------- EXEMPLO INTERSECTION TYPES ---------------------
type Pessoa = TemNome & TemSobrenome & TemIdade // AND

const pessoa: Pessoa = {
  idade: 25,
  nome: 'Gabriel',
  sobrenome: 'Costa'
}

console.log(pessoa);

// --------------------- OUTRO EXEMPLO INTERSECTION TYPES ---------------------
  // retorna oque está se repetindo.

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersection = AB & AC & AD;


// --------------------- MODULE MODE ---------------------
export { pessoa }
