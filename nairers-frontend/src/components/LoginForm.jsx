import React from 'react';
import Constant from "../constants/Constant";

function LoginForm({handleLogin , username , password , onUsernameChange , onPasswordChange}) {
    return (
        <>
            <div className={"relative container px-4 mx-auto py-40"}>
                <div
                    className={"max-w-lg py-14 px-16 mx-auto bg-white rounded-3xl drop-shadow-2xl shadow-lg items-center"}>
                    <div className={"py-2 justify-center flex "}>
                        <img src={Constant.logo} alt={""} className={"h-24"}/>
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
                            <label className="ml-2 text-gray-800 text-lg" htmlFor="">Remember me</label>
                        </div>
                        <div className={"flex flex-wrap items-center justify-center"}>
                            <button
                                className={"bg-[#0069b5] px-28 py-1.5 rounded-2xl text-xl text-white font-bold border-[#0069b5] border-2 hover:scale-105 duration-300 ease-in-out transition-transform"}
                                type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginForm;