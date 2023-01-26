import React from "react";
import style from "./popular-news-card.module.css";
import Link from 'next/link';
import { IImage, IType, translateTypes } from "../../../constants/constants";
import Image from "next/image";
export interface IPopularNewsCard {
    slug: string,
    type: IType,
    title: string,
    mainImage: IImage,
    isMain: boolean,
    isSlider: boolean,
}


const PopularNewsCard: React.FC<IPopularNewsCard> = ({ slug, type, title, mainImage, isMain, isSlider }) => {
    return (
        <Link href={`/${type.type == 'video' || type.type == 'news' ? type.type : type.type + 's'}/${slug}` } aria-label={`Pročitajte više o ${title}`}>
            <div className={`${style.container} ${isSlider ? "" : (isMain ? style.main : style.not_main)}`}>
                <Image className={style.img} src={mainImage.url} alt="popular background" fill priority style={{ objectFit: 'cover'  }} />
                <div className="relative z-10 h-full bg-gradient-to-t from-black/50" >
                    <div className={style.tag_container}>
                        <div className={style.tag}>{translateTypes[type.type]}</div>
                    </div>
                    <div className={style.title}>{title}</div>
                </div>
            </div>
        </Link>
    );
}

export default PopularNewsCard;