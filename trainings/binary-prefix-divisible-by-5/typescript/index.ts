function prefixesDivBy5(nums: number[]): boolean[] {
    let result: boolean[] = [];

    let tmpNumber = "";
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        tmpNumber+=element.toString()
        const num2 = tmpNumber;

        result.push(parseInt(num2, 2) % 5 === 0);
    }

    return result;
};


/*
This solution doesn't work with bignumber : there is a precision error with parseInt
Doesn't work with this : 
[1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1]

It return this :
[false,false,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]

But it must return this :
[false,false,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,false,false,false]

*/