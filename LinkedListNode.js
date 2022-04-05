class LinkedListNode {
  // #data = '';
  // #next = '';
  
  constructor(data)
  {
    this.data = data;
    this.next = null; //another instance of LinkedListNode initialized as null
  }
  
  add(node) {
    // check to see if there is already a next property
    if (!this.next) {
      //if not, this passed node can be our next in the LinkedList
      this.next = node;
    }
    else {
      //if there is already a node, run add method recursively on this.next and pass in initial node
      this.next.add(node);
    }
  }

  getList() {
    // check to see if there is already a next property
    if (!this.next) {
    // Just returns the data value
      return this.data;
    // If there is a this.next return the data value
    } else {
    // Returning this.data for this instance and recursively calling getlist on this.next
      return this.data + ' ' + this.next.getList();
    }
  }
}
  
const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
console.log('root', root);
console.log('getlist', root.getList()); // 'A B'
const nodeC = new LinkedListNode('C');
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log('nodeD', nodeD);
console.log(root.getList()); // 'A B C D E'
