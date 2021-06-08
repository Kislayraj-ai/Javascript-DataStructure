//
const calculateLps = (substring) => {
	let i = 1;
	let j = 0;
	let lps = new Array(substring.length).fill(0);

	while (i < substring.length) {
		if (substring[i] === substring[j]) {
			lps[i] = j + 1;
			i++;
			j++;
		} else {
			if (j !== 0) {
				j = lps[j - 1];
			} else {
				i++;
			}
		}
	}
	return lps;
};

// const result = calculateLps('abcabs');
// console.log(result);

const KMP = (string, substring) => {
	let stringLength = string.length;
	let substringLength = substring.length;
	let lps = calculateLps(substring);
	let i = 0,
		j = 0;
	while (i < stringLength) {
		if (string[i] === substring[j]) {
			i++;
			j++;
		} else {
			if (j !== 0) {
				j = lps[j - 1];
			}
			i++;
		}
		if (j === substringLength) return true;
	}
	return false;
};

const result = KMP('abclabcabs', 'abcab');
console.log(result);
