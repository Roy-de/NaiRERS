import React, {useState} from 'react';
import {ChevronLeft, ChevronRight, Search} from "lucide-react";
import MainList from "./MainList";
import Constant from "../constants/Constant";
import urls from "../constants/Urls";
import RightSideBar from "./RightSideBar";
import SearchBar from "../ConstantComponents/SearchBar";

const AmbulanceList = () => {
    let url = Constant.host + urls.dispatch.info;
    const [currentPage, setCurrentPage] = useState(1);
    //const [ambulances, setAmbulances] = useState([]); // State for ambulances data
    const itemsPerPage = 13;
    const ambulances = [
        {
            id:1,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Available"
        },{
            id:2,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Unavailable"
        },{
            id:3,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Unavailable"
        },{
            id:4,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Unavailable"
        },{
            id:5,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Unavailable"
        },{
            id:6,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Available"
        },{
            id:7,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Available"
        },{
            id:8,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Available"
        },{
            id:9,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Available"
        },{
            id:10,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Available"
        },{
            id:11,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Available"
        },{
            id:12,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Available"
        },{
            id:13,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Available"
        },{
            id:14,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Available"
        },{
            id:15,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Available"
        },{
            id:16,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Available"
        },{
            id:17,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Available"
        },{
            id:18,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Available"
        },{
            id:19,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Available"
        },{
            id:20,
            Image:"https://i.pravatar.cc/150?img=1",
            RegistrationNumber:"KBX 999V",
            Type:"Nissan",
            Hospital:"AGA KHAN HOSPITAL",
            Location:"Westlands",
            Status:"Available"
        },
    ]
    /*const fetchData = async () => {
        try {
            const response = await axios.get(url, { username: "sample_username" });
            if (response.data.statusCode === 200) {
                setAmbulances(response.data.data);
            }
        } catch (error) {
            alert("Error fetching data: " + error);
        }
    };

    useEffect(() => {
        fetchData(); // Fetch data when component mounts
    }, []);*/


    const totalPages = Math.ceil(ambulances.length / itemsPerPage);

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // Ensure not to go below page 1
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages)); // Ensure not to go above last page
    };


    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedAmbulances = ambulances.slice(startIndex, endIndex);
    return (
        <React.Fragment>
            <div className={"bg-white drop-shadow-md  rounded-3xl items-center p-2 flex flex-col h-full justify-between"}>
                <div className={"relative pt-5 pb-3 pl-6"}>
                    <div className={"relative flex items-center justify-center"}>
                        <SearchBar/>
                    </div>
                </div>
                <div className={"p-2 flex-grow w-full"}>
                    <MainList ambulances={paginatedAmbulances}/>
                </div>

                {/* Pagination controls */}
                <nav className="flex justify-center items-center gap-x-1 pt-2 pb-4">
                    <button type="button" onClick={goToPreviousPage} disabled={currentPage === 1}
                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                        <ChevronLeft color={"#016ab4"}/>
                        <span aria-hidden="true" className="sr-only">Previous</span>
                    </button>
                    <div className="flex items-center gap-x-1">
                        <span
                            className="flex justify-center items-center  text-gray-600 py-2 px-1.5 text-sm font-medium">{currentPage}</span>
                        <span
                            className="flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm font-medium">of</span>
                        <span
                            className="flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm font-medium">{totalPages}</span>
                    </div>
                    <button type="button" onClick={goToNextPage} disabled={currentPage === totalPages}
                            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                        <span aria-hidden="true" className="sr-only">Next</span>
                        <ChevronRight color={"#016ab4"}/>
                    </button>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default AmbulanceList;
