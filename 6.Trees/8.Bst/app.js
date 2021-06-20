class Root {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

// binary search tree implementation
class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	InsertNode(val) {
		let newNode = new Root(val);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (true) {
			if (val === current.val) {
				console.log('Duplicate Value');
				return this;
			}

			if (val < current.val) {
				if (current.left == null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else {
				if (current.right == null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}
	Search(val) {
		if (!this.root) return undefined;
		let current = this.root,
			found = false;
		while (current && !found) {
			if (val < current.val) current = current.left;
			else if (val > current.val) current = current.right;
			else found = true;
		}
		if (!found) return 'Not Found';
		return `${current.val} Found`;
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

		return data;
	}
	//DFS
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

	PreOrder() {
		let data = [];
		const traverse = (node) => {
			data.push(node.val);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};

		traverse(this.root);
		return data;
	}

	PostOrder() {
		let data = [];
		const traverse = (node) => {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.val);
		};

		traverse(this.root);
		return data;
	}

	Delete(val) {
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
	}
}

const Bst = new BinarySearchTree();

//*insert node in bst
Bst.InsertNode(10);
Bst.InsertNode(3);
Bst.InsertNode(1);
Bst.InsertNode(0);
Bst.InsertNode(6);
Bst.InsertNode(4);
Bst.InsertNode(8);

//*find a node in bst
// console.log(Bst.Search(5));

//*Bfs
// console.log(Bst.Bfs());

//Dfs
// //*inorder
// console.log(Bst.Inorder());

//*Preorder
// console.log(Bst.PreOrder());

//*post order
// console.log(Bst.PostOrder());

//*delete node
// Bst.Delete(3);
// Bst.Delete(25);

//*search minimum

console.log(Bst.FindMin());

console.log(Bst);
