//factorIL of n natural number

var n = Number(prompt("Till when you will go"));
 if(isNaN(n)){
    console.log("invalid input");
    
 }else{
    if(n>0){
    var fact= 1;

       for(var i = 1; i<=n ;i++){
              fact = fact * i;
               
       }
       console.log(fact);
        
    }else{
        console.log("Should be positive and more than zero");
        
    }
 }