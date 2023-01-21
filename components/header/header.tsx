import React from "react";
import style from "./header.module.css";
import HCLlogo from "../../public/images/icons/HCLtransparent.png";
import bell from "../../public/images/icons/bell.svg"
import search from "../../public/images/icons/search.svg"
import Link from 'next/link';
import { useRouter } from "next/router";

const Header = () => {

    const router = useRouter();

    return(
        <>
            <div className={style.header_container}>
                <div className={style.header_left}>
                    <Link href="/"><img className={style.logo} src={HCLlogo.src} alt="HCL logo" /></Link>
                    <ul className={style.nav_links}>
                        <li className={router.pathname == "/news" ? " text-orange-500 font-bold border-b-2 border-orange-500" : "text-slate-400 "}>
                            <Link href="/news">Vijesti</Link>
                        </li>
                        <li  className={router.pathname == "/reviews" ? "text-orange-500 font-bold border-b-2 border-orange-500" : "text-slate-400 "}>
                            <Link href="/reviews">Recenzije</Link>
                        </li>
                        <li  className={router.pathname == "/specials" ? "text-orange-500 font-bold border-b-2 border-orange-500" : "text-slate-400 "}>
                            <Link href="/specials">Specijali</Link>
                        </li>
                        <li  className={router.pathname == "/video" ? "text-orange-500 font-bold border-b-2 border-orange-500" : "text-slate-400 "}>
                            <Link href="/video">Video</Link>
                        </li>
                        <li  className={router.pathname == "/forum" ? "text-orange-500 font-bold border-b-2 border-orange-500" : "text-slate-400 "}>
                            <Link href="/">Forum</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.header_right}>

                    <input 
                        type="text" 
                        placeholder="Pretraži portal..."
                        className={style.searchbar}
                    />
                    <div className={style.user}>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Header;