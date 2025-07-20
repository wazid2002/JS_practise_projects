# 🧠 JavaScript30 - Type Ahead

This project is part of the [JavaScript30](https://javascript30.com/) challenge by Wes Bos. The goal is to build a responsive type-ahead (autocomplete) search interface using vanilla JavaScript.

## ✅ Features

- Fetched a large dataset of US cities and states using the Fetch API
- Filtered search results in real time as the user typed
- Highlighted matching search terms in the city/state names
- Displayed population data alongside results
- Updated the DOM dynamically without any external libraries

---

## 🧠 What I Learned

### 🔹 Fetch API and Promises
- Retrieved remote JSON data and stored it locally using spread syntax.
- Understood how asynchronous data fetching works using `.then()` chains.

### 🔹 Array Methods
- Used `.filter()` to return matches from the dataset based on user input.
- Used `.map()` to build an HTML string of matching cities and states.
- Used `.join()` to combine multiple elements into a single output string.

### 🔹 Regular Expressions
- Built dynamic regular expressions from user input.
- Applied global and case-insensitive flags (`gi`) for flexible searching.

### 🔹 DOM Manipulation
- Updated the UI in real-time using `.innerHTML`.
- Emphasized matched text visually using `<span>` tags and CSS.



