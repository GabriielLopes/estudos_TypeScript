// INTERFACES E TYPES FUNCIONAM DA MESMA MANEIRA.
  // O INTERSECTION TYPES NÃO FUNCIONA COM INTERFACE.

interface TipoNomeCompleto {
  nomeCompleto(): string;
};

interface TipoNome {
  nome: string;
};

interface TipoSobrenome {
  sobrenome: string;
};

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto

export class Pessoa implements TipoPessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}


// esta é a forma que irá functionar igual ao intersection types.

interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

const pessoaObj: TipoPessoa2 = {
  nome: 'Gabriel',
  sobrenome: 'Lopes',
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome
  }
}
console.log(pessoaObj);
