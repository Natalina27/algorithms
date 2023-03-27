/*
Priority Queue is an extension of Queue having some properties as follows:

- Each element of the priority queue has a priority associated with it.
- Elements are added to the queue as per priority.
- Lowest priority elements are removed first.

 */

class QElement {
  constructor(element, priority)
  {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor()
  {
    this.items = [];
  }

  enqueue(item, priority){
    const qElement = new QElement(item, priority);
    let contain = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }
    if (!contain) {
      this.items.push(qElement);
    }
  }

  dequeue(){
    return this.items.length ? this.items.shift() : "Underflow";
  }

  first(){
    return this.items.length ? this.items[0] : "No elements in Queue";
  }

  last(){
    return this.items.length ? this.items[this.items.length - 1] : "No elements in Queue";
  }

  isEmpty(){
    return this.items.length === 0;
  }

  printPQueue(){
    let str = "";
    for (let i = 0; i < this.items.length; i++)
      str += this.items[i].element + " ";
    return str;
  }
}

const priorityQueue = new PriorityQueue();
console.log('priorityQueue', priorityQueue);
console.log('isEmpty', priorityQueue.isEmpty());

priorityQueue.enqueue('LaLaLa',0);
priorityQueue.enqueue('PeterKot',1);
priorityQueue.enqueue('LuckyPes', 2);
priorityQueue.enqueue('AmelieKrasaviza', 3);
priorityQueue.enqueue('DusyaJus', 4);
priorityQueue.enqueue('ScoobyDoo',5);
console.log('priorityQueue after enqueue: ', priorityQueue.printPQueue());

priorityQueue.dequeue();
console.log('priorityQueue after dequeue: ', priorityQueue.printPQueue());

console.log('the front element of the Priority queue: ', priorityQueue.first());
console.log(priorityQueue.printPQueue());

console.log('the last element of the Priority queue:  ', priorityQueue.last());
console.log(priorityQueue.printPQueue());

console.log('isEmpty', priorityQueue.isEmpty());
console.log(priorityQueue.printPQueue());
