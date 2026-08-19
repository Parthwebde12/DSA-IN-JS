//283. Move Zeroes Leetcode question solution

let nums= [1,0,3,5,0,32]
    for (let i=0;i<nums.length;i++) {
        if (nums[i]===0) {
            for (let j=i+1;j<nums.length;j++) {
                if (nums[j]!==0) {
                    nums[i]=nums[j];
                    nums[j]=0;
                    break;
                    
                }
                
            }
        }
        
    }
    console.log(nums)

//2nd method i think would work


//to right
let arr1 = [3, 0, 0, 5, 0, 4, 0, 3];

let temp1 = [...arr1];

for (let i = 0; i < temp1.length; i++) {
    if (temp1[i] === 0) {
        for (let j = i + 1; j < temp1.length; j++) {
            if (temp1[j] !== 0) {
                temp1[i] = temp1[j];
                temp1[j] = 0;
                break;
            }
        }
    }
}

console.log(temp1);

