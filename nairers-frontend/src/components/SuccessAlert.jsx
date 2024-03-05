import React, {useEffect} from 'react';
import {X} from "lucide-react";

function SuccessAlert({success,onClose,isVisible}) {

    useEffect(() => {
        if (success) {
        }
    }, [success, isVisible]);

    const handleClose = () => {
        onClose();
    };

    return (
        <>
            {isVisible && success && (
                <div className={"container px-4 mx-auto"}>
                    <div className={"p-4 bg-green-100 border border-green-200 rounded-lg relative top-2"}>
                        <div className="flex flex-wrap justify-between items-center -m-2">
                            <div className="flex-1 p-2">
                                <div className="flex flex-wrap -m-1">
                                    <div className="flex-1 ">
                                        <h3 className="font-medium text-sm text-green-900">{success}</h3>
                                    </div>
                                </div>
                            </div>
                            <button className={"flex flex-wrap m-2"} onClick={handleClose}>
                                <X color={"green"} size={15}/>
                            </button>
                        </div>
                    </div>
                </div>)}
        </>
    );
}


export default SuccessAlert;