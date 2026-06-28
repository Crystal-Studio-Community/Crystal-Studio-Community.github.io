---
sidebar_position: 5
---

# ☕ Java Programming

Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. Operating on the "Write Once, Run Anywhere" (WORA) principle, Java code compiles into bytecode that runs on the Java Virtual Machine (JVM). 🌐

---

## 🏗️ Object-Oriented Principles

### 1️⃣ Core Class Structure
A basic Java file requires a class name that matches the filename.
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Crystal Studio! 💎");
    }
}
```

### 2️⃣ Variables and Basic Syntax
Java is statically typed. You must specify the variable type when declaring it.
```java
int score = 100;
double price = 19.99;
String message = "Welcome to Java";
boolean isComplete = false;
```

### 3️⃣ Classes and Objects
Java organizes code into classes representing objects with properties (fields) and behaviors (methods):
```java
public class Member {
    // Fields
    private String name;
    private String role;

    // Constructor
    public Member(String name, String role) {
        this.name = name;
        this.role = role;
    }

    // Method
    public void displayInfo() {
        System.out.println(name + " is a " + role);
    }
}
```

---

## ⚙️ Compilation and Execution
To compile and run Java programs from your terminal:
```bash
# Compile Java source code to bytecode (.class file)
javac Main.java

# Run the compiled class file on JVM
java Main
```
