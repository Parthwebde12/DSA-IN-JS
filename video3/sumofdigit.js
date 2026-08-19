var n = Number(prompt("Till when you will go"));
 if(isNaN(n)){
    console.log("invalid input");
    
 }else{
    if(n>0){
         while(n>0){
            var rem = n%10;
            sum = sum + rem;
            n = Math.floor(n/10);
         }
         console.log((sum));
         
    }else{
        console.log("Should be positive and more than zero");
        
    }
 }