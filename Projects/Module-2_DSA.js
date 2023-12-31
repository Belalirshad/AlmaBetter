/*---------------------------------------------CODE BUG FIXING----------------------------------------------*/

// 01_IsPowerOfTwo.js -->

/*
Code with error
*/

module.exports = { IsPowerOfTwo };

function isPowerOfTwo(n) {
    
    return n > 0 || (n & (n - 1)) === 0;
}

/*
Fixed Code
*/

function isPowerOfTwo(n) {
    
    return n > 0 && (n & (n - 1)) === 0;
}

/*
Description -->
The code you provided has a logical error. It should use a logical AND (&&) operator instead of a logical OR (||) operator to check if 'n' is both positive and a power of two.
*/

// 02_minAddToMakeValid.js -->

/*
Code with error
*/

module.exports = { minAddToMakeValid };

var minAddToMakeValid = function(s) {
    let open = 0, close = 0;
    
    for(let c of s) {
        if(c === '(') open++;
        else if(open) close++;
        else open--;
    }
    return open + close;
};

/*
Fixed Code
*/

var minAddToMakeValid = function(s) {
    let open = 0, close = 0;
    
    for (let c of s) {
        if (c === '(') {
            open++;
        } else if (open > 0) {
            open--;
        } else {
            close++;
        }
    }
    
    return open + close;
};

/*
Description -->
I apologize for the oversight. Upon closer inspection, I can see a logical error in the provided code. Specifically, the line 'else open--' ; should be outside the loop to ensure it's correctly reducing the 'open' count for unmatched open parentheses.
*/

// 03_CallPoints.js -->

/*
Code with error
*/

module.exports = { CallPoints };

var callPoints = function(operations) {
    for (let i = 0; i <= operations.length; i++) {
        if (operations[i] === "+") {
            sum = operations[i - 2] + operations[i - 1];
            operations[i] = sum;
        } else if (operations[i] === "D") {
            newD = operations[i - 1] * 2;
            operations[i] = newD;
        } else if (operations[i] === "C") {
            operations.splice(i - 1, 2);
            i = i - 2;
        } else {
            var integer = +operations[i];
            operations[i] = integer;
        }
    }

    // to calculate the totalSum only
    let totalSum = 0;
    for (let i = 0; i <= operations.length; i++) {
        totalSum += operations[i];
    }

    return totalSum;
};

/*
Fixed Code
*/

var callPoints = function(operations) {
    let stack = [];

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "+") {
            let lastTwo = stack.slice(-2);
            let sum = lastTwo[0] + lastTwo[1];
            stack.push(sum);
        } else if (operations[i] === "D") {
            let last = stack[stack.length - 1];
            let newD = last * 2;
            stack.push(newD);
        } else if (operations[i] === "C") {
            stack.pop();
        } else {
            let integer = parseInt(operations[i]);
            stack.push(integer);
        }
    }

    // Calculate the totalSum
    let totalSum = 0;
    for (let score of stack) {
        totalSum += score;
    }

    return totalSum;
};


/*
Description -->
1. Use an array 'stack' to keep track of the scores.
2. Use 'stack.slice(-2)' to get the last two elements for the "+" operation.
3. Use 'stack.pop()' to remove the last element for the "C" operation.
4. Properly convert string values to integers using 'parseInt'.
This corrected code should calculate the cumulative score as expected.
*/

// 04_SortPeople.js -->

/*
Code with error
*/

module.exports = { SortPeople };

var sortPeople = function(names, heights) {
    let length = heights.length();
    let map = new Map();
    for(let i=0; i<=length; i++){
        map.set(heights[i], names[i]);
    }
    heights.sort((a,b) => b-a);
    let res = [];
    for(let height of heights){
        res.push(map.get(height));
    }
    return res;
};

/*
Fixed Code
*/

