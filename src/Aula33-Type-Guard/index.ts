// TYPE GUARD É TODO O TIPO DE CHEGAGEM DE TIPOS.

function add(a: unknown, b: unknown): string | number {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a} ${b}`;
}
console.log(add(1, 9));
console.log(add('1', '9'));

type Pessoa = { tipo: 'Pessoa'; nome: string };
type Animal = { tipo: 'Animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: "Pessoa" = 'Pessoa';
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
    // if ('nome' in obj) console.log(obj.nome); // TYPE GUARD
    // if (obj instanceof Aluno) console.log(obj.nome); // TYPE GUARD
    // OUTRO EXEMPLO DE TYPE GUARD
    switch(obj.tipo) {
      case 'Pessoa':
        console.log(obj.nome);
        break;
      case 'Animal':
        console.log(obj.cor);
    }

}
mostraNome(new Aluno('joão'));
