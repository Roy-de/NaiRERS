import React from 'react';
import UserDropDown, {DropDownItems} from "./UserDropDown";
import {Settings2,CircleUserRound,LogOut,Smile} from "lucide-react";
import ProfileSettings from "./ProfileSettings";

const Logo = "https://ik.imagekit.io/3paggvhlz/paramedic-removebg-preview-JTZhZFAhf-transformed.png?updatedAt=1704387133967"
function NavBar(props) {
    return (
        <div className={"absolute top-1 left-0  w-screen shadow backdrop-blur-lg py-2"}>
            <nav className={" flex items-center justify-between px-7"}>
                <div className={"items-center flex-col justify-center"}>
                    <img className={"h-10 w-10 mx-3"} src={Logo} alt={""}/>
                </div>
                <div className={"font-extrabold font-sans text-indigo-900"}>NAIRERS</div>
                <div className={"mx-3 "}>
                    <UserDropDown username={"John Doe"} email={"johndoe@email.com"}>
                        <DropDownItems text={"Status"} anchor={"#"} icon={<Smile size={15}/>}/>
                        <DropDownItems text={"Profile"} anchor={"#"} icon={<CircleUserRound size={15}/>} modalComponent={ProfileSettings}/>
                        <DropDownItems text={"Settings"} anchor={"#"} icon={<Settings2 size={15}/>}/>
                        <hr className={"my-4"}/>
                        <DropDownItems text={"Logout"} anchor={"/"} icon={<LogOut size={15}/>}/>
                    </UserDropDown>
                </div>

            </nav>
        </div>
    );
}

export default NavBar;