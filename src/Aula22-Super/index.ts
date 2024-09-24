export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected readonly cpf: string,
  ) {}

  public getIdade(): number {
    return this.idade;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }
}

const aluno = new Aluno('Pedrinho', 'Silva', 25, '000.000.000-00', '2B')
console.log(aluno.getNomeCompleto())

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    console.log('Fazendo algo')
    return super.getNomeCompleto();
  }
}
