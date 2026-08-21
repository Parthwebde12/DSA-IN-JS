let a ="parth";
let rev ="";

for(let i = a.length-1;i>=0;i--){
    rev=rev+a.charAt(i)
}
if(rev == a) console.log("palindrome")
    else console.log("no palindrome")