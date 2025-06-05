# 📽️ Markdown Slide Editor

A lightweight PowerPoint-style web app that lets you create, edit, and present slides written in Markdown.

> 🧠 Built with React + Node.js + SQLite. Supports slide layouts, markdown AST rendering, syntax highlighting, mobile-friendly view, hotkeys, progress bar, and more.

## ✨ Features

- ✅ Edit slides with a live Markdown editor
- ✅ Support slide splitting via `---`
- ✅ Markdown parsing to AST and render via React components
- ✅ Code block highlighting (with Prism)
- ✅ Slide navigation: Previous / Next / Keyboard arrows
- ✅ ESC to exit playback to editing mode
- ✅ Progress bar during presentation
- ✅ Responsive / mobile-friendly layout
- ✅ Backend storage with Node.js + SQLite (via Sequelize)
- ✅ Storybook component library
- ✅ Vitest unit tests
- ✅ Simple layout switching (text / list / code / table)
- ✅ Easy deployment with Vite and Nginx

---

## 🧱 Tech Stack

| Layer     | Tech                                   |
|-----------|----------------------------------------|
| Frontend  | React, Vite, Tailwind CSS              |
| Markdown  | react-markdown, remark-gfm, PrismJS    |
| Backend   | Node.js, Express, Sequelize ORM        |
| Database  | SQLite                                 |
| Testing   | Vitest, @testing-library/react         |
| UI Dev    | Storybook                              |

---

## 📂 Project Structure

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Roycegao/pdf-app.git
```

### 2. Install dependencies
```bash
cd my-ppt-app/
npm install
```
### 3. Start the frontend (Vite)
```bash
npm run dev
```
✅ Visit http://localhost:5173

#### 🧪 Run Unit Tests
```bash
npm run test
```
You can find tests under src/__tests__/.

#### 📚 Run Storybook
```bash
npm run storybook
```
Storybook displays Editor, ProgressBar, MarkdownRenderer components in isolation.

#### 📦 Build for Production
```bash
npm run build
```
This will output static files into the dist/ folder.

### 4. Start the backend (Node + SQLite)
```bash
cd my-ppt-app-server/
npm init -y
npm install express cors body-parser sequelize sqlite3
node server.js
```
✅ Visit http://localhost:3001
