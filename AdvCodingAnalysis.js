//Advance Coding and Analysis//


  // 1. Find the maximum element in an array

function findMax(arr) {
    if (arr.length === 0) {
      return undefined; 
    }
  
    let maxElement = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
  
    return maxElement;
  }
  
  // Example usage:
  const myArray = [3, 7, 1, 9, 5, 2];
  const maximum = findMax(myArray);
//   console.log("The maximum element in the array is: " + maximum);

  /*
    Another approach
  */

  function findMax(arr) {
    if (arr.length === 0) {
      return undefined; 
    }
  
    return Math.max(...arr);
  }
  
  // Example usage:
  const myArr = [3, 7, 1, 9, 5, 2];
  const max = findMax(myArr);
//   console.log("The maximum element in the array is: " + max);


/*--------------------------------------------------------------------------------------------------------------------------------------------*/
  
  // 2. Reverse an array in-place.

  function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  
  // Example usage:
  const arr = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arr);
//   console.log("Reversed Array:", arr);
  

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

  // 3. Find the second smallest element in an array

  function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Array must have at least two elements";
    }
    arr.sort(function(a, b) {
      return a - b;
    });
    return arr[1];
  }
  
  // Example usage:
  const myArry = [3, 7, 1, 9, 1, 5, 2];
  const secondSmallest = findSecondSmallest(myArry);
//   console.log("The second smallest element in the array is: " + secondSmallest);
  

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

  // 4. Merge two sorted arrays into a single sorted array

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0; 
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  // Example usage:
  const array1 = [1, 3, 5, 7];
  const array2 = [2, 4, 6, 8];
  const mergedArray = mergeSortedArrays(array1, array2);
//   console.log("Merged Array:", mergedArray);


/*--------------------------------------------------------------------------------------------------------------------------------------------*/

  // 5. Find the longest substring without repeating characters.

  function longestSubstringWithoutRepeatingChars(s) {
    if (s.length === 0) {
      return "";
    }
  
    let maxLength = 0;
    let start = 0;
    let charSet = new Set();
    let longestSubstrStart = 0;
  
    for (let i = 0; i < s.length; i++) {
      const currentChar = s[i];
  
      while (charSet.has(currentChar)) {
        charSet.delete(s[start]);
        start++;
      }
  
      charSet.add(currentChar);
  
      if (i - start + 1 > maxLength) {
        maxLength = i - start + 1;
        longestSubstrStart = start;
      }
    }
  
    return s.slice(longestSubstrStart, longestSubstrStart + maxLength);
  }
  
  // Example usage:
  const inputStr = "abcabcbb";
  const longestSubstring = longestSubstringWithoutRepeatingChars(inputStr);
//   console.log("Longest Substring without Repeating Characters:", longestSubstring);


/*--------------------------------------------------------------------------------------------------------------------------------------------*/
  
  // 6. Find the first non-repeating character in it.

  function firstNonRepeatingCharacter(s) {
    const charCount = new Map();
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charCount.get(char) === 1) {
        return char;
      }
    }
  
    return null;
  }
  
  // Example usage:
  const inputString = "leetcode";
  const firstNonRepeatingChar = firstNonRepeatingCharacter(inputString);
  // console.log(firstNonRepeatingChar);


/*--------------------------------------------------------------------------------------------------------------------------------------------*/

  // 7. Find the length of the longest palindromic substring.

function longestPalindromicSubstring(s) {
  if (!s) {
      return 0;
  }

  let start = 0, end = 0;

  function expandAroundCenter(left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          left--;
          right++;
      }
      return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
      let len1 = expandAroundCenter(i, i);
      let len2 = expandAroundCenter(i, i + 1);
      let maxLen = Math.max(len1, len2);

      if (maxLen > end - start) {
          start = i - Math.floor((maxLen - 1) / 2);
          end = i + Math.floor(maxLen / 2);
      }
  }

  return s.substring(start, end + 1);
}

// Example usage:
const s = "babababd";
// console.log(longestPalindromicSubstring(s));

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

  // 8. Determine if 2nd string is an anagram of 1st string.
  
  function isAnagram(str1, str2) {
    str1 = str1.replace(/ /g, '').toLowerCase();
    str2 = str2.replace(/ /g, '').toLowerCase();

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Example usage:
const string1 = "who";
const string2 = "how";

if (isAnagram(string1, string2)) {
    // console.log(`"${string2}" is an anagram of "${string1}".`);
} else {
    // console.log(`"${string2}" is not an anagram of "${string1}".`);
}


/*--------------------------------------------------------------------------------------------------------------------------------------------*/

  // 9. Check if a String Matches a Pattern

  function patternMatching(pattern, str) {
    const patternLength = pattern.length;
    const strArr = str.split(" ");
    
    if (patternLength !== strArr.length) {
      return false;
    }
    
    const patternMap = new Map();
    const wordMap = new Map();
  
    for (let i = 0; i < patternLength; i++) {
      const char = pattern[i];
      const word = strArr[i];
  
      if (!patternMap.has(char) && !wordMap.has(word)) {
        patternMap.set(char, word);
        wordMap.set(word, char);
      } else {
        if (patternMap.get(char) !== word || wordMap.get(word) !== char) {
          return false;
        }
      }
    }
    
    return true;
  }
  
  // console.log(patternMatching("abba", "dog cat cat dog"));