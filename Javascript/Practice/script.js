// Reverse a String
const str = "Manas";
console.log(str.split("").reverse().join(""));


// Palindrome
const plndr = "amema";
const isPalindrome = (s) => {
    let right = s.length - 1;
    let left = 0;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

console.log(isPalindrome(plndr));

// Find the largest number in Array
const largestNumber = (arr) => {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(largestNumber([0, 0, 1, 100, -100, 20, 100000]));

// Find the smallest number in Array
const smallestNumber = (arr) => {
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log(smallestNumber([0, 0, 1, 100, -100, 20, 100000]));

// count vowels in string

const countVowels = (str) => {
    let vowels = "aeiou";
    let count = 0;
    if (typeof str === "string") {
        str = str.toLowerCase();
    } else {
        return "Not a String";
    }

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Manas Gedam"));


// Sum of all numbers in array

const sumAll = (arr) => {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }
    return totalSum;
}

console.log(sumAll([1, 2, 3, 4, 5]));


// Count how many times a number appears

const targetCount = (arr, target) => {
    let targetTotalCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            targetTotalCount++;
        }
    }

    return targetTotalCount;
}

console.log(targetCount([1, 2, 3, 4, 5, 2], 2));

// Remove duplicates from an array

console.log(new Set([1, 2, 3, 4, 4, 5, 5, 6, 6]));


// Double every number using map

const arr = [1, 2, 3, 4, 5];

const doubledArray = arr.map((i) => { return i * 2 });

console.log(doubledArray);

// Get only even numbers using filter()

const array = [1, 2, 3, 4, 5];

const evenArray = array.filter((i) => i % 2 == 0)

console.log(evenArray);


// Find the sum using reduce()

const ar = [10, 20, 30];

const sumArray = ar.reduce((sum, itr) => sum += itr, 0);

console.log(sumArray);


// Find users whose age is greater than 18

const users = [
    { id: 1, name: "Manas", age: 17 },
    { id: 2, name: "Rahul", age: 17 },
    { id: 3, name: "C", age: 19 },
    { id: 4, name: "D", age: 16 }
];

const ageMore = users.filter((user) => user.age > 18);
console.log(ageMore);

// Get only the names

const names = users.map((user) => { return user.name });

console.log(names);

// Find a user by name


const findUserByName = users.filter((user) => user.name == "Rahul");

console.log(findUserByName);



// Count frequency of each element

const input = ["a", "b", "a", "c", "b", "a"];
const freq = {};
for (const char of input) {
    freq[char] = (freq[char]) ? freq[char] + 1 : 1;
}

console.log(freq);

// Find the first non-repeating character
const nonRepeatingChar = (str) => {
    const charCount = {};

    for (const item of str) {
        charCount[item] = charCount[item] ? charCount[item] + 1 : 1;
    }

    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

console.log(nonRepeatingChar("aaahhhhhssssbbbdjwna"));

// Second largest number
const secondlargestNumber = (arr) => {
    let largest = arr[0];
    let secondLargest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        } else if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
    }
    return secondLargest;
}

console.log(secondlargestNumber([1, 2, 3, 4, 5, 6, 7]));

// group by age

const grouped = {};

for (const user of users) {
    if (!grouped[user.age]) {
        grouped[user.age] = [user.name];
    } else {
        grouped[user.age].push(user.name);
    }
}

console.log(grouped);


// array 

const use = {};

for (const user of users) {
    use[user.id] = user.name;
}

console.log(use);


// most frequent element

const nums = [1, 2, 2, 3, 3, 3, 4];

const frq = {};

for (const num of nums) {
    frq[num] = frq[num] ? frq[num] + 1 : 1;
}

let maxFrequency = 0;
let mostFrequent = null;

for (const num of nums) {
    if (frq[num] > maxFrequency) {
        maxFrequency = frq[num];
        mostFrequent = num;
    }
}

console.log(mostFrequent);
