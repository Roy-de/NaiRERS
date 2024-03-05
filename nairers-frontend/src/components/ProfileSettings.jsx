import React from 'react';
import {X} from "lucide-react";
function ProfileSettings({firstname,lastname,email,phoneNo,hospital,role,location,onClose}) {

    return (
        <>
            <div className="modal-overlay fixed inset-0 bg-opacity-100 drop-shadow-2xl">
                <div className={"absolute top-48 left-1/4 z-50"}>
                    <div className="flex flex-wrap -m-3 mb-3">
                        <div className="w-full md:w-3/4 p-3">

                            <div
                                className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-xl shadow-dashboard">
                                <div className={"justify-between"}>

                                </div>

                                <div className={"flex justify-between pt-3 pb-3 py-3"}>
                                    <p className={"px-4 py-4 text-wrap font-bold pr-3"}>Profile Settings</p>
                                    <div className={"flex px-4 py-4"}>
                                        <button className="close-button" onClick={onClose}>
                                            <X color={"gray"} size={18}/>
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-wrap pb-3 -m-3">
                                    <div className="w-full md:w-1/2 p-3">
                                        <p className="mb-1.5 font-medium text-base text-coolGray-800">First name</p>
                                        <input
                                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                                            type="text" placeholder={firstname}/>
                                    </div>
                                    <div className="w-full md:w-1/2 p-3">
                                        <p className="mb-1.5 font-medium text-base text-coolGray-800">Last name</p>
                                        <input
                                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                                            type="text" placeholder={lastname}/>
                                    </div>
                                    <div className="w-full md:w-1/2 p-3">
                                        <p className="mb-1.5 font-medium text-base text-coolGray-800">Email</p>
                                        <input
                                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                                            type="text" placeholder={email}/>
                                    </div>
                                    <div className="w-full md:w-1/2 p-3">
                                        <p className="mb-1.5 font-medium text-base text-coolGray-800">Phone number</p>
                                        <input
                                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                                            type="text" placeholder={phoneNo}/>
                                    </div>
                                </div>
                                <div className={"justify-end flex flex-wrap pt-8 pb-2"}>
                                    <button
                                        className="flex flex-wrap justify-center w-auto  px-7 py-2 bg-indigo-500 hover:scale-105 ease-in-out duration-500 font-medium text-sm text-white rounded-lg shadow-button">
                                        <p>Save</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-3">

                        <div className="w-full md:w-3/4 p-3">
                            <div
                                className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-xl shadow-dashboard">
                                <div className="flex flex-wrap -m-3 mb-3">
                                    <div className="w-full md:w-1/2 p-3">
                                        <p className="mb-1.5 font-medium text-base text-coolGray-800">Role</p>
                                        <div className="relative">
                                            <input
                                                type={"text"}
                                                disabled
                                                placeholder={role}
                                                className="appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-gray-100 border outline-none border-coolGray-200 rounded-lg shadow-input">

                                            </input>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 p-3">
                                        <p className="mb-1.5 font-medium text-base text-coolGray-800">Hospital</p>
                                        <input
                                            disabled
                                            className="w-full px-4 bg-gray-100 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                                            type="text" placeholder={hospital}/>
                                    </div>
                                    <div className="w-full md:w-1/2 p-3">
                                        <p className="mb-1.5 font-medium text-base text-coolGray-800">Location</p>
                                        <input
                                            disabled
                                            className="w-full bg-gray-100 px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                                            type="text" placeholder={location}/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileSettings;