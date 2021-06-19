//function for merge tow array

const Merging = (arr1, arr2) => {
	let result = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		result.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		result.push(arr2[j]);
		j++;
	}
	return result;
};

//algo for merge sort

const MergeSort = (arr) => {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = MergeSort(arr.slice(0, mid));
	let right = MergeSort(arr.slice(mid));
	return Merging(left, right);
};

console.log(MergeSort([ 10, 2, 6, 1, 4, 5, 7, 9, 8, 3 ]));
