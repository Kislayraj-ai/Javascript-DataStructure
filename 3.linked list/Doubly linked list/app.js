//node class
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class Doublylinkedlist {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return null;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			let newTail = this.tail;
			this.tail = newTail.prev;
			this.tail.next = null;
			newTail.prev = null;
		}
		this.length--;
		return this;
	}
	unshift(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		}
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;

		this.length++;
		return this;
	}
	shift() {
		if (!this.head) return null;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			let currentHead = this.head;
			this.head = currentHead.next;
			this.head.prev = null;
			currentHead.next = null;
		}

		this.length--;
		return this;
	}
	Get(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (!this.head) return null;

		let length = this.length / 2;
		let current, counter;
		if (index <= length) {
			current = this.head;
			counter = 0;
			while (counter !== index) {
				counter++;
				current = current.next;
			}
		} else {
			console.log('From End');
			counter = this.length - 1;
			current = this.tail;
			while (counter !== index) {
				counter--;
				current = current.prev;
			}
		}

		return current;
	}
	Set(index, key) {
		if (index < 0 || index >= this.length) return undefined;
		if (!this.head) return null;
		let found = this.Get(index);
		if (found) {
			found.val = key;
		}
		return this;
	}

	InsertNth(index, key) {
		if (index < 0 || index > this.length) return null;
		if (index == 0) return !!this.unshift(key);
		if (index === this.length) return !!this.push(key);

		let newNode = new Node(key);
		let prevNode = this.Get(index - 1);
		let temp = prevNode.next;

		(prevNode.next = newNode), (newNode.prev = prevNode);
		(newNode.next = temp), (temp.prev = newNode);

		this.length++;
		return this;
	}

	RemoveNth(index) {
		if (index < 0 || index >= this.length) return null;
		if (index == 0) return !!this.shift();
		if (index === this.length - 1) return !!this.pop();

		let temp, prevNode;
		prevNode = this.Get(index - 1);

		(temp = prevNode.next), (prevNode.next = temp.next);
		(temp.next.prev = prevNode), (temp.prev = null);

		this.length--;
		return this;
	}

	Reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;

		let previous = null,
			next;
		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = previous;
			previous = node;
			node = next;
			previous.prev = node;
		}
		previous.prev = null;

		return this;
	}

	Search(val) {
		let current = this.head;
		while (current) {
			if (current.val === val) {
				return true;
			}
			current = current.next;
		}
		return false;
	}
	Sort() {
		let current = this.head;
		while (current) {
			let temp = current.next;
			while (temp) {
				if (current.val > temp.val) {
					let t = current.val;
					current.val = temp.val;
					temp.val = t;
				}
				temp = temp.next;
			}

			current = current.next;
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
	Sum() {
		let current = this.head,
			sum = 0;
		while (current) {
			sum += current.val;
			current = current.next;
		}
		return sum;
	}
	isEMpty() {
		if (!this.head) {
			return true;
		}
		return false;
	}
}
const Dll = new Doublylinkedlist();

//*push
Dll.push(30);
Dll.push(20);
Dll.push(10);
Dll.push(50);
Dll.push(40);

//*pop
// Dll.pop();
// Dll.pop();
// Dll.pop();

//*unsift
// Dll.unshift(1);
// Dll.unshift(2);

//*shift
// Dll.shift();
// Dll.shift();

//*get index of
// console.log(Dll.Get(3));

//*set or update an element
// Dll.Set(0, 1);
// Dll.Set(0, 100);

//*insert at nth
// Dll.InsertNth(0, 1);
// Dll.InsertNth(5, 60);
// Dll.InsertNth(3, 144);

//*Remove ath nth
// Dll.RemoveNth(4);

//*reverse
// Dll.Reverse();

//*sum of all
// console.log(Dll.Sum());

//*search on doubly
// console.log(Dll.Search(50));

// console.log(Dll.isEMpty());
console.log(Dll.Print());
console.log(Dll);
