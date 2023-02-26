import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import logBoxSlice, { change, selectActive } from "../../slices/logBoxSlice";
import regBoxSlice, { changeReg, selectActiveReg } from "../../slices/regBoxSlice";
import axios from "axios";
import { SHA256 } from "crypto-js";


const Register = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = () => {
        // event?.preventDefault();
        // console.log("TEST");
        // axios
        // .get(
        //     `https://ec2-3-70-46-221.eu-central-1.compute.amazonaws.com/comments/load`
        // ).then( response => {
        //     console.log(response)
        // }).catch(error => console.log(error))
        // kad uspjesno zavrsi poslat onClose opet
    }

    const handleRegister = () => {
        dispatch(change());
        dispatch(changeReg());
    }

    return(
        <div className="bg-black/25 backdrop-blur-sm fixed w-full h-full flex justify-center items-center z-50">
            <div className="bg-slate-900 flex flex-col h-full md:h-fit rounde-none md:rounded-2xl p-8 space-y-6 w-full md:max-w-lg border-slate-600 border ">
                <p className="text-2xl font-bold">Pridruzite se HCL gaming zajednici! Registiraj se</p>
                <form onSubmit={handleSubmit} className="flex flex-col text-lg">
                    <label className="block mb-1 font-medium text-white">E-mail:</label>
                    <input className="mb-4 border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400/25 text-white focus:ring-blue-500 focus:border-blue-500"
                        type="email" placeholder="korisnik@email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className="block mb-1 font-medium text-white">Korisnicko ime:</label>
                    <input className="mb-4 border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400/25 text-white focus:ring-blue-500 focus:border-blue-500"
                        type="text" placeholder="Ime" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label className="block mb-1 font-medium text-white">Lozinka:</label>
                    <input className="mb-4 border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400/25 text-white focus:ring-blue-500 focus:border-blue-500"
                        type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label className="block mb-1 font-medium text-white">Ponovi lozinku: {(password != password2) ? " Lozinke nisu jednake!" : " "}</label>
                    <input className="mb-6 border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400/25 text-white focus:ring-blue-500 focus:border-blue-500"
                        type="password" placeholder="••••••••" value={password2} onChange={(e) => setPassword2(e.target.value)}/>
                    <button type="submit" className="bg-blue-700/75 px-6 py-3 rounded-lg text-lg font-semibold text-white mb-2 hover:bg-main-orange transition-colors duration-500">Registriraj se</button>
                    <p className="text-md font-light text-gray-400">
                      Vec imas racun? <span onClick={handleRegister} className="font-medium hover:cursor-pointer hover:underline text-main-orange"> Prijavi se</span>
                    </p>
                </form>
                <button className="bg-red-700/75 px-6 py-3 rounded-lg text-lg font-semibold text-white hover:bg-red-400 transition-colors duration-500" onClick={() => dispatch(changeReg())}>Odustani</button>
            </div>
        </div>
    );
}

export default Register;