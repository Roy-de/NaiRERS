import React from 'react';
import FormControls from "../ConstantComponents/FormControls";

const FirstForm = ({handleNext,handlePrevious,step}) => {
    return (
        <div className={"grid grid-rows-3"}>
            <div className={"justify-center flex pb-16 pt-10"}>
                            <span className={"text-8xl font-sans font-extrabold text-[#016ab7]"}>
                                Welcome
                            </span>
            </div>
            <div className={"flex justify-center flex-col items-center"}>
                <span className={"text-2xl font-bold text-slate-700 mb-10"}>Let's get you started</span>
                <span className={"mb-4 text-sm text-gray-500"}> Create Admin Account</span>
                <span className={"mb-4 text-sm text-gray-500"}>Add your details</span>
                <span className={"mb-4 text-sm text-gray-500"}> Register your hospital</span>
            </div>
            <FormControls handleNext={handleNext} handlePrevious={handlePrevious} step={step}/>
        </div>
    );
};

export default FirstForm;
