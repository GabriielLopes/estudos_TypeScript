let x;
if (typeof x === 'undefined') x = 20;
console.log(x);

export function criarPessoa(
  // abertura da função
  firstName: string,
  lastName?: string,
): {
  // type-annotation
  firstName: string;
  lastName?: string;
} {
  // corpo da função
  return {
    firstName,
    lastName,
  };
}

export function quadradoDe(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}
