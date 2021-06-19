class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
class Circluar {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	unshift(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
			this.tail.next = newNode;
		}
		this.tail.next = newNode;
		newNode.next = this.head;
		this.head = newNode;

		this.length++;
		return this;
	}
	shift() {
		if (!this.head) return undefined;
		else {
			let temp = this.head;
			this.head = temp.next;
			this.tail.next = temp.next;
		}

		if (this.length == 1) {
			this.head = null;
			this.tail = null;
		}
		this.length--;

		return this;
	}

	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			this.tail.next = this.head;
		}
		this.tail.next = newNode;
		this.tail = newNode;
		newNode.next = this.head;

		this.length++;
		return this;
	}
	pop() {
		if (!this.head) return null;

		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
			if (current.next === this.head) break;
		}
		this.tail.next = null;
		this.tail = newTail;
		newTail.next = this.head;

		if (this.length == 1) {
			this.head = null;
			this.tail = null;
		}
		this.length--;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return undefined;
		let count = 0;
		let temp = this.head;
		while (count !== index) {
			count++;
			temp = temp.next;
		}
		return temp;
	}

	Set(index, val) {
		if (index < 0 || index >= this.length) return undefined;
		let temp = this.get(index);
		if (temp) {
			temp.val = val;
		}
	}
	InsertNth(index, val) {
		if (index < 0 || index > this.length) return undefined;
		if (index == 0) return !!this.unshift(val);
		if (index == this.length) return !!this.push(val);

		//*create newNode;
		let newNode = new Node(val);
		let prev = this.get(index - 1);
		let temp = prev.next;

		prev.next = newNode;
		newNode.next = temp;

		this.length++;
		return true;
	}
	RemoveNth(index) {
		if (index < 0 || index > this.length) return undefined;
		if (index === 0) return !!this.shift();
		if (index === this.length - 1) return !!this.pop();

		let prev = this.get(index - 1);
		let remove = prev.next;

		prev.next = remove.next;
		remove.next = null;

		this.length--;
		return this;
	}
	Reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let prev = null;
		let next;
		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}

		node.next = this.head;
		return this;
	}

	Print() {
		if (!this.head) {
			console.log('Empty list');
			return null;
		}
		let arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
			if (this.tail.next == current) break;
		}
		return arr;
	}
	IsEmpty() {
		if (!this.head) {
			return true;
		}
		return false;
	}
}

let Cll = new Circluar();

//*unsift
// Cll.unshift(10);
// Cll.unshift(20);
// Cll.unshift(30);
// Cll.unshift(40);

//*shift
// Cll.shift();
// Cll.shift();
// Cll.shift();
// Cll.shift();

//*push
Cll.push(20);
Cll.push(40);
Cll.push(10);
Cll.push(30);

//*pop
// Cll.pop();
// Cll.pop();
// Cll.pop();
// Cll.pop();

//*get index element
// console.log(Cll.get(2));

//*set or update value;
// Cll.Set(3, 200);

//*insert nth
// Cll.InsertNth(2, 200);

//*removenth
// Cll.RemoveNth(0);

// console.log(Cll.IsEmpty());
console.log(Cll.Print());

console.log(Cll.Print());
console.log(Cll);
