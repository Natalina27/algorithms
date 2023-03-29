class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value){
    const node = new Node(value);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop(){
    if(!this.head) return undefined;
    const poppedNode = this.tail;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }
    this.tail = poppedNode.prev;
    this.tail.next = null;
    this.length--;
    return poppedNode;
  }

  shift(){
    if(!this.head) return undefined;
    const shiftedNode = this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }
    this.head = shiftedNode.next;
    this.head.prev = null;
    this.length--;
    return shiftedNode;
  }

  unshift(value){
    const node = new Node(value);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index){
    if(index < 0 || index >= this.length) return null;
    let count, current;
    if(index <= this.length/2){
      count = 0;
      current = this.head;

      while(count !== index){
        current = current.next;
        count++;
      }
    }else{
      count = this.length - 1;
      current = this.tail;
      while(count !== index){
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, value){
    const newNode = this.get(index);
    if(newNode){
      newNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value){
    if(index < 0 || index >= this.length) return false;
    const node = new Node(value);
    if(index === this.length -1){
      this.push(value);
    }
    if(index === 0){
      this.unshift(value);
    }
    const prevNode = this.get(index-1);
    const nextNode = prevNode.next;

    prevNode.next = node;
    nextNode.prev = node;
    node.prev = prevNode;
    node.next = nextNode;

    this.length++;

    return true;

  }

  remove(index){
    if(index < 0 || index >= this.length) return undefined;

    if(index === this.length -1){
      this.pop();
    }
    if(index === 0){
      this.shift();
    }
    const removedNode = this.get(index);

    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    removedNode.prev = null;
    removedNode.next = null;

    this.length--;

    return removedNode;
  }

  print(){
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value)
      current = current.next
    }
    return arr;
  }
}

const dList = new DoublyLinkedList();
console.log('dList', dList); // { head: null, tail: null, length: 0 }

//methods

// 1. push(): add node to the linked list tail
dList.push(0);
dList.push(1);
dList.push(2);
dList.push(3);
dList.push(4);
dList.push(5);
dList.push(6);
dList.push(7);
console.log('dList', dList);//0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
console.log(dList.head.value); //returns 0
console.log(dList.tail.value); //returns 7
console.log(dList.length); //returns 8
//
//2. pop(): delete node from the linked list tail and return deleted node
console.log('poppedNode value', dList.pop().value); //7
console.log(dList.print());//0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
console.log(dList.head.value); //returns 0
console.log(dList.tail.value); //returns 6
console.log(dList.length); //returns 7

//3. shift(): delete node from the linked list head and return deleted node
console.log(dList.print());//0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
console.log('shiftedNode value',dList.shift().value); //0
console.log(dList.print());// 1 -> 2 -> 3 -> 4 -> 5 -> 6
console.log(dList.head.value); //returns 1
console.log(dList.tail.value); //returns 6
console.log(dList.length); //returns 6

//4. unshift(value): adding node to the beginning of the list and return new linked list
console.log(dList.print());// 1 -> 2 -> 3 -> 4 -> 5 -> 6
console.log('new list', dList.unshift(13));
console.log(dList.head.value); //returns 13
console.log(dList.tail.value); //returns 6
console.log(dList.length); //returns 7

//5. get(index): retrieving node by its position
console.log(dList.print());// 13 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
console.log('get value in index 3', dList.get(3).value); //3

//6. set(index, value): changing value of the node by its position
console.log(dList.set(3, 33)); //true
console.log(dList.print());// 13 -> 1 -> 2 -> 33 -> 4 -> 5 -> 6
console.log('get new value in index 3', dList.get(3).value); //33

//7. insert(): adding a node at a specific position
console.log(dList.print()); //13 -> 1 -> 2 -> 33 -> 4 -> 5 -> 6
console.log(dList.get(2).value); //2
console.log(dList.insert(2, 22)); //true
console.log(dList.get(2).value); //22
console.log(dList.print()); // 13 -> 1 -> 2 -> 22 -> 33 -> 4 -> 5 -> 6

//8. remove(): removing a node at specific position
console.log(dList.print()); // 13 -> 1 -> 2 -> 22 -> 33 -> 4 -> 5 -> 6
console.log('removed value',dList.remove(5).value); //4
console.log(dList.print()); // 13 -> 1 -> 2 -> 22 -> 33 -> 5 -> 6
