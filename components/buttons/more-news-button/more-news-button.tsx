import Link from "next/link";
import React from "react";
import style from "./more-news-button.module.css";

export interface IMoreNewsButton {

}

const MoreNewsButton: React.FC<IMoreNewsButton> = () => {
    return(
        <Link href="/news">
            <div className={`${style.button} bg-dark-marine`}>
                Više vijesti...
            </div>
        </Link>
    );
}

export default MoreNewsButton;