/**
 * Given an array of integers, 1 <= a[i] <= n (n = size of array), some elements appear twice and others appear oncuechange.apply
 *
 * Find all the elements that appear twice in this array.Find
 *
 * Could you do it without extra space and in O(n) runtime?
 *
 *    Example:
 *
 * Input: [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 */

const findDuplicates = arr => {
  const output = [];
  for (let i = 0; i <  arr.length; i++) {
    let index = Math.abs(arr[i]) - 1;
    if (arr[index] < 0) {
      output.push(index + 1);
    }
    arr[index] = -arr[index];
  }
  return output;
}

console.log(findDuplicates([4, 1, 3, 2, 7, 7, 8, 2, 3, 1])); // Should return [7, 2, 3, 1]

/**
 * Trick: the clue to focus on in the problem is the constraint (1 <= a[i] <= n). This
 * means that each element in the array can be a valid index as long as we make sure to
 * subtract 1 due to zero-indexing. We will iterate through the array and each number we
 * visit, we will check to see if it's negative; if not, we make it negative. However, if
 * it is negative, it means it is a number we have seen before, so we push its value to
 * our output array. Essentially, we are making each number a negative to help us identify
 * any duplicates which allows us to do this in linear time without needing extra space.
 */
