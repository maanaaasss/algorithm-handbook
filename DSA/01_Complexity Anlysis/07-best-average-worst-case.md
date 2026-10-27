# Best, Average, and Worst Case

## Linear Search

```cpp
int linearSearch(vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target)
            return i;
    }
    return -1;
}
```

Complexity depends on where the target is.

---

## Best Case

Array: [5, 8, 2, 9, 1], Target = 5

First comparison: 5 == 5. Found.

One comparison. O(1).

---

## Worst Case

Array: [5, 8, 2, 9, 1], Target = 1 (or 10, not present)

We check every element: 5, 8, 2, 9, 1.

O(n).

---

## Average Case

Target is equally likely to be anywhere. On average, you inspect about half the array: n/2.

Remove the constant: O(n).

---

## Summary

| Case    | Complexity |
| ------- | ---------- |
| Best    | O(1)       |
| Average | O(n)       |
| Worst   | O(n)       |

---

## Binary Search

Array: [2, 4, 7, 10, 13, 15, 19, 25], Target = 10

Middle element is 10. Found immediately. Best case: O(1).

Worst case: each comparison cuts the search space in half. 8 → 4 → 2 → 1. O(log n).

Average case is also O(log n).

---

## Why Worst Case Matters

If you're designing software for Google Search, banking, or hospital systems, you don't want to know the luckiest execution. You want to know: "How slow can this become?"

That's why worst-case complexity is the default in interviews.

---

## Quick Comparison

| Algorithm     | Best | Average  | Worst    |
| ------------- | ---- | -------- | -------- |
| Linear Search | O(1) | O(n)     | O(n)     |
| Binary Search | O(1) | O(log n) | O(log n) |
| Array Access  | O(1) | O(1)     | O(1)     |

---

## Interview Tip

When someone asks "what's the time complexity?" answer with worst-case Big O unless they specify otherwise. If they ask for best-case, answer separately.

---

## Practice

**Q1:** Linear Search, target at index 0. Complexity?

**Q2:** Linear Search, target not in array. Complexity?

**Q3:** Binary Search, target is the middle element. Complexity?

**Q4:** Binary Search, target is the last element in a sorted array of one million elements. Complexity?


