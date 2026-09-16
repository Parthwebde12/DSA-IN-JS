// ==========================================
// DSA TIME & SPACE COMPLEXITY - JAVASCRIPT
// ==========================================

// ------------------------------------------
// 1. O(1) - CONSTANT TIME
// ------------------------------------------

// Time: O(1)
// Space: O(1)

function getElement(arr, index) {
    return arr[index];
}


// ------------------------------------------
// 2. O(log n) - LOGARITHMIC TIME
// Binary Search
// ------------------------------------------

// Time: O(log n)
// Space: O(1)

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}


// ------------------------------------------
// 3. O(n) - LINEAR TIME
// Single Loop
// ------------------------------------------

// Time: O(n)
// Space: O(1)

function findMax(arr) {
    let max = arr[0];

    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }

    return max;
}


// ------------------------------------------
// 4. O(n) TIME + O(n) SPACE
// Creating a new array
// ------------------------------------------

// Time: O(n)
// Space: O(n)

function doubleArray(arr) {
    let result = [];

    for (let num of arr) {
        result.push(num * 2);
    }

    return result;
}


// ------------------------------------------
// 5. O(n) - TWO SEPARATE LOOPS
// ------------------------------------------

// Time: O(n + n)
//      = O(2n)
//      = O(n)
//
// Space: O(1)

function twoLoops(arr) {

    for (let num of arr) {
        console.log(num);
    }

    for (let num of arr) {
        console.log(num * 2);
    }
}


// ------------------------------------------
// 6. O(n²) - QUADRATIC TIME
// Nested Loops
// ------------------------------------------

// Time: O(n²)
// Space: O(1)

function printPairs(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }

    }
}


// ------------------------------------------
// 7. O(n³) - CUBIC TIME
// Three Nested Loops
// ------------------------------------------

// Time: O(n³)
// Space: O(1)

function printTriplets(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {

            for (let k = 0; k < arr.length; k++) {
                console.log(arr[i], arr[j], arr[k]);
            }

        }

    }
}


// ------------------------------------------
// 8. O(n log n)
// Merge Sort
// ------------------------------------------

// Time: O(n log n)
// Space: O(n)

function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}


function merge(left, right) {

    let result = [];

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {

        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }

    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}


// ------------------------------------------
// 9. O(2ⁿ) - EXPONENTIAL
// Fibonacci Recursion
// ------------------------------------------

// Time: O(2ⁿ)
// Space: O(n)

function fibonacci(n) {

    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}


// ------------------------------------------
// 10. O(n!) - FACTORIAL
// Generate Permutations
// ------------------------------------------

// Time: O(n!)
// Space: O(n!) because we store permutations

function permutations(arr) {

    if (arr.length === 0) {
        return [[]];
    }

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        let remaining =
            arr.slice(0, i).concat(arr.slice(i + 1));

        let perms = permutations(remaining);

        for (let perm of perms) {
            result.push([arr[i], ...perm]);
        }
    }

    return result;
}


// ------------------------------------------
// 11. O(n) SPACE
// Recursion
// ------------------------------------------

// Time: O(n)
// Space: O(n) because of call stack

function countdown(n) {

    if (n === 0) {
        return;
    }

    console.log(n);

    countdown(n - 1);
}


// ------------------------------------------
// 12. O(n) TIME + O(n) SPACE
// Hash Map
// ------------------------------------------

// Time: O(n)
// Space: O(n)

function frequencyCount(arr) {

    let frequency = new Map();

    for (let num of arr) {

        if (frequency.has(num)) {
            frequency.set(num, frequency.get(num) + 1);
        } else {
            frequency.set(num, 1);
        }

    }

    return frequency;
}


// ------------------------------------------
// 13. O(n) - LINEAR SEARCH
// ------------------------------------------

// Time: O(n)
// Space: O(1)

function linearSearch(arr, target) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === target) {
            return i;
        }

    }

    return -1;
}


// ------------------------------------------
// 14. O(n²) - BRUTE FORCE
// Find Duplicate
// ------------------------------------------

// Time: O(n²)
// Space: O(1)

function hasDuplicateBruteForce(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] === arr[j]) {
                return true;
            }

        }

    }

    return false;
}


// ------------------------------------------
// 15. O(n) TIME + O(n) SPACE
// Find Duplicate Using Set
// ------------------------------------------

// Time: O(n)
// Space: O(n)

function hasDuplicate(arr) {

    let set = new Set();

    for (let num of arr) {

        if (set.has(num)) {
            return true;
        }

        set.add(num);
    }

    return false;
}


// ==========================================
// JAVASCRIPT COMMON OPERATIONS
// ==========================================

// Array Access
// arr[i]                 → O(1)

// Array Push
// arr.push(x)            → O(1) amortized

// Array Pop
// arr.pop()              → O(1)

// Array Shift
// arr.shift()            → O(n)

// Array Unshift
// arr.unshift(x)         → O(n)

// Search
// arr.includes(x)        → O(n)
// arr.indexOf(x)         → O(n)

// Map
// map.set(key, value)    → O(1) average
// map.get(key)           → O(1) average
// map.has(key)           → O(1) average

// Set
// set.add(value)         → O(1) average
// set.has(value)         → O(1) average

// Sorting
// arr.sort()             → O(n log n) typical


// ==========================================
// QUICK SUMMARY
// ==========================================

/*

FASTEST → SLOWEST

O(1)
O(log n)
O(n)
O(n log n)
O(n²)
O(n³)
O(2ⁿ)
O(n!)


IMPORTANT DSA COMPLEXITIES:

O(1)
    Array access
    Map/Set lookup (average)

O(log n)
    Binary Search

O(n)
    Linear Search
    Single Loop
    Hashing

O(n log n)
    Merge Sort
    Efficient Sorting

O(n²)
    Nested Loops
    Brute Force Pair Problems

O(n³)
    Three Nested Loops

O(2ⁿ)
    Recursive Fibonacci
    Some brute-force recursion

O(n!)
    Permutations


SPACE:

O(1)
    Only a few variables

O(n)
    New array of size n
    HashMap/Set containing n items
    Recursion depth n

O(n²)
    2D matrix of n × n


*/