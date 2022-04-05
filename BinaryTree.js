class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  add(node) {
    if (!this.left && !this.right) {
      if (this.value < node) {
        this.right = node;
      }
      elseif (this.value > node) {
          this.left = node;
        }
      }
    } else {
        if (this.value < node) {
            return this.right.add(node);
        } elseif (this.value > node) {
            return this.left.add(node);
        }
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
