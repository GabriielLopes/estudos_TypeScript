export class Pesssoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

// ESTRUTURA DE DADOS PILHA (STACK)

export class Stack<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T) {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  lenght(): number {
    return this.contador;
  }
  showStack(): void {
    for(const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

while(!stack.isEmpty()) {
  console.log(stack.pop());
}
