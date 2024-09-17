// Array<T> ou T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => acumulador * valor,1)
}

console.log(multiplicaArgs(1,5,3))

export function concatenaString(...args: string[]) {
  return args.reduce((acumulador, valor) => acumulador + valor);
}

console.log(concatenaString('gabriel', 'lopes'))

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

console.log(toUpperCase('Gabriel', 'lopes'));

// readonly em arrays

const array: readonly string[] = ['Gabriel'];
const array2: ReadonlyArray<string> = ['Gabriel'];
