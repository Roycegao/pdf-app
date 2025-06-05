import React from 'react';

const ProgressBar = ({ current, total }) => {
    console.log('ProgressBar loaded:', current, total);
    const percentage = total > 0 ? ((current + 1) / total) * 100 : 0;
    return (
      <div className="fixed bottom-0 left-0 w-full h-3 bg-gray-200 ">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 "
        style={{ width: `${percentage}%` }}
      />
    </div>
    
      
    );
  };
  
export default ProgressBar;