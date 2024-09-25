type TipoNomeCompleto = {
  nomeCompleto: () => string;
}

type TipoNome = {
  nome: string;
}

type TipoSobrenome = {
  sobrenome: string;
};

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {

  constructor(
  public nome: string,
  public sobrenome: string,
  ) {

  }
  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}