var sortPeople = function(names, heights) {
    let length = heights.length;
    let map = new Map();

    for (let i = 0; i < length; i++) {
        map.set(heights[i], names[i]);
    }

    heights.sort((a, b) => b - a);
    let res = [];

    for (let height of heights) {
        res.push(map.get(height));
    }
    
    return res;
};


/*
Description -->
1. 'length' should be calculated using 'heights.length' (without the parentheses), as 'length' is a property of arrays, not a function.
2. In the first loop, I've changed the loop condition to 'i < length' to prevent an "Index out of range" error.
3. When using 'map.set' , the height should be the key, and the name should be the value because you want to retrieve names by their corresponding heights.
4. The sorting logic appears correct, but the loop should iterate through 'heights' to maintain the sorted order.
5. Finally, I've changed the loop condition to 'i < length' in the second loop.
With these changes, the code should correctly sort the names based on their corresponding heights in descending order.
*/

// 05_findErrorNums.js -->

/*
Code with error
*/

module.exports = { findErrorNums };

var findErrorNums = function(nums) {
    const hashmap = new Map();
    const output = [];
    let maxValue = 0;

    for (let i = 0; i <= nums.length; i++) {
        const num = nums[i];
        if (hashmap.has(num)) output.push(num);
        hashmap.set(num, i);
        maxValue = Math.max(maxValue, num);
    }

    for (let i = 1; i < maxValue + 1; i++) {
        if (hashmap.has(i)) {
            output.push(i);
            break;
        }
    } 

    return output;
};

/*
Fixed Code
*/

var findErrorNums = function(nums) {
    const hashmap = new Map();
    const output = [];
    let maxValue = 0;

    for (let i = 0; i < nums.length; i++) { // Corrected loop condition
        const num = nums[i];
        if (hashmap.has(num)) {
            output.push(num); // If a number is duplicated, add it to output
        }
        hashmap.set(num, i);
        maxValue = Math.max(maxValue, num);
    }

    for (let i = 1; i <= maxValue; i++) { // Corrected loop condition
        if (!hashmap.has(i)) {
            output.push(i); // If a number is missing, add it to output
            break; // You found the missing number, so break the loop
        }
    }

    return output;
};


/*
Description -->
1. The loop conditions in both loops have been corrected. In the first loop, the condition should be 'i < nums.length' to avoid going out of bounds. In the second loop, it should be 'i <= maxValue' , and a missing number should be added to the output.
2. The missing number is found using a loop that iterates from '1' to 'maxValue' , and when it finds a missing number, it adds it to the 'output' array and breaks the loop.
With these changes, the code should correctly find the duplicated number and the missing number in the given array.
*/

/*-------------------------------------------IMPROVISED PERSPECTIVE-----------------------------------------*/

// 06_isHappy.js -->

/*
Approach 1
*/

module.exports = { isHappy };

function isHappy(n) {
    // Helper function to calculate the sum of squares of digits
    function calculateSumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    let slow = n;
    let fast = n;

    do {
        slow = calculateSumOfSquares(slow);
        fast = calculateSumOfSquares(calculateSumOfSquares(fast));
    } while (slow !== fast);

    return slow === 1;
}

/*
Approach 2 (using 'Set' object)
*/

function isHappy(n) {
    function calculateSumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    const seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = calculateSumOfSquares(n);
    }

    return n === 1;
}

// 07_isPalindrome.js -->

/*
Approach 1
*/

module.exports = { isPalindrome };

function isPalindrome(n) {
    let dupNum = 0;
    let backN = n;
    
    while (n) {
        let rem = n % 10;
        dupNum = dupNum * 10 + rem;
        n = Math.floor(n / 10);
    }
    
    if (dupNum === backN) {
        return true;
    }
    
    return false;
}

/*
Approach 2 (using 'Two pointer' approach)
*/

