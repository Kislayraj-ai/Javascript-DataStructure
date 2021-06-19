let array = [ 2, 0, 34, 15, 17, 28 ];

const inserttionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let current = arr[i];
		let j = i - 1;
		while (j >= 0 && current < arr[j]) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = current;
	}
	console.log(arr);
	return arr;
};

inserttionSort(array);
