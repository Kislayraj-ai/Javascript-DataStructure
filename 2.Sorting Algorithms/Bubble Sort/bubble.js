//bubble sort implementation

const array = [ 10, 4, 6, 2, 5, 3, 1, 8, 9, 7 ];
const BubbleSort = (arr) => {
	let noswap;
	for (let i = arr.length; i > 0; i--) {
		noswap = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				//swap
				[ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ];
				noswap = false;
			}
		}
		if (noswap) break;
	}
	console.log(arr);
	return arr;
};

BubbleSort(array);
