---
sidebar_position: 8
---

# 🎨 HTML & CSS Basics

HyperText Markup Language (HTML) and Cascading Style Sheets (CSS) form the core languages of web development. HTML structures the page, while CSS manages its layout, styling, and visual display. 🌐

---

## 🏗️ Structure & Styling Systems

### 1️⃣ Semantic HTML Elements
Always use semantic tags to describe your content layout. This improves accessibility and SEO:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Crystal Studio</title>
</head>
<body>
    <header>
        <h1>💎 Crystal Studio</h1>
    </header>
    <main>
        <section>
            <h2>Learn Open Source</h2>
            <p>Build modern websites in teams.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2026 Crystal Studio</p>
    </footer>
</body>
</html>
```

### 2️⃣ The CSS Box Model
Every HTML element is modeled as a rectangular box. Styling defines how the box behaves:

* **Content:** The actual text or image.
* **Padding:** Space around the content, inside the border.
* **Border:** A line surrounding the padding.
* **Margin:** Space outside the border, separating the element from neighbors.

```css
.card {
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  margin: 15px;
}
```

### 3️⃣ Modern Layouts: Flexbox and Grid
* **Flexbox (1D Layout):** Perfect for aligning items horizontally or vertically in a row/column.
  ```css
  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ```
* **Grid (2D Layout):** Best for designing robust grid-based dashboards or galleries.
  ```css
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  ```
