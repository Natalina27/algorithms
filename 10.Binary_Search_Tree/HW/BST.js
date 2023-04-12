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

//O(log N)
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

//if found return node, if not found return undefined; O(log N)
  search(value){
    if(!this.root) return false;
    let current = this.root;
    let found = false;
    while(current && !found){
      if(value < current.value){
        current = current.left;
      }else if(value > current.value){
        current = current.right;
      }else{
        found = true;
      }
    }
    if(!found) return undefined;
    return current;
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
    return this;
  }

  removeNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.removeNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.removeNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.removeNode(root.right, root.value);
    }
    return root;
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  smallLeftRotation(){}

  smallRightRotation(){}

  bigLeftRotation(){}

  bigRightRotation(){}

  rebalance(){

  }

  merge(){}

  split(){}

  printLevel(node, level) {
    if (!node) {
      return;
    }
    if (level === 1) {
      console.log(`${node.value} `);
    } else if (level > 1) {
      this.printLevel(node.left, level - 1);
      this.printLevel(node.right, level - 1);
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
console.log('search 10',bsTree.search(10));
console.log('search 20',bsTree.search(20));
console.log(bsTree.search(30)); //undefined

console.log('remove 20',bsTree.remove(20));
console.log('remove 6',bsTree.remove(6));

//        10
//    8       15
//  3     13
bsTree.printLevel(bsTree.root, 1);
bsTree.printLevel(bsTree.root, 2);
bsTree.printLevel(bsTree.root, 3);

