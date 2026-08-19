let arr = [23,4,5,6,90]
let min = arr[0];

for(let i =1 ; i<arr.length;i++){
    if(min>arr[i]){
        min=arr[i]
    }
}

console.log(min);
