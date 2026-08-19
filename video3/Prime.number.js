var n = Number(prompt("Till when you will go"));
 if(isNaN(n)){
    console.log("invalid input");
    
 }else{
    if(n>0){
       console.log(isPrime(n));
       
            
         
    }else{
        console.log("Should be positive and more than zero");
        
    }
 }



function isPrime(n){
    if(n<=1) return false;
    if(n==2) return true;
    if(n%2==0) return false;
    for(let i =3 ; i<=Math.floor(Math.sqrt(n));i+=2){
        if(n%1==0) return false
    }
    return true;
}