function isPalindrome(n) {
    if (n < 0) {
        return false;
    }

    let numStr = n.toString();
    let left = 0;
    let right = numStr.length - 1;

    while (left < right) {
        if (numStr[left] !== numStr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// 08_fairCandySwap.js -->

/*
Approach 1
*/

module.exports = { fairCandySwap };

var fairCandySwap = function(aliceSizes, bobSizes) {
    let sumAlice = 0, sumBob = 0;
    
    for(let i = 0; i < aliceSizes.length; i++) {
        sumAlice += aliceSizes[i];
    }
    
    for(let i = 0; i < bobSizes.length; i++) {
        sumBob += bobSizes[i];
    }
    
    let sum = (sumAlice + sumBob) / 2;
    
    for(let i = 0; i < aliceSizes.length; i++) {
        let a = aliceSizes[i];
        
        let b = sum - (sumAlice - a);
        
        if(bobSizes.includes(b))
            return [a, b];
    }
};

/*
Approach 2 (using 'Hashmap' approach)
*/

var fairCandySwap = function(aliceSizes, bobSizes) {
    let sumAlice = 0, sumBob = 0;
    const bobCandies = {}; // Create a hashmap for Bob's candies
    
    for (let i = 0; i < aliceSizes.length; i++) {
        sumAlice += aliceSizes[i];
    }
    
    for (let i = 0; i < bobSizes.length; i++) {
        sumBob += bobSizes[i];
        bobCandies[bobSizes[i]] = true;
    }
    
    let targetSum = (sumAlice + sumBob) / 2;
    
    for (let i = 0; i < aliceSizes.length; i++) {
        let a = aliceSizes[i];
        
        let b = targetSum - (sumAlice - a);
        
        if (bobCandies[b]) {
            return [a, b];
        }
    }
};

// 09_nextGreatestLetter.js -->

/*
Approach 1
*/

module.exports = { nextGreatestLetter };

function nextGreatestLetter(letters, target) {
    // binary search

    let ans;
    let check = false;

    let l = 0;
    let size = letters.length;
    let h = size - 1;

    while (l <= h) {
        let mid = h - Math.floor((h - l) / 2);

        if (letters[mid] <= target) {
            l = mid + 1;
        } else {
            let currAns = letters[mid];
            check = true;
            if (mid >= 0) {
                h = mid - 1;
            }
            ans = currAns;
        }
    }
    
    if (!check) {
        return letters[0];
    }
    
    return ans;
}

/*
Approach 2 (using 'Set' approach)
*/

function nextGreatestLetter(letters, target) {
    const letterSet = new Set(letters);

    for (let letter of letterSet) {
        if (letter > target) {
            return letter;
        }
    }

    // If no greater letter is found, return the smallest letter from the set.
    return [...letterSet][0];
}

// 10_searchRange.js -->

/*
Approach 1
*/

module.exports = { searchRange };

var searchRange = function(nums, target) {
    //O(n) approach

    var ans=[];
    for(let i=0;i<nums.length;i++){
      if(nums[i]==target){
          ans.push(i);
          break;
      }
    }
 for(let i=nums.length-1;i>=0;i--){
      if(nums[i]==target){
          ans.push(i);
          break;
      }
    }
if(ans.length==0){
ans.push(-1);
ans.push(-1);
}
    return ans;
};

/*
Approach 2 (using 'Binary Search Algorithm' approach)
*/

var searchRange = function(nums, target) {
    const findFirst = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let first = -1;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (nums[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }

            if (nums[mid] === target) {
                first = mid;
            }
        }

        return first;
    };

    const findLast = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let last = -1;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }

            if (nums[mid] === target) {
                last = mid;
            }
        }

        return last;
    };

    const firstIndex = findFirst(nums, target);
    const lastIndex = findLast(nums, target);

    return [firstIndex, lastIndex];
};

/*-------------------------------------------------LOGIC BUILDING-------------------------------------------*/

// 11_findPeakElement.js -->

module.exports = { findPeakElement };

