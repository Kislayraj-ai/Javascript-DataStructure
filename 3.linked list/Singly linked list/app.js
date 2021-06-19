//node class
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

//singly linked list class implementation
class Singlylinkedlist {
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
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;

		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return this;
	}
	unshift(val) {
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
	shift() {
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
	get(index) {
		if (index < 0 || index >= this.length) return undefined;
		let current = this.head,
			counter = 0;

		while (counter !== index) {
			counter++;
			current = current.next;
		}
		return current;
	}
	set(index, val) {
		if (index < 0 || index >= this.length) return undefined;
		let found = this.get(index);
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
	Insert(index, val) {
		if (index < 0 || index > this.length) return undefined;
		if (index === 0) return !!this.unshift(val);
		if (index == this.length) return !!this.push(val);

		//* create new Node
		let newNode = new Node(val);
		let prev = this.get(index - 1);
		let temp = prev.next;

		prev.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}
	RemoveNth(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index == 0) return !!this.shift();
		if (index == this.length - 1) return !!this.pop();

		let prev = this.get(index - 1);
		let removeNode = prev.next;

		prev.next = removeNode.next;
		removeNext = null;
		this.length--;
		return true;
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
		return this;
	}

	RecursiveReverse(head) {
		if (!head || !head.next) {
			return head;
		}

		let reversedHead = RecursiveReverse(head.next);

		head.next.next = head;
		head.next = null;
		return reversedHead;
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
}

const Sll = new Singlylinkedlist();
//*push()
// Sll.push(20);
// Sll.push(10);
// Sll.push(40);
// Sll.push(50);
// Sll.push(30);

//*pop()
// Sll.pop();
// Sll.pop();

//*unshift()
Sll.unshift(40);
Sll.unshift(50);
Sll.unshift(60);

//*shift()
// Sll.shift();
// Sll.shift();
// Sll.shift();

//*get index
// Sll.get(5);

//*update element
// Sll.set(0, 40);
// Sll.set(1, 50);
// Sll.set(2, 60);

//*insert at nth position
// Sll.Insert(3, 1);

//*remove at nth poisiton
// Sll.RemoveNth(2);

//*sum of all elements
// const result = Sll.Sum();
// console.log(result);

//* reverse linked list
// Sll.Reverse();

//*recursive reverse
// console.log(Sll.RecursiveReverse(this.head));

//*isemptycheck
// console.log(Sll.isEMpty());

// console.log(Sll.Print());
console.log(Sll);

//*sort
// console.log('Sorted');
// console.log(Sll.Sort());
// console.log(Sll.Print());
