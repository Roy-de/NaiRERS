import React, { useState } from 'react';
import MapComponent from "./MapComponent";

const RecordComponent = () => {
    const [formData, setFormData] = useState({
        caller_id: "",
        caller_name: "",
        location: "",
        coordinates: {
            x: '',
            y: ''
        },
        description: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Handle form submission logic here, e.g., send formData to server
        console.log(formData);
        // Reset form after submission
        setFormData({
            caller_id: "",
            caller_name: "",
            location: "",
            coordinates: {
                x: '',
                y: ''
            },
            description: ""
        });
    };

    const handleMapClick = (latitude, longitude) => {
        setFormData(prevState => ({
            ...prevState,
            coordinates: {
                x: latitude,
                y: longitude
            }
        }));
    };

    return (
        <React.Fragment>
            <div className={"p-2 bg-white shadow drop-shadow-md rounded-2xl"}>
                <div className={"flex flex-row items-center justify-between mt-10 mx-10"}>
                    <div className={"grid grid-cols-2 w-full"}>

                        <form onSubmit={handleSubmit}
                              className="col-start-1 col-span-1 flex flex-col items-center justify-center mx-10">
                            <div>Record Accident</div>
                            <input
                                value={formData.caller_id}
                                onChange={(e) => setFormData({...formData, caller_id: e.target.value})}
                                className={"my-3 p-3 rounded-xl bg-gray-50 border focus:outline-none focus:border-[#016ab7] placeholder:text-sm w-full"}
                                placeholder="Caller ID"
                            />
                            <input
                                value={formData.caller_name}
                                onChange={(e) => setFormData({...formData, caller_name: e.target.value})}
                                className={"my-3 p-3 rounded-xl bg-gray-50 border focus:outline-none focus:border-[#016ab7] placeholder:text-sm w-full"}
                                placeholder="Caller Name"
                            />
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({...formData, description: e.target.value})}
                                className={"my-3 p-3 rounded-xl bg-gray-50 border focus:outline-none focus:border-[#016ab7] placeholder:text-sm w-full"}
                                placeholder="Description"
                            />
                            <input
                                value={formData.location}
                                onChange={(e) => setFormData({...formData, location: e.target.value})}
                                className={"my-3 p-3 rounded-xl bg-gray-50 border focus:outline-none focus:border-[#016ab7] placeholder:text-sm w-full"}
                                placeholder="Location"
                            />
                            <button type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                                Submit
                            </button>
                        </form>

                        <div className={"col-start-2 col-span-1 h-full p-2 pb-4"}>
                            <MapComponent height={"880px"} width={"710px"} onMapClick={handleMapClick} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default RecordComponent;
