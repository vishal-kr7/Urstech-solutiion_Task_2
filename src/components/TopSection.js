// src/components/TopSection.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { FaDollarSign, FaWallet, FaShoppingCart, FaUser } from 'react-icons/fa';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TopSection = () => {
  // Sample data for the graph
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Months
    datasets: [
      {
        label: 'Total Earnings',
        data: [100, 200, 300, 400, 500, 600], // Earnings data
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Total Views',
        data: [50, 100, 150, 200, 250, 300], // Views data
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 shadow-md">
      <div className="grid grid-cols-5 gap-5">
        {/* Revenue Graph */}
        <div className="col-span-2">
          <h2 className="text-xl font-bold mb-2">Revenue Graph</h2>
          <Bar data={data} options={options} />
        </div>

      {/* First Vertical Box with Sales Data */}
        <div className="col-span-1 flex flex-col justify-between h-full">
        {/* Sales Today */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-lg shadow-md flex items-center flex-grow">
            <FaDollarSign className="text-2xl mr-2" />
            <div>
            <h3 className="font-semibold text-lg">Sales Today</h3>
            <p className="text-2xl font-bold">$120</p>
            </div>
        </div>

        {/* Spacer to ensure both boxes cover the space equally */}
        <div className="h-4"></div> 

        {/* Total Earnings */}
        <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white p-4 rounded-lg shadow-md flex items-center flex-grow">
            <FaWallet className="text-2xl mr-2" />
            <div>
            <h3 className="font-semibold text-lg">Total Earnings</h3>
            <p className="text-2xl font-bold">$800,000</p>
            </div>
        </div>
        </div>


        {/* Second Vertical Box with Visitor and Order Data */}
        <div className="col-span-1 flex flex-col justify-between h-full">
        {/* Total Orders */}
        <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-4 rounded-lg shadow-md flex items-center flex-grow">
            <FaShoppingCart className="text-2xl mr-2" />
            <div>
            <h3 className="font-semibold text-lg">Total Orders</h3>
            <p className="text-2xl font-bold">102</p>
            </div>
        </div>

        {/* Spacer for separation */}
        <div className="h-4"></div> 

        {/* Visitors Today */}
        <div className="bg-gradient-to-r from-teal-400 to-blue-600 text-white p-4 rounded-lg shadow-md flex items-center flex-grow">
            <FaUser className="text-2xl mr-2" />
            <div>
            <h3 className="font-semibold text-lg">Visitors Today</h3>
            <p className="text-2xl font-bold">12,000 People</p>
            </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default TopSection;
