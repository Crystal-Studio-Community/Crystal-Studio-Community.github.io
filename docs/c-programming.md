---
sidebar_position: 6
---

# ⚙️ C Programming

C is a procedural programming language originally developed by Dennis Ritchie at Bell Labs. It provides low-level access to memory, makes minimal runtime requirements, and compiles directly to native machine instructions. 💻

---

## 🏗️ Low-Level Memory and Structure

### 1️⃣ Hello World Syntax
C files compile directly to executable binaries.
```c
#include <stdio.h>

int main() {
    printf("Welcome to C! 💎\n");
    return 0;
}
```

### 2️⃣ Pointers (Memory Access)
A pointer is a variable that stores the memory address of another variable.
```c
int value = 42;
int *ptr = &value; // ptr stores the address of value

printf("Address: %p\n", ptr);
printf("Value: %d\n", *ptr); // dereferencing the pointer to get the value
```

### 3️⃣ Dynamic Memory Allocation
Use `malloc()` and `free()` to manage heap memory manually. Always release allocated memory to prevent memory leaks:
```c
#include <stdlib.h>

int *arr = (int *)malloc(5 * sizeof(int)); // Allocate memory for 5 integers

if (arr == NULL) {
    printf("Memory allocation failed!\n");
    return 1;
}

// Release memory back to system
free(arr);
```

---

## ⚙️ Compiling with GCC
Use the GNU Compiler Collection (GCC) to build executable files:
```bash
# Compile and output binary to my_app
gcc -Wall -o my_app main.c

# Run the program
./my_app
```
*Note: The `-Wall` flag enables all compiler warning messages, which is recommended for writing clean code.*
