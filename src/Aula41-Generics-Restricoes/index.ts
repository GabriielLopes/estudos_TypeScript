// Tipagem generica da função - constraints

type ObterChaveFn = <O, K extends keyof O>(objetvo: O, chave: K) => O[K];

// Criando a função

const obterChave: ObterChaveFn = (object, chave) => object[chave];

// objeto para utilizar na função
const animal = {
  cor: 'Rossa',
  vacinas: ['Vacina1', 'Vacina 2'],
}

const vacinas = obterChave(animal,"vacinas")

console.log(vacinas);
