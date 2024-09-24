// metodos statics vc só consegue acessar diretamente pela classe
// Para acessar qualquer atributo estatico ou metodos estaticos deve se chamar pela nome da Classe e não pelo 'THIS'

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  // EXEMPLOS METODOS STATIC (ESTATICOS)
  static falaOi(): void {
    console.log('Oi');
  }

  // FACTORY METHOD
  static criaPessoa(nome: string, sobrenome: string, idade: number, cpf: string): Pessoa {
    // return new Pessoa(nome, sobrenome, 00, '000.000.000-00');
    return new Pessoa(nome, sobrenome, idade, cpf);
  }
}

const pessoa1 = new Pessoa('Gabriel', 'Lopes', 25, '111.111.111-11');
pessoa1.cpf = '123.456.789-88';
console.log(pessoa1.cpf);
Pessoa.falaOi();

const pessoa2 = Pessoa.criaPessoa('Karla', 'Nascimento', 20, '111.111.111.22')
console.log(pessoa2)
