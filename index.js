// eslint-disable-next-line no-console
console.log('working');

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    console.log(this.stack.length);
    return this.stack[this.stack.length - 1];
  }
}
const stack = new Stack;
stack.push('hello');
stack.push('bye');
stack.push('see ya');
stack.push('howdy');
console.log(stack);

stack.pop();
console.log(stack);

stack.peek();

console.log('peek', stack.peek());
