// weighted graph
class WeightedGraph {
	constructor() {
		this.adjacentList = {};
	}

	addVertex(vertex) {
		if (!this.adjacentList[vertex]) this.adjacentList[vertex] = [];
	}

	addEdge(vertex1, vertex2, weight) {
		this.adjacentList[vertex1].push({ node: vertex2, weight });
		this.adjacentList[vertex2].push({ node: vertex1, weight });
	}
	DijksttraAlgo(start, finish) {
		const node = new PriorityQueue();
		let path = []; // to print the path and return at  end
		const previous = {},
			distances = {};
		let smallest;

		for (let vertex in this.adjacentList) {
			if (vertex == start) {
				distances[vertex] = 0;
				node.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				node.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}

		while (node.values.length) {
			smallest = node.dequeue().val;
			if (smallest == finish) {
				//we are done
				// console.log(distances);
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}
			if (smallest || distances[smallest] !== Infinity) {
				// smallest
				for (let neighbor in this.adjacentList[smallest]) {
					let nextNode = this.adjacentList[smallest][neighbor];
					// console.log(nextNode);
					// calculate new diastnce to neighboring  node

					let candidate = distances[smallest] + nextNode.weight;
					let nextNeighbor = nextNode.node;
					if (candidate < distances[nextNeighbor]) {
						//upadating new smallest distancce tfrom neighbor
						distances[nextNeighbor] = candidate;
						//how to get to next neighbor
						previous[nextNeighbor] = smallest;
						//enqueue inpq
						node.enqueue(nextNeighbor, candidate);
					}
				}
			}
			// console.log(smallest);
		}

		return path.concat(smallest).reverse();
	}
}

//node class
class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}
//priority queue
class PriorityQueue {
	constructor() {
		this.values = [];
		this.top = 0;
	}
	enqueue(val, priority) {
		let newNode = new Node(val, priority);
		this.values[this.top] = newNode;
		this.top++;

		//bubbleup
		this.bubbleUp();
	}

	bubbleUp() {
		let idx = this.values.length - 1;
		let element = this.values[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];
			if (element.priority >= parent.priority) break;
			this.values[idx] = parent;
			this.values[parentIdx] = element;
			idx = parentIdx;
		}
	}
	dequeue() {
		let min = this.values[0];
		let end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.bubbleDown();
			this.top--;
		}
		if (this.values.length == 0) this.top = 0;

		return min;
	}

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

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild.priority < element.priority) swap = leftChildIdx;
			}

			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];

				if (
					(swap == null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) {
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

const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'F', 1);
graph.addEdge('D', 'E', 3);
graph.addEdge('F', 'E', 1);

console.log(graph.DijksttraAlgo('A', 'E'));
console.log(graph);
