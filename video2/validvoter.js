var ans = Number(prompt("what is your age?"));

if(isNaN(ans)){
  console.log("wrong input")
}

else if(ans>=18){
    console.log("You can vote");
    
}else{
    console.log("You can not vote")
}