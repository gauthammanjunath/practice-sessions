function isArraySorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;

}
console.log(isArraySorted([5, 6, 7, 8, 9, 10]));