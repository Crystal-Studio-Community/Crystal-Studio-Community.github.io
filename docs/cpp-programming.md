---
sidebar_position: 7
---

# 🚀 C++ Programming

C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language. It supports procedural, object-oriented, and generic programming styles, offering low-level resource management alongside high-level abstractions. ⚙️

---

## 🏗️ Object-Oriented Features & STL

### 1️⃣ Basic Classes & Stream I/O
C++ uses streams (`std::cout`) instead of `printf` for standard input and output.
```cpp
#include <iostream>

class Greeting {
public:
    void sayHello() {
        std::cout << "Hello from C++! 💎" << std::endl;
    }
};

int main() {
    Greeting greet;
    greet.sayHello();
    return 0;
}
```

### 2️⃣ The Standard Template Library (STL)
The STL provides built-in collections (vectors, maps, sets) and algorithms:
```cpp
#include <vector>
#include <algorithm>

std::vector<int> scores = {90, 85, 95};
scores.push_back(100);

// Sort using STL algorithm
std::sort(scores.begin(), scores.end());
```

### 3️⃣ Smart Pointers (RAII)
Modern C++ (C++11 and later) discourages the use of raw `new` and `delete` in favor of smart pointers, which deallocate memory automatically:
```cpp
#include <memory>

// Unique pointer (exclusive ownership)
std::unique_ptr<int> value = std::make_unique<int>(100);

// Shared pointer (multiple references)
std::shared_ptr<int> sharedValue = std::make_shared<int>(42);
```

---

## ⚙️ Compilation with G++
Compile C++ files using the `g++` compiler:
```bash
# Compile with C++20 standard
g++ -std=c++20 -Wall -o my_cpp_app main.cpp

# Run
./my_cpp_app
```
