import React, {useState} from 'react';

function UserDropDown({children}) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <>
            <div className="relative top-0 left-0 ">
                <button
                    type="button"
                    className="flex text-sm items-center focus:outline-blue-300 hover:outline-blue-300"
                    id="user-menu-button"
                    onClick={toggleDropdown}
                >
                    <span className="sr-only">Open user menu</span>
                    <img
                        className="w-10 h-10 rounded-full"
                        src="https://ik.imagekit.io/3paggvhlz/pp.jpeg?updatedAt=1704876007290"
                        alt="User"
                    />
                </button>

                {isDropdownOpen && (
                    <div
                        className="origin-top-right absolute right-0 mt-4 w-52 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2">
                        <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                        >
                            {children}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
export function DropDownItems({icon,text,anchor}){
    return(

        <a
            href={anchor}
            className="px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md flex items-center"
            role="menuitem"
        ><span className={"mr-4"}>{icon} </span>{text}
        </a>
    )
}
export default UserDropDown;