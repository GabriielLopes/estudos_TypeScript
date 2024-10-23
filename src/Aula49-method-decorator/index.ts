function decorador<T>(classProtoType: T, nomeMetodo: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  console.log(classProtoType, nomeMetodo, descriptor);
  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    }
  }
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorador
  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome} ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}
const pessoa = new UmaPessoa('GABRIEL', 'LOPES', 25);
const metodo = pessoa.metodo("Olá mundo!");
console.log(metodo);
