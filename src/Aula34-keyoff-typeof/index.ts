type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'Red',
  verde: 'Green',
  azul: 'Blue',
};

function traduzirCores(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCores('vermelho', coresObj));
