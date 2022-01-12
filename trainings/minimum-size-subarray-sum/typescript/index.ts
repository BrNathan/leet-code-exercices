function minSubArrayLen(target: number, nums: number[]): number {

    let minimumLengthFound = Infinity;

    for (let index = 0; index < nums.length; index++) {

        let tmpSum: number = 0;
        let tmpSubArray: number[] = [];
        for (let j = index; j < nums.length && tmpSum < target; j++) {
            tmpSum += nums[j];
            tmpSubArray.push(nums[j]);
        }

        if (tmpSubArray.length < minimumLengthFound && tmpSum >= target) {
            minimumLengthFound = tmpSubArray.length;
        }
    }

    return minimumLengthFound == Infinity ? 0 : minimumLengthFound;
};