function findPeakElement(nums) {
    // Write your code inside this function only.
    let left = 0;
    let right = nums.length - 1;


    while (left < right) {
        const mid = Math.floor((left + right) / 2);


        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }


    return left;
}

// Example-1:-
console.log(findPeakElement([1, 2, 3, 1])); // Output: 2


// Example-2:-
console.log(findPeakElement([1,2,1,3,5,6,4])); // Output: 5

// 12_sortColors.js -->

module.exports = { sortColors };

function sortColors(nums) {
    // Write your code inside this function only.
    let low = 0; 
    let mid = 0; 
    let high = nums.length - 1;


    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }

}

// Example-1:-
let nums01 = [2, 0, 2, 1, 1, 0];
sortColors(nums01);
console.log(nums01); // Output: [0, 0, 1, 1, 2, 2]


// Example-2:-
let nums02 = [2,0,1];
sortColors(nums02);
console.log(nums02); // Output: [0, 1, 2]

// 13_maxCount.js -->

module.exports = { maxCount };

function maxCount(nums) {
    // Write your code inside this function only.
    let posCount = 0; 
    let negCount = 0; 

    for (let num of nums) {
        if (num > 0) {
            posCount++;
        } else if (num < 0) {
            negCount++;
        }
    }

    return Math.max(posCount, negCount);

}

// Example usage:
const nums1 = [-2, -1, -1, 1, 2, 3];
console.log(maxCountPosNeg(nums1)); // Output: 3

const nums2 = [-3, -2, -1, 0, 0, 1, 2];
console.log(maxCountPosNeg(nums2)); // Output: 3

const nums3 = [5, 20, 66, 1314];
console.log(maxCountPosNeg(nums3)); // Output: 4   

// 14_minimumSum.js -->

module.exports = { minimumSum };

function minimumSum(num) {
    // Write your code inside this function only.
    
    const digits = Array.from(String(num), Number);

    digits.sort((a, b) => a - b);

    const new1 = parseInt(digits.slice(0, 2).join(''), 10);

    const new2 = parseInt(digits.slice(2).join(''), 10);

    const minSum = new1 + new2;

    return minSum;

}

// Example usage:
const num1 = 2932;
console.log(minSum(num1)); // Output: 52

const num2 = 4009;
console.log(minSum(num2)); // Output: 13

// 15_transitionPoint.js -->

module.exports = { transitionPoint };

function transitionPoint(arr) {
    // Write your code inside this function only.
    let left = 0;
    let right = arr.length - 1;
    let transitionIndex = -1; 
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);


        if (arr[mid] === 1) {
            transitionIndex = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }


    return transitionIndex;

}

// Example-1:-
console.log(transitionPoint([0, 0, 0, 1, 1])); // Output: 3


// Example-2:-
console.log(transitionPoint([0, 0, 0, 0])); // Output: -1

/*-------------------------------ANALYZING TRADITIONAL vs OPTIMIZED APPROACH--------------------------------*/

// 16_missingNumber.js -->

// Traditional Approach

var missingNumber = function(arr) {
    let n=arr.length;
     let hashSet = new Set();
 
  // Add all elements of array to hashset
  for (let i = 0; i < n ; i++) {
    hashSet.add(arr[i]);
  }
 
  // Check each integer from 1 to n
  for (let i = 1; i <= n; i++) {
    // If integer is not in hashset, it is the missing integer
    if (!hashSet.has(i)) {
      return i;
    }
  }
 
  // If no integer is missing, return n+1
  return 0;
};

// Optimized Approach

