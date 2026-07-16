# Why Complexity Analysis Exists

## What is an Algorithm?

An algorithm is a finite set of steps to solve a problem.

**Making tea:**

1. Boil water
2. Add tea leaves
3. Add milk
4. Strain
5. Serve

That's an algorithm.

**Finding the largest number in an array:**

```cpp
int max = arr[0];

for (int i = 1; i < n; i++) {
    if (arr[i] > max)
        max = arr[i];
}
```

Also an algorithm.

---

## Are All Algorithms Equal?

Find the word "algorithm" in a dictionary.

**Method 1:** Start from page 1 and read every page. You'll find it eventually.

**Method 2:** Open near the middle. If the word comes after that page, go to the right half. Otherwise, go to the left half. Repeat.

Both are correct. But one is dramatically faster.

This raises a question: how do we compare two correct algorithms?

That question gave birth to complexity analysis.

---

## Why Execution Time Isn't Reliable

```cpp
// Algorithm A
for (int i = 0; i < 1000000; i++) {
}

// Algorithm B
for (int i = 0; i < n; i++) {
}
```

Run them on your laptop. A takes 0.02 seconds. B takes 0.001 seconds.

Now run them on a phone, a Raspberry Pi, a supercomputer. The times change.

Seconds aren't reliable. Different CPUs, compilers, RAM, and operating systems produce different results.

We need something universal.

---

## What We Actually Measure

Instead of asking "how many seconds?", computer scientists ask:

**How does the amount of work grow as the input grows?**

We measure growth, not clock time.

---

## Two Delivery Workers

**Worker A** carries one package at a time:
- 10 packages → 10 trips
- 100 packages → 100 trips
- 1000 packages → 1000 trips

Work increases directly with the number of packages.

**Worker B** carries 10 packages per trip:
- 10 packages → 1 trip
- 100 packages → 10 trips
- 1000 packages → 100 trips

Still grows, but much more slowly.

This is exactly what complexity analysis studies.

---

## Input Size (n)

In DSA, we represent input size with **n**.

```cpp
vector<int> nums = {1, 2, 3, 4, 5};
// n = 5

vector<int> nums(1000);
// n = 1000

string s = "hello";
// n = 5
```

For graphs, n is the number of vertices. For matrices, you might see n × m.

---

## Constant Work

```cpp
int sum = a + b;  // one addition
x++;              // one increment
swap(a, b);       // one swap
arr[5];           // one access
```

Accessing index 5 takes one operation whether the array has 10 elements or 1 million elements. It doesn't grow with n.

---

## Why This Matters

```cpp
for (int i = 0; i < n; i++) {
    sum += arr[i];
}
```

The loop body does constant work each iteration. But the number of iterations depends on n:
- 10 elements → 10 iterations
- 100 elements → 100 iterations
- 1,000,000 elements → 1,000,000 iterations

The work grows with n. That's the key observation we'll formalize with Big O.

---

## The Mental Model

When you see code, ask yourself:

**As the input gets larger, how does the amount of work change?**

Not:
- How many milliseconds?
- How fast is my laptop?
- Which compiler?

Just: **How does the work grow?**

This single question is the foundation of all complexity analysis.

---

## Quick Check

1. Why don't we compare algorithms using execution time in seconds?
2. What does `n` usually represent?
3. Is this constant work or work that grows with `n`?
   ```cpp
   int x = arr[7];
   ```
4. What about this?
   ```cpp
   for (int i = 0; i < n; i++) {
       cout << arr[i];
   }
   ```
5. Two algorithms both produce the correct answer. What is the main reason we prefer one over the other?
