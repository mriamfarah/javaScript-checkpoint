// Find Maximum
function findMax(arr) {
    return Math.max(...arr);
}

// Find Minimum
function findMin(arr) {
    return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}


console.log(findMax([1, 2, 3, 4, 5])); 
console.log(findMin([1, 2, 3, 4, 5])); 
console.log(sumArray([1, 2, 3, 4, 5])); 
console.log(filterArray([1, 2, 3, 4, 5], num => num > 3)); 