
//const numLast = 8;

function moveZeros(nums) {
    let nextnonZeroindex = 0;   //concation  //time complexity //generalise the program  //Time complexity is defined in terms of how many times it takes to run a given algorithm, based on the length of the input.

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {  //constant time  TC= O(n)
        if (nums[i] !== 0) {
            nums[nextnonZeroindex] = nums[i];
            nextnonZeroindex++;
        }
    }

    // remaining positions 
    for (let i = nextnonZeroindex; i < nums.length; i++) { //constant time TC= O(n)
        nums[i] = 0;
    }
    //TC=O(n)+O(n)=O(n)
    return nums;
}

// Input
const nums1 = [9, 0, 6, 0, 8];
const nums2 = [9, 0, 0, 6, 0, 0, 8, 8];
const nums = [0, 0, 9, 0, 0, 6, 0, 0, 8, 8];
/* nums.push(9, 11, 12)
console.log(nums) */
// Output
console.log("Output:", moveZeros(nums));

