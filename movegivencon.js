function moveGivenUsingConcalet(nums, given) {
    // Separate non-given elements and given
    let nongivenElements = nums.filter(num => num !== given);
    let givenElements = nums.filter(num => num === given);


    // Concatenate non-given elements with given
    let result = nongivenElements.concat(givenElements);


    return result;
}

// Example Input
const nums1 = [9, 0, 6, 0, 8];
const nums = [0, 0, 9, 0, 0, 6, 0, 0, 8, 8];

// Example Output
console.log("Output:", moveGivenUsingConcat(nums, 0));