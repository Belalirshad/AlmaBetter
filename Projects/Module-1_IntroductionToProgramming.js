/*------------------------------------------CODE BUG FIXING--------------------------------------------------*/

// 01. Calculate BMI -->

/*
Code with error
*/

function calculateBMI(weight, height) {
    // Write your code here
    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 || bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 || bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

/*
Corrected Code
*/

function calculateBMI(weight, height) {
    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {  //error was || 
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}


// Do not modify the below lines
module.exports = { calculateBMI };

// 02. ConvertTemperature.js -->

/*
Code with error
*/

function convertTemperature(temperature, unit) {
    // Write your code here
    if (unit === "C") {
        const fahrenheit = temperature * 9 % 5 + 32;
        return fahrenheit.toFixed(2) + " F";
    } else if (unit === "F") {
        const celsius = (temperature - 32) * 5 % 9;
        return celsius.toFixed(2) + " C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

/*
Corrected Code
*/

function convertTemperature(temperature, unit) {
    if (unit === "C") {
        const fahrenheit = (temperature * 9/5) + 32; // error was conversion formula
        return fahrenheit.toFixed(2) + " F";
    } else if (unit === "F") {
        const celsius = (temperature - 32) * 5/9; // error was conversion formula
        return celsius.toFixed(2) + " C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}


// Do not modify the below lines
module.exports = { convertTemperature };

// 03. CalculateTip.js -->

/*
Code with error
*/

function calculateTip(billAmount, tipPercentage) {
    // Write your code here
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return number(totalAmount.toFixed(2));
}

/*
Corrected code
*/
function calculateTip(billAmount, tipPercentage) {
    const tipAmount = billAmount * (tipPercentage / 100); // Convert tipPercentage to a decimal
    const totalAmount = billAmount + tipAmount;
    return Number(totalAmount.toFixed(2)); // Use the Number() constructor to convert the result to a number
}


// Do not modify the below lines
module.exports = { calculateTip };

// 04. IsPalindrome.js -->

/*
Code with error
*/

function isPalindrome(str) {
    // Write your code here
    const cleanedStr = str.replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

/*
Corrected Code
*/

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // Convert to lowercase
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}


// Do not modify the below lines
module.exports = { isPalindrome };

// 05. CountVowels.js -->

/*
Code with error
*/

function countVowels(str) {
    // Write your code here
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i <= lowerStr.length; i++) {
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }
    return count;
}

/*Corrected code*/

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i < lowerStr.length; i++) { // Use < instead of <=
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }

    return count;
}


// Do not modify the below lines
module.exports = { isPalindrome };

/*------------------------------------------IMPROVISED PERSPECTIVE--------------------------------------------*/

// 06. FindLongestWord.js -->

/*
Approach 1
*/

function findLongestWord(sentence) {
	// Write your code here
    const words = sentence.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        const length = words[i].length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}

/*
Approach 2 (using for of loop)
*/

function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// Do not modify the below lines
module.exports = { findLongestWord };

// 07. TitleCase.js -->

/*
Approach 1
*/

function titleCase(sentence) {
	// write your code here
    const words = sentence.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(' ');
}

/*
Approach 2 (using map method)
*/

function titleCase(sentence) {
    const words = sentence.toLowerCase().split(' ');

    const titleCasedWords = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    });

    return titleCasedWords.join(' ');
}

// Do not modify the below lines
module.exports = { titleCase };

// 08. CountOccurrences.js -->

/*
Approach 1
*/

function countOccurrences(str, char) {
    // Write your code here
    let count = 0;
    for (const c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}

/*
Approach 2 (without using any loop)
*/

function countOccurrences(str, char) {
    const charArray = str.split('');
    const filteredArray = charArray.filter(c => c === char);
    return filteredArray.length;
}

// Do not modify the below lines
module.exports = { countOccurrences };

// 09. CalculateTotal.js -->

/*
Aproach 1
*/

function calculateTotal(cart) {
    // Write your code here
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}

/*
Approach 2 (using reduce() method)
*/

function calculateTotal(cart) {
    const total = cart.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.price * currentItem.quantity);
    }, 0);

    return total;
}


