import React from 'react';
import { Link } from 'react-router-dom';

const DataTable = () => {
  const data = [
    { name: 'Renuka Kompelly', manager: 'Sobha Rani', status: 'with employee', actions: 'View/Edit' },
    { name: 'Bindu Pavani Veerla', manager: 'Tejaswi Peesapati', status: 'Submitted', actions: 'View/Edit' },
    { name: 'RamaKrishna Shiva', manager: 'Sudhakar Adda', status: 'submitted', actions: 'View/Edit' },
    // Add more data as needed
  ];

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100">
      <div className="overflow-x-auto w-full max-w-6xl p-4 bg-white rounded-lg shadow-md mt-40">
        {/* Appraisals Heading with Blue Background */}
        <h2 className="text-2xl font-bold text-white bg-blue-500 p-2 rounded mb-4">Appraisals</h2>
        
        <table className="min-w-full divide-y divide-gray-200 mb-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Manager</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.manager}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.status}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 hover:text-blue-700 cursor-pointer">{item.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Action Buttons */}
        <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"><Link to="/CreateAppraisal">Create Appraisal
            </Link> </button> 
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">View All Appraisals</button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Send Emails</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Configure Appraisal Forms</button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
