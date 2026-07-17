# Final Complexity Challenge

For each question, give both time and space complexity.

---

**Q1:**

```cpp
int sum = 0;

for (int i = 0; i < n; i++)
    sum += arr[i];
```

---

**Q2:**

```cpp
vector<int> temp;

for (int i = 0; i < n; i++)
    temp.push_back(arr[i]);
```

---

**Q3:**

```cpp
for (int i = 1; i < n; i *= 2)
{
    for (int j = 0; j < n; j++)
    {
        cout << i << j;
    }
}
```

---

**Q4:**

```cpp
vector<vector<int>> grid(n, vector<int>(n));

for (int i = 0; i < n; i++)
{
    for (int j = 0; j < n; j++)
    {
        grid[i][j] = i + j;
    }
}
```

---

Answer format:

```
Q1: Time = ?, Space = ?
Q2: Time = ?, Space = ?
Q3: Time = ?, Space = ?
Q4: Time = ?, Space = ?
```