// Do not modify the below lines
module.exports = { calculateTotal };

// 10. FizzBuzz.js -->

/*
Approach 1
*/

function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 4 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 4 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }

    return result;
}

/*
Approach 2 (using switch() statement)
*/

function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        let output = "";

        switch (true) {
            case i % 3 === 0 && i % 4 === 0:
                output = "FizzBuzz";
                break;
            case i % 3 === 0:
                output = "Fizz";
                break;
            case i % 4 === 0:
                output = "Buzz";
                break;
            default:
                output = i.toString();
        }

        result.push(output);
    }

    return result;
}

// Do not modify the below lines
module.exports = { fizzBuzz };

/*----------------------------------------------LOGIC BUILDING------------------------------------------------*/

// 11. FindPrimes.js -->

module.exports = { findPrimes };

function findPrimes(n) {
    // Write your code here
    const primes = [];
    
    for (let num = 2; num <= n; num++) {
        let isPrime = true;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            primes.push(num);
        }
    }
    
    return primes;
    
}
// Example 1
const primes1 = findPrimes(20);
console.log(primes1); // Output: [2, 3, 5, 7, 11, 13, 17, 19]

// Example 2
const primes2 = findPrimes(9);
console.log(primes2); // Output: [2, 3, 5, 7]

// 12. ReverseString.js -->

module.exports = { reverseString };

function reverseString(str) {
    // Write your code inside this function only.
    return str.split('').reverse().join('');

}

// Example 1
const reversed1 = reverseString("JavaScript");
console.log(reversed1); // Output: "tpircSavaJ"

// Example 2
const reversed2 = reverseString("AlmaBetter University");
console.log(reversed2); // Output: "ytisrevinU retteBamlA"

// 13. SignOfProduct.js -->

module.exports = { signOfProduct };

function signOfProduct(nums) {
    // Write your code inside this function only.
    let numNegatives = 0;
    let hasZero = false;

    for (const num of nums) {
        if (num === 0) {
            hasZero = true;
            break;
        } else if (num < 0) {
            numNegatives++;
        }
    }

    if (hasZero) {
        return 0;
    } else {
        return numNegatives % 2 === 0 ? 1 : -1;
        // If there are an even number of negatives, the product is positive.
        // If there are an odd number of negatives, the product is negative.
        
    }
}

// Example 1
const result01 = signOfProduct([2, -3, 5, 4]);
console.log(result01); // Output: -1

// Example 2
const result02 = signOfProduct([1, 2, 0]);
console.log(result02); // Output: 0

// 14. CheckSign.js -->

module.exports = { checkSign };

function checkSign(num1, num2, num3) {
    // Write your code inside this function only.
    let positiveCount = 0;
    let negativeCount = 0;

    if (num1 > 0) {
        positiveCount++;
    } else {
        negativeCount++;
    }

    if (num2 > 0) {
        positiveCount++;
    } else {
        negativeCount++;
    }

    if (num3 > 0) {
        positiveCount++;
    } else {
        negativeCount++;
    }

    if (positiveCount === 3) {
        return "+++";
    } else if (positiveCount === 2) {
        return "++-";
    } else if (negativeCount === 2) {
        return "+--";
    } else if (negativeCount === 3) {
        return "---";
    }
}

// Example 1
const result1 = checkSign(2, 5, 7);
console.log(result1); // Output: "+++"

// Example 2
const result2 = checkSign(8, -3, 4);
console.log(result2); // Output: "++-"

// 15. GenerateSlug.js -->

module.exports = { generateSlug };

function generateSlug(title) {
    // Write your code inside this function only.

    const slug = title.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with hyphens and convert to lowercase
    
    // Add ".com" to the slug
    return slug + ".com";
}

