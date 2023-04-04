/*
  For any index of an array n...

  The Left child is stored at  2n + 1
  The Right child is stored at 2n + 2

  Its parent is at index (n - 1)/2 - floored
*/

class Heap {
  constructor(){
    this.values = [];
  }

  insert(value){
    this.values.push(value);
    this.bubbleUp();
  }

    bubbleUp(){
    let idx = this.values.length - 1;
    const el = this.values[idx];

    while (idx > 0){
      const parentIdx = Math.floor((idx - 1)/2);
      const parent = this.values[parentIdx];
      if(el <= parent) break;
      [parent, el]=[el, parent];
      idx = parentIdx;
     }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

    sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (
            swap === null && rightChild > element ||
            swap !== null && rightChild > leftChild
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

}

const heap = new Heap();
heap.insert(57);//root
heap.insert(38);//l
heap.insert(45);//r
heap.insert(32);//ll
heap.insert(23);//lr
heap.insert(10);//rl
heap.insert(36);//rr
console.log('heap', heap);// 57, 38, 45, 32, 23, 10, 36
heap.extractMax();
console.log('heap 1', heap); //45, 38, 36, 32, 23, 10

