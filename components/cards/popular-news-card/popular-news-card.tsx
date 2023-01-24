import React from "react";
import style from "./popular-news-card.module.css";
import Link from 'next/link';
import { IImage, IType, translateTypes } from "../../../constants/constants";

export interface IPopularNewsCard {
    slug: string,
    type: IType,
    title: string,
    mainImage: IImage,
}

const PopularNewsCard: React.FC<IPopularNewsCard> = ({ slug, type, title, mainImage }) => {
    return (
        <Link href={`/${type.type == 'video' || type.type == 'news' ? type.type : type.type + 's'}/${slug}`}>
            <div className={style.container}
            style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0)), url(${mainImage.url})`,
                    backgroundSize: 'cover', backgroundPosition: 'center'}}
            >
                <div className={style.tag_container}>
                    <div className={style.tag}>{translateTypes[type.type]}</div>
                </div>
                <div className={style.title}>{title}</div>
            </div>
        </Link>
    );
}

export default PopularNewsCard;