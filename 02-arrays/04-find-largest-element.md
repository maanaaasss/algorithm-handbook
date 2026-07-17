# Find the Largest Element

Given an array of integers, return the largest element.

```
Input: [3, 7, 2, 9, 5]
Output: 9
```

---

## Step 1: Think Before Coding

**1. What is the input?**

```
[3, 7, 2, 9, 5]
```

**2. What is the output?**

```
9
```

**3. What information do I need while traversing?**

As you move through the array, what single piece of information should you remember so that by the end you know the answer?

While traversing the array once, what information do you keep track of?

---

## The Key Insight

You don't need `curr`. The loop variable (`arr[i]`) is already the current element.

The only state you need to remember is the largest element seen so far.

In interviews, ask yourself: "What's the minimum information I need to carry from one iteration to the next?"

The answer here is just one value: `maxSoFar`.

---

## Dry Run

```
[3, 7, 2, 9, 5]
```

Initialize: maxSoFar = 3

| Current Element | maxSoFar Before | Action          | maxSoFar After |
| --------------- | --------------: | --------------- | -------------: |
| 3               |               3 | Already maximum |              3 |
| 7               |               3 | 7 > 3 → Update  |              7 |
| 2               |               7 | Ignore          |              7 |
| 9               |               7 | 9 > 7 → Update  |              9 |
| 5               |               9 | Ignore          |              9 |

End: maxSoFar = 9

---

## Step 2: Algorithm (Plain English)

1. Assume the first element is the maximum
2. Traverse the array from the second element
3. If the current element is greater than the maximum so far, update the maximum
4. After the traversal finishes, return the maximum

---

## Step 3: Write the Code

```cpp
int largestElement(vector<int>& arr)
{
    // Your code here
}
```

After writing it, consider: correctness, edge cases, time complexity, space complexity, and C++ style.
