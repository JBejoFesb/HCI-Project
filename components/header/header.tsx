import React from "react";
import style from "./header.module.css";
import HCLlogo from "../../public/images/icons/HCLtransparent.png";
import { StaticImageData } from "next/image";
import Link from 'next/link';

const Header = () => {
    return(
        <>
            <div className={style.header_container}>
                <div className="flex flex-row items-center space-x-3 justify-self-start px-10">
                    <Link href="/"><img className="w-12 max-w-none transition-all duration-300 transform-gpu hover:scale-110" src={HCLlogo.src} alt="HCL logo" /></Link>
                    <ul className="flex flex-row space-x-3">
                        <li><Link href="/news">Vijesti</Link></li>
                        <li><Link href="/reviews">Recenzije</Link></li>
                        <li><Link href="/specials">Specijali</Link></li>
                        <li><Link href="/video">Video</Link></li>
                        <li><Link href="/">Forum</Link></li>
                    </ul>
                </div>
                <div className="flex flex-row items-center space-x-3 justify-self-center">
                    <input 
                        type="text" 
                        placeholder="Pretrazi portal..."
                        className="bg-slate-600 w-96 px-3 py-1 rounded-2xl"
                    />
                </div>
                <div className="flex flex-row items-center space-x-3 justify-self-end">placeholder-right</div>
            </div>

        </>
    );
}

export default Header;