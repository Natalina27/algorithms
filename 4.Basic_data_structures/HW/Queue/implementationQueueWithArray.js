class Queue{
  constructor() {
    this.items = [];
  }

  //O(1)
  enqueue(item){
    this.items.push(item);
  }

  //O(N)
  dequeue(){
    return this.items.length ? this.items.shift() : "Underflow";
  }

  //O(1)
  peek(){
    return this.items.length ? this.items[0] : "No elements in Queue";
  }

  isEmpty(){
    return this.items.length === 0;
  }

  printQueue(){
    let str = "";
    for(let i = 0; i < this.items.length; i++)
      str += this.items[i] +" ";
    return str;
  }
}

const queue = new Queue();
console.log('queue', queue);
console.log('isEmpty', queue.isEmpty());

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log('queue after enqueue', queue);

queue.dequeue();
console.log('queue after dequeue', queue);

console.log('peeked item', queue.peek());
console.log('isEmpty', queue.isEmpty());
console.log(queue.printQueue());
