//linear search implementation

let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

let linearSearch = (arr, key) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === key) return i;
	}
	return -1;
};

console.log(linearSearch(array, 5));
