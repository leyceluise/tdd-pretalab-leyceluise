const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue();
    expect(queue.size()).toBe(0); 

    queue.enqueue('item1');
    queue.enqueue('item2');
    expect(queue.size()).toBe(2);
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue();
    queue.enqueue('novo item');

    expect(queue.elements).toEqual(['novo item']);
    expect(queue.size()).toBe(1);
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue();
    queue.enqueue('primeiro');
    queue.enqueue('segundo');

    expect(queue.peek()).toBe('primeiro');
    expect(queue.size()).toBe(2);
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();
    queue.enqueue('primeiro');
    queue.enqueue('segundo');

    const removedItem = queue.dequeue();
    expect(removedItem).toBe('primeiro');
    expect(queue.elements).toEqual(['segundo']);
    expect(queue.size()).toBe(1);
  })
})