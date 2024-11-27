function moveGiven(nums, Given) {  //NumbermoveathEnd
    let nextnonGivenindex = 0;

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== Given) {
            nums[nextnonGivenindex] = nums[i];
            nextnonGivenindex++;
        }
    }

    // remaining positions 
    for (let i = nextnonGivenindex; i < nums.length; i++) {
        nums[i] = Given;
    }

    return nums;
}

// Input
const nums1 = [9, 0, 6, 0, 8];
const nums2 = [9, 0, 0, 6, 0, 0, 8, 8];
const nums = [0, 0, 7, 0, 0, 6, 0, 0, 8, 8];
/* nums.push(9, 11, 12)
console.log(nums) */
// Output
console.log("Output:", moveGiven(nums1, 9));