var missingNumber = function(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
            [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return n + 1;
};


// Provide your comparison here.

/*
The second approach, the optimized approach, is better in terms of time complexity compared to the traditional approach.
--------------------Traditional Approach (Using HashSet):
Overall Time Complexity: O(n)
--------------------Optimized Approach (Using Cyclic Sort):
Overall Time Complexity: O(n)
but in terms of time complexity, both approaches have linear time complexity, but the optimized approach has a slightly better constant factor because it avoids using a HashSet, which involves extra memory overhead. Therefore, the optimized approach is generally preferred over the traditional approach for solving this problem, especially if memory usage is a concern.
Additionally, the optimized approach is in-place, meaning it doesn't require additional memory for data structures like HashSet, making it more memory-efficient as well.
*/

// 17_duplicateCheck.js -->

// Traditional Approach

class Solution{
    duplicateCheck(str){
        //code here
        let temp = ''+ str[0];
        for(let i=0;i<str.length;i++){
            if(temp.indexOf(str[i]) == -1){
                temp = temp+str[i];
            }
        }
        return temp;
    }
}

// Optimized Approach

class Solution{
    duplicateCheck(str){
        const p=new Set(str);
        const t=[...p];
        return t.join("");
    }
}

// Provide your comparison here.

/*
The optimized approach (using a Set and array manipulation) is generally better in terms of both readability and performance compared to the traditional approach (using a loop and string manipulation). Here's why the optimized approach is better:
1. Readability: The optimized approach is more concise and easier to understand. It clearly conveys the intent of removing duplicates from the string by converting it into a Set to automatically remove duplicates and then converting it back to a string using join. This makes the code more self-explanatory and less error-prone.
2. Performance: The optimized approach is likely to be more efficient, especially for large strings. In the traditional approach, you use indexOf inside a loop to check for duplicates, which has a time complexity of O(n^2) because for each character, you potentially iterate through the entire temp string. On the other hand, the optimized approach using a Set has a time complexity of O(n) for converting the string into a Set and O(n) for converting it back into a string. The overall time complexity is still O(n), but it's more efficient due to its linear nature.
3. Maintainability: The optimized approach is easier to maintain. If you later need to modify the logic for duplicate removal or handle additional operations on unique characters, the optimized code provides a cleaner starting point.
Conclusion: the optimized approach using a Set is preferred for removing duplicates from a string because it is more readable, performs better for larger inputs, and is easier to maintain.
*/

// 18_chunkArrayInGroups.js-->

// Traditional Approach

function chunkArrayInGroups(arr, size) {
  let temp = [];
  const result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}

// Optimized Approach

function chunkArrayInGroups(arr, size) {
  // Break it up.
  const newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}



// Provide your comparison here.

/*
Between the two approaches, the optimized approach is generally considered better for several reasons:
1. Readability: The optimized approach is more concise and easier to understand. It uses the slice method to directly create subarrays of the desired size, which is a more intuitive and readable way to achieve the task.
2. Efficiency: The optimized approach is likely to be more efficient, especially for large arrays. It uses the built-in slice method, which is highly optimized in most JavaScript engines. In contrast, the traditional approach involves manual iteration and condition checks, which can be less efficient.
3. Simplicity: The optimized approach eliminates the need for complex conditional statements and temporary arrays, making the code simpler and less error-prone.
4. Maintainability: The optimized approach is easier to maintain because it relies on a built-in method (slice) with well-defined behavior. It's less prone to bugs and easier to modify if needed.
5. Flexibility: The optimized approach can handle various chunk sizes without requiring changes to the core logic. You only need to adjust the size parameter, making it more versatile.
conclusion, the optimized approach is generally preferred due to its simplicity, readability, efficiency, and maintainability. 
*/

// 19_enchantedArrayShuffling.js -->

// Traditional Approach

function enchantedArrayShuffling(originalArray) {
  const sortedArray = [...originalArray].sort((a, b) => a - b);
  const shuffledArray = [];

  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    if (left === right) {
      shuffledArray.push(sortedArray[left]);
    } else {
      shuffledArray.push(sortedArray[left]);
      shuffledArray.push(sortedArray[right]);
    }

    left++;
    right--;
  }

  return shuffledArray;
}

// Optimized Approach

