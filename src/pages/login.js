import React from 'react';
import iphone from "../images/iphone-with-profile.jpg"
import logo from "../images/logo.png"
export default function Login() {
    return (
        <div className ="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src = {iphone} alt="iPhone with Instagram app" />
            </div>
            <div className = "flex flex-col w-2/5">
                <h1 className ="flex justify-center w-full">
                    <img src={logo} alt="Instagram" className = "mt-2 w-6/12 mb-4"/>
                  
                </h1>
            </div>
        </div>
    )
}