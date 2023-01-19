import React from "react";
import style from "./header.module.css";
import HCLlogo from "../../public/images/icons/HCLtransparent.png";
import { StaticImageData } from "next/image";
import Link from 'next/link';

const Header = () => {
    return(
        <>
            <div className={style.header_container}>
                <div className={style.header_left}>
                    <Link href="/"><img className={style.logo} src={HCLlogo.src} alt="HCL logo" /></Link>
                    <ul className={style.nav_links}>
                        <li><Link href="/news">Vijesti</Link></li>
                        <li><Link href="/reviews">Recenzije</Link></li>
                        <li><Link href="/specials">Specijali</Link></li>
                        <li><Link href="/video">Video</Link></li>
                        <li><Link href="/">Forum</Link></li>
                    </ul>
                </div>
                <div className={style.header_right}>
                    <input 
                        type="text" 
                        placeholder="Pretrazi portal..."
                        className={style.searchbar}
                    />
                    <button></button>
                </div>
            </div>

        </>
    );
}

export default Header;