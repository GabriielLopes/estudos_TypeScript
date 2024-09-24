export class Pessoa {
  constructor(
    private _nome: string,
    private _sobrenome: string,
    private _idade: number,
    protected _cpf: string,
  ) {}

  // GETTER
  get nome(): string {
    return this._nome;
  }
  get sobrenome(): string {
    return this._sobrenome;
  }
  get idade(): number {
    return this._idade;
  }
  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  // SETTER
  set nome(valor: string) {
    this._nome = valor;
  }
  set sobrenome(valor: string) {
    this._sobrenome = valor;
  }
  set idade(valor: number) {
    this._idade = valor;
  }
  set cpf(valor: string) {
    this._cpf = valor;
  }
}

const pessoa1 = new Pessoa('Gabriel', 'Lopes', 25, '111.111.111-11');
pessoa1.cpf = '123.456.789-88';
console.log(pessoa1.cpf);
