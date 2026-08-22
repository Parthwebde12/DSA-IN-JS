let a ="parth";
let rev ="";

for(let i = a.length-1;i>=0;i--){
    rev=rev+a.charAt(i)
}
if(rev == a) console.log("palindrome")
    else console.log("no palindrome")

//another method

let i =0 , j=s.length-1;
while(i<j){
    if(a.charAt(i)!= a.charAt(j)){
        isPallindrome = false;
        break;
    }
    i++;
    j--;
}

if(isPallindrome) console.log("pallindorm")
    else console.log("no pallindrome")