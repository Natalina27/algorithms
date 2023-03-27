class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val){
    const newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop(){
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last){
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

  printStack(){
    let str = "";

    let current = this.first;
    while (current) {
      str += current.value + " ";
      current = current.next
    }
    return str;
  }
}

const stackLL = new Stack();
console.log('stack', stackLL);
console.log('isEmpty', stackLL.isEmpty());

stackLL.push(1);
stackLL.push(2);
stackLL.push(3);
stackLL.push(4);
stackLL.push(5);
console.log('stack after push', stackLL);

stackLL.pop();
console.log('stack after pop', stackLL);

console.log('peeked item', stackLL.peek());
console.log('isEmpty', stackLL.isEmpty());
console.log(stackLL.printStack());
