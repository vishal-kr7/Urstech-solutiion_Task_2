// src/components/RightContent.js
import React from 'react';
import TopSection from './TopSection';
import BottomSection from './BottomSection';

const RightContent = () => {
  return (
    <div className="flex-1 bg-white m-4 p-4 shadow-lg" style={{ height: 'calc(100vh - 60px)' }}>
      <div className="flex flex-col">
        {/* Including the Top and Bottom Sections */}
        <TopSection />
        <BottomSection />
      </div>
    </div>
  );
};

export default RightContent;
