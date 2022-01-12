function twoSum(nums: number[], target: number): number[] {
    let foundResult = false;
    let firstIndice = 0;
    let secondIndice = 0;
    for(let i = 0; i < nums.length && !foundResult; i++){
        for(let j = 0; j < nums.length && !foundResult; j++){
            if(i != j){
                if(nums[i] + nums[j] == target){
                    foundResult = true;
                    firstIndice = i;
                    secondIndice = j;
                }
            }        
        }
    }
    
    return [firstIndice, secondIndice];
};
