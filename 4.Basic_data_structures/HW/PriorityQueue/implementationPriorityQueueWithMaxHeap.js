class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(indexOne, indexTwo) {
    [this.heap[indexOne], this.heap[indexTwo]] = [this.heap[indexTwo], this.heap[indexOne]];
  }

  peek() {
    return this.heap.length ? this.heap[0] : null;
  }


  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] > this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  printPQueue(){
    let str = "";
    for (let i = 0; i < this.heap.length; i++)
      str += this.heap[i] + " ";
    return str;
  }
}

const PriQueueMax = new PriorityQueue();

PriQueueMax.add(1);
PriQueueMax.add(2);
PriQueueMax.add(3);
PriQueueMax.add(4);
PriQueueMax.add(5);
console.log('PriQueue', PriQueueMax.printPQueue());

console.log('picked', PriQueueMax.peek());
console.log(PriQueueMax.printPQueue());

console.log('removed', PriQueueMax.remove());
console.log(PriQueueMax.printPQueue());

PriQueueMax.add(1);
console.log(PriQueueMax.printPQueue());

console.log('parent 0', PriQueueMax.parent(0));
console.log('parent 1', PriQueueMax.parent(1));


