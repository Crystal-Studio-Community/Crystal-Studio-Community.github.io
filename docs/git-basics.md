---
sidebar_position: 2
---

# 💻 Git & GitHub Basics

Git is a distributed version control system designed to track changes in source code during software development. It enables team members to coordinate work, review code changes, and maintain a history of their codebase. 🔄

---

## 🛠️ The Local vs Remote Architecture

Git separates your development into two main layers:
1. **Local Repository:** Resides on your local computer, containing your work files, staged index, and commit history.
2. **Remote Repository:** Hosted on GitHub, enabling teams to share history, sync branches, and open pull requests.

```text
[ Working Directory ] --(git add)--> [ Staging Index ] --(git commit)--> [ Local Repository ] --(git push)--> [ GitHub Remote ]
```

---

## 🔄 The Contribution Workflow

### 1️⃣ Forking the Project
A fork is a copy of a repository that belongs to your GitHub account. Forking allows you to freely experiment and make changes without affecting the original repository.
- Navigate to the original repository.
- Click the **Fork** button in the top right.

### 2️⃣ Cloning Your Fork
To copy the code to your local machine:
```bash
git clone https://github.com/YOUR-USERNAME/Connect.git
```

### 3️⃣ Branch Management
Never make changes directly to the `main` branch. Creating a dedicated branch keeps your feature changes isolated:
```bash
git checkout -b feature/your-feature-name
```

### 4️⃣ Staging and Committing
* **Staging:** Think of the staging area as a draft board where you select which file changes you want to include in your next save point.
  ```bash
  git add index.html
  ```
* **Committing:** Saves your staged changes with a descriptive message.
  ```bash
  git commit -m "feat: add user login form UI 🎨"
  ```

### 5️⃣ Pushing and Pull Requests
To upload your branch to GitHub:
```bash
git push origin feature/your-feature-name
```
After pushing, go to the parent repository on GitHub. Click **Compare & pull request**, describe your changes, and submit! 🚀

---

## 💡 Best Practices
* **Pull Often:** Run `git pull origin main` regularly to fetch changes from the remote repository and avoid merge conflicts.
* **Keep Branches Focused:** Write code for one single feature per branch.
