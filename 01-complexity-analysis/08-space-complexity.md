# Space Complexity

## Why It Matters

Two algorithms both take O(n) time. Which is better?

You don't have enough information. One might use O(1) extra memory, the other O(n). If memory is limited, that difference is huge.

---

## What Counts?

We only count additional memory allocated by the algorithm. We do not count the input itself.

```cpp
vector<int> arr(n);
```

The array already exists. Its memory is part of the input. We ignore it.

---

## Examples

**Example 1:**

```cpp
int sum = 0;

for (int i = 0; i < n; i++)
    sum += arr[i];
```

Extra variables: sum and i. That's a constant number. Space: O(1).

**Example 2:**

```cpp
vector<int> copy;

for (int i = 0; i < n; i++)
    copy.push_back(arr[i]);
```

We create another array of size n. Extra memory: n elements. Space: O(n).

**Example 3:**

```cpp
int freq[26];
```

Does this grow when n grows? No. Whether the string has 10, 1000, or 1,000,000 characters, the array still has 26 elements. O(26) becomes O(1) because 26 is a constant.

---

## Common Trap

```cpp
int freq[1000000];
```

Many beginners say "that's O(n) because it's huge." Wrong. If it's always one million elements, it's a constant. One million is large, but it doesn't depend on n. Still O(1).

---

## Time vs Space

| Code          | Time     | Space |
| ------------- | -------- | ----- |
| Sum array     | O(n)     | O(1)  |
| Copy array    | O(n)     | O(n)  |
| Binary Search | O(log n) | O(1)  |
| Linear Search | O(n)     | O(1)  |

---

## Practice

**Q1:**

```cpp
int x = 0;
int y = 10;
```

Space complexity?

**Q2:**

```cpp
vector<int> temp(n);
```

Space complexity?

**Q3:**

```cpp
int freq[100];
```

Space complexity?

**Q4:**

```cpp
vector<vector<int>> matrix(n, vector<int>(n));
```

How many integers are stored? Space complexity?

---

## Time-Space Trade-off

Sometimes you'll have two solutions:

- Solution A: O(n²) time, O(1) space
- Solution B: O(n) time, O(n) space

Neither is automatically better. Part of becoming a strong engineer is recognizing these trade-offs and choosing the right solution for the problem.

---

## Progress

```
Phase 1: Complexity Analysis

1.1 Why Complexity Exists - Done
1.2 Thinking in Growth - Done
1.3 Big O - Done
1.4 Logarithmic Complexity - Done
1.5 Big Theta (Θ) - Done
1.6 Big Omega (Ω) - Done
1.7 Best / Average / Worst Case - Done
1.8 Space Complexity (In Progress)
  ✓ What counts as extra space
  ✓ Constant vs linear space
  ✓ Common traps
  ○ Quiz

Problems Solved: 0
```
