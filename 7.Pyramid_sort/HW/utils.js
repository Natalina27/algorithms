const createRandomArray = n => Array.from({length: n}, () => Math.floor(Math.random() * n));
export const array10 = createRandomArray(10);
export const array100 = createRandomArray(100);
export const array1000 = createRandomArray(1000);
export const array10000 = createRandomArray(10000);
export const array100000 = createRandomArray(100000);
