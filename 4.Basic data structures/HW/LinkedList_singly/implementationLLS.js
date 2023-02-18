class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
// O(1)
  push(value) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  
// O(N)
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let previous = current;

    while (current.next) {
      previous = current;
      current = current.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // O(1)
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // O(1)
  unshift(value) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  // O(N)
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // O(N)
  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
    }
    return !!foundNode;
  }

  // O(1)
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new ListNode(val);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // O(1)/O(N)
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  // O(N)
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  //O(N)
  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value)
      current = current.next
    }
    return arr;
  }

  // O(1)
  clear() {
    this.head = null;
    this.length = 0;
    return this;
  }


}

const list = new LinkedList();
console.log('list', list); // { head: null, tail: null, length: 0 }

//methods

// 1. push(): add node to the linked list tail
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
console.log('list', list);//0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
console.log(list.head.value); //returns 0
console.log(list.tail.value); //returns 7
console.log(list.length); //returns 8

//2. pop(): delete node from the linked list tail and return deleted node
console.log(list.pop().value); //7
console.log(list.print());//0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
console.log(list.head.value); //returns 0
console.log(list.tail.value); //returns 6
console.log(list.length); //returns 7

//3. shift(): delete node from the linked list head and return deleted node
console.log(list.print());//0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
console.log(list.shift().value); //0
console.log(list.print());// 1 -> 2 -> 3 -> 4 -> 5 -> 6
console.log(list.head.value); //returns 1
console.log(list.tail.value); //returns 6
console.log(list.length); //returns 6

//4. unshift(value): adding node to the beggining of the list and return new linked list
console.log(list.print());// 1 -> 2 -> 3 -> 4 -> 5 -> 6
console.log('new list', list.unshift(13));
console.log(list.head.value); //returns 13
console.log(list.tail.value); //returns 6
console.log(list.length); //returns 7

//5. get(index): retrieving node by its position
console.log(list.print());// 13 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
console.log(list.get(3).value); //3

//6. set(index, value): changing value of the node by its position
console.log(list.set(3, 33)); //true
console.log(list.print());// 13 -> 1 -> 2 -> 33 -> 4 -> 5 -> 6
console.log(list.get(3)); //33

//7. insert(): adding a node at a specific position
console.log(list.print()); //13 -> 1 -> 2 -> 33 -> 4 -> 5 -> 6
console.log(list.get(2).value); //2
console.log(list.insert(2, 22)); //true
console.log(list.get(2).value); //22
console.log(list.print()); // 13 -> 1 -> 2 -> 22 -> 33 -> 4 -> 5 -> 6

//8. remove(): removing a node at specific position
console.log(list.print()); // 13 -> 1 -> 2 -> 22 -> 33 -> 4 -> 5 -> 6
console.log(list.remove(5).value); //22
console.log(list.print()); // 13 -> 1 -> 2 -> 22 -> 33 -> 5 -> 6


//9. reverse(): reversing linked list in place
console.log(list.print()); // 13 -> 1 -> 2 -> 22 -> 33  -> 5 -> 6
list.reverse();
console.log(list.print()); // 6 -> 5  -> 33 -> 22 -> 2 -> 1 -> 13


//10. print():

//11. clear(): empties out the list
console.log('list clear: ', list.clear());
console.log('list size: ', list.length); // 0
