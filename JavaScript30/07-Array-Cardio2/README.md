# 🧠 JavaScript30 - Array Cardio Day 2

This project is part of the [JavaScript30](https://javascript30.com/) challenge by Wes Bos. The goal is to strengthen my understanding of array methods in JavaScript by solving real coding problems.

## ✅ Features

- Checked if at least one person is 19 or older using `.some()`
- Checked if everyone is 19 or older using `.every()`
- Found a specific comment by ID using `.find()`
- Found the index of a comment using `.findIndex()`
- Deleted a comment from an array using `.slice()` and spread syntax

---

## 🧠 What I Learned

### 🔹 `.some()`
- Checks if **at least one** element in the array passes a condition.
- Returns a boolean (`true` or `false`).

### 🔹 `.every()`
- Checks if **all elements** pass a condition.
- Returns a boolean.

### 🔹 `.find()`
- Returns the **first** item in the array that matches a condition.
- Unlike `.filter()` which returns **all matches**, `.find()` returns only one.

### 🔹 `.findIndex()`
- Returns the index of the first element that matches a condition.
- Useful when you need to update or remove an item.

### 🔹 `.slice()` and Spread Syntax

```js
newComments = [
  ...comments.slice(0, findIndex),
  ...comments.slice(findIndex + 1)
];
