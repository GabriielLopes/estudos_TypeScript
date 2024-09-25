// Neste caso, uma classe não existe sem a outra classe.

export class Carro {
  private readonly motor: Motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor ligado.');
  }

  acelerar(): void {
    console.log('Acelerando...');
  }

  parar(): void {
    console.log('Motor está parando.');
  }

  desligar(): void {
    console.log('O motor está desligado.')
  }
}

const carro = new Carro();

carro.acelerar();
