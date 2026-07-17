# Array Traversal

Traversal means visiting every element of the array exactly once.

The most common example:

```cpp
for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
}
```

If n = 5: i = 0 → arr[0], i = 1 → arr[1], ..., i = 4 → arr[4]. Every element visited once.

Time: O(n). Space: O(1).

---

## Different Ways to Traverse

**Forward:**

```cpp
for (int i = 0; i < n; i++)
    cout << arr[i];
```

Visits: 0 → 1 → 2 → 3 → 4

**Reverse:**

```cpp
for (int i = n - 1; i >= 0; i--)
    cout << arr[i];
```

Visits: 4 → 3 → 2 → 1 → 0

**Range-based (C++):**

```cpp
for (int x : arr)
    cout << x;
```

All three: Time O(n), Space O(1).

---

## Common Mistake

Many beginners think this is O(1):

```cpp
cout << arr[0];
```

It is.

But this is not:

```cpp
for (int i = 0; i < n; i++)
    cout << arr[i];
```

You're doing an O(1) operation n times. So n × O(1) = O(n).

---

## Practice

Give both time and space complexity.

**Q1:**

```cpp
for (int i = 0; i < n; i++)
    sum += arr[i];
```

**Q2:**

```cpp
for (int i = n - 1; i >= 0; i--)
    cout << arr[i];
```

**Q3:**

```cpp
for (int x : arr)
    cout << x;
```

**Q4:**

```cpp
for (int i = 0; i < n; i++)
{
    cout << arr[i];
    cout << arr[i];
}
```

Does printing each element twice make it O(2n) or something else?
