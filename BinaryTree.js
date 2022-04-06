class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  add(node) {
    if(node.value === this.value) {
      //edge case if duplicate value just return cuz already in tree
      return;
    }
    // if node value is less than this valu go left
    if(node.value < this.value) {
      // if this .left doesnt exist make this.left node
      if(!this.left) this.left = node;
      // else recursively run add on this.left passing in node
      else this.left.add(node);
    }
    //if node value is greater than this.value go right
    else {
      // if this.right doesnt exist make this.right equal to node passed in
      if(!this.right) this.right = node;
      //if there is a this.right, run add on that this.right passing in node
      else this.right.add(node);
    }
  }
}


const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);
console.log(B);
