import {createRandomArray} from '../utils.js';

// O(N)-O(N^2)/O(1)
const bubbleSort = (array) => {
  const N = array.length;
  let isSorted = false;
  let cmp = 0;
  let asg = 0;

  while(!isSorted){
    isSorted = true;
    for(let i = 0; i < N; i++){
      if ((++cmp) && array[i] > array[i+1]){
        asg += 3;
        [array[i], array[i+1]] = [array[i+1], array[i]];
        isSorted = false;
      }
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

console.log('array10', bubbleSort(array10));
console.log('array100', bubbleSort(array100));
console.log('array1000', bubbleSort(array1000));
console.log('array10000', bubbleSort(array10000));
console.log('array100000', bubbleSort(array100000));
