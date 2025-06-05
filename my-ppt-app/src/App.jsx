import React, { useState } from 'react';
import Editor from './components/Editor';
import Presentation from './components/Presentation';

const defaultMarkdown = `# Markdown Slide Editor - Tech Presentation
---
## 📐 Architecture Overview

**Frontend:**
- React (Vite)
- TailwindCSS
- react-markdown + remark-gfm
- AST-based rendering (not HTML string)

**Backend:**
- Node.js + Express
- Sequelize ORM
- SQLite (local file-based DB)

**Utilities:**
- Prism.js for code highlight
- Hotkeys support (←/→/ESC)
- Storybook for component UI preview
- Vitest for testing
---
## 🧠 Design Considerations

- Use markdown as content source  
  → Simple, portable, version-friendly  

- AST rendering instead of \`dangerouslySetInnerHTML\`  
  → Safer, more customizable React component flow  

- Slide splitting via \`---\`  
  → Easy pagination without external libraries  

- Vite instead of CRA  
  → Faster dev & smaller bundle  

- Simple backend with SQLite  
  → Lightweight, no extra DB setup

---
## 🔦 Markdown Highlight Demo

\`\`\`js
function greet(name) {
  return \`Hello, ${name}!\`;
}

console.log(greet("World"));
\`\`\`

✅ Code block with syntax highlight using \`Prism\`.

---
## 📝 List, Table & Emphasis Support

- Markdown list?
- Of course!
- Like this bullet point

| Feature        | Supported |
|----------------|-----------|
| Lists          | ✅        |
| Tables         | ✅        |
| Emphasis       | ✅        |
| Links & images | ✅        |

---
## 🎯 Key Functionalities Recap

- Live markdown editing with preview  
- Page split with \`---\`  
- ESC to exit presentation  
- Save/load via backend  
- Code syntax highlighting  
- Progress bar  
- Mobile-friendly layout  
- Storybook & Unit Test  
---
## 🧪 Testing & Quality

- Vitest for unit tests
- @testing-library/react for rendering logic
- Example:

\`\`\`jsx
import { render } from '@testing-library/react';
import Editor from '../Editor';

test('renders editor', () => {
  render(<Editor markdown="## Hello" setMarkdown={() => {}} />);
});
\`\`\`

✅ Focused tests for core logic, editor, markdown render.

---
## 🚧 Challenges & Takeaways

**Challenges:**
- Markdown-to-AST-to-React mapping
- Mobile layout & keyboard shortcut management
- Avoiding presentation libraries (custom logic)

**Takeaways:**
- Markdown UI ≠ simple — it's complex!
- Tailwind really speeds up layout tuning
- AST-based markdown gives flexibility and safety

---
## 🧭 Future Features

- 🧑‍🤝‍🧑 Collaborative editing via WebSocket  
- 📥 PDF / PPT export  
- 🎨 Markdown themes (Dark, Light, Solarized)  
- 🖼️ Image uploads & management  
- 🧠 LLM-powered Markdown assistant (GPT-based)

---
## 👨‍💻 Author

- Name: **Royce**
- Age: 34
- Experience: 9 years full-stack development
- Stack: Java (Spring), Python, React, MySQL, Node.js, LLM, RAG
- Email: **roycegao513@gmail.com**

🧠 Thank you for reading & evaluating this app!
---
`;


const App = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSave = () => {
    setIsPlaying(true);
  };

  const handleEdit = () => {
    setIsPlaying(false);
  };

  return (
    <div>
      {isPlaying ? (
        <Presentation markdown={markdown} onEdit={handleEdit} />
      ) : (
        <Editor markdown={markdown} setMarkdown={setMarkdown} handleSave={handleSave} />
      )}
    </div>
  );
};

export default App;
