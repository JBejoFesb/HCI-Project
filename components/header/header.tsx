import React from "react";
import style from "./header.module.css";
import HCLlogo from "../../public/images/icons/HCLtransparent.png";
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {BellAlertIcon} from '@heroicons/react/24/outline';
import {UserIcon} from '@heroicons/react/24/solid';
import {XMarkIcon} from '@heroicons/react/24/solid';
import {Bars3Icon} from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    let mobileDictionary: { [name: string]:string}={
        '/' : 'HCL.hr',
        "/news" : "Vijesti",
        "/reviews" : "Recenzije",
        "/specials" : "Specijali",
        "/video" : "Video",
    };

    function handleToggle() {
        setNavbarOpen(prev => !prev);
        setNavbarOpen(!navbarOpen);
    }

    const router = useRouter();

    return(
        <>
            <div className={style.header_container}>
                <div className={style.header_left}>
                    <Link className={style.logo} href="/"><Image src={HCLlogo.src} alt="HCL logo" fill /></Link>
                    <div className="font-medium text-xl sm:text-2xl flex lg:hidden text-slate-400">{mobileDictionary[router.pathname]}</div>
                    <div>
                        <button className="group py-4 lg:hidden" onClick={handleToggle} aria-label="Burger menu">
                            {navbarOpen 
                                ? <XMarkIcon className="w-10 sm:w-12 font-bold group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 transform-gpu"/> 
                                : <Bars3Icon className="w-10 sm:w-12 font-bold group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 transform-gpu"/>
                            }</button>
                    </div>
                </div>
                <div className={`${style.header_right} ${navbarOpen ? "flex" : "hidden"}`}>
                    <ul className={style.nav_links}>
                        <li className={router.pathname == "/news" ? `${style.nav_link}` : "text-slate-400"}>
                            <Link className="py-4 px-2" href="/news">Vijesti</Link>
                        </li>
                        <li  className={router.pathname == "/reviews" ? `${style.nav_link}`  : "text-slate-400 "}>
                            <Link className="py-4 px-2" href="/reviews">Recenzije</Link>
                        </li>
                        <li  className={router.pathname == "/specials" ? `${style.nav_link}`  : "text-slate-400 "}>
                            <Link className="py-4 px-2" href="/specials">Specijali</Link>
                        </li>
                        <li  className={router.pathname == "/video" ? `${style.nav_link}`  : "text-slate-400 "}>
                            <Link className="py-4 px-2" href="/video">Video</Link>
                        </li>
                        <li  className={router.pathname == "/forum" ? `${style.nav_link}`  : "text-slate-400 "}>
                            <Link className="py-4 px-2" href="/">Forum</Link>
                        </li>
                    </ul>
                    <div className="flex flex-col lg:flex-row justify-center space-x-2 xl:space-x-4">
                        <form className={style.search}>
                            <input 
                                type="text" 
                                placeholder="Pretraži portal..."
                                className={style.searchbar}
                            />
                            <button><MagnifyingGlassIcon className="h-6 w-6 hover:text-orange-500 hover:scale-110"/></button>
                        </form>
                        <div className={style.user}>
                            <button className="group px-2 py-4" aria-label="Notifikacije"><BellAlertIcon className="h-8 w-8 group-hover:text-orange-500 group-hover:scale-110" /></button>
                            <button className="group px-2 py-4" aria-label="Korisnik"><UserIcon className="h-8 w-8 border-white border-2 rounded-full group-hover:text-orange-500 group-hover:scale-110 group-hover:border-orange-500" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;