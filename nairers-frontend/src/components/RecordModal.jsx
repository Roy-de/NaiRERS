import React, {useState} from 'react';
import {Phone,Navigation,User,Pin,MessageSquare} from 'lucide-react'

function RecordModal({onOpen,onClose}) {
    const [formData,setFormData] = useState({
        name:'',
        phoneNumber:'',
        location:'',
        mapPoint:'',
        description:''
    });

    const handleChange = (event) =>{
        const {name,value} = event.target;
        setFormData((prevData) =>({
            ...prevData,
            [name]:value
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert('Form submitted' + formData);
        onClose();
    }

    return (
        <>
            {onOpen && (
                <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-70">
                    <div className="modal-content">
                        <button className="close-button" onClick={onClose}>
                            Close Modal
                        </button>

                        <form >
                            <label className={"block mb-2 text-sm font-medium text-gray-900 "}>Name:</label>
                            <div className={"relative"}>
                                <div className={"absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"}>
                                    <User className={"w-4 h-4"}/>
                                </div>
                                <input
                                    className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"}
                                    type="text" name="name" value={formData.name} onChange={handleChange}/>
                            </div>
                            <label>
                                Phone Number:
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                Location:
                                <input type="text" name="location" value={formData.location} onChange={handleChange}/>
                            </label>

                            <label>
                                Point on Map:
                                <input type="text" name="mapPoint" value={formData.mapPoint} onChange={handleChange}/>
                            </label>

                            <label className={"block mb-2 text-sm font-medium text-black"}>
                                Description:
                                <textarea
                                    className={"block p-2.5 w-full text-sm text-gray-900 bg-blue-100 rounded-lg border focus:ring-blue-500 focus:border-blue-500"}
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                ></textarea>
                            </label>

                            <button type="submit" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default RecordModal;