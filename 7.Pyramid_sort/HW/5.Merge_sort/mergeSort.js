import {array10, array100, array1000, array10000,array100000} from '../utils.js';

//O(N^2)/O(1)
function mergeSort(array) {
  const N = array.length;
  let cmp = 0;
  let asg = 0;

  console.log(`cmp ${N}`, cmp);
  console.log(`asg ${N}`, asg);
  return array;
}

console.log(mergeSort([3, 9, 5, 12, 0, 11, 1, 4, 2]));

console.log('array10', mergeSort(array10));
console.log('array100', mergeSort(array100));
console.log('array1000', mergeSort(array1000));
console.log('array10000', mergeSort(array10000));
console.log('array100000', mergeSort(array100000));
