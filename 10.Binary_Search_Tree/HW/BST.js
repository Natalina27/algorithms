class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value){
    const newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true){
        if(value === current.value) return undefined;
        if(value < current.value){
          if(!current.left){
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if(value > current.value){
          if(!current.right){
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }

  }

}

const bsTree = new BinarySearchTree();
// bsTree.root = new Node(10);
// bsTree.root.right = new Node(15);
// bsTree.root.left = new Node(6);
// bsTree.root.left.right = new Node(8);
// bsTree.root.left.left = new Node(3);
// bsTree.root.right.right = new Node(20);
bsTree.insert(10);
bsTree.insert(6);
bsTree.insert(15);
bsTree.insert(3);
bsTree.insert(8);
bsTree.insert(20);
bsTree.insert(13);
console.log('bsTree', bsTree);
console.log('bsTree.root.left', bsTree.root.left);
console.log('bsTree.root.right', bsTree.root.right);

//        10
//    6       15
//  3   8  13    20
