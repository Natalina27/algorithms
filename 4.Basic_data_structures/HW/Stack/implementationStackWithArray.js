class Stack {
  constructor()
  {
    this.items = [];
  }

  push(item){
    this.items.push(item);
  }

  pop(){
    return this.items.length ? this.items.pop() : "Underflow";
  }

  peek(){
    return this.items[this.items.length - 1];
  }

  isEmpty(){
    return this.items.length === 0;
  }

  printStack(){
    let str = "";
    for (let i = 0; i < this.items.length; i++){
      str += this.items[i] + " ";
    }
    return str;
  }
}

const stack = new Stack();
console.log('stack', stack);
console.log('isEmpty', stack.isEmpty());

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log('stack after push', stack);

stack.pop();
console.log('stack after pop', stack);

console.log('peeked item', stack.peek());
console.log('isEmpty', stack.isEmpty());
console.log(stack.printStack());

