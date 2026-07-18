# Prefix Sum

## The Problem

Given an array: [2, 5, 1, 8, 3, 6]

Query: What is the sum from index 1 to 4?

Answer: 5 + 1 + 8 + 3 = 17

Now imagine I ask 100,000 such queries. Every time you traverse the same numbers again. That's wasted work.

Whenever you notice "I'm calculating the same thing over and over," that's a sign there's a preprocessing technique that can help.

---

## The Idea

Instead of answering each query from scratch, we spend some time once to prepare information.

Build another array where each position stores the sum from the beginning up to that index.

```
Index : 0  1  2  3  4
Value : 2  5  1  8  3
Prefix: 2  7  8 16 19
```

The prefix array has remembered every cumulative sum.

---

## Why This Helps

Sum from index 1 to 3:

Without prefix sum: 5 + 1 + 8 (traverse)

With prefix sum:

- Prefix[3] = 16 (sum of 2 + 5 + 1 + 8)
- Prefix[0] = 2 (everything before index 1)
- 16 - 2 = 14

One subtraction instead of traversal.

---

## The Pattern

Whenever you see:

- Many range sum queries
- Sum from L to R
- Repeated cumulative calculations
- Preprocess once, answer many queries

Think: Prefix Sum.

---

## Implementation

**Build the prefix array:**

```cpp
vector<int> manualPrefixSum(const vector<int>& arr) {
    vector<int> prefixSum(arr.size());
    prefixSum[0] = arr[0];

    for(int i=1; i<arr.size(); i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    return prefixSum;
}
```

For [4, 2, 7, 1, 5], this produces [4, 6, 13, 14, 19].

**Answer range queries:**

```cpp
int rangeSum(const vector<int>& prefixSum, int L, int R) {
    if(L == 0) {
        return prefixSum[R];
    }
    return prefixSum[R] - prefixSum[L-1];
}
```

rangeSum(prefix, 0, 3) returns 14, which is 4 + 2 + 7 + 1.

---

## Derive It Yourself

Array: [4, 2, 7, 1, 5]

**Q1:** Manually construct the prefix sum array.

**Q2:** Using your prefix array, calculate the sum from index 2 to index 4 without adding 7 + 1 + 5 directly.

---

## Beyond Range Sums

Prefix sum isn't just for L to R queries. It's also used for:

- Counting subarrays with a given sum
- Finding the longest subarray with a target sum
- Equilibrium/Pivot Index
- Difference arrays (inverse idea)
- 2D Prefix Sums (matrix problems)
- Dynamic programming optimizations

---

## Recognition Guide

| Problem Contains...           | Think...              |
| ----------------------------- | --------------------- |
| "Sum from L to R"             | Prefix Sum            |
| "Many range queries"          | Prefix Sum            |
| "Repeated cumulative sums"    | Prefix Sum            |
| "Subarray sum equals K"       | Prefix Sum + Hash Map |
