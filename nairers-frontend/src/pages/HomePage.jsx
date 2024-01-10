import React from 'react';
import {Home, MapPin, Siren, Settings, HelpCircle} from "lucide-react";
import AmbulancesList from "../component/AmbulancesList";
import Sidebar, {SidebarItem} from "../component/Sidebar";
import Navbar from "../component/Navbar";
import RecordButton from "../component/RecordButton";


export default function HomePage() {
    return (
        <>
            <div>
                <AmbulancesList/>
                <Sidebar>
                    <SidebarItem icon={<Home size={20} color={"#016ab4"}/>} text={"Home"}/>
                    <SidebarItem icon={<MapPin size={20} color={"#016ab4"}/>} text={"Location"}/>
                    <SidebarItem icon={<Siren size={20} color={"#016ab4"}/>} text={"Ambulances"}/>
                    <hr className={"my-4"}/>
                    <SidebarItem icon={<Settings size={20} color={"#016ab4"}/>} text={"Settings"}/>
                    <SidebarItem icon={<HelpCircle size={20} color={"#016ab4"}/>} text={"Help"}/>
                </Sidebar>
            </div>
            <div>
                <Navbar/>
            </div>
            <div>
                <RecordButton/>
            </div>
    </>

    );
}
