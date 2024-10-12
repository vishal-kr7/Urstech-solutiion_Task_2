// src/components/ProductTable.js
import React from 'react';
import products from "../data/product" // Import the mock data

const ProductTable = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">Products</h2>
        <button className="bg-black text-white px-4 py-2 rounded flex items-center">
          <span className="mr-2">+</span> Add Product
        </button>
      </div>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">No</th>
            <th className="border border-gray-300 p-2">Image</th>
            <th className="border border-gray-300 p-2">Product Name</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Sell</th>
            <th className="border border-gray-300 p-2">View</th>
            <th className="border border-gray-300 p-2">Earnings</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">
                <img src={product.image} alt={product.name} className="w-12 h-12" />
              </td>
              <td className="border border-gray-300 p-2">{product.name}</td>
              <td className="border border-gray-300 p-2">{product.price}</td>
              <td className="border border-gray-300 p-2">{product.status}</td>
              <td className="border border-gray-300 p-2">Sell</td>
              <td className="border border-gray-300 p-2">View</td>
              <td className="border border-gray-300 p-2">{product.earnings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
