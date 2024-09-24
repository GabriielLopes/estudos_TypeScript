// A classe não pode ser instânciada diretamente, apenas por subclasses.
export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected defesa: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    if (this.vida > 0) {
      this.bordao();
      const defesaPersonagemAtacado = personagem.defesa * 0.3;
      const ataqueEfetivo = this.ataque - defesaPersonagemAtacado;

      personagem.perderVida(ataqueEfetivo);
      console.log(`${this.emoji} ${this.nome} está atacando ${personagem.nome} e causou ${ataqueEfetivo} de dano.`)
    } else {
      console.log(`O personagem ${this.nome} morreu e não pôde finalizar seu ataque.`);
    }
  }

  perderVida(forcaAtaque: number): void {
    if (this.vida <= 0) {
      console.log(`${this.nome} já está morto ! você não pode atacá-lo`);
    } else if (this.vida > forcaAtaque) {
      this.vida -= forcaAtaque
      console.log(`${this.emoji} ${this.nome} foi atacado. e restou ${this.vida} pontos de vida.`)
    } else if (this.vida <= forcaAtaque) {
      this.vida -= forcaAtaque
      console.log(`${this.emoji} ${this.nome} foi atacado e morreu!`);
    }
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

const guerreira = new Guerreira('Guerreira', 100, 100,1000);
const monstro = new Monstro('Monstro', 50, 75, 350);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
