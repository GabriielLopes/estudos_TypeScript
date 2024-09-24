export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  set ferramenta(ferramenta: Ferramenta) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  get nome(): string {
    return this._nome;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log("Não posso escrever sem ferramenta!");
      return;
    }
    this._ferramenta?.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
      console.log("Caneta escrevendo...")
  }
}

export class MaquinaDeEscrever extends Ferramenta {
  escrever(): void {
    console.log('MaquinaDeEscrever escrevendo...');
  }
}
const escritor = new Escritor('Gabriel');
const caneta = new Caneta('Bic azul');
const maquinaDeEscrever = new MaquinaDeEscrever('Maquina de escrever');

console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquinaDeEscrever.nome)


escritor.escrever()