// Example 1
const slug1 = generateSlug("Hello World");
console.log(slug1); // Output: "hello-world.com"

// Example 2
const slug2 = generateSlug("AlmaBetter Web Dev");
console.log(slug2); // Output: "almabetter-web-dev.com"

// 16. ShortestDistance.js -->

module.exports = { shortestDistance };

function shortestDistance(wordsDict, word1, word2) {
    // Write your code inside this function only.

let minDistance = Infinity;
  let posWord1 = -1;
  let posWord2 = -1;

  for (let i = 0; i < wordsDict.length; i++) {
    const word = wordsDict[i];

    if (word === word1) {
      posWord1 = i;
      if (posWord2 !== -1) {
        minDistance = Math.min(minDistance, Math.abs(posWord1 - posWord2));
      }
    }

    if (word === word2) {
      posWord2 = i;
      if (posWord1 !== -1) {
        minDistance = Math.min(minDistance, Math.abs(posWord1 - posWord2));
      }
    }
  }

  return minDistance;
}

const wordsDict1 = ["practice", "makes", "perfect", "coding", "makes"];
console.log(shortestDistance(wordsDict1, "coding", "makes")); // Output: 1

const wordsDict2 = ["apple", "banana", "cherry", "apple", "date", "banana", "fig"];
console.log(shortestDistance(wordsDict2, "apple", "fig")); // Output: 3

// 17. FindMove.js -->

module.exports = { findMove };

function findMove(s) {
    // Write your code inside this function only.

  const result = [];
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "+" && s[i + 1] === "+") {
      const newState = s.substring(0, i) + "--" + s.substring(i + 2);
      result.push(newState);
    }
  }
  return result;
}

console.log(findMove("++++"));  // Output: ["--++", "+--+", "++--"]
console.log(findMove("++-++")); // Output: ["---++", "++---"]
console.log(findMove("+-+-"));  // Output: []

// 18. SwapConsecutiveCharacters.js -->

module.exports = { swapConsecutiveCharacters };

function swapConsecutiveCharacters(str) {
    // Write your code inside this function only.

const charArray = str.split(''); // Convert the string to an array of characters for easy swapping

  for (let i = 0; i < charArray.length - 1; i += 2) {
    const temp = charArray[i];
    charArray[i] = charArray[i + 1];
    charArray[i + 1] = temp;
  }

  return charArray.join(''); // Convert the array back to a string and return it
}

console.log(swapConsecutiveCharacters("abcdef")); // Output: "badcfe"
console.log(swapConsecutiveCharacters("AlmaBetter")); // Output: "lAameBttre"

// 19. ArrayIntersection.js -->

module.exports = { arrayIntersection };

function arrayIntersection(array1, array2) {
    // Write your code inside this function only.

 const set1 = new Set(array1);

  const result = [];

  for (const element of array2) {
    if (set1.has(element)) {
      result.push(element);
      set1.delete(element);
    }
  }

  return result;
}

console.log(arrayIntersection([1, 2, 2, 3, 4, 5], [2, 3, 3, 6])); // Output: [2, 3]
console.log(arrayIntersection([70, 20, 30, 50], [30, 40, 50, 60, 70])); // Output: [30, 50, 70]
console.log(arrayIntersection([1, 2, 3], [4, 5, 6])); // Output: []

// 20. Insert7.js -->

module.exports = { insert7 };

function insert7(inputString) {
    // Write your code inside this function only.

let result = '';
  let count = 0;

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (char !== ' ') {
      count++;

      // Insert '7' after every 6 non-space characters
      if (count % 6 === 0) {
        result += char + '7';
        continue;
      }
    }

    result += char;
  }

  return result;
}

console.log(insert7("Hello World and Universe!")); // Output: "Hello W7orld an7d Unive7rse!"
console.log(insert7("Full Stack Web Development")); // Output: "Full St7ack Web7 Develo7pment"
