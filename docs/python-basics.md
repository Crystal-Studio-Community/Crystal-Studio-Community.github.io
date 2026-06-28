---
sidebar_position: 3
---

# 🐍 Python Programming

Python is an interpreted, high-level, general-purpose programming language. Known for its readability and clean syntax, it is widely used in web development, data science, automation, and artificial intelligence. 🌐

---

## 🏗️ Core Syntax and Concepts

### 1️⃣ Variables and Data Types
Python is dynamically typed, meaning you do not need to explicitly declare variable types.
```python
# Integers and Floats
age = 22
gpa = 3.8

# Strings and Booleans
name = "Shuvranshu"
is_active = True
```

### 2️⃣ Data Structures
Python has powerful built-in collections:
* **Lists:** Ordered, mutable sequences.
  ```python
  fruits = ["apple", "banana", "cherry"]
  fruits.append("orange")
  ```
* **Dictionaries:** Key-value mappings.
  ```python
  member = {"name": "Alice", "role": "Developer"}
  print(member["name"])
  ```

### 3️⃣ Control Flow
Indentation is syntactically mandatory in Python to define blocks of code:
```python
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
else:
    print("Grade: C")
```

### 4️⃣ Functions
Define reusable blocks of code using the `def` keyword:
```python
def greet(user_name):
    return f"Welcome back, {user_name}! 💎"

message = greet("Shuvranshu")
print(message)
```

---

## 📦 Virtual Environments and Packages
In Python, packages are installed using `pip`. To prevent conflict between libraries, always use a virtual environment:
```bash
# Create a virtual environment named venv
python -m venv venv

# Activate it (Windows)
.\venv\Scripts\activate

# Install libraries
pip install requests
```
