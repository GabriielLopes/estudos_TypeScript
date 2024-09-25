// basicamente é criar um apelido para um tipo.
// Os tipos personalizados deverão sempre começar com letra maiúscula.

// --------------------- TYPE ALIAS ---------------------

type Idade = number;

type Pessoa = {
  nome: string;
  sobrenome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
}

type CorRGB = 'Vermelho' | 'Verde' | 'Amarelo';
type CorCMYK = 'Ciano' | 'Magenta' | 'Preto';

// --------------------- EXEMPLO UNION TYPES ---------------------
type corPreferida = CorRGB | CorCMYK;

// --------------------- EXEMPLO DE UTILIZAÇÃO DE TYPE ALIAS ---------------------

const pessoa: Pessoa = {
  nome: 'Gabriel',
  idade: 24,
  salario: 1500,
  sobrenome: 'Costa Lopes',
}

function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor};
}

console.log(setCorPreferida(pessoa,'Vermelho'))

// --------------------- MODULE MODE ---------------------
export default 1;
