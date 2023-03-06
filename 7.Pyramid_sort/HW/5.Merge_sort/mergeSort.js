import {array10, array100, array1000, array10000,array100000} from '../utils.js';

//O(n log(n))/O(N)
function mergeSort(array) {
  const N = array.length;
  let cmp = 0;
  let asg = 0;

  if(N <= 1) return array;
  const mid = Math.floor(N/2);
  console.log('mid', mid);
  const left = mergeSort(array.slice(0,mid));
  console.log('left', left);
  const right = mergeSort(array.slice(mid));
  console.log('right', right);

  return merge(left, right);
}

function merge(arr1, arr2){
  let results = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j])
      j++;
    }
  }
  while(i < arr1.length) {
    results.push(arr1[i])
    i++;
  }
  while(j < arr2.length) {
    results.push(arr2[j])
    j++;
  }
  return results;
}

console.log(mergeSort([3, 9, 5, 12, 0, 11, 1, 4, 2]));

console.log('array10', mergeSort(array10));
console.log('array100', mergeSort(array100));
console.log('array1000', mergeSort(array1000));
console.log('array10000', mergeSort(array10000));
console.log('array100000', mergeSort(array100000));
