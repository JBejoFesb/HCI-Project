import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import logBoxSlice, { change, selectActive } from "../../slices/logBoxSlice";
import regBoxSlice, { changeReg, selectActiveReg } from "../../slices/regBoxSlice";
import axios from "axios";
import { SHA256 } from "crypto-js";

export interface IResponseData {
    message: string,
    success: boolean
}

export interface ILogin {

}

const Login: React.FC<ILogin> = () => {

    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginDone, setLoginDone] = useState(false);
    const [loginMsg, setLoginMsg] = useState('');
    

    const handleSubmit = () => {
        event?.preventDefault();
        axios.post(
            `http://ec2-3-70-46-221.eu-central-1.compute.amazonaws.com:3000/users/login`,
            {
                username: username,
                passwordHash: SHA256(password).toString()
            }
        ).then(response => {
            const data: IResponseData = response.data;
            setLoginMsg(data.message);
            if (data.success) {
                setLoginDone(true);
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("username", username);
                window.dispatchEvent(new Event("storage"));
                setTimeout(()=>{
                    dispatch(change());
                },1000);
            }
            else{
                setLoginDone(true);
            }

        }).catch(error => console.log(error))
    }

    const handleRegister = () => {
        dispatch(change());
        dispatch(changeReg());
    }

    return(
        <div className="bg-black/25 backdrop-blur-sm fixed w-full h-full flex justify-center items-center z-50">
            <div className="bg-slate-900 flex flex-col h-full md:h-fit rounde-none md:rounded-2xl p-8 space-y-6 w-full md:max-w-lg border-slate-600 border ">
                <p className="text-2xl font-bold">Prijavite se u svoj racun</p>
                <form onSubmit={handleSubmit} className="flex flex-col text-lg">
                    <label className="block mb-1 font-medium text-white">Korisnicko ime:</label>
                    <input className="mb-4 border sm:text-sm rounded-lg block w-full p-3 bg-gray-700 border-gray-600 placeholder-gray-400/25 text-white focus:ring-blue-500 focus:border-blue-500"
                        type="text" placeholder="Ime" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label className="block mb-1 font-medium text-white">Lozinka:</label>
                    <input className="mb-4 border sm:text-sm rounded-lg block w-full p-3 bg-gray-700 border-gray-600 placeholder-gray-400/25 text-white focus:ring-blue-500 focus:border-blue-500"
                        type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <p className="text-main-orange font-medium mb-4">{loginDone? loginMsg : ""}</p>
                    <button type="submit" className="bg-blue-700/75 px-6 py-3 rounded-lg text-lg font-semibold text-white mb-2 hover:bg-main-orange transition-colors duration-300">Prijavi se</button>
                    <p className="text-md font-light text-gray-400">
                      Nemas racun? <span onClick={handleRegister} className="font-medium hover:underline hover:cursor-pointer text-main-orange"> Izradi ga</span>
                    </p>
                </form>
                <button className="bg-red-700/75 px-6 py-3 rounded-lg text-lg font-semibold text-white hover:bg-red-400 transition-colors duration-300" onClick={() => dispatch(change())}>Odustani</button>
            </div>
        </div>
    );
}

export default Login;