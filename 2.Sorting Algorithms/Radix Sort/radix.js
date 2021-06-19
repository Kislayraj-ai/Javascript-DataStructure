//helper funcitons

const getDigit = (num, i) => {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCout = (num) => {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
};
const MostDigit = (num) => {
	let maxDigit = 0;
	for (let i = 0; i < num.length; i++) {
		maxDigit = Math.max(maxDigit, digitCout(num[i]));
	}
	return maxDigit;
};
//radix sort implementation
const radixSort = (num) => {
	let maxDigit = MostDigit(num);
	for (let i = 0; i < maxDigit; i++) {
		let digitBucket = Array.from({ length: 10 }, () => []);
		for (let j = 0; j < num.length; j++) {
			digitBucket[getDigit(num[j], i)].push(num[j]);
		}
		num = [].concat(...digitBucket);
	}
	return num;
};

const array = [ 12, 1, 3, 245, 23, 999, 88 ];

console.log(radixSort(array));
