# What Is an Array Really?

## Memory Layout

Think of memory as a long street of houses.

```
Address
1000
1004
1008
1012
1016
1020
1024
...
```

When you create:

```cpp
int arr[5] = {10, 20, 30, 40, 50};
```

The compiler asks for five consecutive memory locations.

```
Address      Value
1000  ---->   10
1004  ---->   20
1008  ---->   30
1012  ---->   40
1016  ---->   50
```

Every element is stored right next to the previous one. This is called contiguous memory allocation. This property is what makes arrays powerful.

---

## Why 1004?

On most systems, sizeof(int) = 4 bytes.

```
arr[0] -> 1000
arr[1] -> 1004
arr[2] -> 1008
arr[3] -> 1012
arr[4] -> 1016
```

Each integer occupies 4 bytes.

---

## How Does arr[3] Work?

Many people imagine the computer checks arr[0], arr[1], arr[2], arr[3]. It doesn't.

Instead, it calculates the address directly.

Formula:

```
Address = Base Address + (Index × Size of One Element)
```

For our array: Base Address = 1000, Index = 3, Size = 4

```
1000 + (3 × 4) = 1012
```

Go directly to address 1012. Read the value. Done. No searching. No looping.

---

## Why Array Access is O(1)

Whether you access arr[0] or arr[999999], the computer performs the same calculation: Base + index × size.

That's why random access is O(1). It does not depend on n.

---

## Compare with a Linked List

Imagine every element points to the next one:

```
10 → 20 → 30 → 40 → 50
```

To reach the 4th element, you walk through 10 → 20 → 30 → 40. That's why linked lists have O(n) access.

---

## Interview Insight

When an interviewer asks "why is array indexing O(1)?":

"Because arrays store elements in contiguous memory, allowing the address of any element to be computed directly using the base address and the index, without traversing previous elements."

---

## Practice

**Q1:** Why is array access O(1)?

A. Because arrays are small.
B. Because elements are stored in contiguous memory and the address can be calculated directly.
C. Because the CPU searches very fast.
D. Because arrays are sorted.

**Q2:** Base Address = 5000, sizeof(int) = 4. What is the address of arr[5]?

**Q3:** If sizeof(double) = 8 and base address is 2000, what is the address of arr[4]?

**Q4:** True or False: Accessing arr[999999] takes longer than accessing arr[2].
