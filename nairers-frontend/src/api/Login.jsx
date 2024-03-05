import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import SuccessAlert from "../components/SuccessAlert";
import ErrorAlert from "../components/ErrorAlert";
import LoginForm from "../components/LoginForm";

function Login({url}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isErrorVisible, setIsErrorVisible] = useState(false);
    const [isSuccessVisible, setIsSuccessVisible] = useState(false);
    const navigate = useNavigate();

    async function handleLogin(event){
        event.preventDefault()
        try{
            console.log("Username is: "+ username+ " and provided password is " + password)
            console.log("Url is " + url)
            await axios.post(url,{
                username:username,
                password:password
            })
                .then(function (response){
                    if(response.data.statusCode === 200){
                        navigate("/")
                        setSuccess(response.data.message);
                        localStorage.setItem("token",response.data.data)
                        setIsSuccessVisible(true);
                    }
                })
                .catch(function (error){
                    if(error.response.data.message === 401) {
                        setError(error.response.data.message)
                        setIsErrorVisible(true);
                    }else if(error.response.data.statusCode === 500){
                        setError(error.response.data.message);
                        setIsErrorVisible(true);
                    }
                })
            ;
        } catch (error) {
            alert(error)
        }
    }
    const handleCloseErrorAlert = () => {
        // Function to close the error alert
        setIsErrorVisible(false);
    };const handleCloseSuccessAlert = () => {
        // Function to close the error alert
        setIsSuccessVisible(false);
    };
    const handleUsernameChange = (value) => {
        setUsername(value);
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
    };

    return (
            <React.Fragment>
                <SuccessAlert
                    success={success}
                    isVisible={isSuccessVisible}
                    onClose={handleCloseSuccessAlert}/>
                <ErrorAlert
                    error={error}
                    isVisible={isErrorVisible}
                    onClose={handleCloseErrorAlert}/>
                <LoginForm
                    onError={error}
                    username={username}
                    password={password}
                    onUsernameChange={handleUsernameChange}
                    onPasswordChange={handlePasswordChange}
                    handleLogin={handleLogin}
                />
            </React.Fragment>
    )
}

export default Login;