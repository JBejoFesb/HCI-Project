import React from "react";
import style from "./header.module.css";
import HCLlogo from "../../public/images/icons/HCLtransparent.png";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { BellAlertIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Login from "../login-form/login";
import Register from "../login-form/register";
import { useSelector, useDispatch } from 'react-redux'
import logBoxSlice, { change, selectActive } from "../../slices/logBoxSlice";
import { selectActiveReg } from "../../slices/regBoxSlice";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [notOpen, setNotOpen] = useState(false);
    const [username, setUsername] = useState("");

    const loginOpen = useSelector(selectActive);

    const regOpen = useSelector(selectActiveReg);

    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("isLoggedIn") == "true")
            setIsLoggedIn(true);

        const tempUser = localStorage.getItem("username");
        if (tempUser)
            setUsername(tempUser);
    }, [])

    let mobileDictionary: { [name: string]: string } = {
        '/': 'HCL.hr',
        "/news": "Vijesti",
        "/reviews": "Recenzije",
        "/specials": "Specijali",
        "/video": "Video",
    };

    function handleToggle() {
        setNavbarOpen(prev => !prev);
        setNavbarOpen(!navbarOpen);
    }

    function handleLogOff() {
        localStorage.setItem("isLoggedIn", "false");
        localStorage.setItem("username", "");
        window.dispatchEvent(new Event("storage"));
    }

    const router = useRouter();

    useEffect(() => {
        const handleStorage = () => {
            const value: any = localStorage.getItem("isLoggedIn");
            const username: any = localStorage.getItem("username");
            if (value == "true") {
                setUsername(username);
                setIsLoggedIn(true);
            }
            else
                setIsLoggedIn(false);
        }
        window.addEventListener('storage', handleStorage)
        return () => window.removeEventListener('storage', handleStorage)
    }, [])

    return(
        <>
            <div className={style.header_container}>
                <div className={style.header_left}>
                    <Link className={style.logo} href="/"><Image src={HCLlogo.src} alt="HCL logo" fill /></Link>
                    <div className="font-medium text-xl sm:text-2xl flex lg:hidden text-slate-400">{mobileDictionary[router.pathname]}</div>
                    <div>
                        <button className="group py-4 lg:hidden" onClick={handleToggle} aria-label="Burger menu">
                            {navbarOpen
                                ? <XMarkIcon className="w-10 sm:w-12 font-bold group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 transform-gpu" />
                                : <Bars3Icon className="w-10 sm:w-12 font-bold group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 transform-gpu" />
                            }</button>
                    </div>
                </div>
                <div className={`${style.header_right} ${navbarOpen ? "flex" : "hidden"}`}>
                    <ul className={style.nav_links}>
                        <li className={router.pathname == "/news" ? `${style.nav_link}` : "text-slate-400"}>
                            <Link className="py-4 lg:px-2" href="/news">Vijesti</Link>
                        </li>
                        <li className={router.pathname == "/reviews" ? `${style.nav_link}` : "text-slate-400 "}>
                            <Link className="py-4 lg:px-2" href="/reviews">Recenzije</Link>
                        </li>
                        <li className={router.pathname == "/specials" ? `${style.nav_link}` : "text-slate-400 "}>
                            <Link className="py-4 lg:px-2" href="/specials">Specijali</Link>
                        </li>
                        <li className={router.pathname == "/video" ? `${style.nav_link}` : "text-slate-400 "}>
                            <Link className="py-4 lg:px-2" href="/video">Video</Link>
                        </li>
                        <li className={router.pathname == "/forum" ? `${style.nav_link}` : "text-slate-400 "}>
                            <Link className="py-4 lg:px-2" href="/">Forum</Link>
                        </li>
                    </ul>
                    <div className="flex flex-col lg:flex-row justify-center lg:space-x-2 xl:space-x-4 lg:items-center">
                        <form className={style.search}>
                            <input
                                type="text"
                                placeholder="Pretraži portal..."
                                className={style.searchbar}
                            />
                            <button aria-label="Pretraži"><MagnifyingGlassIcon className="h-6 w-6 hover:text-orange-500 hover:scale-110" /></button>
                        </form>
                        <div>
                            {
                                isLoggedIn ?
                                    <div className={style.user}>
                                        <button onMouseEnter={() => {setNotOpen(true);setProfileOpen(false)}} className="group px-2 py-4" aria-label="Notifikacije"><BellAlertIcon className="h-8 w-8 group-hover:text-orange-500 group-hover:scale-110" /></button>
                                        <button onMouseEnter={() => {setProfileOpen(true);setNotOpen(false)}} className="group px-2 py-4" aria-label="Korisnik"><UserIcon className="h-8 w-8 border-white border-2 rounded-full group-hover:text-orange-500 group-hover:scale-110 group-hover:border-orange-500" /></button>
                                    </div> :
                                    <div className={style.user}>
                                        <button aria-label="Prijavi se" onClick={() => dispatch(change())} className={style.login}>Prijavi se</button>
                                    </div>
                            }
                        </div>
                        {profileOpen && isLoggedIn &&
                            <div className="h-fit w-fit lg:hidden z-50 p-8 flex flex-col"  onMouseLeave={() => setProfileOpen(false)}>
                                <p>Dobrodosli {username} !</p>
                                <button aria-label="Odjavi se" onClick={handleLogOff} className={style.login}>Odjavi se</button>
                            </div>
                        }
                        {notOpen && isLoggedIn &&
                            <div className="h-fit w-fit lg:hidden z-50 px-16 py-8 flex flex-col"  onMouseLeave={() => setNotOpen(false)}>
                                <p>Nemate novih notifikacija.</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
            {loginOpen && <Login />}
            {regOpen && <Register />}
            {profileOpen && isLoggedIn &&
                <div className="bg-slate-800 rounded-lg h-fit w-fit hidden lg:fixed top-20 right-0 z-50 p-8 lg:flex flex-col border border-main-orange/50"  onMouseLeave={() => setProfileOpen(false)}>
                    <p>Dobrodosli {username} !</p>
                    <button aria-label="Odjavi se" onClick={handleLogOff} className={style.login}>Odjavi se</button>
                </div>
            }
            {notOpen && isLoggedIn &&
                <div className="bg-slate-800 rounded-lg h-fit w-fit hidden lg:fixed top-20 right-0 z-50 px-16 py-8 lg:flex flex-col border border-main-orange/50"  onMouseLeave={() => setNotOpen(false)}>
                    <p>Nemate novih notifikacija.</p>
                </div>
            }
        </>
    );
}

export default Header;