function enchantedArrayShuffling(originalArray) {
  const sortedArray = [...originalArray].sort((a, b) => a - b);
  const shuffledArray = [];

  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    shuffledArray.push(sortedArray[left++]);
    shuffledArray.push(sortedArray[right--]);
  }

  if (left === right) {
    shuffledArray.push(sortedArray[left]);
  }

  return shuffledArray;
}



// Provide your comparison here.

/*
The optimized approach is generally better than the traditional approach for shuffling an array. Here's why:
1. Efficiency: The optimized approach has a more efficient loop condition. It uses left < right instead of left <= right as the loop condition, which means it avoids an unnecessary iteration when the array length is odd. In the traditional approach, when the array length is odd, you end up pushing the same element twice, which is not ideal.
2. Clarity: The optimized approach is also clearer and more concise. It eliminates the need for a separate if (left === right) condition within the loop, making the code easier to understand.
3. Fewer Comparisons: The optimized approach performs fewer comparisons. In the traditional approach, you compare left and right in every iteration of the loop, including when left === right. In the optimized approach, you only compare them once per iteration, which reduces the number of comparisons.
4. Consistency: The optimized approach consistently pushes sortedArray[left] and sortedArray[right] in each iteration of the loop, whether left and right are equal or not. This results in a more consistent and predictable shuffling behavior.
Conclusive, the optimized approach is better in terms of efficiency, clarity, and consistency. 
*/

// 20_findPairWithSum.js -->

// Traditional Approach

function findPairWithSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}

// Optimized Approach

function findPairWithSum(array, targetSum) {
  const numMap = {};

  for (let i = 0; i < array.length; i++) {
    const difference = targetSum - array[i];
    if (numMap[array[i]]) {
      return [difference, array[i]];
    }
    numMap[difference] = true;
  }

  return [];
}



// Provide your comparison here.

/*
The optimized approach is generally better than the traditional approach for finding a pair of elements in an array that sum up to a target value. Here's why:
Traditional Approach:
In the traditional approach, you use nested loops to compare each element in the array with every other element. This results in a time complexity of O(n^2), where 'n' is the length of the array. This approach can be quite inefficient for large arrays as the number of comparisons grows quadratically with the size of the input.
Optimized Approach:
The optimized approach uses a hash map to keep track of the elements you've seen so far. It iterates through the array only once, and for each element, it calculates the difference between the target sum and the current element. If this difference exists as a key in the map, it means that the pair needed to reach the target sum has been found, and it returns to the pair immediately. This approach has a time complexity of O(n), which is more efficient than the traditional approach, especially for large arrays.
In terms of time complexity, the optimized approach is superior because it has a linear time complexity O(n) compared to the quadratic time complexity O(n^2) of the traditional approach. Therefore, the optimized approach is generally considered the best choice for finding a pair of elements with a target sum in an array, especially for larger datasets.
*/

/*---------------------------------INCORPORATING BEST & WORST SCENARIOS-------------------------------------*/

// 21_frameStory.js -->

// Worst Case

/*
Example-1
*/

function worstframeStory(str) {
    // Write your code inside this function only.

    const words = str.split(' ');
    let result = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i] === 'noun') {
            result += 'dog';
        } else if (words[i] === 'verb') {
            result += 'chased';
        } else if (words[i] === 'adjective') {
            result += 'big';
        } else if (words[i] === 'noun.') {
            result += 'cat.';
        } else {
            result += words[i];
        }

        if (i < words.length - 1) {
            result += ' ';
        }
    }
    return result;
}

const str1 = "The noun verb the adjective noun.";
console.log(worstframeStory(str1)); // Output: "The dog chased the big cat."

/*
Example-2
*/

function worstframeStory(str) {
    const words = str.split(' ');
    let result = '';


    for (let i = 0; i < words.length; i++) {
        if (words[i] === 'noun') {
            result += 'horse';
        } else if (words[i] === 'noun.') {
            result += 'hill.';
        } else if (words[i] === 'verb') {
            result += 'trotted';
        } else if (words[i] === 'adjective') {
            result += 'elegant';
        } else if (words[i] === 'the adjective') {
            result += 'green';
        } else {
            result += words[i];
        }


        if (i < words.length - 1) {
            result += ' ';
        }
    }


    return result;
}

