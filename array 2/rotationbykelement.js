
let arr = [1, 2, 3, 4, 5];
let k = 7;
k = k % arr.length
let count = 0;
for (let j = 0; j < k; j++) {
    let copy = arr[0];
    count++;

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }

    arr[arr.length - 1] = copy;
}

console.log(arr);
console.log(count);
//left rotation by K step


let arr = [1,2,3,4,5];
let temp = new Array(arr.length);
let k = 9;
k=k%arr.length;

for(let i = 0; i<arr.length;i++){
    temp[i]=arr[(i+k)%arr.length]
}
console.log(temp);




