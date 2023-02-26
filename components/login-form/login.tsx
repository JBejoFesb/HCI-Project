import React from "react";
import { useState } from "react";
import axios from "axios";
import { SHA256 } from "crypto-js";

interface LoginProps {
    onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        event?.preventDefault();
        axios.post(
            `http://ec2-3-70-46-221.eu-central-1.compute.amazonaws.com:3000/users/login`,
            {
                username: username,
                passwordHash: SHA256(password).toString()
            }
        ).then(response => {
            console.log(response)
        }).catch(error => console.log(error))
        // kad uspjesno zavrsi poslat onClose opet
    }

    return(
        <div className="bg-black/30 absolute h-full w-full flex justify-center items-center z-50">
            <div className="bg-slate-900 flex h-fit rounded-xl p-4">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label>
                        Username:
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Submit</button>
                    <button onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default Login;