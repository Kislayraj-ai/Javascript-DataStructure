class Stack {
	constructor() {
		this.data = [];
		this.top = 0;
	}
	Push(val) {
		this.data[this.top] = val;
		this.top++;
	}

	Pop() {
		if (this.data[this.top] < 0) return;

		this.top--;
	}
	print() {
		let top = this.top - 1; // because top points to index where new    element to be inserted

		while (top >= 0) {
			console.log(this.data[top]);
			top--;
		}
	}

	isEmpty() {
		return this.top === 0;
	}
	peek() {
		return this.data[this.top - 1];
	}
}
const stack = new Stack();

stack.Push(10);
stack.Push(20);
stack.Push(30);
stack.Push(40);

// stack.Pop();
// stack.Pop();
// stack.Pop();
// stack.Pop();
console.log(stack.isEmpty());
stack.print();
console.log(stack.peek());
