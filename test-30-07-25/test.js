// Task 1:
// Input: [0, 1, false, 2, '', 3, null, undefined, NaN]
// Output: [1, 2, 3]

let inputArray = [0, 1, false, 2, '', 3, null, undefined, NaN];
let filteredArray = inputArray.filter(Boolean);
console.log("Filtered Array: ", filteredArray);

// Input: [1, 2]
// Output: [[], [1], [2], [1, 2]]
let inputSet = [1, 2];
function generateSubsets(arr) {
    let subsets = [];
    let totalSubsets = 1 << arr.length; 
    for (let i = 0; i < totalSubsets; i++) {
        let subset = [];
        for (let j = 0; j < arr.length; j++) {
            if (i & (1 << j)) {
                subset.push(arr[j]);
            }
        }
        subsets.push(subset);
    }
    return subsets;
}

let allSubsets = generateSubsets(inputSet);
console.log("All Subsets: ", allSubsets);

// Task 3:
// Input: "abcdef", 2
// Output: "efabcd"
// 👉 Rotate the string right by 2 characters

function rotateString(str, num) {
    let len = str.length;
    num = num % len; // Handle rotation greater than string length
    let rotated = str.slice(len - num) + str.slice(0, len - num);
    return rotated;
}

let inputString = "abcdef";
let rotationAmount = 2;
let result = rotateString(inputString, rotationAmount);
console.log("Rotated String: ", result);


    
// Input: "2 + 3 * 4"
// Output: 14
// 👉 Evaluate the string as a math expression.

function evaluateExpression(expr) {
    return Function('"use strict";return (' + expr + ')')();
}

let inputExpression = "2 + 3 * 4";
let evaluationResult = evaluateExpression(inputExpression);
console.log("Evaluation Result: ", evaluationResult);

// Task 5:
// Input: 1234
// Output: [1, 2, 3, 4]
function splitNumberIntoDigits(num) {
    return num.toString().split('').map(Number);
}
let inputNumber = 1234;
let digitsArray = splitNumberIntoDigits(inputNumber);
console.log("Digits Array: ", digitsArray);

// Task 6:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6, 5, 3, 1]
// 👉 Print even numbers in order and odd numbers in reverse.
function rearrangeEvenOdd(arr) {
    let evens = arr.filter(num => num % 2 === 0);
    let odds = arr.filter(num => num % 2 !== 0).reverse();
    return [...evens, ...odds];
}
let inputArray2 = [1, 2, 3, 4, 5, 6];
let rearrangedArray = rearrangeEvenOdd(inputArray2);
console.log("Rearranged Array: ", rearrangedArray);

// Input: "helloWorldTest"
// Output: "hello_world_test"
function convertToSnakeCase(str) {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}
let inputString2 = "helloWorldTest";
let snakeCaseString = convertToSnakeCase(inputString2);
console.log("Snake Case String: ", snakeCaseString);

// Input: "hello"
// Output: { h: [0], e: [1], l: [2, 3], o: [4] }
function getCharacterIndices(str) {
    return Array.from(str).reduce((acc, char, index) => {
        if (!acc[char]) {
            acc[char] = [];
        }
        acc[char].push(index);
        return acc;
    }, {});
}

let inputString3 = "hello";
let charIndices = getCharacterIndices(inputString3);
console.log("Character Indices: ", charIndices);    


// Input: "4x3y1z"
// Output: "xxxxyyyz"
function expandString(str) {
    return str.replace(/(\d+)([a-zA-Z])/g, (match, count, char) => char.repeat(Number(count)));
}
let inputCompressedString = "4x3y1z";
let expandedString = expandString(inputCompressedString);
console.log("Expanded String: ", expandedString);



