//node class
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

//stack implementation

class Stack {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	Push(val) {
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
	Pop() {
		if (!this.head) return undefined;
		let newNode = this.head;
		this.head = newNode.next;

		this.length--;
		if (this.length == 0) {
			this.head = null;
			this.tail = null;
		}
		return this;
	}
	Index(index) {
		if (index < 0 || index >= this.length) return undefined;
		let current = this.head,
			counter = 0;

		while (counter !== index) {
			counter++;
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
		if (!this.head) {
			console.log('Empty list');
			return null;
		}
		const arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		return arr;
	}
	isEmpty() {
		if (this.head == null) {
			return true;
		}
		return false;
	}
}

const stack = new Stack();

//*push
stack.Push(10);
stack.Push(20);

//*pop
// stack.Pop();
// stack.Pop();

//*get elemnet of index
// stack.Index(1);

//*update element
stack.Update(0, 30);

//*is empty
console.log(stack.isEmpty());

console.log(stack.Print());
console.log(stack);
