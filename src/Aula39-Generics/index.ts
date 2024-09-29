// GENERICS

type FilterCallback<U> = (
  value: U,
  index?: number,
  array?: U[],
) => boolean;

export function meuFilter<T>(array: T[], callbackFn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((valor) => valor < 5); // JavaScript
console.log(arrayFiltradoOriginal)

const arrayFiltrado = meuFilter(array, (valor) => valor > 6);
console.log(arrayFiltrado)
