import React, {useEffect} from 'react';
import {X} from "lucide-react";

function ErrorAlert({error,onClose,isVisible}) {

    useEffect(() => {
        if (error) {
        }
    }, [error, isVisible]);

    const handleClose = () => {
        onClose();
    };

    return (
        <>
            {isVisible && error && (
                <div className={"container px-4 mx-auto"}>
                <div className={"p-4 bg-red-100 border border-red-200 rounded-lg relative top-2"}>
                    <div className="flex flex-wrap justify-between items-center -m-2">
                        <div className="flex-1 p-2">
                            <div className="flex flex-wrap -m-1">
                                <div className="flex-1 ">
                                    <h3 className="font-medium text-sm text-red-900">{error}</h3>
                                </div>
                            </div>
                        </div>
                        <button className={"flex flex-wrap m-2"} onClick={handleClose}>
                            <X color={"red"} size={15}/>
                        </button>
                    </div>
                </div>
            </div>)}
        </>
    );
}

export default ErrorAlert;