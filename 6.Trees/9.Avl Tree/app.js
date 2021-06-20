// class of node
class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
		this.height = 0;
	}
}

//avl tree implementation
class AvlTree {
	constructor() {
		this.root = null;
	}

	getHeight(node) {
		return node == null ? -1 : node.height;
	}
	getBalance(node) {
		return this.getHeight(node.left) - this.getHeight(node.right);
	}

	leftRotation(x) {
		const y = x.right;
		const yLeftChild = y.left;
		y.left = x;
		x.right = yLeftChild;
		x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
		y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

		return y;
	}

	rightRotation(x) {
		const y = x.left;
		const yRightChild = y.right;
		y.right = x;
		x.left = yRightChild;
		x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
		y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

		return y;
	}

	Insertion(val) {
		if (this.root) {
			this.root = this.insert(val, this.root);
		} else {
			this.root = new Node(val);
		}
	}

	insert(val, node) {
		if (node == null) {
			return new Node(val);
		}
		if (val < node.val) node.left = this.insert(val, node.left);
		else if (val > node.val) node.right = this.insert(val, node.right);

		///*avl here
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
}

const Avl = new AvlTree();

//* avl insertion
Avl.Insertion(25);
Avl.Insertion(20);
Avl.Insertion(30);
Avl.Insertion(15);
Avl.Insertion(18);

//*avl delettion
// Avl.Delete(30);

console.log(Avl);
