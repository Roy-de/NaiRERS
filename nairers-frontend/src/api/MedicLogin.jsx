import React from 'react';
import Constant from "../constants/Constant";
import Login from "./Login";
import urls from "../constants/Urls";

function MedicLogin() {
    return (
        <>
            <Login
                url={Constant.host+urls.auth.medic}
            />
        </>
    );
}

export default MedicLogin;