import React, {useState,useEffect,useRef} from 'react';

function UserDropDown({children,username,email}) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null)

    useEffect(() =>{
        const handleClickOutside = (event) =>{
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setDropdownOpen(false)
            }
        };
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' || 'click') {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [dropdownRef]);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <>
            <div className="relative top-0 left-0 px-7" ref={dropdownRef}>
                <button
                    type="button"
                    className="flex text-sm items-center focus:outline-blue-300 hover:outline-blue-300 w-10 h-10 "
                    id="user-menu-button"
                    onClick={toggleDropdown}
                >
                    <span className="sr-only"></span>
                    <img
                        className="rounded-full"
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
export function DropDownItems({ icon, text, modalComponent: ModalComponent, onClick ,anchor}) {
    // eslint-disable-next-line no-unused-vars
    const [isModalOpen, setModalOpen] = useState(false);

    const handleClick = () => {
        if (onClick) {
            onClick(); // Call the provided onClick function if available
        }
        setModalOpen(true); // Open the modal
    };

    return (
        <>
            <a
                href={anchor}
                onClick={handleClick}
                className="px-2 py-2 text-sm text-indigo-900 hover:bg-indigo-50 hover:rounded-md flex items-center"
                role="menuitem"
            >
                <span className={"mr-4"}>{icon} </span>
                {text}
            </a>
        </>
    )
        ;
}

export default UserDropDown;