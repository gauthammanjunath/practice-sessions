function moveZeroesToEnd(arr) {
    let result = []; // Array to store non-zero elements

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            result.push(arr[i]); // Push non-zero elements to the result array
        }
    }
    result.push(0, 0); // Push zeroes to the result array
    return result;
}

const numbers = [9, 0, 6, 0, 8];
console.log(moveZeroesToEnd(numbers));  
