//node
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	Enqueue(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}

	Dequeue() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;

		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		}
		this.length--;
		return this;
	}

	Index(index) {
		if (index < 0 || index >= this.length) return undefined;
		let count = 0;
		let current = this.head;
		while (count != index) {
			count++;
			current = current.next;
		}
		return current;
	}
	Update(index, val) {
		if (index < 0 || index >= this.length) return undefined;
		let found = this.Index(index);
		if (found) {
			found.val = val;
		}
		return this;
	}

	Print() {
		if (!this.head) return 'Empty';
		let arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		return arr;
	}

	isEmpty() {
		if (!this.head) {
			return true;
		}

		return false;
	}
}

const queue = new Queue();

//*insert in queue
queue.Enqueue(1);
queue.Enqueue(2);
queue.Enqueue(3);

//*delete from queue
// queue.Dequeue();
// queue.Dequeue();
// queue.Dequeue();

//*index of
// console.log(queue.Index(2));

//*update
// queue.Update(1, 30);

console.log(queue.isEmpty());

console.log(queue.Print());
console.log(queue);
