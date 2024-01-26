import React from 'react';
import Constant from "../constants/Constant";

function LoginForm({handleLogin , username , password , onUsernameChange , onPasswordChange}) {
    return (
        <>
            <div className={"relative container px-4 mx-auto py-40"}>
                <div
                    className={"max-w-lg md:max-w-xl py-14 px-6 xs:px-12 lg:px-16 mx-auto bg-white rounded-2xl drop-shadow-2xl shadow-lg items-center"}>
                    <div className={"py-2"}>
                        <img src={Constant.logo} alt={""} className={"h-24 left-44 relative"}/>
                    </div>

                    <h3 className={"font-heading text-4xl text-gray-900 font-semibold mb-4 py-2"}>Sign in to your account</h3>

                    <form onSubmit={handleLogin}>
                        <div className="mb-6">
                            <label className="block mb-1.5 text-sm text-gray-900 font-semibold">Username or Email</label>
                            <input
                                value={username}
                                onChange={(event)=>onUsernameChange(event.target.value)}
                                className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                                type="text" placeholder="username or email"/>
                        </div>
                        <div className="mb-7">
                            <div className="flex mb-1.5 items-center justify-between">
                                <label className="block text-sm text-gray-900 font-semibold">Password</label>
                            </div>
                            <div className="relative">
                                <input
                                    value={password}
                                    onChange={(event)=>onPasswordChange(event.target.value)}
                                    className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                                    type="password" placeholder="Enter your password"/>
                            </div>
                        </div>
                        <div className="flex mb-6 items-center py-4">
                            <input type="checkbox" value=""/>
                            <label className="ml-2 text-xs text-gray-800" htmlFor="">Remember me</label>
                        </div>
                        <button
                            className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-white bg-indigo-500 rounded-3xl overflow-hidden hover:bg-indigo-900"
                            type="submit">
                            <span className="relative">Login</span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginForm;