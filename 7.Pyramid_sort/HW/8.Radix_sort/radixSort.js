import {array10, array100, array1000, array10000,array100000} from '../utils.js';

//O(N*M)/O(N+M)
function getDigit(num, pos) {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10
}

function getCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getMaxCount(arr) {
  const max = Math.max.apply(null, arr);
  return isFinite(max) ? getCount(max) : 0;
}

function radixSort(arr) {
  const N = arr.length;
  let cmp = 0;
  let asg = 0;

  asg++;
  const maxCount = getMaxCount(arr);

  for (let i = 0; i < maxCount; i++) {
    asg++;
    const bucket = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < N; j++) {
      asg++;
      const digit = getDigit(arr[j], i);
      bucket[digit].push(arr[j]);
    }
    asg++;
    arr = [].concat(...bucket);
  }
  console.log(`cmp ${N}`, cmp);
  console.log(`asg ${N}`, asg);
  return arr;
}

console.log(radixSort([3, 9, 5, 12, 0, 11, 1, 4, 2]));

console.log('array10', radixSort(array10));
console.log('array100', radixSort(array100));
console.log('array1000', radixSort(array1000));
console.log('array10000', radixSort(array10000));
console.log('array100000', radixSort(array100000));

// [1, 2, 845, 2356]

// Math.log10(1935)
// 10 ^ x = 1935
// x = 3.29 = 3

// // Math.log10(10) -> 1
// // Math.log10(20) -> 1

// // log10(20) = x
// // 10 ^ x = 20
// // x = 1.3010299956639813 -> 1
