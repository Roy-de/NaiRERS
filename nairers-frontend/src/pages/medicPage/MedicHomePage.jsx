import React from 'react';
import NavBar from "../../components/NavBar";
import {SideBar, SidebarItem} from "../../components/SideBar";
import {HelpCircle, Home, MapPin, Settings, Siren} from "lucide-react";
import AmbulanceList from "../../components/AmbulanceList";

const MedicHomePage = () => {
    return (
        <>
            <div className="items-center overflow-y-auto shadow-md justify-between bg-gray-50 h-screen w-screen">
                <div style={{ zIndex: 9999 }}><NavBar/></div>
                <>

                    <div className={"grid grid-cols-12"}>
                        <div className={"col-start-1 col-end-1"}>
                            <div className={"relative"}>
                                <div
                                    className={`fixed top-1/4 left-0 bottom-auto`}>
                                    <SideBar>
                                        <SidebarItem icon={<Home size={20} color={"#016ab4"}/>} text={"Home"}
                                                     component={"dashboard"}/>
                                        <SidebarItem icon={<MapPin size={20} color={"#016ab4"}/>} text={"Location"}
                                                     component={"location"}/>
                                        <SidebarItem icon={<Siren size={20} color={"#016ab4"}/>} text={"Ambulances"}
                                                     component={"ambulance"}/>
                                        <hr className={"my-4"}/>
                                        <SidebarItem icon={<Settings size={20} color={"#016ab4"}/>} text={"Settings"}
                                                     component={"settings"}/>
                                        <SidebarItem icon={<HelpCircle size={20} color={"#016ab4"}/>} text={"Help"}
                                                     component={"help"}/>
                                    </SideBar>
                                </div>
                            </div>
                        </div>
                        <div className={"col-start-2 col-end-10 pr-5  m-2 p-2 overflow-y-scroll mt-4"}>
                            <AmbulanceList/>
                        </div>
                        <div className={"col-start-10 col-end-13 p-2"}>
                            Hello
                        </div>
                    </div>

                    <div
                        className={"absolute bottom-2 left-3 mb-5 ml-1 drop-shadow-md"}>

                    </div>
                </>
            </div>
        </>
    );
};

export default MedicHomePage;
