import React, {useState,useEffect,useRef} from 'react';
import ProfileSettings from "./ProfileSettings";
import axios from "axios";
import Constant from "../constants/Constant";
import urls from "../constants/Urls";
import {ChevronDown} from "lucide-react";

function UserDropDown({children,email}) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [username, setUsername] = useState('')
    const dropdownRef = useRef(null);
    let url = Constant.host+urls.dispatch.info;

    async function getDetails(){
        try {

            await axios.get(url,{
                username:"sample_username"
            }).then(function (response){
                if(response.data.statusCode === 200){
                    localStorage.setItem("Data",response.data.data)
                    console.log(response.data.message)
                    setUsername(username)
                }
            })
                .catch(function (error){
                    if(error.response.data.statusCode === 204){
                        alert("Error" +error);
                    }
                });
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() =>{
        const handleClickOutside = (event) =>{
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setDropdownOpen(false)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const toggleDropdown = () => {
        //getDetails()
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <>
            <div className="relative top-0 left-0 px-7 z-50" ref={dropdownRef}>
                <button
                    type="button"
                    className="flex text-sm items-center border border-gray-300 focus:outline-none p-3 rounded-lg text-[#016ab4]"
                    id="user-menu-button"
                    onClick={toggleDropdown}><span>{email}</span></button>

                {isDropdownOpen && (
                    <div
                        style={{ zIndex: 9999 }}
                        className="origin-top-right absolute right-0 mt-4 w-52 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2">
                        <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                        >
                            <div>
                                <div className={" items-start px-5 py-0.5"}>
                                    <p className={"text-sm font-semibold text-blue-900"}>{username}</p>
                                    <p className={"text-sm text-blue-900"}>{email}</p>
                                </div>
                            </div>
                            <hr className={"my-4"}/>
                            {children}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
export function DropDownItems({ icon, text, onClick ,anchor ,modalComponent}) {
    const Person = {
        username:null,
        email:null,
        firstname:null,
        lastname:null

    }
    // eslint-disable-next-line no-unused-vars
    const [isModalOpen, setModalOpen] = useState(false);

    const handleClick = () => {
        if (onClick) {
            onClick(); // Call the provided onClick function if available
        }
        if(modalComponent){
            setModalOpen(true)
        }
    };

    const closeModal = () =>{
        setModalOpen(false)
    }

    return (
        <>
            <a
                href={anchor}
                onClick={handleClick}
                className="px-2 py-2 text-sm text-indigo-900 hover:bg-indigo-50 hover:rounded-md flex items-center z-50"
                role="menuitem"
            >
                <span className={"mr-4"}>{icon} </span>
                {text}
            </a>
            {/*Render modal component*/}
            {isModalOpen && modalComponent &&(<ProfileSettings
                firstname={Person.firstname}
                lastname={Person.lastname}
                email={Person.email}
                phoneNo={"0710914191"}
                role={"MEDIC"}
                hospital={"AGA KHAN HOSPITAL"}
                location={"Ngara"}
                onClose={closeModal}
            />)}
        </>
    )
        ;
}

export default UserDropDown;