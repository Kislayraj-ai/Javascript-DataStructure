class ArrayQueue {
	constructor() {
		this.element = [];
		this.frontIndex = 0;
		this.backIndex = -1;
	}
	isEmpty() {
		return this.length == 0;
	}
	enqueue(value) {
		this.backIndex++;
		this.element[this.backIndex] = value;
	}
	dequeue() {
		if (this.isEmpty()) throw new Error('No elements');
		const value = this.getFront();
		this.element[this.frontIndex] = null;
		this.frontIndex++;
		return value;
	}
	getFront() {
		if (this.isEmpty()) throw new Error('No elements');
		return this.element[this.frontIndex];
	}
	clear() {
		this.element = [];
		this.backIndex = 0;
		this.frontIndex = -1;
	}
	Print() {
		for (let i = this.frontIndex; i < this.element.length; i++) {
			console.log(this.element[i]);
		}
	}
}

const que = new ArrayQueue();
que.enqueue(10);
que.enqueue(20);
que.enqueue(30);
que.enqueue(40);

// que.dequeue();
// que.dequeue();
// que.dequeue();
// que.dequeue();

que.Print();
console.log(que);
