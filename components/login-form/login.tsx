import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import logBoxSlice, { change, selectActive } from "../../slices/logBoxSlice";

const Login = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(){
        // ode poslat backendu
        // kad uspjesno zavrsi poslat onClose opet
    };

    return(
        <div className="bg-black/30 backdrop-blur-sm fixed w-full h-full flex justify-center items-center z-50">
            <div className="bg-slate-900 flex h-fit rounded-xl p-4">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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