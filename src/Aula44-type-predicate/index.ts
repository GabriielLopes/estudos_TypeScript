export function isNumber(value: unknown): value is number { // aqui estamos dizendo que se o valor for 'true', o valor é um número
  return typeof value === 'number'; // O typescript já reconhece que isso será um boolean
}

export function soma<T>(...args: T[]): number | null {
  return args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) return sum + value;
    return sum;
  }, 0);
}

console.log(soma(1,2,3))
