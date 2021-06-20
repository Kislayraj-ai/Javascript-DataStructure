//
class Graph {
	constructor() {
		this.adjacentList = {};
	}
	addVertex(vertex) {
		if (!this.adjacentList[vertex]) this.adjacentList[vertex] = [];
	}
	addEdge(v1, v2) {
		this.adjacentList[v1].push(v2);
		this.adjacentList[v2].push(v1);
	}

	//remove edges and vertexes
	removeEdge(vertex1, vertex2) {
		this.adjacentList[vertex1] = this.adjacentList[vertex1].filter((vertex) => vertex !== vertex2);
		this.adjacentList[vertex2] = this.adjacentList[vertex2].filter((vertex) => vertex !== vertex1);
	}

	removeVertex(vertex) {
		//loop over the vertex and pop each item and connection from that vertex
		while (this.adjacentList[vertex].length) {
			const adjacentVertex = this.adjacentList[vertex].pop();
			//remove both paths
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacentList[vertex];
	}
}

const graph = new Graph();

//add vertex
graph.addVertex('Ranchi');
graph.addVertex('Mumbai');
graph.addVertex('Delhi');
graph.addVertex('Patna');

//add edges
graph.addEdge('Ranchi', 'Delhi');
graph.addEdge('Ranchi', 'Mumbai');
graph.addEdge('Delhi', 'Mumbai');
graph.addEdge('Patna', 'Delhi');
graph.addEdge('Mumbai', 'Patna');
graph.addEdge('Ranchi', 'Patna');

//remove edge
// graph.removeEdge('Ranchi', 'Delhi');
// graph.removeEdge('Ranchi', 'Mumbai');

//remove vertex

console.log(graph);
