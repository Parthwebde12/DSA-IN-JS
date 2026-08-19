//factorIL of n natural number

var n = Number(prompt("Till when you will go"));
 if(isNaN(n)){
    console.log("invalid input");
    
 }else{
    if(n>0){
       for( var i =1 ; i<=Math.floor(n/2);i++){
         if(n%1===0){
            console.log(i);
            
         }
       }
        console.log(n);
    }else{
        console.log("Should be positive and more than zero");
        
    }
 }