class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
  }
  addFront(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  removeFront() {
    if (this.head) {
      this.head = this.head.next;
    }
    return this.head;
  }

  front() {
    if (this.head) {
      return this.head.value;
    }
    return null;
  }

  contains(value) {
    let runner = this.head;
    while (runner) {
      if (runner.value === value) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  length() {
    let runner = this.head;
    let numOfNodes = 0;
    while (runner) {
      numOfNodes++;
      runner = runner.next;
    }
    return numOfNodes;
  }

  display() {
    let string = "";
    let runner = this.head;
    while (runner) {
      string += runner.value + "";
      runner = renner.next;
    }
    return string;
  }

  max() {
    let max = this.head.value;
    let runner = this.head;
    while (runner) {
      if (runner.value > max) {
        max = runner.value;
      }
      runner = runner.next;
    }
  }

  min() {
    let min = this.head.value;
    let runner = this.head;
    while (runner) {
      if (runner.value < min) {
        min = runner.value;
      }
      runner = runner.next;
    }
  }

  average() {
    let sum = 0;
    let runner = this.head;
    while (runner) {
      sum += runner.value;
      runner = runner.next;
    }
    return sum / this.length;
  }
}
