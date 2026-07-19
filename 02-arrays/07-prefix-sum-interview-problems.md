# Prefix Sum Interview Problems

## Problem 1: Range Sum Queries

Given an array: [2, 4, 6, 8, 10]

Answer these queries:

```
Sum(0,2) = 2+4+6 = 12
Sum(1,3) = 4+6+8 = 18
Sum(2,4) = 6+8+10 = 24
Sum(0,4) = 2+4+6+8+10 = 30
```

---

### Beginner Approach

For every query, traverse and add. We're repeating the same additions across queries.

---

### Prefix Sum Approach

Build the prefix array:

```
Index : 0  1  2   3   4
Value : 2  4  6   8  10
Prefix: 2  6  12  20  30
```

Every query becomes O(1):

- Sum(0,2) = prefix[2] = 12
- Sum(1,3) = prefix[3] - prefix[0] = 18
- Sum(2,4) = prefix[4] - prefix[1] = 24
- Sum(0,4) = prefix[4] = 30

---

### When to Recognize This

If an interviewer says "there are 100,000 queries," immediately think: traversing every query is too slow. Ask: can I preprocess the array once? If yes, prefix sum.

---

## Problem 2: Equilibrium Index (Pivot Index)

Given an array, find an index where left sum equals right sum.

```
[1, 7, 3, 6, 5, 6]
```

Output: 3

Because left: 1+7+3 = 11, right: 5+6 = 11. The element at index 3 (value 6) is not part of either side.

---

### Beginner Approach

For every index, calculate left sum, then right sum. O(n²).

---

### Prefix Sum Approach

For any index i:

- leftSum = (i == 0) ? 0 : prefix[i - 1]
- rightSum = totalSum - leftSum - arr[i]

Check if leftSum == rightSum.

---

### Optimization: No Prefix Array Needed

We only use the prefix array for left sum. But we can maintain it as we iterate:

```cpp
int pivotIndex(const vector<int>& arr) {
    int totalSum = 0;
    for (int x : arr) totalSum += x;

    int leftSum = 0;
    for (int i = 0; i < arr.size(); i++) {
        int rightSum = totalSum - leftSum - arr[i];
        if (leftSum == rightSum)
            return i;
        leftSum += arr[i];
    }
    return -1;
}
```

Space: O(1). Time: O(n).

---

### The Lesson

First solve with a known technique. Then ask: "Am I storing more information than I need?" Sometimes you can reduce O(n) space to O(1). Recognizing this is what separates a correct solution from an optimal one.

---

## Recognition Guide

| Problem Contains...           | Think...              |
| ----------------------------- | --------------------- |
| "Sum from L to R"             | Prefix Sum            |
| "Many range queries"          | Prefix Sum            |
| "Left sum equals right sum"   | Prefix Sum            |
| "Subarray sum equals K"       | Prefix Sum + Hash Map |
