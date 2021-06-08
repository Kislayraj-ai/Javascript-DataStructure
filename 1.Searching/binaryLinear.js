//array
let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

//binary search
function binarySearch(arr, key) {
	let start = 0;
	let end = arr.length - 1;
	let mid = Math.floor((start + end) / 2);

	while (start <= end) {
		if (arr[mid] === key) {
			return mid;
		} else if (key < arr[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
		mid = Math.floor((start + end) / 2);
	}
	//if element not found
	return -1;
}

//function call
console.log(binarySearch(array, 10));
