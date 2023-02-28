import {array10, array100, array1000, array10000,array100000} from '../utils.js';

//O(n^2)/O(1)
function insertionSort(array) {
  const N = array.length;
  let cmp = 0;
  let asg = 0;

  for(let i = 1; i < N; i++){
    let current = array[i];

    let j = i - 1;
    while( j >= 0 && array[j] > current  && (++cmp)){
      asg ++;
      array[j + 1] = array[j];
      j--;
    }
    asg ++;
    array[j + 1] = current;
  }
  console.log(`cmp ${N}`, cmp);
  console.log(`asg ${N}`, asg);
  return array;
}

console.log(insertionSort([3, 9, 5, 12, 0, 11, 1, 4, 2]));

console.log('array10', insertionSort(array10));
console.log('array100', insertionSort(array100));
console.log('array1000', insertionSort(array1000));
console.log('array10000', insertionSort(array10000));
console.log('array100000', insertionSort(array100000));