const str2 = "An adjective noun verb over the adjective noun.";
console.log(worstframeStory(str2)); // Output: "An elegant horse trotted over the elegant hill."

/*-------------------------------------------------------------------------------------------------------------------------------------*/

// Best Case

/*
Example-1
*/

function bestframeStory(str) {
    // Write your code inside this function only.

    const partsOfSpeech = str.split(' ');
    const replacements = {
        'noun': 'dog',
        'verb': 'chased',
        'adjective': 'big',
        'noun.': 'cat.',
    };

    const output = partsOfSpeech.map(word => replacements[word] || word).join(' ');

    return output;
}

const str3 = "The noun verb the adjective noun.";
console.log(bestframeStory(str3)); // Output: "The dog chased the big cat."

/*
Example-2
*/

function bestframeStory(str) {
    const partsOfSpeech = str.split(' ');
    const replacements = {
        'noun': 'horse',
        'verb': 'trotted',
        'adjective': 'elegant',
        'noun.': 'hill.',
        'the adjective': 'green',


    };


    const output = partsOfSpeech.map(word => replacements[word] || word).join(' ');


    return output;
}
const str = "An adjective noun verb over the adjective noun.";
console.log(bestframeStory(str)); // Output: "An elegant horse trotted over the elegant hill."

// 22_maxBitwise.js -->

// Worst Case

function worstmaxBitwise(arr) {
    // Write your code inside this function only.

    let maxBitwiseAND = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            maxBitwiseAND = Math.max(maxBitwiseAND, arr[i] & arr[j]);
        }
    }

    return maxBitwiseAND;
}

// Example-1:-
console.log(worstmaxBitwise([2, 3, 4, 5, 6])); // Output: 4


// Example-2:-
console.log(worstmaxBitwise([10, 12, 6, 8])); // Output: 8

/*-------------------------------------------------------------------------------------------------------------------------------------*/

// Best Case

function bestmaxBitwise(arr) {
    // Write your code inside this function only.

        if (arr.length < 2) {
        return 0;
    }

    let maxBitwiseAND = arr[0] & arr[1];

    for (let i = 2; i < arr.length; i++) {
        maxBitwiseAND = Math.max(maxBitwiseAND, arr[i] & arr[i - 1]);
    }

    return maxBitwiseAND;
}

// Example-1:-
console.log(bestmaxBitwise([2, 3, 4, 5, 6])); // Output: 4


// Example-2:-
console.log(bestmaxBitwise([10, 12, 6, 8])); // Output: 8

// 23_flipAndInvertImage.js -->

// Worst Case

function worstflipAndInvertImage(image) {
    // Write your code inside this function only.

      for (let i = 0; i < image.length; i++) {
      // Reverse each row in place
      for (let j = 0; j < image[i].length / 2; j++) {
        const temp = image[i][j];
        image[i][j] = image[i][image[i].length - 1 - j];
        image[i][image[i].length - 1 - j] = temp;
      }
  
      // Invert each pixel in the row
      for (let j = 0; j < image[i].length; j++) {
        image[i][j] = image[i][j] === 0 ? 1 : 0;
      }
    }
  
    return image;
}

  // Example-1:-
  const image1 = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
  console.log(worstflipAndInvertImage(image1)); 
  
  // Example-2:-
  const image2= [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];
  console.log(worstflipAndInvertImage(image2));

/*-------------------------------------------------------------------------------------------------------------------------------------*/

// Best Case

function bestflipAndInvertImage(image) {
    // Write your code inside this function only.
    const reversedImage = JSON.parse(JSON.stringify(image));
    reversedImage.forEach(row => row.reverse());
    const invertedImage = reversedImage.map(row =>
      row.map(pixel => (pixel === 0 ? 1 : 0))
    );
  
    return invertedImage;
}

