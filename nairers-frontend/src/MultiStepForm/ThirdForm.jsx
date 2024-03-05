import React from 'react';
import FormControls from "../ConstantComponents/FormControls";

const ThirdForm = ({handleNext,handlePrevious,step}) => {
    return (
        <div className={"grid-rows-3"}>
            <div className={"p-2"}>
                <div className={"justify-center flex pb-8 mt-10"}>
                    <span className={"text-5xl font-sans font-extrabold text-[#016ab7]"}>Details</span>
                </div>
                <form className={"mb-16 mt-6 pb-0.5"}>
                    <div className={"flex flex-wrap justify-between items-center mx-28 my-4"}>
                        <input
                            type={"text"}
                            placeholder={"first name"}
                            className={"my-3 p-3 w-40 rounded-xl bg-gray-50 border focus:outline-none focus:border-[#016ab7] placeholder:text-sm"}/>
                        <input
                            placeholder={"last name"}
                            className={"my-3 p-3 w-40 rounded-xl bg-gray-50 border focus:outline-none focus:border-[#016ab7] placeholder:text-sm"}/>
                    </div>
                    <div className={"flex flex-col mx-28 my-4"}>
                        <input
                            type={"email"}
                            placeholder={"email"}
                            className={"my-3 p-3 rounded-xl bg-gray-50 border focus:outline-none focus:border-[#016ab7] placeholder:text-sm"}/>
                    </div>
                    <div className={"flex flex-col mx-28"}>
                        <input
                            type={"number"}
                            placeholder={"phone number start with 254"}
                            style={{ '-moz-appearance': 'textfield' }}
                            className={"my-3 p-3 rounded-xl bg-gray-50 border focus:outline-none focus:border-[#016ab7] placeholder:text-sm resize-none"}/>
                    </div>
                </form>

            </div>
            <FormControls step={step} handleNext={handleNext} handlePrevious={handlePrevious}/>
        </div>
    );
};

export default ThirdForm;
