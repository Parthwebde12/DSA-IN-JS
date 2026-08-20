//leetcode solution 485
var findMaxConsecutiveOnes = function (nums) {
    let temp = 1;
    let count = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (temp == nums[i]) {
          count++;
             if(count>max){
                max =count;
             }
        }
             else{
                count=0;
             }
        }
    
        return max;

};