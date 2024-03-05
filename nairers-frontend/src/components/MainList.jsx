import React from 'react';

const MainList = ({ ambulances }) => {
    return (
        <div className="overflow-y-scroll rounded-md">
            <div className="relative overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
                    <thead className="border-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration Number</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hospital</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                    </thead>
                    <tbody className="overflow-y-scroll">
                    {ambulances.map((ambulance) => (
                        <tr key={ambulance.id} className="mb-4 hover:bg-gray-100 hove:rounded-md">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{ambulance.RegistrationNumber}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{ambulance.Type}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{ambulance.Hospital}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{ambulance.Location}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        ambulance.Status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                        {ambulance.Status}
                                    </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MainList;
