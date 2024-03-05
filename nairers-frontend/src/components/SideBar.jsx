import React, {useState} from 'react';

export function SideBar({children}) {

    const [activeItem,setActiveItem] = useState(null);
    const handleSidebarItemClick=(component) =>{
        setActiveItem(component)
    }

    return (
        <aside>
            <nav
                className={" bg-gray-50 border-r border-l shadow-md rounded-l-xl rounded-r-xl m-2 drop-shadow-md"}>
                <ul className={"px-2 items-center flex-col space-y-6 py-3"}>
                    {React.Children.map(children, (child) =>
                    React.cloneElement(child, {
                        isActive: activeItem === child.props.component,
                        onClick:handleSidebarItemClick
                    })
                    )}
                </ul>
                <div>
                </div>
            </nav>
        </aside>
    );
}

export function SidebarItem({ icon, text, component, isActive,setActiveComponent }) {
    const handleClick = () => {
        setActiveComponent(component);
    };
    return (
        <li className={`relative flex hover:bg-indigo-100 hover:rounded-md items-center py-2 px-2 font-medium rounded-lg cursor-pointer transition-colors space-y-6 h-full group ${isActive ? 'bg-indigo-100 ':''}`} onClick={handleClick}>
            {icon}
            <div className={"absolute left-full hover:z-50 rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3  transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"}>
                {text}
            </div>
        </li>
    );
}