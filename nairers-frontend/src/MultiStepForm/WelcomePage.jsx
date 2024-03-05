import React, {useState} from 'react';
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import FourthForm from "./FourthForm";
import FifthForm from "./FifthForm";

const WelcomePage = () => {
    const[step,setStep] = useState(1);
    const handleNext = () => {
        setStep(step + 1)
    };
    const handlePrevious = () => {
        if (step <= 1){
            setStep(1)
        }else{
            setStep(step - 1)
        }

    };
    return (
        <>
            <div className={"h-screen flex flex-wrap items-center bg-gray-50"}>
                <div className={"grid grid-cols-2 mx-80 mt-10 p-10 rounded-3xl drop-shadow-xl shadow border"}>
                    {step === 5?(<FifthForm handlePrevious={handlePrevious} handleNext={handleNext} step={step}/>):(<>
                        <div className={"col-start-1 col-span-1"}>
                            <div className={"m-10"}>
                                <img
                                    className={"rounded-3xl drop-shadow-xl hover:scale-105 duration-1000 ease-in-out shadow shadow-blue-200"}
                                    src={"https://ik.imagekit.io/3paggvhlz/_0f353747-7b74-4c08-9b10-24af997b1779.jpeg?updatedAt=1709361709608"}
                                    alt={""}/>
                            </div>
                        </div>
                        <div className={"col-start-2 col-span-1"}>
                            {step === 1 ? (
                                    <FirstForm step={step} handlePrevious={handlePrevious} handleNext={handleNext}/>)
                                : step === 2 ? (
                                        <SecondForm step={step} handlePrevious={handlePrevious} handleNext={handleNext}/>)
                                    : step ===3 ? (<ThirdForm step={step} handlePrevious={handlePrevious}
                                                               handleNext={handleNext}/>)
                                        :(<FourthForm handlePrevious={handlePrevious} handleNext={handleNext} step={step}/>)
                            }
                        </div>
                    </>)}

                </div>
            </div>

        </>


    )
        ;
};

export default WelcomePage;
