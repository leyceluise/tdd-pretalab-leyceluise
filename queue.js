class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  size() {
    return this.elements.length;
  }

  enqueue(item) {
    this.elements.push(item);
  }

  peek() {
    if (this.elements.length === 0) {
      return null; // Ou você pode lançar um erro: throw new Error('Queue is empty');
    }
    return this.elements[0];
  }

  dequeue() {
    if (this.elements.length === 0) {
      return null; // Ou lance um erro
    }
    return this.elements.shift();
  }
}

module.exports = Queue