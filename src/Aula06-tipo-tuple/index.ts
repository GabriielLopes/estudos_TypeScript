// tuple é um array com tipos especificos em determinados indices

const dadosCliente: readonly [number, string, string?, ...string[]] = [1, 'Gabriel'];

console.log(dadosCliente)

dadosCliente[0] = 250; // não pode alterar porque a tuple é imutável 'readonly'

console.log(dadosCliente)
