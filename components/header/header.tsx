import React from "react";
import styles from "./header.module.css";
import HCLlogo from "../../public/images/HCLtransparent.png";
import { StaticImageData } from "next/image";
import Image from "next/image";



const Header = () => {
    return(
        <>
            <div className=" dark:bg-slate-900 h-16 fixed top-0 left-0 right-0 flex flex-row justify-between px-3">
                <div className="flex flex-row items-center space-x-3">
                    <Image className="h-12" src={HCLlogo.src} alt="HCL header logo" />
                    <ul className="flex flex-row space-x-3">
                        <li>Vijesti</li>
                        <li>Recenzije</li>
                        <li>Specijali</li>
                        <li>Video</li>
                        <li>Forum</li>
                    </ul>
                </div>
                <div>sredina
                </div>
                <div>desno</div>
            </div>

        </>
    );
}

export default Header;