// Example-1:-
const image3 = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
console.log(bestflipAndInvertImage(image3)); // Output: [ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 1, 1, 1 ] ]


// Example-2:-
const image4= [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];
console.log(bestflipAndInvertImage(image4)); // Output: [ [ 1, 1, 0, 0 ], [ 0, 1, 1, 0 ], [ 0, 0, 0, 1 ], [ 1, 0, 1, 0 ] ]

// 24_asteroidCollision.js -->

// Worst Case

function worstasteroidCollision(arr) {
    // Write your code inside this function only.
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            let j = i - 1;
            while (j >= 0 && arr[j] > 0) {
                if (Math.abs(arr[i]) === arr[j]) {
                    arr.splice(j, 1);
                    arr.splice(i, 1);
                    i = i - 2; 
                    break;
                } else if (Math.abs(arr[i]) < arr[j]) {
                    arr.splice(i, 1);
                    i = i - 1;
                    break;
                } else {
                    arr.splice(j, 1);
                    j = j - 1;
                }
            }
        }
    }

    return arr;
}

// Example-1:-
console.log(worstasteroidCollision([5, 10, -5])); // Output: [5, 10]


// Example-2:-
console.log(worstasteroidCollision([8, -8])); // Output: [-8]


// Example-3:-
console.log(worstasteroidCollision([10, 2, -5])); // Output: [-5]

/*-------------------------------------------------------------------------------------------------------------------------------------*/

// Best Case

function bestasteroidCollision(arr) {
    // Write your code inside this function only.
     
    const stack = [];

    for (const asteroid of arr) {
        if (stack.length === 0 || stack[stack.length - 1] < 0 || asteroid > 0) {
            stack.push(asteroid);
        } else {
            while (stack.length && stack[stack.length - 1] > 0) {
                const top = stack.pop();
                if (top === -asteroid) {
                    break;
                } else if (top > -asteroid) {
                    stack.push(top);
                    break;
                }
            }
        }
    }

    return stack;

}

// Example-1:-
console.log(bestasteroidCollision([5, 10, -5])); // Output: [5, 10]


// Example-2:-
console.log(bestasteroidCollision([8, -8])); // Output: []


// Example-3:-
console.log(bestasteroidCollision([10, 2, -5])); // Output: [10]

// 25_findRelativeRanks.js -->

// Worst Case

function worstfindRelativeRanks(score) {
    // Write your code inside this function only.
    
    const sortedScores = [...score].sort((a, b) => b - a);
    const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    const result = [];


    for (let i = 0; i < score.length; i++) {
        const rank = sortedScores.indexOf(score[i]) + 1;
        if (rank <= 3) {
            result.push(medals[rank - 1]);
        } else {
            result.push(rank.toString());
        }
    }

    return result;
}

// Exmple-1:-
console.log(worstfindRelativeRanks([5, 4, 3, 2, 1])); // Output: [ 'Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5' ]


// Example-2:-
console.log(worstfindRelativeRanks([10, 3, 8, 9, 4]));  // Output: [ 'Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4' ]

// Best Case

function bestfindRelativeRanks(score) {
    // Write your code inside this function only.
    
    const sortedScores = [...score].sort((a, b) => b - a);
    const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    const result = [];

    for (let i = 0; i < score.length; i++) {
        const rank = sortedScores.indexOf(score[i]) + 1;
        if (rank <= 3) {
            result.push(medals[rank - 1]);
        } else {
            result.push(rank.toString());
        }
    }

    return result;
}

// Exmple-1:-
console.log(bestfindRelativeRanks([5, 4, 3, 2, 1])); // Output: [ 'Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5' ]


// Example-2:-
console.log(bestfindRelativeRanks([10, 3, 8, 9, 4])); // Output: [ 'Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4' ]
