function countDigitsInNumber(number) {
    let count = 0; // Initialize the digit count to 0

    while (number !== 0) {
        number = Math.floor(number / 10); //The Math.floor()  function method rounds a number DOWN to the nearest integer.
        count++;
    }

    return count; // Return the total count of digits
}

let number = 15;
console.log(countDigitsInNumber(number));












