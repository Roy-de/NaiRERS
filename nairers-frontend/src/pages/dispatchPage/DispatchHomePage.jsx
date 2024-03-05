import React, {useState} from 'react';
import {HelpCircle, Home, MapPin, Plus, Settings, Siren} from "lucide-react";
import NavBar from "../../components/NavBar.jsx";
import { SideBar, SidebarItem } from "../../components/SideBar";
import AmbulanceList from "../../components/AmbulanceList";
import RightSideBar from "../../components/RightSideBar";
import MapComponent from "../../components/MapComponent";
import RecordComponent from "../../components/RecordComponent";
function DispatchHomePage() {
    const [activeComponent, setActiveComponent] = useState("dashboard"); // Set the default active component to "dashboard"
    const handleRecordButtonClick = () => {
        setActiveComponent("record");
    };

    // Function to render the active component based on the activeComponent state
    const renderActiveComponent = () => {
        switch (activeComponent) {
            case "dashboard":
                return <div>Dashboard Component</div>;
            case "location":
                return <><div className={"pt-10 px-4 shadow mr-2 rounded-3xl bg-white pb-5"}><MapComponent height={"900px"} width={"1480px"}/></div></>;
            case "ambulance":
                return <AmbulanceList />;
            case "settings":
                return <div>Settings Component</div>;
            case "help":
                return <div>Help Component</div>;
            case "record":
                return <RecordComponent/>;
            default:
                return null;
        }
    };

    return (
        <>
            <div className={"h-screen w-screen bg-slate-100"}>
                <div className={"z-50"}>
                    <NavBar/>
                </div>
                <div>
                    <div className={"fixed top-1/4 z-10"}>
                        <SideBar>
                            <SidebarItem icon={<Home size={20} color={"#016ab4"} />} text={"Home"} component={"dashboard"} setActiveComponent={setActiveComponent} />
                            <SidebarItem icon={<MapPin size={20} color={"#016ab4"} />} text={"Location"} component={"location"} setActiveComponent={setActiveComponent} />
                            <SidebarItem icon={<Siren size={20} color={"#016ab4"} />} text={"Ambulances"} component={"ambulance"} setActiveComponent={setActiveComponent} />
                            <hr className={"my-4"} />
                            <SidebarItem icon={<Settings size={20} color={"#016ab4"} />} text={"Settings"} component={"settings"} setActiveComponent={setActiveComponent} />
                            <SidebarItem icon={<HelpCircle size={20} color={"#016ab4"} />} text={"Help"} component={"help"} setActiveComponent={setActiveComponent} />
                        </SideBar>
                    </div>
                    <div className={"grid grid-cols-12 bg-slate-100"}>

                        <div className={"col-start-1 col-end-11 ml-20 mt-4 z-0 flex flex-row"}>
                            <div className={"mx-2 w-full mb-10"}>
                                {renderActiveComponent()}
                            </div>
                        </div>
                        <div className={"col-start-11 col-end-13 mx-3 flex flex-row z-0"}>
                            <div className={"w-full mb-10 mt-4 z-0"}>
                                <RightSideBar/>
                            </div>
                        </div>
                    </div>
                    <div
                        className={"fixed bottom-2 left-3 mb-5 ml-1 drop-shadow-md"}>
                        <button
                            onClick={handleRecordButtonClick}
                            className="shadow-md drop-shadow-md bg-white text-white py-3 px-3 rounded-xl transition-transform transform hover:scale-110">
                            <Plus color={"#016ab4"}/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DispatchHomePage;
