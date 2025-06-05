import React, { useState } from 'react';
import Editor from './components/Editor';
import Presentation from './components/Presentation';

const defaultMarkdown = `# React Markdown Slide Editor

---

## Architecture

- Frontend: React + Vite  
- Backend: Express + SQLite + Sequelize  
- Rendering: react-markdown + custom components

---

## Key Modules

- Markdown Editor  
- Slide Viewer  
- Backend API & Persistence  
- Keyboard Shortcuts

---

## Future Enhancements

- Collaborative Editing  
- Export as PDF / PPT  
- Custom Markdown Themes  

---

## Challenges & Takeaways

- Component structure and state management in React  
- AST parsing & markdown rendering strategy  
- Reusable components + Storybook tests

---

## 👨‍💻 About Me

- **Age**: 34  
- **Experience**: 9 years of full-stack development  
- **Tech Stack**:  
  - Java (Spring Boot)  
  - Python  
  - React  
  - Node.js  
  - MySQL  
  - LLM / RAG (Large Language Models & Retrieval-Augmented Generation)  

📬 **Email**: roycegao513@gmail.com  

Thank you for your time and consideration! 🙏`;

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
