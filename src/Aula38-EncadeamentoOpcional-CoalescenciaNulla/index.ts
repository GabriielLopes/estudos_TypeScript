// Encadeamento Opcional e Coalescência Nula

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
}

const documento: Documento = {
  titulo: 'Titulo 1',
  texto: 'texto 1',
}
// Exemplo de Encadeamento Opcional
console.log(documento.data?.toDateString());

// Coalescência Nula, irá verificar somente se a variavél está retornando Null ou Undefined.
// Exemplo de Coalescência Nula

console.log(documento.data?.toDateString() ?? 'Não existe data!');
