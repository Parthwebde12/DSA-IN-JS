var maxProfit = function(prices) {
    let maxP=0;
    let min = prices[0];
    for(let i=0;i<prices.length;i++){
        if(prices[i]<min) 
            min = prices[i];
            let profit = prices[i]-min;
            maxP = Math.max(maxP,profit)
        
    }
    return maxP;
};

//Leetcod Question 88 Best time to buy and sell socks