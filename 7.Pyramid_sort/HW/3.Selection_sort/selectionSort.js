import {array10, array100, array1000, array10000,array100000} from '../utils.js';

//O(N^2)/O(1)
function selectionSort(array) {
  const N = array.length;
  let cmp = 0;
  let asg = 0;

  for (let i = 0; i < N; i++) {
    let min_idx = i;

    for (let j = i + 1; j < N; j++) {
      if((++cmp) && array[j] < array[min_idx]){
        min_idx = j;
      }
    }

    if(i !== min_idx){
      asg += 3;
      [array[i], array[min_idx]] = [array[min_idx], array[i]];
    }
  }
  console.log(`cmp ${N}`, cmp);
  console.log(`asg ${N}`, asg);
  return array;
}
console.log(selectionSort([3, 9, 5, 12, 0, 11, 1, 4, 2]));

console.log('array10', selectionSort(array10));
console.log('array100', selectionSort(array100));
console.log('array1000', selectionSort(array1000));
console.log('array10000', selectionSort(array10000));
console.log('array100000', selectionSort(array100000));
