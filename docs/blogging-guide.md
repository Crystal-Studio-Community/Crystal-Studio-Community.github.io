---
sidebar_position: 12
---

# ✍️ How to Write Blogs

Crystal Studio uses the Docusaurus blogging engine. Learn how to write and publish new blog posts on our community website! 🚀

---

## 🛠️ Step-by-Step Writing Guide

### 1️⃣ Step 1: Create a Markdown File
Navigate to the **`blog/`** directory in the repository root. Create a new markdown file named in the format:
```text
YYYY-MM-DD-your-post-title.md
```
*Example:* `2026-06-28-welcome.md`

### 2️⃣ Step 2: Configure the Frontmatter (Metadata)
Every blog post must begin with a YAML header enclosed in triple dashes (`---`). This defines the metadata for your post:
```yaml
---
title: Welcome to Crystal Studio Community! 💎
authors: [shuvranshu]
tags: [community, welcome]
---
```
* **`title`:** The header shown on the list and post pages.
* **`authors`:** Author keys corresponding to profiles configured in `blog/authors.yml`.
* **`tags`:** Array of tags (e.g. `learning`, `announcement`) which must be defined in `blog/tags.yml`.

### 3️⃣ Step 3: Write Content and Truncation Marker
Write your post in standard Markdown.
To prevent the entire post from showing up in the blog list view, insert a **truncation marker** after your first paragraph:
```markdown
This is the opening introduction paragraph. It will be shown on the blog preview page.

{/* truncate */}

This is the rest of the post content, which is only visible when the reader clicks "Read More".
```

---

## 🚀 How to Add Author Profiles
If you are a new blogger, add your details to `blog/authors.yml` first:
```yaml
github-username:
  name: Your Full Name
  title: Your Role (e.g., Maintainer)
  url: https://github.com/github-username
  image_url: https://github.com/github-username.png
```
Once your profile is saved in `authors.yml`, you can reference it as `authors: [github-username]` in any blog frontmatter!
