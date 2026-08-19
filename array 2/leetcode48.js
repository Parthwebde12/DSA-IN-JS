var trap = function(height) {
    let left = new Array(height.length)
     let right = new Array(height.length);
     let maxL= height[0] , maxR=height[height.length-1];
     left[0]= maxL,right[right.length-1]=maxR

     for( let i=1;i<height.length;i++){
        maxL = Math.max(height[i],maxL);
        left[i]=maxL;
     }
     for( let i=height.length-2;i>=0;i--){
        maxR = Math.max(height[i],maxR);
        right[i]=maxR;
     }
     let ans=0;
     for(let i =0;i<height.length;i++){
        ans+=Math.min(left[i],right[i])-height[i]
     }
     return ans;
};

//leetcode 48 trapping the water