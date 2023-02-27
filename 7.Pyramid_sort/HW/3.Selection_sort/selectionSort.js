import {createRandomArray} from '../utils.js';

//O(n^2)/O(1)
function selectionSort(array) {
  const N = array.length;
  let cmp = 0;
  let asg = 0;

  for (let i = 0; i < N - 1; i++) {
    let min_idx = i;

    for (let j = i + 1; j < N; j++) {
      if((++cmp) && array[j] < array[min_idx]){
        min_idx = j;
      }
    }
    asg += 3;
    if(i !== min_idx){
      [array[i], array[min_idx]] = [array[min_idx], array[i]];
    }
  }
  console.log(`cmp ${N}`, cmp);
  console.log(`asg ${N}`, asg);
  return array;
}
const array10 = createRandomArray(10);
const array100 = createRandomArray(100);
const array1000 = createRandomArray(1000);
const array10000 = createRandomArray(10000);
const array100000 = createRandomArray(100000);

console.log('array10', selectionSort(array10));
console.log('array100', selectionSort(array100));
console.log('array1000', selectionSort(array1000));
console.log('array10000', selectionSort(array10000));
console.log('array100000', selectionSort(array100000));
