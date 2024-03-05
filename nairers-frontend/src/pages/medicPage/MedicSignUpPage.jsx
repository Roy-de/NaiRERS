import React, {useState} from 'react';
import WelcomePage from "../../MultiStepForm/WelcomePage";

const MedicSignUpPage = () => {
    //Form controls
    const[step,setStep] = useState(1);

    return (
        <>
            <WelcomePage/>
        </>
    );
};

export default MedicSignUpPage;
