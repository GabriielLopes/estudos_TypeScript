@decorator('valor1', 'valor2')

export class Animal {
  constructor(public cor: string) {}
}

// FUNÇÃO DECORADORA
/* function decorator<T>(target: T): T {
  return target;
} */

function decorator(param1: string, param2: string) {
  console.log(param1, param2)
  return function <T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
      cor: string;

      constructor(...args: any[]) {
        super(...args);
        this.cor = this.inverterTexto(args[0]);
      }

      inverterTexto(valor: string): string {
        const valorInvertido = valor.split('').reverse().join('');
        return valorInvertido;
      }
    };
  };
}

const animal = new Animal('Amarelo');
console.log(animal);
