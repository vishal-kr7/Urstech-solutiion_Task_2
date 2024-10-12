import React, { useState } from 'react';
import { FaBars, FaSearch, FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Navbar = ({ toggleSidebar }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  return (
    <div className="bg-gray-800 text-white p-4 flex items-center h-16 justify-between">
      {/* Sidebar Toggle and Title */}
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="text-2xl">
          <FaBars />
        </button>
        <h1 className="ml-4 text-xl">Dashboard</h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-700 rounded-md p-2 w-1/3">
        <FaSearch className="text-white mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 outline-none text-white w-full"
        />
      </div>

      {/* Calendar Date Picker */}
      <div className="relative">
        <button
          onClick={toggleCalendar}
          className="flex items-center bg-gray-700 p-2 rounded-md"
        >
          <FaCalendarAlt className="text-xl mr-2" />
          <span>{startDate.toLocaleDateString()}</span>
        </button>
        {isCalendarOpen && (
          <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg z-50">
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setIsCalendarOpen(false); // Close after selecting a date
              }}
              inline
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
