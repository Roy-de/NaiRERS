import React, {useState} from 'react';
import {SideBar, SidebarItem} from "../components/SideBar";
import {HelpCircle, Home, MapPin, Settings, Siren} from "lucide-react";
import NavBar from "../components/NavBar";
import RecordButton from "../components/RecordButton";
import MapContainer from "../components/MapContainer";
import MainList from "../components/MainList";

function HomePage() {

    // eslint-disable-next-line no-unused-vars
    const [activeItem, setActiveItem] = useState(null);

    // eslint-disable-next-line no-unused-vars
    const handleSidebarItemClick = (componentName) => {
        setActiveItem(componentName);
    };

    return (
        <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"}>
            {/* Content Area */}
            <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
                {/*Navbar goes here*/}
                <NavBar/>
            </div>

            <div className="flex col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-4 xl:row-start-6 items-center overflow-y-auto shadow-md justify-between rounded-lg">
                {/* Your main content goes here */}
                <MainList/>
            </div>

            {/* Sidebar area */}
            <div className={"col-span-1 col-end-auto sm:col-span-2 md:col-span-3 lg:col-span-1 xl:col-span-1 fixed top-1/4 left-0 bottom-auto"}>
                <SideBar>
                    <SidebarItem icon={<Home size={20} color={"#016ab4"}/>} text={"Home"} component={"dashboard"} onClick={handleSidebarItemClick}/>
                    <SidebarItem icon={<MapPin size={20} color={"#016ab4"}/>} text={"Location"} component={"location"}/>
                    <SidebarItem icon={<Siren size={20} color={"#016ab4"}/>} text={"Ambulances"} component={"ambulance"}/>
                    <hr className={"my-4"}/>
                    <SidebarItem icon={<Settings size={20} color={"#016ab4"}/>} text={"Settings"} component={"settings"}/>
                    <SidebarItem icon={<HelpCircle size={20} color={"#016ab4"}/>} text={"Help"} component={"help"}/>
                </SideBar>
            </div>
            <div className={"col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1 xl:col-span-1 absolute bottom-0 left-0 mb-5 ml-1"}>
                {/*Record button goes here*/}
                <RecordButton/>
            </div>
        </div>
    );
}

export default HomePage;