var maxSubArray = function(nums) {
    let sum = 0;
    let maxs=-Infinity;
    for(let i =0;i<nums.length;i++){
          sum = sum+nums[i];
          maxs = Math.max(maxs,sum)
          if(sum<0) sum=0;
    }
  return maxs
};


