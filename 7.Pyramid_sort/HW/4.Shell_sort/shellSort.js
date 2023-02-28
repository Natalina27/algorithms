import {array10, array100, array1000, array10000,array100000} from '../utils.js';

//O(n^2)/O(1)
function shellSort(arr) {
  const N = arr.length;
  let cmp = 0;
  let asg = 0;

  for (let gap = Math.floor(N/2); gap > 0; gap = Math.floor(gap/2))	{
    for (let i = gap; i < N; i += 1)  {
      asg ++;
      let temp = arr[i];

      let j;
      for (j = i; j >= gap && arr[j-gap] > temp && (++cmp); j-=gap)  {
        asg ++;
        arr[j] = arr[j-gap];
      }
      asg ++;
      arr[j] = temp;
    }
  }

  console.log(`cmp ${N}`, cmp);
  console.log(`asg ${N}`, asg);

  return arr;
}

console.log(shellSort([3, 9, 5, 12, 0, 11, 1, 4, 2]));

console.log('array10', shellSort(array10));
console.log('array100', shellSort(array100));
console.log('array1000', shellSort(array1000));
console.log('array10000', shellSort(array10000));
console.log('array100000', shellSort(array100000));
