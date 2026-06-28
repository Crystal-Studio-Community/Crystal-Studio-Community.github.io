---
sidebar_position: 9
---

# ⚡ JavaScript Programming

JavaScript (JS) is a lightweight, interpreted, object-oriented language with first-class functions. Best known as the scripting language for Web pages, it is also used in server environments (Node.js) and database engines. 🌐

---

## 🏗️ Core Execution and Interactivity

### 1️⃣ Variables and Scope
Use `let` for mutable variables and `const` for constant references. Avoid using `var` as it lacks block scope:
```javascript
const name = "Shuvranshu";
let status = "active";

if (status === "active") {
  let tempMessage = "Welcome!";
  console.log(tempMessage); // Works
}
// console.log(tempMessage); // ReferenceError: Block-scoped
```

### 2️⃣ Arrow Functions and Array Methods
Modern JavaScript introduces clean arrow syntax and native functional array methods:
```javascript
const numbers = [1, 2, 3, 4, 5];

// Map: Transform values
const squares = numbers.map(x => x * x);

// Filter: Extract elements matching condition
const evens = numbers.filter(x => x % 2 === 0);
```

### 3️⃣ Async/Await (Asynchronous Programming)
Handle network requests and asynchronous tasks cleanly without callback hell:
```javascript
async function fetchMemberInfo(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error("User not found");
    const data = await response.json();
    console.log(`Member: ${data.name} 💎`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}
```

### 4️⃣ DOM Manipulation
Script webpage interactions dynamically:
```javascript
const button = document.getElementById("action-btn");
button.addEventListener("click", () => {
  document.body.style.backgroundColor = "#0078D7";
});
```
