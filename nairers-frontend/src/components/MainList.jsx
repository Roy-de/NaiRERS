import React from 'react';
import {Search} from "lucide-react";

function MainList() {
    const ambulances = [
        {
            id:1,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Active"
        },{
            id:2,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Unavailable"
        },{
            id:3,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Unavailable"
        },{
            id:4,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Unavailable"
        },{
            id:5,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Unavailable"
        },{
            id:6,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Active"
        },{
            id:7,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Active"
        },{
            id:8,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Active"
        },{
            id:9,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Active"
        },{
            id:10,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Active"
        },{
            id:11,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Active"
        },{
            id:12,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Active"
        },{
            id:13,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Active"
        },{
            id:14,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Active"
        },{
            id:15,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Active"
        },{
            id:16,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Active"
        },{
            id:17,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Active"
        },{
            id:18,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Active"
        },{
            id:19,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Active"
        },{
            id:20,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Active"
        },
    ]
    const Alert = () =>{
        alert("Hello")
    }
    return (
        <div className={"overflow-y-scroll"}>
            <div className={"relative left-5"}>
                <div className={"absolute -inset-y-full start-0 flex items-center ps-3 pointer-events-none"} onClick={Alert}>
                    <Search color={"gray"} size={18}/>
                </div>
                <input type="text" className="block p-2 ps-10 text-sm text-gray-900 border rounded-xl w-80 bg-gray-100 " placeholder="search"/>
            </div>
            <div className={"relative overflow-x-auto shadow-md rounded-lg"}>
                <table className={"min-w-full divide-y divide-gray-200 overflow-x-auto"}>
                    <thead className={"border-gray-50"}>
                        <tr>
                            <th className={"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}>Image</th>
                            <th className={"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}>Registration number</th>
                            <th className={"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}>Type</th>
                            <th className={"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}>Hospital</th>
                            <th className={"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}>Location</th>
                            <th className={"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}>Status</th>
                        </tr>
                    </thead>
                    <tbody className={"overflow-y-scroll"}>
                        {ambulances.map(ambulance  => (
                            <tr key={ambulance.id}>
                                <td className={"px-6 py-4 whitespace-nowrap"}>
                                    <div className={"flex items-center"}>
                                        <div className={"flex-shrink-0 h-10 w-10"}>
                                            <img className={"h-8 w-8 rounded-xl"} src={ambulance.Image} alt={""}/>
                                        </div>
                                    </div>
                                </td>
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
                                {ambulance.Status === "Active" ? (<span
                                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{ambulance.Status}</span>) : (
                                    <span
                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">{ambulance.Status}</span>
                                )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MainList;