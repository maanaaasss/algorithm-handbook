# Thinking in Growth

## What Do We Count?

We don't count milliseconds. We count operations.

Each of these counts as one operation:

```cpp
x++;
sum += arr[i];
arr[i];
a > b;
```

Think of each as costing one unit of work.

---

## Example 1

```cpp
int sum = 0;

for (int i = 0; i < n; i++) {
    sum += arr[i];
}
```

Outside the loop: `int sum = 0;` runs once.

Inside the loop: `sum += arr[i];` runs n times.

If n = 5, work is 1 + 5 = 6.

If n = 100, work is 1 + 100 = 101.

As n gets large, that single operation outside the loop becomes insignificant.

---

## Example 2

```cpp
for (int i = 0; i < n; i++) {
    cout << arr[i];
}

for (int i = 0; i < n; i++) {
    cout << arr[i];
}
```

Two separate loops.

If n = 10, total work is 10 + 10 = 20.

If n = 100, total work is 100 + 100 = 200.

The work grows proportionally with n. The fact that it's twice as much matters less than the fact that it still scales linearly.

---

## Example 3

```cpp
for (int i = 0; i < n; i++) {
    cout << i;
}

for (int j = 0; j < m; j++) {
    cout << j;
}
```

Two input sizes. Total work grows with n + m.

You'll see this in graph and matrix problems.

---

## Example 4

```cpp
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        cout << arr[i][j];
    }
}
```

For every value of i, the inner loop runs n times.

| Outer loop | Inner loop iterations |
| ---------- | --------------------: |
| 1          |                     n |
| 2          |                     n |
| 3          |                     n |
| ...        |                   ... |
| n          |                     n |

Total work: n × n.

People often say "nested loops mean O(n squared)." That's not always true.

The real question is: how many times does the inner loop execute in total?

---

## Example 5

```cpp
for (int i = 0; i < n; i++) {
    for (int j = i; j < n; j++) {
        cout << arr[j];
    }
}
```

Looks like n × n. But let's count:

- First iteration: n operations
- Second: n - 1
- Third: n - 2
- ...
- Last: 1

Total: n + (n-1) + (n-2) + ... + 1 = n(n+1)/2

Still grows proportionally to n squared, even though it does about half the work of a full n × n loop.

---

## A Common Mistake

Many beginners think: two loops equals n squared.

Wrong.

**Code A:**

```cpp
for (int i = 0; i < n; i++)
    cout << i;

for (int i = 0; i < n; i++)
    cout << i;
```

Loops are sequential.

**Code B:**

```cpp
for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
        cout << i;
```

Second loop is inside the first.

Same number of loops. Completely different growth.

Always ask: are the loops sequential or nested?

---

## Rule of Thumb

When reading code:

1. Identify the input size (n, m, etc.)
2. Count how many times each statement runs
3. Focus on how total work changes as input grows
4. Ignore the actual computer speed

This habit will make Big O feel natural rather than something to memorize.

---

## Your Turn

Without worrying about formal notation, tell me how the work grows for each snippet.

**Q1:**

```cpp
for (int i = 0; i < n; i++) {
    cout << i;
}
```

**Q2:**

```cpp
for (int i = 0; i < n; i++) {
    cout << i;
}

for (int i = 0; i < n; i++) {
    cout << i;
}
```

**Q3:**

```cpp
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        cout << i << j;
    }
}
```

**Q4:**

```cpp
for (int i = 0; i < n; i++) {
    for (int j = i; j < n; j++) {
        cout << j;
    }
}
```

Answer in plain English:
- "Grows with n"
- "Grows roughly with n squared"
- "Grows with n plus m"

Once these feel natural, Big O will be easy.
