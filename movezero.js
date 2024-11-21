

function moveZeros(nums) {
    let a = 0; //  tPointer for placing non-zero elements

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[a] = nums[i]; // Place non-zero at the current non-zero index
            a++;
        }
    }

    // remaining positions 
    for (let i = a; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}

// Input
const nums = [9, 0, 6, 0, 8];
// Output
console.log("Output:", moveZeros(nums));

