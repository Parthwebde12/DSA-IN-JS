//type1

let a = 10;
let b = 20;
let c;


c = a;
a = b;
b = c;

console.log(a);
console.log(b);


//type2

let a = 10;
let b = 20;

a = a+b;
b = a-b;
a= a-b;

console.log(a,b);

//type3 dESTRUCTURING

let a =10;
let b = 20;

[a,b]=[b,a]

console.log(a,b)