import React from "react";
import style from "./header.module.css";
import HCLlogo from "../../public/images/icons/HCLtransparent.png";
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import {BellAlertIcon} from '@heroicons/react/24/outline'
import {UserIcon} from '@heroicons/react/24/solid'
import {XMarkIcon} from '@heroicons/react/24/solid'
import Link from 'next/link';
import { useRouter } from "next/router";

const Header = () => {

    const router = useRouter();

    return(
        <>
            <div className={style.header_container}>
                <div className={style.header_left}>
                    <Link href="/"><img className={style.logo} src={HCLlogo.src} alt="HCL logo" /></Link>
                    <button className="group p-4 lg:hidden"><XMarkIcon className="h-8 w-8 group-hover:text-orange-500 group-hover:scale-110"/></button>
                </div>
                <div className={style.header_right}>
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
                    <div className="flex flex-col lg:flex-row justify-center">
                        <form className={style.search}>
                            <input 
                                type="text" 
                                placeholder="Pretraži portal..."
                                className={style.searchbar}
                            />
                            <button><MagnifyingGlassIcon className="h-6 w-6 hover:text-orange-500 hover:scale-110"/></button>
                        </form>
                        <div className={style.user}>
                            <button className="group px-2 py-4"><BellAlertIcon className="h-8 w-8 group-hover:text-orange-500 group-hover:scale-110" /></button>
                            <button className="group px-2 py-4"><UserIcon className="h-8 w-8 border-white border-2 rounded-full group-hover:text-orange-500 group-hover:scale-110 group-hover:border-orange-500" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;