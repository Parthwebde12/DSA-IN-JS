var intersection = function(nums1, nums2) {
    let temp = [];
    for(let i = 0 ; i<nums1.length;i++){
        for(let j = 0; j<nums2.length;j++ ){
            if (nums1[i]===nums2[j]){
                if(!temp.includes(nums1[i])){
                    temp.push(nums1[i])
                }
                break;
            }
            }
           
    }
    return temp;
};