// src/components/Sidebar.js
import { FaHome, FaShoppingBag, FaChartBar, FaUsers, FaCaretDown } from 'react-icons/fa';
import { useState } from 'react';

const Sidebar = ({ isOpen }) => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  return (
    // <div className={`${isOpen ? 'w-128' : 'w-0'} bg-gray-800 text-white p-5 transition-all duration-300 ease-in-out overflow-hidden`}>
    <div
  className={`${isOpen ? 'bg-gray-800 text-white p-5 transition-all duration-300 ease-in-out overflow-hidden' : 'w-0'}`}
  style={{ width: isOpen ? '25rem' : '0' }}  // Adjust '40rem' to any desired value
>

      {/* Sidebar Title */}
      {isOpen && (
        <div className="text-2xl font-semibold text-center py-4 border-b border-gray-700">
          Dashboard
        </div>
      )}

      {/* Sidebar Menu */}
      {isOpen && (
        <nav className="flex-1 p-4">
          {/* Home */}
          <div className="flex items-center p-3 hover:bg-gray-700 rounded-md cursor-pointer">
            <FaHome className="text-xl mr-3" />
            <span>Home</span>
          </div>

          {/* Sales */}
          <div className="flex items-center p-3 hover:bg-gray-700 rounded-md cursor-pointer">
            <FaChartBar className="text-xl mr-3" />
            <span>Sales</span>
          </div>

          {/* Products (Dropdown) */}
          <div>
            <div
              className="flex items-center p-3 hover:bg-gray-700 rounded-md cursor-pointer"
              onClick={toggleProductsDropdown}
            >
              <FaShoppingBag className="text-xl mr-3" />
              <span>Products</span>
              <FaCaretDown
                className={`ml-auto transform transition-transform duration-300 ${
                  isProductsDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </div>

            {/* Dropdown Menu */}
            {isProductsDropdownOpen && (
              <div className="ml-8 mt-2 transition-all ease-in-out duration-500">
                <div className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">
                  Show All
                </div>
                <div className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">
                  T-Shirts
                </div>
                <div className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">
                  Jackets
                </div>
                <div className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">
                  Pants
                </div>
                <div className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">
                  Shoes
                </div>
              </div>
            )}
          </div>

          {/* Reports */}
          <div className="flex items-center p-3 hover:bg-gray-700 rounded-md cursor-pointer">
            <FaChartBar className="text-xl mr-3" />
            <span>Reports</span>
          </div>

          {/* Customers */}
          <div className="flex items-center p-3 hover:bg-gray-700 rounded-md cursor-pointer">
            <FaUsers className="text-xl mr-3" />
            <span>Customers</span>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
