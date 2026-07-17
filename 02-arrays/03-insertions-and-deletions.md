# Insertions & Deletions

This is where arrays reveal their biggest weakness.

```
Index:  0   1   2   3   4
Value: [10, 20, 30, 40, 50]
```

---

## Insert at the End

Insert 60: [10, 20, 30, 40, 50, 60]

Only one new value placed at the end. Time: O(1) (assuming enough capacity).

---

## Insert at the Beginning

Insert 5:

Before: [10, 20, 30, 40, 50]

After: [5, 10, 20, 30, 40, 50]

Everything had to move: 50 → right, 40 → right, 30 → right, 20 → right, 10 → right. Then arr[0] = 5.

We shifted n elements. Time: O(n).

---

## Insert in the Middle

Insert 25:

Before: [10, 20, 30, 40, 50]

After: [10, 20, 25, 30, 40, 50]

50, 40, 30 all shifted one position right. Worst case: O(n).

---

## Deletion Works the Same

Delete the first element:

Before: [10, 20, 30, 40, 50]

After: [20, 30, 40, 50]

20, 30, 40, 50 all shifted left. Time: O(n).

---

## Summary

| Operation           | Time Complexity |
| ------------------- | --------------- |
| Access arr[i]       | O(1)            |
| Traverse            | O(n)            |
| Insert at end       | O(1)            |
| Insert at beginning | O(n)            |
| Insert in middle    | O(n)            |
| Delete at beginning | O(n)            |
| Delete in middle    | O(n)            |
| Delete at end       | O(1)            |

---

## Practice

**Q1:** Array of 1,000 elements. Insert one element at index 500. Time complexity?

**Q2:** Remove the last element of the array. Time complexity?

**Q3:** Why is inserting at the beginning slower than inserting at the end? Explain in your own words.

**Q4 (Interview):** "Why are arrays good for random access but poor for insertions in the middle?" Answer in 2-3 sentences.
