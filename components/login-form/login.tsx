import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import logBoxSlice, { change, selectActive } from "../../slices/logBoxSlice";
import axios from "axios";
import { SHA256 } from "crypto-js";

const Login = () => {

    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        event?.preventDefault();
        console.log("TEST");
        axios
        .get(
            `https://ec2-3-70-46-221.eu-central-1.compute.amazonaws.com/comments/load`
        ).then( response => {
            console.log(response)
        }).catch(error => console.log(error))
        // kad uspjesno zavrsi poslat onClose opet
    }

    return(
        <div className="bg-black/30 backdrop-blur-sm fixed w-full h-full flex justify-center items-center z-50">
            <div className="bg-slate-900 flex h-fit rounded-xl p-4">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <label>
                        Username:
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Submit</button>
                    <button onClick={() => dispatch(change())}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default Login;