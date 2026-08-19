var sortColors = function(nums) {
    let i=0,j=0,k=nums.length-1;
    while(i<=k){
        if(nums[i]==0){
            let temp = nums[i]
            nums[i]=nums[j];
            nums[j]=temp;
            i++;
            j++;
        }
        else if(nums[i]==2){
            let temp = nums[i]
            nums[i]=nums[k];
            nums[k]=temp;
            k--;
        }else{i++}
    }
    return nums;
};

//75 question leetcode sort colors