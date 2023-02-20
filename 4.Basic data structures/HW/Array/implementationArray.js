class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  getElementAtIndex(index) {
    return this.data[index];
  }

  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.length;
  }

  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  deleteAt(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }

  insertAt(item, index) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    return this.data;
  }
}

const array = new MyArray();
//console.log("Print an array", array);

array.push(12);
array.push(13);
array.push(14);
array.push(10);

//Push: add element at the and and return new length
console.log("Print an array", array);
console.log("Push in an array and return new length:", array.push(989));
console.log("Print an array", array);

//Get element by index and return element
console.log("Getting element at position 2");
console.log(array.getElementAtIndex(2));

//Pop: Delete element from the end and return deleted element
console.log("Print an array", array);
console.log("Poped element: ");
console.log(array.pop());

//insertAt
array.insertAt(456, 2);
console.log("Inserting element at position 2", array);

//deleteAt
console.log('array:', array);
console.log("Deleting element at position 3:");
console.log(array.deleteAt(3));
console.log('array', array);
