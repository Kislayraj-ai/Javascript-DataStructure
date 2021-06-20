
//this is an max heap representation ,if you  want to create an min heap then reverse the logic '<' -- '<'

// max heap implementation
class Maxheap {
	constructor() {
		this.values = [];
	}

	//insertion
	insert(val) {
		this.values.push(val);
		this.bubbleUp();
	}
	bubbleUp() {
		let idx = this.values.length - 1;
		let element = this.values[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];

			if (element <= parent) break;
			this.values[idx] = parent;
			this.values[parentIdx] = element;
			idx = parentIdx;
		}
	}

	extractMax() {
		let max = this.values[0];
		let end = this.values.pop();

		if (this.values.length > 0) {
			this.values[0] = end;
			this.bubbleDown();
		}
		return max;
	}

	//bubbleDown
	bubbleDown() {
		let idx = 0;
		let element = this.values[0];
		let length = this.values.length;

		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild,
				rightChild,
				swap = null;

			///////
			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild > element) {
					swap = leftChildIdx;
				}
			}

			//////
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];

				if ((swap == null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
					swap = rightChildIdx;
				}
			}

			if (swap == null) break;

			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}

const heap = new Maxheap();

//insert in heap

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

//remove elementin heap
// console.log(heap.extractMax());
// console.log(heap.extractMax());
console.log(heap);
