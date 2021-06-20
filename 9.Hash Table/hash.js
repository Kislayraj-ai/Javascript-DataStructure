//hash

class HashTable {
	constructor(size = 4) {
		this.keyMap = new Array(size);
	}
	_hash(key) {
		let total = 0;
		let Prime = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * Prime + value) % this.keyMap.length;
		}
		return total;
	}
	set(key, value) {
		let index = this._hash(key);
		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([ key, value ]);
		return index;
	}
	get(key) {
		let index = this._hash(key);
		if (this.keyMap[index]) {
			for (let i = 0; i < this.keyMap[index].length; i++) {
				if (this.keyMap[index][i][0] == key) {
					return this.keyMap[index][i];
				}
			}
		}
		return undefined;
	}

	//
	values() {
		let valueArr = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!valueArr.includes(this.keyMap[i][j][1])) {
						valueArr.push(this.keyMap[i][j][1]);
					}
				}
				// console.log(this.keyMap[i]);
			}
		}
		return valueArr;
	}
	//
	keys() {
		let keyArr = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!keyArr.includes(this.keyMap[i][j][0])) {
						keyArr.push(this.keyMap[i][j][0]);
					}
				}
				// console.log(this.keyMap[i]);
			}
		}
		return keyArr;
	}
	remove(key) {
		let index = this._hash(key);

		for (let i = 0; i < this.keyMap[index].length; i++) {
			// Find the element in the chain
			if (this.keyMap[index][i][0] === key) {
				this.keyMap[index].splice(i, 1);
				return true;
			}
		}

		return false;
	}
}

const hash = new HashTable();

// store value in hash table
hash.set('Hello world', 'goodbye');
hash.set('Hello there', 'So there');
hash.set('kislay raj', 'MCA');
hash.set('i love', 'Tea');
hash.set('Dogs are', 'fine');
hash.set('cats are', 'cool');

//get
// console.log(hash.get('kislay raj'));

//values
console.log(hash.values());

//keys
console.log(hash.keys());
hash.remove('Hello world');
//values
console.log(hash.values());

//keys
console.log(hash.keys());
console.log(hash);
