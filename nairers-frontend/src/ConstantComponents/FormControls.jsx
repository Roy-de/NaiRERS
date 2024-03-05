import React from 'react';
import {ChevronLeft, ChevronRight} from "lucide-react";

const FormControls = ({handlePrevious,handleNext,step}) => {
    return (
        <>
            <div className={"flex flex-wrap justify-center items-center"}>
                <button
                    disabled={step === 1}
                    className={"mx-10 py-1.5 px-2 bg-blue-200 rounded-md hover:scale-110 duration-500 ease-in-out disabled:bg-blue-100 disabled:scale-75"}
                    onClick={handlePrevious}><ChevronLeft color={"#016ab7"}/></button>
                <div className={"mx-10 text-xl text-[#016ab7] bg-slate-100 px-4 py-1.5 rounded-md"}>{step}</div>
                <button
                    disabled={step === 5}
                    className={"mx-10 py-1.5 px-2 bg-blue-200 rounded-md hover:scale-110 duration-500 ease-in-out disabled:scale-75 disabled:bg-blue-100"}
                    onClick={handleNext}><ChevronRight className={"text-[#016ab7]"}/></button>
            </div>
        </>
    );
};

export default FormControls;

