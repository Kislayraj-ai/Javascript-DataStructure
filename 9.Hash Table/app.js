//hash tables
class Hashtable {
	constructor(size = 4) {
		this.keyMap = new Array(size);
		// this.top = 0;
	}

	HashIndex(key) {
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
		let index = this.HashIndex(key);
		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([ key, value ]);
		return index;
	}
	get(key) {
		let index = this.HashIndex(key);
		if (this.keyMap[index]) {
			for (let i = 0; i < this.keyMap[index].length; i++) {
				if (this.keyMap[index][i][0] == key) {
					return this.keyMap[index][i][1];
				}
			}
		}
	}
	values() {
		let valuesArr = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!valuesArr.includes(this.keyMap[i][j][1])) valuesArr.push(this.keyMap[i][j][1]);
				}
			}
		}
		return valuesArr;
	}

	keys() {
		let keyArr = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!keyArr.includes(this.keyMap[i][j][0])) keyArr.push(this.keyMap[i][j][0]);
				}
			}
		}
		return keyArr;
	}
	remove(key) {
		let index = this.HashIndex(key);
		for (let i = 0; i < this.keyMap[index].length; i++) {
			if (this.keyMap[index][i][0] == key) {
				this.keyMap[index].splice(i, 1);
				return true;
			}
		}
		return false;
	}
}

const hash = new Hashtable();

//set values
hash.set('maron', '#fr2006');
hash.set('white', '#ffffff');
hash.set('black', '#000000');
hash.set('violet', '#df2006');
hash.set('orange', '#r20006');
hash.set('orangered', '#r40006');

//get the values
// console.log(hash.get('maron'));

//all values of hash tables
console.log(hash.values());

//all keys
console.log(hash.keys());

//remove from hash tables
// console.log(hash.remove('maron'));

console.log(hash);
