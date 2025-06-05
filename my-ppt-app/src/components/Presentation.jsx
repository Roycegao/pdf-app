import React, { useState, useEffect } from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import ProgressBar from './ProgressBar';

const Presentation = ({ markdown, onEdit }) => {
  const slides = markdown
    .split(/^---$/m)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') onEdit(); // Press ESC to return to edit mode
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [currentSlide]);

  return (
    <div className="flex flex-col min-h-screen relative bg-white dark:bg-gray-900 transition-colors duration-300">

      {/* Mode prompt */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-4 py-1 rounded shadow text-sm font-semibold tracking-wide">
        Playback mode (Press ESC to return to editing)
      </div>

      {/* Edit button */}
      <button
        onClick={onEdit}
        className="absolute top-4 right-4 px-3 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
      >
        Edit
      </button>

      {/* Slide content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="slide-box w-full max-w-4xl mx-auto px-4">
          <MarkdownRenderer markdown={slides[currentSlide]} />
        </div>
      </div>

      {/* Control area */}
      <div className="controls flex justify-center gap-4 my-4">
        <button onClick={prevSlide} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Previous page</button>
        <span className="text-sm text-gray-600 dark:text-gray-300">{currentSlide + 1} / {slides.length}</span>
        <button onClick={nextSlide} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Next page</button>
      </div>

      {/* Progress bar */}
      <div className="w-full px-4 mb-2">
        <ProgressBar current={currentSlide} total={slides.length} />
      </div>
    </div>
  );
};

export default Presentation;
