# Understanding Big O

## The Setup

Two algorithms.

**Algorithm A:**

```cpp
for (int i = 0; i < n; i++) {
    cout << i;
}
```

Operations: n

**Algorithm B:**

```cpp
for (int i = 0; i < 100 * n; i++) {
    cout << i;
}
```

Operations: 100n

n < 100n, so A is faster. That's true. But let's think differently.

---

## The Growth Pattern

|         n |    A |      B |
| --------: | ---: | -----: |
|        10 |   10 |   1000 |
|       100 |  100 |  10000 |
|      1000 | 1000 | 100000 |
| 1,000,000 |   1M |   100M |

Both grow linearly. B is always about 100x slower, but they have the same growth pattern.

Big O is about the growth pattern, not the exact number of operations.

---

## Why Ignore Constants?

Compare these:

- 5n
- 1000n
- 2n

If input doubles (n to 2n):

- 5n becomes 10n
- 1000n becomes 2000n
- 2n becomes 4n

They all double. The constant changes speed, but not how the work grows.

So:

- 5n → O(n)
- 1000n → O(n)
- 2n → O(n)

---

## Why Ignore Smaller Terms?

Look at n² + n:

|      n |          n² |      n |       Total |
| -----: | ----------: | -----: | ----------: |
|     10 |         100 |     10 |         110 |
|    100 |       10000 |    100 |       10100 |
|   1000 |     1000000 |   1000 |     1001000 |
| 100000 | 10000000000 | 100000 | 10000100000 |

As n grows, n² completely dominates n. The +n barely matters.

So O(n² + n) becomes O(n²).

Another example: n³ + 100n² + 2000n + 5. As n becomes huge, n³ dominates everything. So O(n³).

---

## The Rule

1. Count the operations
2. Remove constants
3. Remove smaller terms

**Example 1:** 2n + 5 → n + 5 → n → O(n)

**Example 2:** 3n² + 8n + 100 → n² + 8n + 100 → n² → O(n²)

---

## Examples

**Example 1:**

```cpp
int x = 5;
```

Operations: 1 → O(1)

**Example 2:**

```cpp
for (int i = 0; i < n; i++) {
    cout << i;
}
```

Operations: n → O(n)

**Example 3:**

```cpp
for (int i = 0; i < n; i++) {
    cout << i;
}

for (int i = 0; i < n; i++) {
    cout << i;
}
```

Operations: 2n → O(n)

**Example 4:**

```cpp
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        cout << i;
    }
}
```

Operations: n² → O(n²)

**Example 5:**

```cpp
for (int i = 0; i < n; i++) {
    for (int j = i; j < n; j++) {
        cout << j;
    }
}
```

Operations: n(n+1)/2 = (n²+n)/2 → n²+n → n² → O(n²)

---

## The Complexity Ladder

| Complexity | Growth                | Good?                          |
| ---------- | --------------------- | ------------------------------ |
| O(1)       | Constant              | Excellent                      |
| O(log n)   | Very slow growth      | Excellent                      |
| O(n)       | Linear                | Great                          |
| O(n log n) | Slightly above linear | Very Good                      |
| O(n²)      | Quadratic             | Acceptable for small inputs    |
| O(n³)      | Cubic                 | Usually too slow               |
| O(2^n)      | Exponential           | Very slow                      |
| O(n!)      | Factorial             | Avoid whenever possible        |

We prefer algorithms higher up because they scale better.

---

## Common Mistakes

- 2n → O(2n) is wrong. Correct: O(n)
- 1000n → O(1000n) is wrong. Correct: O(n)
- n² + n → O(n² + n) is wrong. Correct: O(n²)
- "Nested loops always mean O(n²)" is wrong. Count the total iterations first.

---

## Quick Quiz

**Q1:** Operations: 7n + 3. What is the Big O?

**Q2:** Operations: 4n² + 100n. What is the Big O?

**Q3:** Operations: n³ + n² + n. What is the Big O?

**Q4:**

```cpp
for (int i = 0; i < n; i++) {
    cout << i;
}

cout << "Done";
```

What is the Big O?

**Q5:** In your own words: why do we ignore constants and smaller terms in Big O?

---

## Progress

```
Phase 1: Complexity Analysis

Phase 1.1: Why Complexity Analysis Exists - Done
Phase 1.2: Thinking in Growth - Done
Phase 1.3: Big O Notation (In Progress)
  ✓ Growth patterns
  ✓ Ignoring constants
  ✓ Ignoring smaller terms
  ○ Quiz

Problems Solved: 0
Patterns Learned: 1
```
