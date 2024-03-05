import React, { useState } from 'react';
import FormControls from "../ConstantComponents/FormControls";
import axios from "axios";

const SecondForm = ({ handleNext, handlePrevious, step }) => {
    const [error, setError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setError('')
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Password does not match");
            return;
        }

        // Check username availability
        try {
            const response = await axios.post('http://localhost:8082/api/v1/medic/username-availability', { username: formData.username });
            const statusCode = response.data.statusCode;
            console.log(statusCode)
            if (statusCode === 226) {

                setUsernameError('Username is already taken');
                return;
            }
        } catch (error) {
            console.error('Error checking username availability:', error);
            setUsernameError('Error checking username availability');
            return;
        }

        handleNext();
    }

    return (
        <>
            <div className={"justify-center flex pb-8 mt-10"}>
                <span className={"text-5xl font-sans font-extrabold text-[#016ab7]"}>Sign Up</span>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={"justify-center flex flex-col mx-28 mb-28 mt-6 pb-0.5"}>
                    <input
                        name={"username"}
                        value={formData.username}
                        onChange={handleChange}
                        required={true}
                        placeholder={"username"}
                        className={`my-3 p-3 rounded-xl bg-gray-50 border focus:outline-none focus:border-[#016ab7] ${usernameError && 'border-red-500'}`} />
                    {usernameError && <p className="text-red-500 fixed bottom-96 mb-4 p-2">{usernameError}</p>}
                    <input
                        name={"password"}
                        value={formData.password}
                        onChange={handleChange}
                        required={true}
                        placeholder={"password"}
                        className={"my-3 p-3 rounded-xl bg-gray-50 border focus:outline-none focus:border-[#016ab7]"} />
                    <input
                        name={"confirmPassword"}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required={true}
                        placeholder={"confirm password"}
                        className={`my-3 p-3 rounded-xl bg-gray-50 border focus:outline-none focus:border-[#016ab7] ${error && 'border-red-500'}`} />
                </div>
                <FormControls step={step} handleNext={handleSubmit} handlePrevious={handlePrevious} />
            </form>
        </>
    );
};

export default SecondForm;
