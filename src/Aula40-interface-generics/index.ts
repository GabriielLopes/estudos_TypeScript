// Em TYPE, utilizariamos da mesma forma.

interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo<string, number> = {
  nome: 'gabriel',
  sobrenome: 'Lopes',
  idade: 24,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 4567,
  idade: 24,
};

const aluno3: PessoaProtocolo = {
  nome: 'gabriel',
  sobrenome: 'Lopes',
  idade: 24,
};

console.log(aluno, aluno2, aluno3);
