# 📸 Flex Panel Gallery (JS30 - Day 5)

This project is part of the [JavaScript30](https://javascript30.com) challenge by Wes Bos. It showcases a responsive flexbox image gallery where panels expand and animate with JavaScript and CSS transitions.

---

## 🔥 Features

- Click-to-expand panels using `flex` layout
- Smooth CSS transitions on flex-grow and text movement
- JavaScript-controlled class toggling to trigger animations
- Multiple simultaneous panel interactions
- Fun and interactive user experience with minimal code

---

## 🚀 Technologies Used

- HTML
- CSS (Flexbox, Transitions)
- JavaScript (Vanilla)
  - DOM Selection
  - Class Toggling
  - Event Listeners (`click`, `transitionend`)

---

## 🧠 What I Learned

- Mastering `display: flex` and `flex: 1` for dynamic resizing
- Using `transition` and `transform` for smooth animation effects
- Creating interactive UI by toggling classes with JavaScript
- Handling multiple transitions via `transitionend` event


### 🧩 CSS Concepts I Explored During This Project

- **`.panel > *`**: Selects all direct children of `.panel`  
- **`.panel > *:first-child`**: Targets the first direct child inside any `.panel`  
- **`.panel > *:last-child`**: Targets the last direct child inside any `.panel`  
- **Why `:first-child` and `:last-child` sometimes don’t work**: Because of whitespace (like new lines) or unexpected elements like text nodes. Ensuring consistent child elements inside `.panel` helps these selectors work correctly.  
- **Using `transform: translateY(-100%)` / `translateY(100%)`**: Shifts elements up or down, useful for text slide animations.  
- **`flex: 1 0 auto`**:
  - `1`: flex-grow (allow to grow)
  - `0`: flex-shrink (don’t shrink)
  - `auto`: flex-basis (initial size)
- **Fix for multiple `.panel` issues**: Make sure styles apply to all elements with `.panel` using universal or contextual selectors properly, such as `.panel > *`.





