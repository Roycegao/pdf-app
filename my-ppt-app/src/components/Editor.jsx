import React from 'react';

const Editor = ({ markdown, setMarkdown, handleSave }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl h-[80vh] relative bg-white rounded shadow">
        <textarea
          className="w-full h-full p-4 resize-none overflow-x-auto whitespace-pre bg-white text-black rounded"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <button
          onClick={handleSave}
          className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          保存
        </button>
      </div>
    </div>
  );
};


export default Editor;