class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val){
    const newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue(){
    if(!this.first) return null;

    let temp = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  peek(){
    return this.first.value;
  }

  isEmpty(){
    return this.size === 0;
  }

  printQueue(){
    let str = "";

    let current = this.first;
    while (current) {
      str += current.value + " ";
      current = current.next
    }
    return str;
  }
}

const queueLL = new Queue();
console.log('queue', queueLL);
console.log('isEmpty', queueLL.isEmpty());

queueLL.enqueue(1);
queueLL.enqueue(2);
queueLL.enqueue(3);
queueLL.enqueue(4);
queueLL.enqueue(5);
console.log('queue after enqueue', queueLL.printQueue());

queueLL.dequeue();
console.log('queue after dequeue', queueLL.printQueue());

console.log('peeked item', queueLL.peek());
console.log('isEmpty', queueLL.isEmpty());
console.log(queueLL.printQueue());
