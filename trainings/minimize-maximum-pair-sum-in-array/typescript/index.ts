function minPairSum(nums: number[]): number {
	
	let sortedNums = [...nums].sort((a, b) => a-b);
	let pairArray: Pair[] = [];
	for (let index = 0; index < sortedNums.length; index++) {
		const firstElement = sortedNums[index];
		const lastElement = sortedNums[sortedNums.length - 1 - index];
		
		pairArray.push({firstElement, lastElement});
	}

	return pairArray.reduce((prev, curr, index, array) => {
		const sum: number = curr.firstElement + curr.lastElement;
		return sum >= prev ? sum : prev;
	}, 0);
};

declare interface Pair {
	firstElement: number;
	lastElement: number;
}