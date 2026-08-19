//sum of n natural number

var n = Number(prompt("Till when you will go"));
 if(isNaN(n)){
    console.log("invalid input");
    
 }else{
    if(n>0){
    var sum= 0;

       for(var i = 1; i<=n ;i++){
              sum += i;
               
       }
       console.log(sum);
        
    }else{
        console.log("Should be positive and more than zero");
        
    }
 }