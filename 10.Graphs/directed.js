//
class DirectedGraph {
	constructor() {
		this.adjacenctlist = {};
	}

	addvertex(vertex) {
		if (!this.adjacenctlist[vertex]) this.adjacenctlist[vertex] = [];
	}

	addEdge(vertex1, vertex2) {
		if (this.adjacenctlist[vertex1] && this.adjacenctlist[vertex2]) this.adjacenctlist[vertex1].push(vertex2);
		else console.log('No vertex found');
	}

	removeEdge(vertex1, vertex2) {
		this.adjacenctlist[vertex1] = this.adjacenctlist[vertex1].filter((v) => v != vertex2);
	}

	removeVertex(vertex) {
		while (this.adjacenctlist[vertex].length) {
			let adjacentVertex = this.adjacenctlist[vertex].pop();

			this.removeEdge(adjacentVertex, vertex);
		}
		delete this.adjacenctlist[vertex];
	}
}

const graph = new DirectedGraph();

//add vertex
graph.addvertex('Ranchi');
graph.addvertex('Patna');
graph.addvertex('Delhi');
graph.addvertex('Mumbai');
graph.addvertex('Kolkata');

//add edges
graph.addEdge('Ranchi', 'Delhi');
graph.addEdge('Ranchi', 'Patna');
graph.addEdge('Delhi', 'Mumbai');
graph.addEdge('Patna', 'Ranchi');
graph.addEdge('Patna', 'Delhi');
graph.addEdge('Mumbai', 'Kolkata');
graph.addEdge('Mumbai', 'Delhi');
graph.addEdge('Kolkata', 'Mumbai');

//remove edge
// graph.removeEdge('Mumbai', 'Kolkata');

//remove vertex
graph.removeVertex('Mumbai');

console.log(graph);
