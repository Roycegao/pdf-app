import React from 'react';

const ProgressBar = ({ current, total }) => {
    console.log('ProgressBar loaded:', current, total);
    const percentage = total > 0 ? ((current + 1) / total) * 100 : 0;
    return (
        <div className="h-8 bg-red-300 w-full border border-black">
        <div
          className="h-full bg-blue-500 transition-all duration-300 rounded"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
    );
  };
  

export default ProgressBar;