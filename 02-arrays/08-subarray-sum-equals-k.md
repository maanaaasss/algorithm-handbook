# Subarray Sum Equals K

Given an integer array and an integer k, return the number of subarrays whose sum equals k.

```
nums = [1, 1, 1]
k = 2

Output = 2
```

Why? [1,1] at indices (0,1) and [1,1] at indices (1,2).

---

## Beginner Approach

For every starting index, try all possible ending indices and check if the sum equals k.

```
Start at index 0: 1, 1+1, 1+1+1
Start at index 1: 1, 1+1
Start at index 2: 1
```

Time: O(n²).

---

## The Observation

Build prefix sums for [1, 2, 3, 4]:

```
Prefix: 1, 3, 6, 10
```

Standing at index 3, prefix sum is 10. We want to know: is there a subarray ending here whose sum is k?

Say k = 7.

---

## The Derivation

A subarray from index L to R has sum:

```
Sum(L...R) = Prefix[R] - Prefix[L-1]
```

We want this equal to k:

```
Prefix[R] - Prefix[L-1] = k
```

Rearrange:

```
Prefix[L-1] = Prefix[R] - k
```

This is the entire trick. If the current prefix sum is Prefix[R], we need to know whether we've seen a previous prefix sum equal to Prefix[R] - k.

---

## Concrete Example

Current prefix = 10, k = 7.

```
10 - 7 = 3
```

Have I seen a prefix sum of 3 before? Yes.

```
Prefix: 1, 3, 6, 10
              ^
```

That means everything after index with prefix 3 up to current index sums to 7: [3, 4] = 7.

---

## The Right Tool

At every index, we need to ask: "Have I seen prefix sum currentPrefix - k before?"

Searching through all previous prefix sums is O(n²). We need O(1) lookup.

The answer: Hash Map (unordered_map).

---

## The Algorithm

1. Maintain a running prefix sum
2. At each index, check if (prefixSum - k) exists in the hash map
3. If yes, add its count to the result
4. Update the hash map with the current prefix sum

```cpp
int subarraySum(vector<int>& nums, int k) {
    unordered_map<int, int> prefixCount;
    prefixCount[0] = 1;
    int prefixSum = 0;
    int count = 0;

    for (int x : nums) {
        prefixSum += x;
        if (prefixCount.count(prefixSum - k))
            count += prefixCount[prefixSum - k];
        prefixCount[prefixSum]++;
    }
    return count;
}
```

---

## Why prefixCount[0] = 1?

If the prefix sum itself equals k, we need to count it. Having 0 in the map with count 1 handles this case.

---

## Complexity

- Time: O(n) — one pass through the array
- Space: O(n) — for the hash map
