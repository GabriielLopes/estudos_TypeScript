/*
const objetoA: Record<string, unknown> = {
  chaveA: 'Valor A',
  chaveB: 'Valor B'
}

objetoA.chaveC = 'Valor C'

*/

/*
const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveC = 'Valor C'

*/

// o readonly define que um chave está disponível somente para leitura

const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveC = 'Valor C';
objetoA.chaveD = 'Valor D';

console.log(objetoA)

// não podemos colocar object ou {} para tipagem de objeto
