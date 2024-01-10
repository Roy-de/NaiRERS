import React,{useState} from 'react';
import {Plus} from "lucide-react";

function RecordButton(props) {
    const [isModalOpen,setIsModalOpen] = useState(false)
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <button onClick={openModal} className="fixed bottom-4 left-4 bg-blend-saturation bg-indigo-500 text-white py-3 px-3 rounded-xl">
                <Plus/>
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded">
            <span className="absolute top-2 right-2 cursor-pointer" onClick={closeModal}>
              &times;
            </span>
                        <p>Modal content goes here</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RecordButton;