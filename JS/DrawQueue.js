class DrawQueue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  get length() {
    return this.items.length;
  }
}

export {DrawQueue}
