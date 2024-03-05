import React from 'react';
import MapComponent from "../components/MapComponent";
import FormControls from "../ConstantComponents/FormControls";

const FifthForm = ({handlePrevious,step,handleNext}) => {
    return (
        <>
            <div className={"p-4 col-start-1 col-end-3 rounded-xl mb-5"}>
                <span className={"flex flex-wrap items-center mb-2 ml-10 font-semibold"}>Please select your location on the map</span>
                <MapComponent width={"1160px"} height={"500px"}/>
            </div>
                <FormControls handlePrevious={handlePrevious} step={step} handleNext={handleNext}/>
            <div className={"flex flex-wrap items-center justify-center mx-5"}>
                <button className={"px-7 py-3 rounded-2xl bg-[#006AB4] text-white font-bold hover:scale-110 duration-500 ease-in-out"}> Complete</button>
            </div>

        </>
    );
};

export default FifthForm;
