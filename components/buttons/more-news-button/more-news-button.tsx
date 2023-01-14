import React from "react";
import style from "./more-news-button.module.css";

export interface IMoreNewsButton {

}

const MoreNewsButton: React.FC<IMoreNewsButton> = () => {
    return(
        <button className={style.button}>
            Više vijesti...
        </button>
    );
}

export default MoreNewsButton;