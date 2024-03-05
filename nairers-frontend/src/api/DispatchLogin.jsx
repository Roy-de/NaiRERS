import React from 'react';
import Constant from "../constants/Constant";
import Login from "./Login";
import urls from "../constants/Urls";

function DispatchLogin() {
    return (
        <>
            {<Login
                url={Constant.host+urls.auth.dispatch}
            />}
        </>
    )
}

export default DispatchLogin;