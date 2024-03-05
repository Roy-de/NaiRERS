import React from 'react';
import {Search} from "lucide-react";

const SearchBar = () => {
    return (
        <div
            className={"flex flex-wrap items-center p-1 text-md text-gray-900 border rounded-xl w-80 bg-gray-100 border-gray-300 focus:outline-none"}>
            <Search color={"gray"} size={16} className={"mr-2 ml-3 mt-0"}/>
            <input
                type={"text"}
                className={"w-64 bg-gray-100 ml-2 focus:outline-none text-gray-500 text-md"} placeholder={"search"}/>
        </div>
    );
};

export default SearchBar;
