import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Constant from "../constants/Constant";
import Urls from "../constants/Urls";
import LoginForm from "../components/LoginForm";
import axios from "axios";
import ErrorAlert from "../components/ErrorAlert";

function DispatchLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isErrorVisible, setIsErrorVisible] = useState(false);
    const navigate = useNavigate();

    async function handleLogin(event){
        event.preventDefault()
        try{
            await axios.post(Constant.host+Urls.auth.dispatch,{
                username:username,
                password:password
            })
                .then(function (response){
                    if(response.data.statusCode ===200){
                        navigate("/")
                    }
                    else if (response.status === 401){
                        alert(response.data.message)
                    }
                })
                .catch(function (error){
                    if(error.response.data.message ==="Invalid Username") {
                        setError(error.response.data.message)
                        setIsErrorVisible(true);
                    }else if(error.response.data.message ==="Incorrect Password"){
                        setError("Incorrect password");
                        setIsErrorVisible(true);
                    }
                })
            ;
        } catch (error) {
            alert(error)
        }
    }
    const handleUsernameChange = (value) => {
        setUsername(value);
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
    };
    const handleCloseErrorAlert = () => {
        // Function to close the error alert
        setIsErrorVisible(false);
    };
    return (
        <>
            <div>
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
            </div>
        </>
    )
}

export default DispatchLogin;