# Check if an Array is Sorted

```
[1, 2, 3, 4, 5]  → true
[1, 3, 2, 4, 5]  → false
[5, 4, 3]        → false
```

---

## Step 1: Think Before Coding

While traversing the array once, what information do you need to maintain or check to determine whether the array is sorted?

---

## The Key Insight

An array is sorted if every element is greater than or equal to the previous one.

So while traversing, you need to check: is the current element smaller than the previous element?

If you find even one case where arr[i] < arr[i-1], the array is not sorted.

---

## Dry Run

```
[1, 3, 2, 4, 5]
```

| i | arr[i] | arr[i-1] | Sorted so far? |
| - | ------ | -------- | -------------- |
| 1 | 3      | 1        | Yes            |
| 2 | 2      | 3        | No → return false |

End of loop: return true.

---

## Algorithm

1. Traverse from index 1 to n-1
2. For each element, check if it is less than the previous element
3. If yes, return false
4. If loop completes, return true

---

## Code

```cpp
bool isSorted(const vector<int>& arr) {
    // Your code here
}
```

Consider: correctness, edge cases, time complexity, space complexity.
