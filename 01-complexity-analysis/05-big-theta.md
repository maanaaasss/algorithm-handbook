# Big Theta (Θ)

## Why Three Notations?

Most people memorize Big O, Big Θ, and Big Ω without knowing why we need three. Let's fix that.

---

## The Grocery Store Analogy

"How long does it take to walk to the grocery store?"

"At most 15 minutes."

That's an upper bound. Maybe you'll arrive in 8, 10, or 12 minutes, but not 20. That's Big O.

"It always takes about 10 minutes."

That's more precise. Not "at most" or "at least," but approximately 10 minutes every time. That's Big Θ.

---

## Big O vs Big Θ

```cpp
for (int i = 0; i < n; i++) {
    cout << i;
}
```

How many iterations? Exactly n. Not sometimes n², not sometimes log n. Always n.

So O(n) and Θ(n) are both true.

Another example:

```cpp
int x = 5;
```

Always one operation. O(1) and Θ(1).

---

## When They Differ

Linear Search:

```cpp
for (int i = 0; i < n; i++) {
    if (arr[i] == target)
        return i;
}
```

Target is the first element: 1 iteration.

Target is the last element: n iterations.

Sometimes 1, sometimes n.

Big O asks: what's the maximum growth? Answer: O(n).

Big Θ asks: does it always grow like n? No. Sometimes it's constant. So we can't say Θ(n) without specifying the case.

---

## The Key Difference

| Notation  | Question it answers                                 |
| --------- | --------------------------------------------------- |
| **Big O** | "What's the maximum growth?"                        |
| **Big Θ** | "What's the exact growth (up to constant factors)?" |

Big Θ is more specific.

---

## Example Table

| Algorithm     | Big O      | Big Θ      |
| ------------- | ---------- | ---------- |
| Array access  | O(1)       | Θ(1)       |
| Print array   | O(n)       | Θ(n)       |
| Binary Search | O(log n)   | Θ(log n)   |
| Merge Sort    | O(n log n) | Θ(n log n) |

These algorithms always follow the same growth pattern.

---

## Why Interviewers Ask for Big O

When someone asks "what's the time complexity?" they're almost always asking for the worst-case upper bound. So in interviews, "time complexity?" usually means Big O. You'll rarely be asked for Big Θ unless the interviewer explicitly says so.

---

## Quick Quiz

**Q1:** If an algorithm always takes n operations, then O(n) is correct. True or false?

**Q2:** If an algorithm always takes n operations, then Θ(n) is correct. True or false?

**Q3:** If an algorithm sometimes takes 1 operation and sometimes n operations, then saying Θ(n) is always correct. True or false?

**Q4:** If an interviewer asks "what's the time complexity?" should you usually answer with Big O or Big Θ?

---

## Progress

```
Phase 1: Complexity Analysis

1.1 Why Complexity Exists - Done
1.2 Thinking in Growth - Done
1.3 Big O - Done
1.4 Logarithmic Complexity - Done
1.5 Big Theta (Θ) (In Progress)
  ✓ Upper bound vs exact growth
  ✓ When O and Θ differ
  ✓ When to use which
  ○ Quiz

Patterns Learned:
  ✓ Count operations
  ✓ Sequential → Add
  ✓ Nested → Multiply
  ✓ Dominant term
  ✓ Logarithmic growth
  ✓ Complexity composition

Problems Solved: 0
```
