// graph

class Graph {
	constructor() {
		this.adjacentList = {};
	}
	//add vertex
	addVertex(vertex) {
		if (!this.adjacentList[vertex]) this.adjacentList[vertex] = [];
	}

	//add edges between
	addEdge(vertex1, vertex2) {
		this.adjacentList[vertex1].push(vertex2);
		this.adjacentList[vertex2].push(vertex1);
	}

	//remove vertex
	removeEdge(vertex1, vertex2) {
		this.adjacentList[vertex1] = this.adjacentList[vertex1].filter((vertex) => vertex != vertex2);
		this.adjacentList[vertex2] = this.adjacentList[vertex2].filter((vertex) => vertex != vertex1);
	}

	//remove vertex
	removeVertex(vertex) {
		let list = this.adjacentList;
		let current;

		while (list[vertex].length) {
			current = list[vertex].pop();
			this.removeEdge(vertex, current);
		}
		delete this.adjacentList[vertex];
	}

	// graph traversal
	//depth first search
	//recursive solution

	dfsRecursive(start) {
		const visited = {};
		const result = [];
		const adjacent = this.adjacentList;

		(function dfsHelper(vertex) {
			if (!vertex) return null;
			visited[vertex] = true;
			result.push(vertex);

			adjacent[vertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					return dfsHelper(neighbor);
				}
			});
		})(start);

		return result;
	}

	// iterative solution
	dfsIterative(start) {
		const visited = {};
		const result = [];
		const stack = [ start ];
		let currentVertex;

		visited[start] = true;

		while (stack.length) {
			currentVertex = stack.pop();
			result.push(currentVertex);

			this.adjacentList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}
		return result;
	}

	// bfs iterative
	bfs(start) {
		const visited = {};
		const result = [];
		const queue = [ start ];
		let currentVertex;

		visited[start] = true;
		while (queue.length) {
			currentVertex = queue.shift();
			result.push(currentVertex);

			this.adjacentList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}
		return result;
	}
}

const graph = new Graph();

//add vertex
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

//add edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

//remove edge
// graph.removeEdge('C', 'A');

//remove vertex
// graph.removeVertex('A');

//tree traverse function
//dfs recursive
// console.log(graph.dfsRecursive('A'));

//dfs iterative
// console.log(graph.dfsIterative('A'));

//bfs
console.log(graph.bfs('A'));

console.log(graph);
