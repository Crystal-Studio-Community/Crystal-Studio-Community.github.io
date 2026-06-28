---
sidebar_position: 10
---

# 💎 TypeScript Programming

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling, editor integration, and compile-time type safety. All TypeScript code compiles down to clean JavaScript. 🚀

---

## 🏗️ Static Typing & Interfaces

### 1️⃣ Type Annotations
Explicitly declare data types to avoid unexpected type-coercion bugs:
```typescript
let username: string = "Shuvranshu";
let memberCount: number = 25;
let isActive: boolean = true;

// Array of strings
let technologies: string[] = ["TypeScript", "React", "Node.js"];
```

### 2️⃣ Interfaces and Custom Types
Define structured data schemas for your objects:
```typescript
interface Member {
  name: string;
  role: "Developer" | "Designer" | "Admin"; // Union Type
  githubId: string;
  discordId?: string; // Optional Property
}

const newMember: Member = {
  name: "Alice",
  role: "Developer",
  githubId: "alice-dev"
};
```

### 3️⃣ Generics (Reusable Types)
Write reusable, type-safe functions and classes:
```typescript
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement([10, 20, 30]); // Type inferred as number
const firstString = getFirstElement(["a", "b", "c"]); // Type inferred as string
```

---

## ⚙️ Compilation (tsc)
Install and compile TypeScript files globally or in local projects:
```bash
# Compile typescript down to main.js
npx tsc main.ts
```
*Note: Make sure your `tsconfig.json` has `strict` mode enabled for the best type-safety benefits.*
