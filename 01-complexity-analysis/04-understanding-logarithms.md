# Understanding Logarithms

## The One Thing to Remember

A logarithm answers: "How many times can I divide something by 2 before I reach 1?"

That's it. If you get that, you've understood 90% of what you need for interviews.

---

## The Intuition

You have 16 books. Your friend finds your book by throwing away half the stack each time.

```
16 → 8 → 4 → 2 → 1
```

Four divisions. You found the book in 4 steps instead of checking all 16.

log₂(16) = 4

---

## More Examples

**n = 8:**

```
8 → 4 → 2 → 1
```

3 divisions. log₂(8) = 3

**n = 32:**

```
32 → 16 → 8 → 4 → 2 → 1
```

5 divisions. log₂(32) = 5

**n = 64:**

6 divisions. log₂(64) = 6

**n = 1024:**

10 divisions. log₂(1024) = 10

Searching 1024 elements takes about 10 steps. That's incredibly efficient.

---

## Why log₂?

Because Binary Search always throws away half. The base is 2.

---

## The Power of Logarithmic Growth

|         n | Linear Search | Binary Search |
| --------: | ------------: | ------------: |
|         8 |             8 |             3 |
|        16 |            16 |             4 |
|        32 |            32 |             5 |
|        64 |            64 |             6 |
|       128 |           128 |             7 |
|      1024 |          1024 |            10 |
| 1,000,000 |     1,000,000 |           ~20 |

A million sorted elements: Linear Search needs up to 1,000,000 comparisons. Binary Search needs about 20.

---

## Why Ignore the Base?

You might see log₂ n, log₁₀ n, or ln n. In Big O, they're all O(log n).

Changing the base only multiplies by a constant:

```
log₁₀ n = log₂ n / log₂ 10
```

That / log₂ 10 is just a constant. Big O ignores constants.

So O(log₂ n), O(log₁₀ n), and O(ln n) are all just O(log n).

---

## Code Reading

**Example 1:**

```cpp
int n = 1024;

while (n > 1) {
    n = n / 2;
}
```

Tracing: 1024 → 512 → 256 → 128 → 64 → 32 → 16 → 8 → 4 → 2 → 1. That's 10 iterations. In general: O(log n).

**Example 2:**

```cpp
while (n > 1) {
    n = n / 3;
}
```

Still logarithmic. Different base, same Big O: O(log n).

---

## Common Mistakes

Thinking "the loop doesn't go to n, so it must be O(1)." Wrong. It still depends on n, it just grows very slowly.

Thinking n /= 2 means O(n/2). No. You're not doing n/2 operations. You're repeatedly halving the input. That's logarithmic growth.

---

## Interview Pattern

Whenever you see code that repeatedly halves the input, doubles the input until a limit, divides by a constant, or multiplies by a constant, a little alarm should go off: "This might be O(log n)."

---

## Practice

**Q1:**

```cpp
while (n > 1) {
    n /= 2;
}
```

**Q2:**

```cpp
while (n > 1) {
    n /= 10;
}
```

**Q3:**

```cpp
int i = 1;

while (i < n) {
    i *= 2;
}
```

**Q4:**

```cpp
for (int i = 1; i < n; i *= 2) {
    cout << i;
}
```

**Q5:**

```cpp
for (int i = n; i > 1; i /= 2) {
    for (int j = 0; j < n; j++) {
        cout << j;
    }
}
```

For Q5, analyze the outer loop, analyze the inner loop, then combine them.

---

## Progress

```
Phase 1: Complexity Analysis

1.1 Why Complexity Exists - Done
1.2 Thinking in Growth - Done
1.3 Big O - Done
1.4 Logarithms & O(log n) (In Progress)
  ✓ Dividing by 2 repeatedly
  ✓ Why base doesn't matter
  ✓ Recognizing the pattern
  ○ Quiz

Patterns Learned:
  ✓ Count operations
  ✓ Sequential loops → Add
  ✓ Nested loops → Count total iterations
  ✓ Dominant-term analysis
  ○ Halving/Doubling → Logarithmic growth

Problems Solved: 0
```
