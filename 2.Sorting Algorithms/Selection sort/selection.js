const array = [ 34, 22, 10, 19, 17 ];

const swap = (arr, idx1, idx2) => {
	[ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ];
};
const selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[lowest] > arr[j]) lowest = j;
		}
		if (i !== lowest) swap(arr, i, lowest);
	}
	console.log(arr);
	return arr;
};

selectionSort(array);
