// o never nunca retorna nada

function criaErro(): never {
  throw new Error('Erro teste');
};

criaErro();
