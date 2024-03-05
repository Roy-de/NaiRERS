import React from 'react';
import UserDropDown, {DropDownItems} from "./UserDropDown";
import {Settings2,LogOut,Smile} from "lucide-react";
import Constant from "../constants/Constant";

function NavBar() {
    return (
        <nav className={" flex items-center justify-between mb-2 p-1 bg-white drop-shadow-md relative z-50"}>
            <div className={"flex flex-wrap justify-between w-screen items-center px-24 m-1.5"}>
                <div className={"items-center flex-col justify-center"}>
                    <img className={"h-10 w-10 mx-3"} src={Constant.logo} alt={""}/>
                </div>
                <div className={"font-extrabold font-sans text-indigo-900 text-2xl"}>NAIRERS</div>
                <div className={"mx-3 z-50"}>
                    <UserDropDown username={"John Doe"} email={"johndoe@email.com"}>
                        <DropDownItems text={"Status"} anchor={"#"} icon={<Smile size={15}/>}/>
                        <DropDownItems text={"Settings"} anchor={"#"} icon={<Settings2 size={15}/>}/>
                        <hr className={"my-4"}/>
                        <DropDownItems text={"Logout"} anchor={"/"} icon={<LogOut size={15}/>}/>
                    </UserDropDown>
                </div>
            </div>

        </nav>
    );
}

export default NavBar;