import React, {useState} from 'react';
import {Plus} from "lucide-react";
import RecordModal from "./RecordModal";

function RecordButton() {
   const [isModalOpen,setIsModalOpen] = useState(false)
    const openModal = () =>{
       setIsModalOpen(true)
   }
    const closeModal = () =>{
       setIsModalOpen(false)
   }
    
    return (
        <>
            <button className="bg-blend-saturation bg-indigo-500 text-white py-3 px-3 rounded-xl" onClick={openModal}>
                <Plus/>
            </button>
        {isModalOpen && (<RecordModal onOpen={isModalOpen} onClose={closeModal}/>)}
        </>
    );
}

export default RecordButton;