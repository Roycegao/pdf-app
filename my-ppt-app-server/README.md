
---

## 🧾 Backend README (`/server/README.md`)

```markdown
# Backend API for Markdown Slide Editor

This is the backend service for the Markdown Slide Editor application. It uses Node.js, Express, and SQLite (via Sequelize ORM) to persist slide markdown data.

---

## 📦 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/index.html)
- [Sequelize](https://sequelize.org/)

---

## 📁 File Structure

---

## ⚙️ Setup

### Install dependencies

```bash
npm install

### Start server
node server.js
Default port: 3001

### 🧪 Testing
You can test these APIs using Postman or curl:
curl http://localhost:3001/api/slides
curl -X POST http://localhost:3001/api/slides -H "Content-Type: application/json" -d '{"markdown": "# Hello"}'

💾 Notes
SQLite is used for simplicity and stores data locally in database.sqlite.

Make sure the server has write permissions to this file.