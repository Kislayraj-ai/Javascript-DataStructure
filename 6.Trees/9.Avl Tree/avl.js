//*node
class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
		this.height = 0;
	}
}

//*Avl implementation
class AvlTree {
	constructor() {
		this.root = null;
	}
	getHeight(node) {
		return node == null ? -1 : node.height;
	}

	getBalance(node) {
		return this.getHeight(node.left) - this.getHeight(node.right) + 1;
	}

	//left rotation
	leftRotation(x) {
		let y = x.right;
		let yChildLeft = y.left;
		y.left = x;
		x.right = yChildLeft;
		x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
		y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
		return y;
	}

	//right rotation
	rightRotation(x) {
		let y = x.left;
		const yChildRight = y.right;
		y.right = x;
		x.left = yChildRight;
		x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
		y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
		return y;
	}

	Insertion(val) {
		if (this.root) {
			this.root = this.insertHelper(val, this.root);
		} else {
			this.root = new Node(val);
		}
	}

	insertHelper(val, node) {
		if (node == null) {
			return new Node(val);
		}
		if (val < node.val) node.left = this.insertHelper(val, node.left);
		else if (val > node.val) node.right = this.insertHelper(val, node.right);

		// avl rotations
		node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

		//*balance check
		if (this.getBalance(node) == 2 && this.getBalance(node.left) >= 0) {
			return this.rightRotation(node);
		} else if (this.getBalance(node) === 2 && this.getBalance(node.left < 0)) {
			node.left = this.leftRotation(node.left);
			return this.rightRotation(node);
		} else if (this.getBalance(node) == -2 && this.getBalance(node.right) >= 0) {
			return this.leftRotation(node);
		} else if (this.getBalance(node) == -2 && this.getBalance(node.right) < 0) {
			node.right = this.rightRotation(node.right);
			return this.leftRotation(node);
		}

		return node;
	}

	//*Delete
	Delete(val) {
		if (this.root) {
			this.root = this.deleteHelper(val, this.root);
		}
	}

	deleteHelper(val, node) {
		const removeNode = (node, val) => {
			if (node === null) {
				return null;
			}

			if (val == node.val) {
				if (node.left == null && node.right == null) {
					return null;
				}

				if (node.left === null) {
					return node.right;
				}

				if (node.right === null) {
					return node.left;
				}

				let tempNode = node.right;

				while (tempNode.left != null) {
					tempNode = tempNode.left;
				}
				node.val = tempNode.val;
				node.right = removeNode(node.right, tempNode.val);
				return node;
			} else if (val < node.val) {
				node.left = removeNode(node.left, val);
				return node;
			} else {
				node.right = removeNode(node.right, val);
				return node;
			}
		};
		this.root = removeNode(this.root, val);

		//*avl deletion
		node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

		if (this.getBalance(node) == 2 && this.getBalance(node.left) >= 0) {
			return this.rightRotation(node);
		} else if (this.getBalance(node) == 2 && this.getBalance(node.left) < 0) {
			////////////////////////////////////////////////
			node.left = this.leftRotation(node.left);
			return this.rightRotation(node);
		} else if (this.getBalance(node) == -2 && this.getBalance(node.right) <= 0) {
			///////////////////////////////////////////////
			return this.leftRotation(node);
		} else if (this.getBalance(node) == -2 && this.getBalance(node.right) > 0) {
			////////////////////////////////////////////////
			node.right = this.rightRotation(node.right);

			return this.leftRotation(node);
		}

		return node;
	}

	FindMin() {
		let min = null,
			current = this.root.left;
		while (current) {
			min = current;
			current = current.left;
		}
		return min.val;
	}

	Search(val) {
		let current = this.root,
			found = false;
		while (current && !found) {
			if (val < current.val) current = current.left;
			else if (val > current.val) current = current.right;
			else found = true;
		}

		return found ? current.val : -1;
	}

	Bfs() {
		let node = this.root;
		let queue = [],
			data = [];

		queue.push(node);
		while (queue.length) {
			node = queue.shift();
			data.push(node.val);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}

		console.log(data);
		return data;
	}

	Inorder() {
		let data = [];
		const traverse = (node) => {
			if (node.left) traverse(node.left);
			data.push(node.val);
			if (node.right) traverse(node.right);
		};
		traverse(this.root);
		return data;
	}
	Preorder() {
		let data = [];
		const traverse = (node) => {
			data.push(node.val);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};
		traverse(this.root);
		return data;
	}
}

const Avl = new AvlTree();

//insertion
Avl.Insertion(25);
Avl.Insertion(20);
Avl.Insertion(30);
Avl.Insertion(15);
Avl.Insertion(18);
Avl.Insertion(10);

//* avl deletion
// Avl.Delete(18);

//*find minvalue
console.log(Avl.FindMin());

//*bfs
Avl.Bfs();

//*Inorder
console.log(Avl.Inorder());
//*preorder
console.log(Avl.Preorder());

//*search for value
//console.log(Avl.Search(20));

console.log(Avl);
