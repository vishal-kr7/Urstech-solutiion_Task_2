// src/pages/LayoutSlider.js
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import RightContent from '../components/RightContent';

const LayoutSlider = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray">
      {/* Left Sidebar */}
      <Sidebar isOpen={isOpen} />

      {/* Right Section */}
      <div className={`flex-1 ${isOpen ? 'w-3/4' : 'w-full'} transition-all duration-300 ease-in-out`}>
        {/* Navbar with Toggle Button */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Right Content */}
        <RightContent />
      </div>
    </div>
  );
};

export default LayoutSlider;
