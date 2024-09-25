// EXEMPLO DE Declaration merging
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  idade?: number
}

const pessoa3: Pessoa = {
  nome: 'Gabriel',
  sobrenome: 'Lopes'
}
console.log(pessoa3)
