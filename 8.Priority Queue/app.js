//node class
class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

//priority queue implementation
class PriorityQueue {
	constructor() {
		this.values = [];
		this.top = 0;
	}

	enqueue(val, priority) {
		let newNode = new Node(val, priority);
		this.values[this.top] = newNode;
		this.top++;
		// this.values.push(newNode);
		this.bubbleUp();
	}

	//helper function for enqueue
	bubbleUp() {
		let idx = this.values.length - 1;
		let element = this.values[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];
			if (element.priority >= parent.priority) break;
			// console.log(parent);
			this.values[idx] = parent;
			this.values[parentIdx] = element;
			idx = parentIdx;
		}
	}

	//remove element
	dequeue() {
		let min = this.values[0];
		let end = this.values.pop();

		if (this.values.length > 0) {
			this.values[0] = end;
			this.bubbleDown();
			this.top--;
		}
		if (this.values.length == 0) {
			this.top = 0;
		}
		return min;
	}
	//bubble down
	bubbleDown() {
		let idx = 0;
		let element = this.values[0];
		let length = this.values.length;

		while (true) {
			let leftChildidx = 2 * idx + 1;
			let rightChildidx = 2 * idx + 2;

			let leftChild,
				rightChild,
				swap = null;

			//check left child
			if (leftChildidx < length) {
				leftChild = this.values[leftChildidx];
				if (leftChild.priority < element.priority) {
					swap = leftChildidx;
				}
			}

			//check right child
			if (rightChildidx < length) {
				rightChild = this.values[rightChildidx];

				if (
					(swap == null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) {
					swap = rightChildidx;
				}
			}

			if (swap == null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}

const pq = new PriorityQueue();

//add element in enqueue
pq.enqueue('gunshot wound', 1);
pq.enqueue('high fever', 4);
pq.enqueue('cold', 5);
pq.enqueue('broken', 2);
pq.enqueue('concussion', 3);
pq.enqueue('flu', 6);

//dequeue
// console.log(pq.dequeue());
// console.log(pq.dequeue());

console.log(pq);
