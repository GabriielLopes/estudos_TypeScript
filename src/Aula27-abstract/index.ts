// A classe não pode ser instânciada diretamente, apenas por subclasses.
export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    console.log(`${this.nome} está atacando ${personagem.nome} e causou ${this.ataque} de dano.`)
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque
    console.log(`${this.nome} foi atacado. e restou ${this.vida} pontos de vida.`)
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1f9DD}'

  bordao(): void {
    console.log(this.emoji + " " +'Guerreira ao ataque!!');
  }
}
export class Monstro extends Personagem {
  protected emoji: string = '\u{1F9DF}';
  bordao(): void {
    console.log(this.emoji + " " + 'Monstro ao ataque!!');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 50, 375);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
