import React from 'react';

function Sidebar({children}) {

    return (
        <div className={"flex absolute top-0 left-0"}>
            <aside className={"h-screen"}>
                <nav className={"fixed top-1/4 bottom-auto bg-gray-50 border-r border-l shadow-md rounded-l-xl rounded-r-xl m-2"}>
                    <ul className={"px-1.5 items-center flex-col space-y-6 py-5"}>{children}</ul>
                    <div>
                    </div>
                </nav>
            </aside>
        </div>
    );
}

export function SidebarItem({ icon, text }) {
    return (
        <li className="relative flex hover:bg-indigo-50 hover:rounded-md items-center py-2 px-2 font-medium rounded-md cursor-pointer transition-colors space-y-6 h-full group">
            {icon}
            <div className={"absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3  transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"}>
                {text}
            </div>
        </li>
    );
}


export default Sidebar;