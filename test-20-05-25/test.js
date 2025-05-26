// 1. Find the Largest Word in a Sentence -

let word = "I love JavaScript development ";
let longestWord = (str) => {
  let words = str.split(" ");
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
};
console.log(longestWord(word));

// 2.Count the number of times each character appears in a string.
let str = "hey i am sriram";
let charCount = {};
for (let char of str) {
  if (char !== " ") {
    charCount[char] = (charCount[char] || 0) + 1;
  }
}
console.log(charCount);

// 3. Given an array of user objects, return only those over age 18.
let users = [
  {
    name: "sri",
    age: 25,
  },
  {
    name: "mohi",
    age: 17,
  },
  {
    name: "man",
    age: 30,
  },
  {
    name: "kavees",
    age: 13,
  },
];
let adults = users.filter((user) => user.age > 18);
console.log(adults);

// 4. Merge two JavaScript objects and print the result.
let obj1 = {
  name: "sri",
  age: 25,
};
let obj2 = {
  country: "India",
  city: "sathyamangalam",
};
let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

// 5.Array to Object Conversion
//  Convert ['a', 'b', 'c'] and [1, 2, 3] into { a: 1, b: 2, c: 3 }.
let attr = ["a", "b", "c"];
let val = [1, 2, 3];
let obj = {};
for (let i = 0; i < attr.length; i++) {
  obj[attr[i]] = val[i];
}
console.log(obj);
