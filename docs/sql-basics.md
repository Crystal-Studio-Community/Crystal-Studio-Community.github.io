---
sidebar_position: 4
---

# 📊 SQL & Databases

Structured Query Language (SQL) is the standard language used to interact with Relational Database Management Systems (RDBMS). It allows you to create tables, query data, and maintain database relationships. 🗄️

---

## 🏗️ Basic SQL Operations

### 1️⃣ Querying Data (SELECT)
The most common operation is retrieving rows from a table.
```sql
SELECT first_name, last_name 
FROM members 
WHERE role = 'Developer' 
ORDER BY last_name ASC;
```

### 2️⃣ Filtering Data
Use operators like `AND`, `OR`, `IN`, and `LIKE` to filter rows:
```sql
SELECT * 
FROM projects 
WHERE status = 'active' 
  AND repository_name LIKE 'crystal-%';
```

### 3️⃣ Aggregations
Compute summaries over groups of data using functions like `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX`:
```sql
SELECT role, COUNT(*) as member_count
FROM members
GROUP BY role
HAVING member_count > 2;
```

---

## 🔗 Joins (Combining Tables)
Relational databases split data across tables to minimize redundancy. Use Joins to combine them:

* **INNER JOIN:** Returns records that have matching values in both tables.
  ```sql
  SELECT members.name, projects.project_name
  FROM members
  INNER JOIN projects ON members.project_id = projects.id;
  ```
* **LEFT JOIN:** Returns all records from the left table, and matching records from the right table.

---

## 📝 Modifying Data (DML)
* **Inserting Rows:**
  ```sql
  INSERT INTO members (name, role, email) 
  VALUES ('Alice', 'Developer', 'alice@crystal.com');
  ```
* **Updating Rows:**
  ```sql
  UPDATE members 
  SET role = 'Admin' 
  WHERE name = 'Alice';
  ```
